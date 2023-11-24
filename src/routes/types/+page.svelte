<script>
  import Type from '$lib/components/Type.svelte';
  export let data;
  $: types = data.data.Organization_Types;
</script>

<div class="m-auto max-w-[1200px] px-4">
  <div class="py-12">
    <h2 class="m-auto pb-8 text-4xl font-bold">Organizations Types</h2>
    <p>
      Types are combinations of <span
        class="font-semi-bold badge badge-md bg-base-200">framework</span
      >
      and operational
      <span class="font-semi-bold badge badge-md bg-info"> emphasis</span>.
    </p>
  </div>

  <div class="m-auto rounded border-t pb-12">
    {#each types as type}
      <div class="border-x border-b p-4">
        <Type
          framework={type.framework.name}
          emphasis={type.emphasis.name}
          size={'lg'}
        />
        <p class="mt-4 pb-1 pt-3">{type.description}</p>
      </div>
    {/each}
  </div>
</div>
