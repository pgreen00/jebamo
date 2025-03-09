import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Jebamo',
  tagline: 'Web Component Library',
  favicon: 'img/favicon.ico',
  url: 'https://jebamo.com',
  staticDirectories: ['public'],
  baseUrl: '/',
  plugins: [
    require.resolve('./plugins/jebamo-plugin/index.ts')
  ],
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
          sidebarPath: './sidebars.ts',
        },
        theme: {
          customCss: './src/styles.css',
        },
      } satisfies Preset.Options,
    ],
  ],
  themeConfig: {
    image: 'docusaurus-social-card.jpg',
    navbar: {
      title: 'Jebamo',
      logo: {
        alt: 'My Site Logo',
        src: 'logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'componentsSidebar',
          position: 'left',
          label: 'Components',
        },
        {
          label: 'Installation',
          position: 'left',
          type: 'doc',
          docId: 'installation',
        },
        {
          label: 'Style Tokens',
          position: 'left',
          type: 'docSidebar',
          sidebarId: 'stylesSidebar',
        },
        {
          label: 'Tutorials',
          position: 'left',
          type: 'docSidebar',
          sidebarId: 'tutorialsSidebar',
        },
        {
          type: 'doc',
          docId: 'changelog',
          label: 'Changelog',
          position: 'right',
        },
        {
          href: 'https://github.com/pgreen00/jebamo',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
