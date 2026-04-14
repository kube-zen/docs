import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Zen Mesh Docs',
  tagline: 'Secure webhook delivery to private networks',
  favicon: 'img/favicon.ico',

  url: 'https://docs.zen-mesh.io',
  baseUrl: '/',

  organizationName: 'zenmesh',
  projectName: 'docs',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          id: 'default',
          path: 'docs',
          routeBasePath: 'docs',
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/zenmesh/docs/tree/main/',
          breadcrumbs: true,
          showLastUpdateAuthor: false,
          showLastUpdateTime: true,
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'zen-lock',
        path: 'docs-zen-lock',
        routeBasePath: 'zen-lock',
        sidebarPath: './sidebars-zen-lock.ts',
        editUrl: 'https://github.com/zenmesh/docs/tree/main/',
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'zen-gc',
        path: 'docs-zen-gc',
        routeBasePath: 'zen-gc',
        sidebarPath: './sidebars-zen-gc.ts',
        editUrl: 'https://github.com/zenmesh/docs/tree/main/',
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'zen-brain',
        path: 'docs-zen-brain',
        routeBasePath: 'zen-brain',
        sidebarPath: './sidebars-zen-brain.ts',
        editUrl: 'https://github.com/zenmesh/docs/tree/main/',
      },
    ],
  ],

  themeConfig: {
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Zen Mesh',
      logo: {
        alt: 'Zen Mesh',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'defaultSidebar',
          position: 'left',
          label: 'zen-mesh',
        },
        {
          type: 'docSidebar',
          sidebarId: 'zenLockSidebar',
          position: 'left',
          label: 'zen-lock',
          docsPluginId: 'zen-lock',
        },
        {
          type: 'docSidebar',
          sidebarId: 'zenGcSidebar',
          position: 'left',
          label: 'zen-gc',
          docsPluginId: 'zen-gc',
        },
        {
          type: 'docSidebar',
          sidebarId: 'zenBrainSidebar',
          position: 'left',
          label: 'zen-brain',
          docsPluginId: 'zen-brain',
        },
        {
          href: 'https://zen-mesh.io',
          label: 'zen-mesh.io',
          position: 'right',
        },
        {
          href: 'https://github.com/zenmesh',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Product',
          items: [
            {
              label: 'Website',
              href: 'https://zen-mesh.io',
            },
            {
              label: 'Pricing',
              href: 'https://zen-mesh.io/pricing',
            },
            {
              label: 'Security',
              href: 'https://zen-mesh.io/security',
            },
          ],
        },
        {
          title: 'Open Source',
          items: [
            {
              label: 'Helm Charts',
              href: 'https://github.com/zenmesh/helm-charts',
            },
            {
              label: 'zen-gc',
              href: 'https://github.com/zenmesh/zen-gc',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/zenmesh',
            },
            {
              label: 'Discord',
              href: 'https://discord.com/invite/clawd',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Zen Mesh Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['bash', 'go', 'yaml', 'json', 'hcl'],
    },
    algolia: {
      appId: 'YOUR_APP_ID',
      apiKey: 'YOUR_SEARCH_API_KEY',
      indexName: 'zen-mesh-docs',
      contextualSearch: true,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
