import directus_fetch from '$lib/js/directus_fetch';
import {indexQuery} from './query.js';

/** @type {import('./$types').PageServerLoad} */
export async function load({params}) {
  const data = await directus_fetch(indexQuery, {});

  const organizations = data.Organizations;

  return {
    Organizations: organizations,
  };
}
