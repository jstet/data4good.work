<script>
  import '../app.css';
  import Dropdown from '$lib/svg/Dropdown.svelte';
</script>

<div class="navbar min-h-[10vh] bg-neutral text-neutral-content">
  <div class="navbar-start">
    <div class="dropdown">
      <button class="btn btn-ghost lg:hidden">
        <Dropdown classes={'h-6 w-6'} />
      </button>
      <ul
        class="menu dropdown-content rounded-box menu-md z-[1] mt-2 w-52 bg-base-100 p-2 text-base-content shadow"
      >
        <li><a class="text-lg" href="/types">Types</a></li>
        <li><a class="text-lg" href="/list">Organizations</a></li>
      </ul>
    </div>
    <a href="/" class="btn btn-ghost text-2xl normal-case">data4good.work</a>
  </div>
  <div class="navbar-end hidden pr-12 lg:flex">
    <a class="btn btn-md my-4 mr-6 text-lg normal-case" href="/types">Types</a>
    <a class="btn btn-md my-4 mr-6 text-lg normal-case" href="/list"
      >Organizations</a
    >
  </div>
</div>

<div class="min-h-[90vh]">
  <slot />
</div>
<footer class=" bg-neutral p-4 text-center text-neutral-content">
  <p class="pt-2 text-sm">
    This website is maintained by a community of contributors. For more
    information and to contribute, visit the <a
      href="https://github.com/jstet/data4good.work"
      class="link">repository</a
    > where you can find the source code.
  </p>
  <br />

  <p class="pb-2 text-sm">
    <a class="link" href="/imprint">Imprint</a>
  </p>
</footer>
