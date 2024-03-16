import {indexQuery} from './query.js';
import _ from 'lodash';

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

  const data = await response.json();

  const procOrganizations = _.map(data.data.Organizations, (org) => ({
    ...org,
    cause: _.take(org.cause, 3),
  }));

  return {organizations: procOrganizations};
}
