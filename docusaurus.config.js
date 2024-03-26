// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

const math = require('remark-math');
const katex = require('rehype-katex');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'G4FastSim',
  tagline: 'Machine Learning for Fast Shower Simulation in High Energy Physics',
  url: 'https://g4fastsim.web.cern.ch',
  baseUrl: '/',
  onBrokenLinks: 'ignore', 
  onBrokenMarkdownLinks: 'warn', 
  favicon: 'img/favicon.ico',
  organizationName: 'CERN', 
  projectName: 'G4FastSim',
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://gitlab.cern.ch/fastsim/fast-sim-website',
	  remarkPlugins: [math],
	  rehypePlugins: [katex],
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
stylesheets: [
  {
    href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
    type: 'text/css',
    integrity:
      'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
    crossorigin: 'anonymous',
  },
],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'g4fastsim',
        logo: {
          alt: 'Logo',
          src: 'img/logo.png', 
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Full vs fast simulation',
          },
          {
            type: 'doc',
            docId: 'ML_Model/workflow',
            position: 'left',
            label: 'ML fast simulation',
          },
          {
            type: 'doc',
            docId: 'G4_Inference/from_training_to_inference',
            position: 'left',
            label: 'Inference within Geant4',
          },
          {
            type: 'doc',
            docId: 'G4FastSim/Step00_overview',
            position: 'left',
            label: 'How to use?',
          },
          /** {to: '/blog', label: 'Blog', position: 'left'}, */
          /**{to: '/help', label: 'Help', position: 'left'},  to add new item */
          {
            href: 'https://gitlab.cern.ch/fastsim/fast-sim-website',
            label: 'Webpage GitLab',
            position: 'right',
          },
          {
            href: 'https://gitlab.cern.ch/fastsim',
            label: 'FastSim repositories on GitLab',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Introduction',
                to: '/docs/intro',
              },
              {
                label: 'ML fast simulation',
                to: '/docs/ML_Model/workflow',
              },
              {
                label: 'Inference within Geant4',
                to: '/docs/G4_Inference/from_training_to_inference',
              },
              {
                label: 'How to use? Tutorial',
                to: '/docs/G4FastSim/Step00_overview',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Indico meetings',
                href: 'https://indico.cern.ch/category/13860/',
              },
              {
                label: 'Mattermost',
                href: 'https://mattermost.web.cern.ch/fastsim/channels/town-square',
              },
              {
                label: 'CaloChallenge',
                  href: 'https://calochallenge.github.io/homepage/',
              },
            ],
          },
          {
            title: 'Useful links',
            items: [
              /** {
                label: 'Blog',
                to: '/blog',
              },*/
              {
                label: 'Webpage GitLab',
                href: 'https://gitlab.cern.ch/fastsim/fast-sim-website',
              }, 
              {
                label: 'GitLab Repositories',
                href: 'https://gitlab.cern.ch/fastsim',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()}, CERN`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
