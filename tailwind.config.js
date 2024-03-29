/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        oswald: ['Oswald'],
      },
    },
  },
  daisyui: {
    themes: ['emerald'],
  },
  plugins: [require('daisyui'), require('@tailwindcss/typography')],
};
