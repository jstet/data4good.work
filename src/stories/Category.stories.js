import Category from '$lib/components/Category.svelte';

// 👇This default export determines where your story goes in the story list
export default {
  component: Category,
};

export const Framework = {
  render: (args) => ({
    Component: Category,
    props: args,
  }),
  args: {
    category: 'framework',
    size: 'md',
    label: 'Framework',
  },
};

export const Framework_Half = {
  render: (args) => ({
    Component: Category,
    props: args,
  }),
  args: {
    ...Framework.args,
    half: true,
  },
};

export const Emphasis = {
  render: (args) => ({
    Component: Category,
    props: args,
  }),
  args: {
    category: 'emphasis',
    size: 'md',
    label: 'Emphasis',
  },
};

export const Emphasis_Half = {
  render: (args) => ({
    Component: Category,
    props: args,
  }),
  args: {
    ...Emphasis.args,
    half: true,
  },
};
