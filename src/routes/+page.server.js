import directus_fetch from '$lib/js/directus_fetch';
import {indexQuery} from './query.js';

/** @type {import('./$types').PageServerLoad} */
export async function load({}) {
  const data = await directus_fetch(indexQuery, {});

  return {
    Organizations: data.Organizations,
  };
}
