<script>
  import Category from '$lib/components/Category.svelte';

  /**
   * @typedef {Object} Props
   * @property {any} framework
   * @property {any} emphasis
   * @property {string} [size]
   */

  /** @type {Props} */
  let {framework, emphasis, size = 'md'} = $props();

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
