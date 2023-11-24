<script>
  export let framework;
  export let emphasis;
  export let size = 'md';

  const padding = size === 'lg' ? 'p-3' : '';
</script>

<div class="flex flex-wrap pt-1">
  <span
    class="font-semi-bold badge badge-{size} rounded-l-full {padding} bg-base-200 text-{size}"
    >{framework}
  </span>
  <span
    class="font-semi-bold badge badge-{size} rounded-r-full {padding} bg-info text-{size}"
    >{emphasis}
  </span>
</div>
