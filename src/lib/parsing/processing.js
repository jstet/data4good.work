import _ from 'lodash';
import {getSDGName} from '../js/helpers';
import iso3311a2 from 'iso-3166-1-alpha-2';

export function processOrganizations(data) {
  const procOrganizations = _.map(data, (org) => ({
    name: org.name,
    url: org.url,
    description: org.description,
    remote_possible: org.remote_possible,
    initiative_application_possible: org.initiative_application_possible,
    working_languages: org.working_languages,
    framework: org.type.framework,
    emphasis: org.type.emphasis,
    sdgs_number: _.map(org.sdgs, (sdgs) => sdgs.toString()),
    sdgs_name: _.map(org.sdgs, (sdgs) => getSDGName(sdgs)),
    office_locations_country_alpha2: _.map(
      org.office_locations_country,
      (country) => country.toLowerCase(),
    ),
    office_locations_country_name: _.map(
      org.office_locations_country,
      (country) => {
        return country === 'int'
          ? 'International'
          : iso3311a2.getCountry(country.toUpperCase());
      },
    ),
    working_languages: _.map(org.working_languages, (country) =>
      country.toLowerCase(),
    ),
  }));
  return procOrganizations;
}
