<script>
  import {run} from 'svelte/legacy';

  import ArrowLeft from '../svg/ArrowLeft.svelte';
  import ArrowRight from '../svg/ArrowRight.svelte';

  let {items, perPage, trimmedItems = $bindable()} = $props();

  let totalItems = $derived(items.length);
  let currentPage = $state(0);

  let totalPages = $derived(Math.ceil(totalItems / perPage));
  let start = $derived(currentPage * perPage);
  let end = $derived(
    currentPage === totalPages - 1 ? totalItems - 1 : start + perPage - 1,
  );

  run(() => {
    trimmedItems = items.slice(start, end + 1);
  });

  run(() => {
    (totalItems, (currentPage = 0));
  });
  run(() => {
    (currentPage, start, end);
  });
</script>

{#if totalItems && totalItems > perPage}
  <div
    class="pagination pointer-events-auto flex items-center justify-center"
    role="navigation"
    aria-label="Pagination"
  >
    <button
      onclick={() => (currentPage -= 1)}
      disabled={currentPage === 0 ? true : false}
      aria-label="previous"
    >
      <ArrowLeft width={30} height={30} />
    </button>
    <p class="m-0 mx-2">{start + 1} - {end + 1} of {totalItems}</p>
    <button
      class="flex"
      onclick={() => (currentPage += 1)}
      disabled={currentPage === totalPages - 1 ? true : false}
      aria-label="next"
    >
      <ArrowRight width={30} height={30} />
    </button>
  </div>
{/if}
