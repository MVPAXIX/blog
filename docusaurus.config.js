// @ts-check
import { themes as prismThemes } from 'prism-react-renderer';
import * as dotenv from 'dotenv';

dotenv.config();

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Globaltize Blog',
  tagline: 'Hire Top 1% Remote Employees Worldwide',
  favicon: 'https://framerusercontent.com/assets/zaEAI5CGIu5xOSut3Ea5t5HE.png',

  future: {
    v4: true,
  },

  url: 'https://www.globaltize.com',
  baseUrl: '/',
  trailingSlash: false,

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: false,
        blog: {
          routeBasePath: '/',
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Globaltize',
        logo: {
          alt: 'Globaltize Logo',
          src: 'https://framerusercontent.com/assets/lWECWOq0Fn4mo6YfodUyQN2uBc.svg',
          href: '/',
        },
        items: [
          {
            href: 'https://www.globaltize.com/recruitment',
            label: 'How It Works',
            position: 'right',
          },
          {
            href: 'https://www.globaltize.com/pricing',
            label: 'Pricing',
            position: 'right',
          },
          {
            href: 'https://www.globaltize.com/',
            label: 'Home',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Globaltize',
            items: [
              {
                html: '<p style="color:#ffffff; opacity:0.6; font-size:0.875rem;">Recruit, hire, and pay remote employees worldwide with Globaltize. Access top 1% of global talent and manage onboarding, payroll, and compliance easily.</p>'
              }
            ]
          },
          {
            title: 'Product',
            items: [
              { label: 'International Recruitment', href: 'https://www.globaltize.com/recruitment' },
              { label: 'Pricing', href: 'https://www.globaltize.com/pricing' },
              { label: 'Comparison', href: 'https://www.globaltize.com/competitor-comparison' },
            ],
          },
          {
            title: 'Resources',
            items: [
              { label: 'Blog', href: '/' },
              { label: 'Payroll Calculator', href: 'https://www.globaltize.com/payroll-calculator' },
            ],
          },
          {
            title: 'Legal',
            items: [
              { label: 'Terms of Service', href: 'https://www.globaltize.com/terms-and-conditions' },
              { label: 'Privacy Policy', href: 'https://www.globaltize.com/privacy-policy' },
            ],
          },
        ],
        copyright: `© ${new Date().getFullYear()} Globaltize. All Rights Reserved`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
