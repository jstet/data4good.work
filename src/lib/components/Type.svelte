<script>
  import Category from '$lib/components/Category.svelte';

  export let framework;
  export let emphasis;
  export let size = 'md';

  const padding = size === 'lg' ? 'p-3' : '';
</script>

<div class="flex flex-wrap pt-1">
  <Category
    category="framework"
    label={framework}
    {size}
    half={true}
    {padding}
  />
  <Category category="emphasis" label={emphasis} {size} half={true} {padding} />
</div>
