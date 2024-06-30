import _ from 'lodash';
export function processOrganizations(data) {
  const procOrganizations = _.map(data, (org) => ({
    ...org,
    cause: _.take(org.cause, 3),
    office_locations_country: _.map(org.office_locations_country, (c) =>
      c.trim(),
    ),
  }));

  return procOrganizations;
}
