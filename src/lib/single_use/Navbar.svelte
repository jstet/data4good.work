<script>
  import Dropdown from '$lib/svg/Dropdown.svelte';
</script>

<div class="navbar min-h-[10vh] bg-neutral text-neutral-content">
  <!-- Mobile -->
  <div class="navbar-start">
    <div class="dropdown">
      <button class="btn btn-ghost lg:hidden" data-testid="navbar-mobile-menu">
        <Dropdown classes={'h-6 w-6'} />
      </button>
      <ul
        class="menu dropdown-content rounded-box menu-md z-[1] mt-2 w-52 bg-base-100 p-2 text-base-content shadow"
      >
        <li><a class="text-lg" href="/list">Organizations</a></li>
        <li><a class="text-lg" href="/definitions">Definitions</a></li>
      </ul>
    </div>
    <a href="/" class="btn btn-ghost text-2xl normal-case">data4good.work</a>
  </div>
  <!-- Desktop -->
  <div class="navbar-end hidden pr-12 lg:flex">
    <a class="btn btn-md my-4 mr-6 text-lg normal-case" href="/list"
      >Organizations</a
    >
    <a class="btn btn-md my-4 mr-6 text-lg normal-case" href="/definitions"
      >Definitions</a
    >
  </div>
</div>
