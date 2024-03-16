<script>
  import '../app.css';
  import Navbar from '$lib/single_use/Navbar.svelte';
  import Footer from '$lib/single_use/Footer.svelte';
</script>

<Navbar />

<div class="min-h-[85vh]">
  <slot />
</div>

<Footer />
