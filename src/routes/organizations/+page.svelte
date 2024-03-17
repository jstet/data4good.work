<script>
  import _ from 'lodash';
  import Select from 'svelte-select';
  import {queryParam} from 'sveltekit-search-params';
  import {getFlagEmoji, getSDGColor, getSDGName} from '$lib/js/helpers.js';
  import Type from '$lib/components/Type.svelte';
  import Category from '$lib/components/Category.svelte';
  export let data;
  $: organizations = data.organizations;
  $: uniqueCauses = data.uniqueCauses;

  const values = queryParam('values', {
    encode: (values) => _.map(values, 'value'),
    decode: (values) =>
      values === null
        ? null
        : _.map(values.split(','), (item) => ({
          value: item,
          label: getSDGName(item, false),
        })),
  });

  let filteredOrganizations;
  $: if ($values !== undefined && $values !== null) {
    const filterArray = _.map($values, 'value');
    filteredOrganizations = _.filter(organizations, (org) =>
      _.every(filterArray, (filterItem) => _.includes(org.cause, filterItem)),
    );
  } else {
    filteredOrganizations = organizations;
  }
  $: console.log(filteredOrganizations);
</script>

<div class="mx-auto max-w-[1200px] px-4 py-12 pt-6 lg:pt-12">
  <div>
    <h2 class="m-auto pb-5 text-4xl font-bold">Organizations</h2>
    <p class="max-w-[700px] pb-6 leading-loose lg:pb-5">
      Data4Good Organizations are classified by their legal <Category
        category="framework"
        size="md"
        label="Framework"
      />, their operational

      <Category category="emphasis" size="md" label="Emphasis" />, the
      <span
        class="px-2 py-1 font-oswald text-base text-xs font-[500] text-white"
        style="background-color: {getSDGColor(17)};">SDG</span
      >
      they contribute to and their office locations {getFlagEmoji('Worldwide')}.
    </p>
  </div>
  <Select items={uniqueCauses} multiple clearable={true} bind:value={$values} />

  <div class=" m-auto grid gap-3 rounded lg:grid-cols-2">
    {#each filteredOrganizations as organization}
      <div class="border">
        <div class="px-4 py-3">
          <div class="mb-3 flex text-xl font-bold">
            <a href={organization.url} class="link">{organization.name}</a>
            <div class="flex flex-wrap pl-3">
              {#each organization.office_locations_country as country}
                <span class="mr-1 text-xl">{getFlagEmoji(country)}</span>
              {/each}
            </div>
          </div>
          <div class="mb-5 flex flex-wrap gap-2 lg:mb-2 lg:pt-0">
            {#each organization.cause as cause}
              <span
                class="px-2 py-1 font-oswald text-base text-xs font-[500] text-white"
                style="background-color: {getSDGColor(cause)};"
                >{getSDGName(cause)}</span
              >
            {/each}
          </div>
          <div class="lg:py-2">
            <p class="line-clamp-[9] min-h-[100px] text-sm lg:line-clamp-5">
              {organization.description}
            </p>
          </div>
          <div class="mb-2 mt-4 lg:mt-1">
            <Type
              framework={organization.type.framework.name}
              emphasis={organization.type.emphasis.name}
            />
          </div>
        </div>
      </div>
    {/each}
  </div>
</div>
