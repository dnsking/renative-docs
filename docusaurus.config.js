// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "ReNative",
  tagline: "Unified Development Platform",
  url: "https://renative.org",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  trailingSlash: false,
  organizationName: "renative-org", // Usually your GitHub org/user name.
  projectName: "renative-website", // Usually your repo name.
  plugins: [
    [
      "@docusaurus/plugin-google-gtag",
      {
        trackingID: "G-V5GWQ4WYWK",
      },
    ],
  ],
  presets: [
    [
      "@docusaurus/preset-classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl: "https://github.com/facebook/docusaurus/edit/main/website/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            "https://github.com/facebook/docusaurus/edit/main/website/blog/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      //   algolia: {
      //     appId: "RDMUFOXXVC",
      //     apiKey: "56cceb616493dc70a043d8d4c36c0589",
      //     indexName: "renative",
      //   },
      navbar: {
        title: "ReNative",
        hideOnScroll: true,
        logo: {
          alt: "Renative Logo",
          src: "img/logo.svg",
        },
        items: [
          {
            position: "left",
            label: "v0.37",
            href: "https://github.com/flexn-io/renative/releases/tag/0.37.0",
          },
          {
            type: "doc",
            docId: "overview/introduction",
            position: "left",
            label: "Docs",
          },
          {
            type: "doc",
            docId: "api/renative",
            position: "left",
            label: "API",
          },
          {
            href: "https://github.com/renative-org/renative",
            label: "Github",
            position: "right",
          },
          {
            href: "https://twitter.com/renative",
            label: "Twitter",
            position: "right",
          },
        ],
      },
      colorMode: {
        defaultMode: "light",
        disableSwitch: false,
        respectPrefersColorScheme: true,
        switchConfig: {
          darkIcon: "⚫",
          lightIcon: "🔆",
          // React inline style object
          // see https://reactjs.org/docs/dom-elements.html#style
          darkIconStyle: {
            marginLeft: "0px",
          },
          lightIconStyle: {
            marginLeft: "0px",
          },
        },
      },
      // footer: {
      //     style: 'dark',
      //     links: [
      //         {
      //             title: 'Community',
      //             items: [
      //                 {
      //                     label: 'Stack Overflow',
      //                     href: 'https://stackoverflow.com/search?q=renative',
      //                 },
      //                 {
      //                     label: 'Discussions',
      //                     href: 'https://github.com/renative-org/renative/discussions',
      //                 },
      //                 {
      //                     label: 'Twitter',
      //                     href: 'https://twitter.com/renative',
      //                 },
      //             ],
      //         },
      //         {
      //             title: 'More',
      //             items: [
      //                 {
      //                     label: 'GitHub',
      //                     href: 'https://github.com/renative-org/renative',
      //                 },
      //             ],
      //         },
      //     ],
      //     copyright: `Copyright © ${new Date().getFullYear()} ReNative Org. Built with Docusaurus.`,
      // },
      image: "img/logo.svg",
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        defaultLanguage: "javascript",
      },
    }),
};

module.exports = config;
