import type { StorybookConfig } from "@storybook/react-vite";

const config: { stories: string[]; framework: { name: string; options: {} }; addons: string[] } = {
  stories: ["../src/**/*.mdx", "../src/components/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-onboarding",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
};
export default config;
