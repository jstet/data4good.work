<script>
  import {getFlagEmoji, getSDGColor} from '$lib/js/helpers.js';
  import Type from '$lib/components/Type.svelte';
  import Category from '$lib/components/Category.svelte';
  import Filter from '$lib/components/Filter.svelte';
  import Pagination from '$lib/components/Pagination.svelte';

  export let data;
  $: organizations = data.organizations;

  let filteredData;
  let trimmedData;

  $: selects = [
    {
      title: 'SDG',
      searchable: false,
      multiple: true,
      param: 'sdgs_name',
    },
    {
      title: 'Framework',
      searchable: false,
      multiple: false,
      param: 'framework',
    },
    {
      title: 'Emphasis',
      searchable: false,
      multiple: false,
      param: 'emphasis',
    },
    {
      title: 'Office Locations',
      searchable: false,
      multiple: true,
      param: 'office_locations_country_name',
    },
  ];

  $: console.log(organizations);

  const searchOptions = [
    {searchProperty: 'description', multiple: false},
    {searchProperty: 'name', multiple: false},
  ];
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

  <Filter
    origData={organizations}
    expanded={true}
    bind:filteredData
    {selects}
    {searchOptions}
  />
  <div class=" m-auto mt-12 grid gap-3 rounded lg:grid-cols-2">
    {#if trimmedData}
      {#each trimmedData as organization, i}
        <div class="border">
          <div class="px-4 py-3">
            <div class="mb-3 flex text-xl font-bold">
              <a href={organization.url} class="link">{organization.name}</a>
              <div class="flex flex-wrap pl-3">
                {#each organization.office_locations_country_alpha2 as country}
                  <span class="mr-1 text-xl">{getFlagEmoji(country)}</span>
                {/each}
              </div>
            </div>
            <div class="mb-5 flex flex-wrap gap-2 lg:mb-2 lg:pt-0">
              {#each organization.sdgs_name as sdgs_name, i}
                <span
                  class="px-2 py-1 font-oswald text-base text-xs font-[500] uppercase text-white"
                  style="background-color: {getSDGColor(
                    organization.sdgs_number[i],
                  )};">{sdgs_name}</span
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
                framework={organization.framework}
                emphasis={organization.emphasis}
              />
            </div>
          </div>
        </div>
      {/each}
    {/if}

    {#if filteredData}
      <Pagination
        items={filteredData}
        perPage={8}
        bind:trimmedItems={trimmedData}
      />
    {/if}
  </div>
</div>
