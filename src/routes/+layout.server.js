import {processOrganizations} from '$lib/parsing/processing.js';
import {validateOrganizations} from '$lib/parsing/validation.js';
import {loadJsonFiles} from '$lib/js/helpers.js';

/** @type {import('./$types').PageServerLoad} */
export async function load({fetch}) {
  const data = await loadJsonFiles('src/lib/data/organizations/');

  console.log(data);

  const parsedOrganizations = await validateOrganizations(
    processOrganizations(data),
  );

  return {organizations: parsedOrganizations};
}
