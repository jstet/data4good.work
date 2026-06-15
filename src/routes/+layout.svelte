<script>
  import '../app.css';
  import Navbar from '$lib/navigation/Navbar.svelte';
  import Footer from '$lib/navigation/Footer.svelte';
  /**
   * @typedef {Object} Props
   * @property {import('svelte').Snippet} [children]
   */

  /** @type {Props} */
  let {children} = $props();
</script>

<Navbar />

<div class="min-h-[85vh]">
  {@render children?.()}
</div>

<Footer />
