import * as yup from 'yup';

export const OrganizationSchemaInput = yup.object().shape({
  name: yup.string().required('Name is required'),
  sdgs: yup.array().of(yup.number()).required('SDGs are required'), // Numbers only, customize validation if needed
  url: yup.string().url('Invalid URL format').required('URL is required'),
  description: yup.string().required('Description is required'),
  office_locations_country: yup.array().of(yup.string()),
  remote_possible: yup.boolean().nullable(),
  initiative_application_possible: yup.boolean().nullable(),
  type: yup.object().shape({
    framework: yup.string().required('Organization framework required'),
    emphasis: yup.string().required('Organization emphasis required'),
  }),
});

export const OrganizationSchemaProc = yup.object().shape({
  name: yup.string().required('Name is required'),
  sdgs_number: yup.array().of(yup.string()).required(),
  sdgs_name: yup.array().of(yup.string()).required(),
  url: yup.string().url('Invalid URL format').required(),
  description: yup.string().required('Description is required').required(),
  office_locations_country_alpha2: yup
    .array()
    .of(yup.string().required())
    .required('Country Apha2 code is required')
    .min(1),
  office_locations_country_name: yup
    .array()
    .of(yup.string().required())
    .required('Country Name is required')
    .min(1),
  remote_possible: yup.boolean().nullable(),
  initiative_application_possible: yup.boolean().nullable(),
  framework: yup.string().required('Organization framework required'),
  emphasis: yup.string().required('Organization emphasis required'),
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
