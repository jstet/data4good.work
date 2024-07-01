<script>
  import {
    filter,
    genDropdownLists,
    setUrlParams,
    applyUrlSearchParams,
  } from '$lib/js/filter.js';
  import DropdownIcon from '$lib/svg/Dropdown.svelte';
  import _ from 'lodash';
  import Select from 'svelte-select';
  import {onMount} from 'svelte';
  import {page} from '$app/stores';

  export let origData;
  export let filteredData;
  export let expanded = false;

  export let selects;
  export let searchOptions;

  let hidden = 'hidden';
  let ariaExpanded = false;
  let searchTerm;

  const values = {};

  onMount(async () => {
    // when searchParams is set, set them in filter
    applyUrlSearchParams($page.url.searchParams, values, selects);
    // if value is set dont hide filter (if someone goes to page with defined url param)
    if (expanded === false) {
      if (Object.values(values).some((value) => value !== null)) {
        hidden = 'visible';
        ariaExpanded = true;
      }
    } else {
      hidden = 'visible';
    }
  });
  $: selects = genDropdownLists(origData, selects);

  function handleHidden() {
    hidden = hidden === 'hidden' ? 'visible' : 'hidden';
    ariaExpanded = ariaExpanded ? false : true;
  }

  function changeVal(values_) {
    for (const key in values_) {
      if (values_.hasOwnProperty(key)) {
        _.find(selects, {param: key}).value = values_[key];
      }
    }
  }
  $: changeVal(values);

  $: filteredData = filter(
    origData,
    selects,
    searchTerm,
    searchOptions,
    values,
  );

  $: history.replaceState(
    history.state,
    '',
    setUrlParams($page.url, selects, values),
  );
</script>

<div class="">
  <div class="border-neutral-25 border-b">
    <button
      class="inline-flex items-center justify-center pb-1 text-xl font-semibold transition hover:text-secondary"
      aria-expanded={ariaExpanded}
      aria-controls="filter"
      on:click={handleHidden}
    >
      Filter
      <DropdownIcon height={27} width={27} />
    </button>
  </div>
  <div
    class="text_width grid items-center gap-y-4 md:gap-x-6 {hidden}"
    id="filter"
  >
    <div class="">
      <span class="mt-4 block pb-1 text-lg font-semibold">Search</span>
      <div class="flex">
        <input
          bind:value={searchTerm}
          placeholder="Search..."
          class="border-neutral-25 h-full w-full rounded-md border p-2 pl-4"
          data-testid="filter-search"
        />
      </div>
    </div>
    {#each selects as select}
      <div>
        <span class="mt-2 block pb-1 text-lg font-semibold">{select.title}</span
        >
        <div
          class={select.param !== 'language' && select.param !== 'langs'
            ? 'capitalize'
            : ''}
        >
          <Select
            showChevron
            placeholder="Select"
            items={select.items}
            searchable={select.searchable}
            multiple={select.multiple}
            bind:value={values[select.param]}
            --list-z-index="30"
          >
            <div slot="empty" /></Select
          >
        </div>
      </div>
    {/each}
  </div>
</div>

<style>
</style>
