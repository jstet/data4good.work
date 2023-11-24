<script>
  import LinkComponent from '$lib/components/LinkComponent.svelte';
  import SvelteMarkdown from 'svelte-markdown';
  export let data;
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
