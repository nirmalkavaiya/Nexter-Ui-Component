/** @type { import('@storybook/react-vite').StorybookConfig } */
const config = {
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx|mdx)'],
  addons: [
    '@storybook/addon-essentials',   // controls, docs, actions, viewport, backgrounds
    '@storybook/addon-a11y',         // accessibility panel
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  docs: {
    autodocs: 'tag',                 // add autodocs: true to any story to auto-generate docs page
  },
};

export default config;
