import {indexQuery} from './query.js';
import {PUBLIC_API_URL} from '$env/static/public';

/** @type {import('./$types').PageServerLoad} */
export async function load({fetch}) {
  const payload = {query: indexQuery};

  const headers = Object.assign({'Content-Type': 'application/json'});

  const response = await fetch(PUBLIC_API_URL + '/graphql', {
    method: 'post',
    body: JSON.stringify(payload),
    headers: headers,
  });

  return Promise.resolve(response.json());
}
