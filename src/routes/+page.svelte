<script>
  export let data;
  $: organizations = data.Organizations;

  $: console.log(organizations);
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
    class="m-auto mb-12 flex min-h-[45vh] max-w-[1200px] py-12"
  >
    <div class="flex w-full flex-col lg:flex-row">
      <div class="card rounded-box grid flex-grow items-center">
        <h2 class="font-semi-bold px-4 py-12 text-4xl">Definition</h2>
      </div>
      <div class="divider px-4 lg:divider-horizontal" />
      <div class="card rounded-box grid flex-grow items-center">
        <p class="max-w-[600px] px-4 py-2 text-lg">
          In the context of this website, <strong>Data4Good</strong> refers to
          the use of data for social and environmental good. Data4Good is driven
          by the belief that data can be a powerful force for good, addressing
          pressing challenges instead of solely focusing on maximizing profits.
          More specific, Data4GGood means applying methodologies from at least
          one of the fields of Data Analysis, Data Collection, Data
          Intelligence, Data Engineering, Data Visualization, Geographical
          Information Systems, Machine Learning, Natural Language Processing,
          Data Journalism, Open Data, Data Ethics or Data Literacy for causes
          that are compatible with the
          <a href="https://sdgs.un.org/goals">Sustainable Development Goals</a>.
          Additionally, Data4Good must adhere to the ethical practices of
          prioritizing privacy and consent, ensuring data security, promoting
          transparency, mitigating biases for fairness, and establishing
          accountability for data impact.
        </p>
      </div>
    </div>
  </div>
</div>
<div id="list" class="m-auto max-w-[1200px] pb-12">
  <div class="px-4">
    <h2 class="font-semi-bold m-auto py-12 text-4xl">Organizations</h2>
    <div class=" m-auto rounded border-t">
      {#each organizations as organization}
        <div class="grid grid-cols-5 border-x border-b">
          <div class="col-span-5 lg:col-span-2">
            <div class="px-4 pt-3 lg:py-2">
              <p class="mb-3 text-lg font-bold lg:mb-3">
                <a href={organization.link} class="link-hover link underline"
                  >{organization.name}</a
                >
              </p>
              <div class="mb-2 flex flex-wrap">
                <span
                  class="text-semi-bold badge badge-info badge-md mb-3 mr-2 text-info-content"
                  >{organization.type}
                </span>
                <span
                  class="text-semi-bold badge badge-warning badge-md mb-2 mr-2 text-warning-content"
                  >{organization.sector}
                </span>
                {#each organization.data_tech as tech}
                  <span
                    class="text-semi-bold badge badge-success badge-md mb-2 mr-2 text-success-content"
                    >{tech}
                  </span>
                {/each}
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
