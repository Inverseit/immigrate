// next.config.js
const withNextra = require("nextra")({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.js",
});
const withTM = require("next-transpile-modules")(["nextra-theme-docs"]);

// const isProd = process.env.NODE_ENV === 'production'

// module.exports = withTM(
//   {...withNextra({
//     reactStrictMode: true,
//     trailingSlash: true
//   }),
//   assetPrefix: isProd ? 'https://web2.qatar.cmu.edu/~useitkal/07129' : '',
//   }
// );

module.exports = withTM(
  withNextra({
    reactStrictMode: true,
    trailingSlash: true,
  })
);
