import Type from '$lib/components/Type.svelte';

// 👇This default export determines where your story goes in the story list
export default {
  component: Type,
};

export const Primary = {
  render: (args) => ({
    Component: Type,
    props: args,
  }),
  args: {
    framework: 'NGO',
    emphasis: 'Poverty',
    size: 'md',
  },
};
