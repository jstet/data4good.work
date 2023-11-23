import directus_fetch from '$lib/js/directus_fetch';
import {indexQuery} from './query.js';

/** @type {import('./$types').PageServerLoad} */
export function load({}) {
  const data = directus_fetch(indexQuery, {});

  return {
    Organizations: data.Organizations,
    Data4Good_Definition: data.Data4Good_Definition,
  };
}
