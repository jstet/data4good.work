<script>
  import {getFlagEmoji, getSDGColor} from '$lib/js/helpers.js';
  import Type from '$lib/components/Type.svelte';
  export let data;
  $: organizations = data.data.Organizations;
</script>

<div id="list" class="m-auto max-w-[1200px] py-12">
  <div class="px-4">
    <h2 class="m-auto pb-8 text-4xl font-bold">Organizations</h2>
    <p class="pb-10 lg:pb-12">
      Data4Good Organizations are classified by their legal <span
        class="font-semi-bold badge badge-md ml-1 mr-0.5 self-center bg-base-200"
        >framework</span
      >, their operational
      <span
        class="font-semi-bold badge badge-md ml-1 mr-0.5 self-center bg-info"
      >
        emphasis</span
      >, the
      <span
        class="mx-1 inline-flex h-6 w-6 items-center justify-center self-center border-none align-middle font-oswald text-xs font-[500] text-white"
        style="background-color: {getSDGColor('17')};"><span></span>SDG</span
      >
      they contribute to and their office locations {getFlagEmoji('Worldwide')}.
      See <a class="link" href="/definitions">Definitions</a> for more info.
    </p>
    <div class=" m-auto rounded border-t">
      {#each organizations as organization}
        <div class="grid grid-cols-6 border-x border-b">
          <div class="col-span-6 lg:col-span-3">
            <div class="px-4 pb-6 pt-3 lg:pb-2 lg:pt-2">
              <div class="lg:grid lg:grid-cols-2">
                <div class="mb-3 flex text-xl font-bold lg:mb-5">
                  <a href={organization.link} class="link"
                    >{organization.name}</a
                  >
                  <div class="flex flex-wrap pl-3 lg:hidden">
                    {#each organization.office_locations_country as country}
                      <span class="mr-1 text-xl">{getFlagEmoji(country)}</span>
                    {/each}
                  </div>
                </div>
                <div class="py-2 lg:py-0">
                  <Type
                    framework={organization.type.framework.name}
                    emphasis={organization.type.emphasis.name}
                  />
                </div>
              </div>
              <div class="lg:mb-4 lg:grid lg:grid-cols-2">
                <div
                  class="flex hidden w-3/4 flex-wrap py-4 lg:flex lg:w-10/12 lg:py-0"
                >
                  {#each organization.office_locations_country as country}
                    <span class="mr-2 text-xl">{getFlagEmoji(country)}</span>
                  {/each}
                </div>
                <div class="flex flex-wrap pt-4 lg:pt-0">
                  {#each organization.cause as cause}
                    <span
                      class="mb-2 mr-2 flex h-9 w-9 items-center justify-center border-none font-oswald text-base font-[500] text-white"
                      style="background-color: {getSDGColor(cause)};"
                      ><span></span>{cause}</span
                    >
                  {/each}
                </div>
              </div>
            </div>
          </div>

          <div class="col-span-6 lg:col-span-3 lg:border-l">
            <div class="px-4 pb-6 lg:py-2">
              <p class="text-sm">
                {organization.description}
              </p>
            </div>
          </div>
        </div>
      {/each}
    </div>
  </div>
</div>
