import * as yup from 'yup';

const OrganizationSchema = yup.object().shape({
  name: yup.string().required('Name is required'),
  cause: yup.array().of(yup.number()), // Numbers only, customize validation if needed
  url: yup.string().url('Invalid URL format'),
  description: yup.string(),
  office_locations_country: yup.array().of(yup.string()),
  remote_possible: yup.boolean().nullable(),
  initiative_application_possible: yup.boolean().nullable(),
  type: yup.object().shape({
    framework: yup.string().required('Organization framework required'),
    emphasis: yup.string().required('Organization emphasis required'),
  }),
});

export async function validateOrganizations(organizations) {
  // Use Promise.all to validate all organizations concurrently
  const validationResults = await Promise.all(
    organizations.map((organization) =>
      OrganizationSchema.validate(organization),
    ),
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
