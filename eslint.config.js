import svelte from 'eslint-plugin-svelte';
import prettier from 'eslint-config-prettier/flat';

export default [
  ...svelte.configs['flat/recommended'],
  prettier,
  ...svelte.configs['flat/prettier'],
  {
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    rules: {
      camelcase: 'off',
      // SvelteKit resolve() opinion — not enforced previously, plain hrefs are fine
      'svelte/no-navigation-without-resolve': 'off',
      // good practice nudge, but don't block commits
      'svelte/require-each-key': 'warn',
    },
  },
  {
    ignores: ['build/', '.svelte-kit/', 'node_modules/'],
  },
];
