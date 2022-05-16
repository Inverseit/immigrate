// next.config.js
const withNextra = require("nextra")({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.js"
});
const withTM = require("next-transpile-modules")([
  "nextra-theme-docs"
]);

module.exports = withTM(
  withNextra({
    reactStrictMode: true,
    trailingSlash: true
  })
);