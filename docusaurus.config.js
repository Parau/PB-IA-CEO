// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

function jsDateToExcelDate(jsDate) {
  const excelEpoch = new Date(1899, 11, 31);
  
  // Calculate the difference in days
  let excelDate = Math.floor((jsDate - excelEpoch) / (24 * 60 * 60 * 1000));

  return excelDate;
}

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'IA Estratégica',
  tagline: 'Guia essencial para CEOs e líderes.',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://criatividade.digital',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/PB-IA-CEO/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'criatividade-digital', // Usually your GitHub org/user name.
  projectName: 'PB-IA-CEO', // Usually your repo name.

  customFields: {
    lastBuild: jsDateToExcelDate(new Date()), // Armazena o número Excel da data atual
    bookCode: 'CEO',
  },

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'pt',
    locales: ['pt'],
  },

  plugins: [
    [
      "docusaurus-plugin-dotenv",
      {
        path: "./.env.local",
        systemvars: true,
      },
    ],
  ],
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          //editUrl:
          //  'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        /*blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          //editUrl:
          //  'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },*/
        theme: {
          customCss: './src/css/custom.css',
        },
        gtag: {
          trackingID: 'G-LRCJ5PB9ZW',
          anonymizeIP: true,
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'IA Estratégica',
        logo: {
          alt: 'CRIATIVIDADE.digital',
          src: 'img/chess.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Conteúdo',
          },
          /*{to: '/blog', label: 'Blog', position: 'left'}, */
          {
            type: 'custom-Login', 
            position: "right",
            itemProp: 44,
            anotherProp: "xyz"
        },        
          //{
          //  href: 'https://github.com/facebook/docusaurus',
          //  label: 'GitHub',
          //  position: 'right',
          //},
        ],
      },
      footer: {
        style: 'dark',
        /*
        links: [
          { 
            title: 'Docs',
            items: [
              {
                label: 'Guia',
                to: '/docs/intro',
              },
            ],
          }, 
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/docusaurus',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/docusaurus',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'CRIATIVIDADE.digital',
                to: 'https://criatividade.digital',
              },
            ],
          },
        ], */
        copyright: `Copyright © ${new Date().getFullYear()} CRIATIVIDADE.digital, Editora eTrix.<br /> <small>Build: ${new Date()}</small>`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
