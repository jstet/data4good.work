<script>
  import LinkComponent from '$lib/components/LinkComponent.svelte';
  import {getFlagEmoji, getSDGColor} from '$lib/js/helpers.js';
  import SvelteMarkdown from 'svelte-markdown';
  export let data;
  $: organizations = data.data.Organizations;
  $: data4good = data.data.Data4Good_Definition.content;
</script>

<div class="min-h-[90vh]">
  <div class="hero min-h-[45vh] bg-base-200 py-16">
    <div class="hero-content text-center">
      <div class="max-w-md">
        <h1 class="text-5xl font-bold">Work in Data4Good!</h1>
        <p class="py-6">
          A list of organizations that leverage data for social and
          environmental good.
        </p>
        <div class="alert alert-info mt-5 px-4 py-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            class="h-6 w-6 shrink-0 stroke-current"
            ><path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            /></svg
          >
          <span
            >This website is a living document. Follow the instructions in <a
              class="link"
              href="https://github.com/jstet/data4good.work/blob/acc6a0d9071c334d59628e636a7013e69bb2ddf9/README.md"
              >this README</a
            >
            to suggest changes.</span
          >
        </div>
      </div>
    </div>
  </div>
  <div
    id="definition"
    class="m-auto flex min-h-[45vh] max-w-[1200px] py-12 lg:mb-12"
  >
    <div class="flex w-full flex-col lg:flex-row">
      <div class="card rounded-box grid flex-grow items-center">
        <h2 class="font-semi-bold px-4 py-6 text-4xl lg:py-12">Definition</h2>
      </div>
      <div class="divider px-4 lg:divider-horizontal" />
      <div class="card rounded-box grid flex-grow items-center">
        <div class="max-w-[600px] px-4 py-2 text-lg">
          <SvelteMarkdown
            source={data4good}
            renderers={{link: LinkComponent}}
          />
        </div>
      </div>
    </div>
  </div>
</div>
<!-- <div class="m-auto max-w-[1200px] px-4">
  <h2 class="font-semi-bold m-auto py-12 text-2xl">Organization Types</h2>
  <p>Data4Good Organizations are classified by their legal <span class="font-semi-bold badge badge-md bg-base-200">framework</span> and their operational <span class="font-semi-bold badge badge-md bg-info"> emphasis</span>. </p>
</div> -->
<div id="list" class="m-auto max-w-[1200px] pb-12">
  <div class="px-4">
    <h2 class="font-semi-bold m-auto pb-8 text-4xl">Organizations</h2>
    <p class="pb-10 lg:pb-4">
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
        class="mx-1 inline-flex h-6 w-6 items-center justify-center self-center border-none font-oswald text-xs font-[500] text-white"
        style="background-color: {getSDGColor('17')};"><span></span>SDG</span
      >
      they contribute to and their office locations {getFlagEmoji('Worldwide')}.
    </p>
    <div class=" m-auto rounded border-t">
      {#each organizations as organization}
        <div class="grid grid-cols-5 border-x border-b">
          <div class="col-span-5 lg:col-span-2">
            <div class="px-4 pt-3 lg:py-2">
              <div class="grid grid-cols-2">
                <div class="mb-3 text-xl font-bold lg:mb-5">
                  <a href={organization.link} class="link"
                    >{organization.name}</a
                  >
                </div>
                <div class="flex flex-wrap pt-1 text-lg">
                  <span
                    class="font-semi-bold badge badge-md rounded-l-full bg-base-200"
                    >{organization.type.framework.name}
                  </span>
                  <span
                    class="font-semi-bold badge badge-md rounded-r-full bg-info"
                    >{organization.type.emphasis.name}
                  </span>
                </div>
              </div>
              <div class="mb-4 grid grid-cols-2">
                <div class="flex w-3/4 flex-wrap lg:w-10/12">
                  {#each organization.office_locations_country as country}
                    <span class="mr-1 text-xl">{getFlagEmoji(country)}</span>
                  {/each}
                </div>
                <div class="flex flex-wrap">
                  {#each organization.cause as cause}
                    <span
                      class="mr-2 flex h-9 w-9 items-center justify-center border-none font-oswald text-base font-[500] text-white"
                      style="background-color: {getSDGColor(cause)};"
                      ><span></span>{cause}</span
                    >
                  {/each}
                </div>
              </div>
            </div>
          </div>

          <div class="col-span-5 lg:col-span-3 lg:border-l">
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
