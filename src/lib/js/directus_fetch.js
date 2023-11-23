import {createDirectus, graphql} from '@directus/sdk';
import {PUBLIC_API_URL} from '$env/static/public';

const client = createDirectus(PUBLIC_API_URL).with(graphql());

export default async function directus_fetch(query) {
  const result = await client.query(query);
  return result;
}
