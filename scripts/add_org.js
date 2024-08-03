import {input, checkbox} from '@inquirer/prompts';
import {
  nameValidator,
  sdgsValidator,
  urlValidator,
  descriptionValidator,
  languageArrayValidator,
  booleanNullableValidator,
  frameworkValidator,
  emphasisValidator,
  alpha2ArrayValidator,
} from '../src/lib/parsing/validation.js';
import {frameworks, emphasis} from '../src/lib/data/parameters.js';
import fs from 'fs';
import path from 'path';
import {fileURLToPath} from 'url';
import {dirname} from 'path';

function sanitizeFileName(input) {
  // Convert to lowercase and remove spaces
  let sanitized = input.toLowerCase().replace(/\s+/g, '_');

  // Replace invalid characters with an underscore
  sanitized = sanitized.replace(/[\/\\:*?"<>|]/g, '_');

  // Handle reserved filenames in Windows by appending an underscore
  const reservedNames = [
    'con',
    'prn',
    'aux',
    'nul',
    'com1',
    'com2',
    'com3',
    'com4',
    'com5',
    'com6',
    'com7',
    'com8',
    'com9',
    'lpt1',
    'lpt2',
    'lpt3',
    'lpt4',
    'lpt5',
    'lpt6',
    'lpt7',
    'lpt8',
    'lpt9',
  ];

  if (reservedNames.includes(sanitized)) {
    return `${sanitized}_`;
  }

  return sanitized;
}

async function validator(value, validateFunc, allowEmpty = false) {
  if (allowEmpty && !value) {
    return true;
  }

  if (value) {
    try {
      await validateFunc.validate(value);
      return true;
    } catch (e) {
      return e.errors[0];
    }
  }

  return 'Please enter a value';
}

function arrayTransformer(value) {
  if (value.includes(',')) {
    return value.split(',').map((x) => x.trim());
  } else {
    return [value];
  }
}

const prompt = 'Enter value(s): ';

const name = await input({
  message: `Enter the name of the organization.
${prompt}`,
  validate: async (value) => {
    const validatorResult = await validator(value, nameValidator);
    return validatorResult;
  },
});
console.log('\n');

const sdgs = await input({
  message: `Enter the SDGs of the organization.
- If it is part of multiple SDGs separate them with a comma like so: "4,6".
${prompt}`,
  validate: async (value) => {
    const valuesArray = arrayTransformer(value);
    const validatorResult = await validator(valuesArray, sdgsValidator);
    return validatorResult;
  },
});
console.log('\n');

const url = await input({
  message: `Enter the homepage of the organization.
- Example: https://example.com
${prompt}`,
  validate: async (value) => {
    const validatorResult = await validator(value, urlValidator);
    return validatorResult;
  },
});
console.log('\n');

const description = await input({
  message: `Enter the description of the organization.
${prompt}`,
  validate: async (value) => {
    const validatorResult = await validator(value, descriptionValidator);
    return validatorResult;
  },
});
console.log('\n');

const remote_possible = await checkbox({
  message: `Is it possible to work for this organization remotely?
- Only select one option.`,
  choices: [
    {name: 'Yes', value: true},
    {name: 'No', value: false},
    {name: 'Not known', value: null},
  ],
  required: true,
  validate: async (value) => {
    const validatorResult = await validator(
      value.length ? value[0].value : null,
      booleanNullableValidator,
      true,
    );
    return validatorResult;
  },
});
console.log('\n');

const initiative_application_possible = await checkbox({
  message: `Are initiative applications possible?
- Only select one option.`,
  choices: [
    {name: 'Yes', value: true},
    {name: 'No', value: false},
    {name: 'Not known', value: null},
  ],
  required: true,
  validate: async (value) => {
    const validatorResult = await validator(
      value.length ? value[0].value : null,
      booleanNullableValidator,
      true,
    );
    return validatorResult;
  },
});
console.log('\n');

const office_locations_country = await input({
  message: `Enter the alpha2 code of the country this organization is located in.
- If it is based in multiple countries separate them with a comma like so: "de,gb". 
- If the country is based in more than three countries, enter "int"
${prompt}`,
  validate: async (value) => {
    const valuesArray = arrayTransformer(value);
    const validatorResult = await validator(valuesArray, alpha2ArrayValidator);
    return validatorResult;
  },
});
console.log('\n');

const framework = await input({
  message: `Enter the organizations framework.
- Possible value is one of: ${frameworks.toString()}.
`,
  validate: async (value) => {
    const validatorResult = await validator(value, frameworkValidator);
    return validatorResult;
  },
});
console.log('\n');

const emphasis_value = await input({
  message: `Enter the organizations emphasis.
- Possible value is one of: ${emphasis.toString()}.
`,
  validate: async (value) => {
    const validatorResult = await validator(value, emphasisValidator);
    return validatorResult;
  },
});
console.log('\n');

const working_languages = await input({
  message: `Enter the 2 characteriso code of the language this organization is working in.
- If its working languages are multiple languages separate them with a comma like so: "en,de".
- If the organization is working in more than three languages, enter "int"
${prompt}`,
  validate: async (value) => {
    const valuesArray = arrayTransformer(value);
    const validatorResult = await validator(
      valuesArray,
      languageArrayValidator,
    );
    return validatorResult;
  },
});
console.log('\n');

const organisation = {
  name: name,
  sdgs: arrayTransformer(sdgs),
  url: url,
  description: description,
  office_locations_country: arrayTransformer(office_locations_country),
  remote_possible: remote_possible,
  initiative_application_possible: initiative_application_possible,
  working_languages: arrayTransformer(working_languages),
  type: {
    framework: framework,
    emphasis: emphasis_value,
  },
};

console.log('\nSaved organisation:\n', organisation, '\n');

const jsonString = JSON.stringify(organisation, null, 2); // Pretty-print JSON with 2-space indentation

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const parentDir = path.join(__dirname, '..');

let directoryPath = path.join(parentDir, 'src/lib/data/organizations');
let subfolder;

if (office_locations_country.length > 1) {
  subfolder = organisation.office_locations_country[0];
} else {
  subfolder = 'int';
}
// list subfolders and check if subfolder exists
const subfolders = fs.readdirSync(directoryPath);
if (!subfolders.includes(subfolder)) {
  fs.mkdirSync(path.join(directoryPath, subfolder));
}
directoryPath = path.join(directoryPath, subfolder);

const fileName = sanitizeFileName(organisation.name) + '.json';

const filePath = path.join(directoryPath, fileName);

async function writeToFile() {
  try {
    await fs.promises.writeFile(filePath, jsonString);
    console.log('File has been written successfully');
  } catch (err) {
    console.error('Error writing file', err);
  }
}

writeToFile();
