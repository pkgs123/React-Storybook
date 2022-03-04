module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/preset-create-react-app",
    "@storybook/addon-docs",
    "@storybook/addon-knobs",
    "@storybook/addon-viewport",
    "@storybook/addon-a11y"
  ],
  "framework": "@storybook/react",
  "core": {
    "builder": "webpack5"
  }
}