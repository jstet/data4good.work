import {processOrganizations} from '$lib/parsing/processing.js';
import {
  validateSchema,
  OrganizationSchemaInput,
  OrganizationSchemaProc,
} from '$lib/parsing/validation.js';
import {loadJsonFiles} from '$lib/js/helpers.js';

/** @type {import('./$types').PageServerLoad} */
export async function load({fetch}) {
  const data = await loadJsonFiles('src/lib/data/organizations/');

  const parsedOrganizations = await validateSchema(
    processOrganizations(await validateSchema(data, OrganizationSchemaInput)),
    OrganizationSchemaProc,
  );

  return {organizations: parsedOrganizations};
}
