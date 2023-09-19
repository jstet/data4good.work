<script>
  import "../app.css";
</script>


  <div class="navbar bg-neutral text-neutral-content h-[10vh]">
    <div class="navbar-start">
      <a href="/" class="btn btn-ghost normal-case text-2xl">data4good.work</a>
      <!-- <div class="dropdown">
        <label tabindex="0" class="btn btn-ghost btn-circle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-7 w-7"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            ><path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h7"
            /></svg
          >
        </label>
        <ul
          tabindex="0"
          class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li><a class="text-lg" href="#definition">Definition</a></li>
          <li><a class="text-lg" href="#list">List</a></li>
          <li><a class="text-lg"  href="https://github.com/jstet/data4good.work">Contribute</a></li>
        </ul>
      </div> -->
    </div>
    <div class="navbar-center">
      
    </div>
    <div class="navbar-end">
      <a href="#list" class="btn btn-sm lg:btn-md lg:mr-3">To List</a>
    </div>
  </div>
<div class="min-h-[90vh]">
  <slot />
</div>
<footer
class=" p-4 bg-neutral text-neutral-content text-center" 
>
<p class="text-sm pt-2">
  This website is maintained by a community of contributors. For more
  information and to contribute, visit the <a href="https://github.com/jstet/data4good.work" class="link">repository</a> where
  you can find the source code.
</p>
<br>

<p class="text-sm pb-2">
  <a class="link" href="/imprint">Imprint</a>
</p>
</footer>
