<script>
  import '../app.css';
  import Navbar from '$lib/navigation/Navbar.svelte';
  import Footer from '$lib/navigation/Footer.svelte';
</script>

<Navbar />

<div class="min-h-[85vh]">
  <slot />
</div>

<Footer />
