<script>
  import ArrowLeft from '../svg/ArrowLeft.svelte';
  import ArrowRight from '../svg/ArrowRight.svelte';

  export let items;
  export let perPage;
  export let trimmedItems;

  $: totalItems = items.length;
  $: currentPage = 0;
  $: totalPages = Math.ceil(totalItems / perPage);
  $: start = currentPage * perPage;
  $: end =
    currentPage === totalPages - 1 ? totalItems - 1 : start + perPage - 1;

  $: trimmedItems = items.slice(start, end + 1);

  $: totalItems, (currentPage = 0);
  $: currentPage, start, end;
</script>

{#if totalItems && totalItems > perPage}
  <div
    class="pagination pointer-events-auto flex items-center justify-center"
    role="navigation"
    aria-label="Pagination"
  >
    <button
      on:click={() => (currentPage -= 1)}
      disabled={currentPage === 0 ? true : false}
      aria-label="previous"
    >
      <ArrowLeft width={30} height={30} />
    </button>
    <p class="m-0 mx-2">{start + 1} - {end + 1} of {totalItems}</p>
    <button
      class="flex"
      on:click={() => (currentPage += 1)}
      disabled={currentPage === totalPages - 1 ? true : false}
      aria-label="next"
    >
      <ArrowRight width={30} height={30} />
    </button>
  </div>
{/if}
