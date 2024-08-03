/* eslint-disable no-invalid-this */
import * as yup from 'yup';
import iso3311a2 from 'iso-3166-1-alpha-2';
import {validateLanguageCode} from 'iso-lang-codes';
import {frameworks, emphasis} from '../data/parameters.js';

export const validateAlpha2 = (value) => {
  if (value === 'int') {
    return true;
  }
  if (value.length !== 2) {
    return 'Must be 2 characters';
  }
  try {
    iso3311a2.getCountry(value.toUpperCase());
    return true;
  } catch (e) {
    return 'Invalid ISO 3166-1 alpha-2 code';
  }
};

export const validateLanguage = (value) => {
  if (value === 'int') {
    return true;
  }
  if (value.length !== 2) {
    return 'Must be 2 characters';
  }
  try {
    console.log(validateLanguageCode(value), value);
    validateLanguageCode(value);
    return true;
  } catch (e) {
    return 'Invalid language code';
  }
};

yup.addMethod(yup.string, 'alpha2', function (message) {
  return this.test('alpha2', message, function (value) {
    const {path, createError} = this;
    const validationResult = validateAlpha2(value);
    return (
      validationResult === true ||
      createError({path, message: validationResult})
    );
  });
});

yup.addMethod(yup.string, 'language', function (message) {
  return this.test('language', message, function (value) {
    const {path, createError} = this;
    const validationResult = validateLanguage(value);
    return (
      validationResult === true ||
      createError({path, message: validationResult})
    );
  });
});

// Add custom validation methods for frameworks and emphasis
yup.addMethod(yup.string, 'oneOfFrameworks', function (message) {
  return this.test('oneOfFrameworks', message, function (value) {
    const {path, createError} = this;
    return (
      frameworks.includes(value) ||
      createError({
        path,
        message: message || `Value must be one of: ${frameworks.join(', ')}`,
      })
    );
  });
});

yup.addMethod(yup.string, 'oneOfEmphasis', function (message) {
  return this.test('oneOfEmphasis', message, function (value) {
    const {path, createError} = this;
    return (
      emphasis.includes(value) ||
      createError({
        path,
        message: message || `Value must be one of: ${emphasis.join(', ')}`,
      })
    );
  });
});

// Validators
export const nameValidator = yup.string().required('Name is required');
export const sdgsValidator = yup
  .array()
  .of(yup.number())
  .required('SDGs are required');
export const urlValidator = yup
  .string()
  .url('Invalid URL format')
  .required('URL is required');
export const descriptionValidator = yup
  .string()
  .required('Description is required');
export const alpha2ArrayValidator = yup
  .array()
  .of(yup.string().alpha2('Invalid ISO 3166-1 alpha-2 code'));
export const languageArrayValidator = yup
  .array()
  .of(yup.string().language('Invalid language code'));
export const booleanNullableValidator = yup.boolean().nullable();
export const frameworkValidator = yup
  .string()
  .oneOfFrameworks('Invalid framework value')
  .required('Organization framework required');
export const emphasisValidator = yup
  .string()
  .oneOfEmphasis('Invalid emphasis value')
  .required('Organization emphasis required');

export const OrganizationSchemaInput = yup.object().shape({
  name: nameValidator,
  sdgs: sdgsValidator,
  url: urlValidator,
  description: descriptionValidator,
  office_locations_country: alpha2ArrayValidator,
  remote_possible: booleanNullableValidator,
  initiative_application_possible: booleanNullableValidator,
  working_languages: languageArrayValidator,
  type: yup.object().shape({
    framework: frameworkValidator,
    emphasis: emphasisValidator,
  }),
});

export const OrganizationSchemaProc = yup.object().shape({
  name: nameValidator,
  sdgs_number: yup
    .array()
    .of(yup.string())
    .required('SDGs numbers are required'),
  sdgs_name: yup.array().of(yup.string()).required('SDGs names are required'),
  url: urlValidator,
  description: descriptionValidator,
  office_locations_country_alpha2: alpha2ArrayValidator
    .required('Country Alpha-2 code is required')
    .min(1),
  office_locations_country_name: yup
    .array()
    .of(yup.string().required())
    .required('Country Name is required')
    .min(1),
  working_languages: languageArrayValidator.required(
    'Working languages are required',
  ),
  remote_possible: booleanNullableValidator,
  initiative_application_possible: booleanNullableValidator,
  framework: frameworkValidator,
  emphasis: emphasisValidator,
});

export async function validateSchema(organizations, schema) {
  // Use Promise.all to validate all organizations concurrently
  const validationResults = await Promise.all(
    organizations.map((organization) => schema.validate(organization)),
  );

  // Check for errors in any of the validations
  const hasErrors = validationResults.some((result) => result.error);

  if (hasErrors) {
    const failedOrgs = validationResults
      .filter((result) => result.error)
      .map((result) => result.error.details);
    // Throw a specific error with details about failed organizations
    throw new Error(
      'Validation failed for some organizations:\n' +
        JSON.stringify(failedOrgs, null, 2),
    );
  } else {
    // All organizations are valid (optional: return the validated data)
    return validationResults;
  }
}
