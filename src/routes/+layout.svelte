<script>
  import '../app.css';
  import Navbar from '$lib/single_use/Navbar.Svelte';
  import Footer from '$lib/single_use/Footer.svelte';
</script>

<Navbar />

<div class="min-h-[90vh]">
  <slot />
</div>

<Footer />
