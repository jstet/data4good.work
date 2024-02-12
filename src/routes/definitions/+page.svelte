<script>
  export let data;
  import {getSDGColor} from '$lib/js/helpers.js';
  import Category from '$lib/components/Category.svelte';
  import Type from '$lib/components/Type.svelte';

  $: types = data.data.Organization_Types;
</script>

<div class="m-auto mt-12 max-w-[1200px] px-4">
  <div class="">
    <h2 class="m-auto pb-8 text-4xl font-bold">Definitions</h2>

    <p class="pb-6">
      <strong>Data4Good</strong> refers to the use of data for social and
      environmental good, leveraging its potential for addressing pressing
      challenges instead of solely focusing on maximizing profits. To be able to
      distinguish between causes, this website is using the framework of the
      <a class="link" href="https://sdgs.un.org/goals"
        >Sustainable Development Goals
      </a> (SDGs), which is a collection of 17 global goals set by the United Nations
      General Assembly in 2015.
    </p>

    <p class="pb-6">
      Therefore, in the context of this website, Data4Good means applying
      methodologies related to Data Science for causes that are compatible with
      one or multiple <span
        class="mx-1 inline-flex h-6 w-6 items-center justify-center self-center border-none align-bottom font-oswald text-xs font-[500] text-white"
        style="background-color: {getSDGColor('17')};">SDG</span
      >. Additionally, Data4Good must adhere to the ethical practices of
      prioritizing privacy and consent, ensuring data security, promoting
      transparency and mitigating biases for fairness. An organization can be
      classified as a Data4Good organization if its practices adhere to these
      criteria.
    </p>
    <p></p>
    <p class="pb-6" id="taxonomy">
      A <strong>Taxonomy</strong> of such organizations is built out of
      combinations of two categories:
      <Category category="framework" label="Framework" size="md" />
      and refers to the overarching categories of organizations based on their structure
      and mission.
      <Category category="emphasis" label="Emphasis" size="md" /> refers to the specific
      focus or area of operation. Find a list of identified Data4Good organization
      types below.
    </p>
  </div>

  <div class="m-auto rounded border-t pb-12">
    {#each types as type}
      <div class="border-x border-b p-4">
        <Type
          framework={type.framework.name}
          emphasis={type.emphasis.name}
          size={'md '}
        />
        <p class="mt-3 pb-1 pt-3">{type.description}</p>
      </div>
    {/each}
  </div>
</div>
