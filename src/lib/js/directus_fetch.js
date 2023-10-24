import {error} from '@sveltejs/kit';
import {PUBLIC_API_URL} from '$env/static/public';

/*
 * Validate graphql variables wrt. the expected variables
 * These are only language and slug.
 * Since the graphql queries often have default values for
 * their vars, validation prevents typos to when passing vars to a query.
 * Otherwise the incorrectly spelled variable would simply be ignored,
 * while the default value is used.
 */
export function validateVars(vars) {
  const allowedVars = ['page', 'language', 'slug', 'status'];

  for (const name in vars) {
    if (vars.hasOwnProperty(name)) {
      if (!allowedVars.includes(name)) {
        throw Error(`"${name}" is not an allowed variable`);
      }
    }
  }
}

/*
 * Creates an error message for a graphql query indicating which query
 * failed with which variables.
 * This function assumes the very specific query format used throughout the project.
 * Queries start on the second line of a multiline String and start with a line
 * indicating their name.
 */
function queryErrorMsg(query, vars) {
  const firstQueryLine = query.split(/\r?\n/)[1];
  const queryNameAndVars = firstQueryLine.slice(0, firstQueryLine.indexOf('{'));

  return `${queryNameAndVars} with vars ${JSON.stringify(vars)}`;
}

/*
 * Fetches data from the cms via a graphql query with optional
 * variables passed to the query.
 * By default the variables are validated and only allow a small
 * set of typically used names. This can be disabled with the
 * allowAllVars flag.
 */
async function directus_fetch(
  query,
  vars,
  allowAllVarNames = false,
  additionalHeaders = {},
) {
  if (!allowAllVarNames) {
    validateVars(vars);
  }

  const payload = {query: query};
  if (typeof vars !== 'undefined') {
    payload['variables'] = vars;
  }

  const headers = Object.assign(
    {'Content-Type': 'application/json'},
    additionalHeaders,
  );

  const response = await fetch(PUBLIC_API_URL + '/graphql', {
    method: 'post',
    body: JSON.stringify(payload),
    headers: headers,
  });
  if (!response.ok) {
    throw error(500, {
      message: `Unexpected cms response ${
        response.statusText
      } for ${queryErrorMsg(query, vars)}`,
    });
  }

  const data = await response.json();

  if ('errors' in data) {
    throw error(
      500,
      `Cms errors ${data.errors[0].message} for ${queryErrorMsg(query, vars)}`,
    );
  }

  return data.data;
}

export default directus_fetch;
