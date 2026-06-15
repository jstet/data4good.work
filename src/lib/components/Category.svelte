<script>
  /**
   * @typedef {Object} Props
   * @property {any} category
   * @property {string} [size]
   * @property {boolean} [half]
   * @property {any} label
   */

  /** @type {Props} */
  let {category, size = 'md', half = false, label} = $props();

  const bg_color =
    category === 'emphasis'
      ? 'bg-base-200'
      : category === 'framework'
        ? 'bg-base-300'
        : undefined;
  const badge_size =
    size === 'lg' ? 'badge-lg' : size === 'md' ? 'badge-md' : undefined;
  const rounded =
    half === true
      ? category === 'framework'
        ? 'rounded-l-full'
        : category === 'emphasis'
          ? 'rounded-r-full'
          : undefined
      : '';
</script>

<span
  class="font-semi-bold badge {badge_size} {bg_color} {rounded} border-none text-base-content"
  >{label}</span
>
