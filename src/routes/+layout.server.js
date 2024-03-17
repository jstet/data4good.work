import {indexQuery} from './query.js';
import _ from 'lodash';
import {getSDGName} from '../lib/js/helpers.js';

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
    office_locations_country: _.map(org.office_locations_country, (c) =>
      c.trim(),
    ),
  }));

  const uniqueCauses = _.chain(procOrganizations)
    .flatMap('cause')
    .uniq()
    .map((item) => ({
      value: item,
      label: getSDGName(item, false),
    }))
    .sortBy('value')
    .value();

  const uniqueEmphasis = _.uniq(
    _.map(procOrganizations, 'type.emphasis.name').map((item) => ({
      value: item,
      label: item,
    })),
  );
  const uniqueFramework = _.uniq(
    _.map(procOrganizations, 'type.framework.name').map((item) => ({
      value: item,
      label: item,
    })),
  );
  const uniqueCountry = _.uniq(
    _.flatMap(procOrganizations, 'office_locations_country').map((item) => ({
      value: item,
      label: item,
    })),
  );

  return {
    organizations: procOrganizations,
    uniqueCauses: uniqueCauses,
    uniqueEmphasis: uniqueEmphasis,
    uniqueFramework: uniqueFramework,
    uniqueCountry: uniqueCountry,
  };
}
