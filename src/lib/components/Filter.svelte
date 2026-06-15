<script>
  import {run} from 'svelte/legacy';

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
  import {browser} from '$app/environment';
  import {goto} from '$app/navigation';

  /**
   * @typedef {Object} Props
   * @property {any} origData
   * @property {any} filteredData
   * @property {boolean} [expanded]
   * @property {any} selects
   * @property {any} searchOptions
   */

  /** @type {Props} */
  let {
    origData,
    filteredData = $bindable(),
    expanded = false,
    selects = $bindable(),
    searchOptions,
  } = $props();

  let hidden = $state('hidden');
  let ariaExpanded = $state(false);
  let searchTerm = $state();

  const values = $state({});

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
  run(() => {
    selects = genDropdownLists(origData, selects);
  });

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
  run(() => {
    changeVal(values);
  });

  run(() => {
    filteredData = filter(origData, selects, searchTerm, searchOptions, values);
  });

  run(() => {
    // reads `selects` (via setUrlParams) so this reruns when filters change.
    // base URL on window.location, NOT $page.url, to avoid an infinite
    // goto → $page.url change → rerun → goto loop.
    if (!browser) return;
    const newUrl = setUrlParams(new URL(window.location.href), selects);
    if (newUrl.search !== window.location.search) {
      goto(newUrl, {keepFocus: true, noScroll: true, replaceState: true});
    }
  });
</script>

<div class="">
  <div class="border-base-300 border-b">
    <button
      class="inline-flex items-center justify-center pb-1 text-xl font-semibold transition hover:text-secondary"
      aria-expanded={ariaExpanded}
      aria-controls="filter"
      onclick={handleHidden}
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
          class="border-base-300 h-full w-full rounded-md border p-2 pl-4"
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
            --border="1px solid var(--color-base-300)"
            --border-hover="1px solid var(--color-base-300)"
            --border-focused="1px solid var(--color-base-300)"
            --border-radius="0.375rem"
          >
            {#snippet empty()}
              <div></div>
            {/snippet}</Select
          >
        </div>
      </div>
    {/each}
  </div>
</div>

<style>
</style>
