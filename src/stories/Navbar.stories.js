import {userEvent, within} from '@storybook/testing-library';
import {INITIAL_VIEWPORTS} from '@storybook/addon-viewport';

import Navbar from '$lib/single_use/Navbar.svelte';

// 👇This default export determines where your story goes in the story list
export default {
  component: Navbar,
  parameters: {
    // 👇 The viewports object from the Essentials addon
    viewport: {
      // 👇 The viewports you want to use
      viewports: INITIAL_VIEWPORTS,
    },
  },
};

export const Desktop_Header = {
  parameters: {
    viewport: {
      defaultViewport: 'desktop',
    },
  },
};

export const Mobile_Header = {
  parameters: {
    viewport: {
      defaultViewport: 'iphone12mini',
    },
  },
  play: async ({canvasElement}) => {
    const canvas = within(canvasElement);
    userEvent.click(canvas.getByTestId('navbar-mobile-menu'));
  },
};
