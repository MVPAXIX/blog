// @ts-check
import { themes as prismThemes } from 'prism-react-renderer';
import * as dotenv from 'dotenv';

dotenv.config();

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Zemenay Blog',
  tagline: 'Hire Top 1% Remote Employees Worldwide',
  favicon: '/img/logo.png',

  future: {
    v4: true,
  },

  url: 'https://www.zemenay.com',
  // Served same-origin under /blog (behind the main-site reverse proxy) so the
  // marketing nav/footer "Blog" link resolves to /blog without sub-routing.
  baseUrl: '/blog/',
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
        title: 'Zemenay',
        logo: {
          alt: 'Zemenay Logo',
          src: '/img/logo.png',
          href: '/',
        },
        items: [
          {
            href: 'https://www.zemenay.com/recruitment',
            label: 'How It Works',
            position: 'right',
          },
          {
            href: 'https://www.zemenay.com/pricing',
            label: 'Pricing',
            position: 'right',
          },
          {
            href: 'https://www.zemenay.com/',
            label: 'Home',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Zemenay',
            items: [
              {
                html: '<p style="color:#ffffff; opacity:0.6; font-size:0.875rem;">Recruit, hire, and pay remote employees worldwide with Zemenay. Access top 1% of global talent and manage onboarding, payroll, and compliance easily.</p>'
              }
            ]
          },
          {
            title: 'Product',
            items: [
              { label: 'International Recruitment', href: 'https://www.zemenay.com/recruitment' },
              { label: 'Pricing', href: 'https://www.zemenay.com/pricing' },
              { label: 'Comparison', href: 'https://www.zemenay.com/competitor-comparison' },
            ],
          },
          {
            title: 'Resources',
            items: [
              { label: 'Blog', href: '/' },
              { label: 'Payroll Calculator', href: 'https://www.zemenay.com/payroll-calculator' },
            ],
          },
          {
            title: 'Legal',
            items: [
              { label: 'Terms of Service', href: 'https://www.zemenay.com/terms-and-conditions' },
              { label: 'Privacy Policy', href: 'https://www.zemenay.com/privacy-policy' },
            ],
          },
        ],
        copyright: `© ${new Date().getFullYear()} Zemenay. All Rights Reserved`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
