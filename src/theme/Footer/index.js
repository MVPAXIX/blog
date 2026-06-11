import React from 'react';
import { useBaseUrlUtils } from '@docusaurus/useBaseUrl';
import styles from './Footer.module.css';

const TOP_CURVE = '/framer-assets/8OubjvrkfmdSPi47CUoAjCIb8.png';
const BG_LOGO = '/logo/zemenay_logo.svg';

// The blog is reverse-proxied under the main Next.js site at /blog (see
// globaltize-next/next.config.mjs rewrites), so marketing pages are reached
// with root-relative URLs on the same domain, rendered as plain <a> tags.
// Mirrors src/components/Footer/Footer.js on the main site.
const QUICK_LINKS = [
    { label: 'Home', href: '/' },
    { label: 'International Recruitment', href: '/recruitment' },
    { label: 'Regions Guide', href: '/regions-guide' },
    { label: 'Testimonials', href: '/testimonials' },
    { label: 'Pricing', href: '/pricing' },
];

const RESOURCES = [
    { label: 'Popular Roles', href: '/popular-roles' },
    { label: 'Youtube Content', href: 'https://www.youtube.com/@Zemenay', external: true },
];

const JOIN_TEAM = [
    { label: 'Careers', href: '/careers' },
    { label: 'Past Hires Wall of Love', href: '/careers/wall-of-love' },
];

function FooterLink({ link }) {
    return (
        <a
            href={link.href}
            className={styles.footerLink}
            {...(link.external
                ? { target: '_blank', rel: 'noopener noreferrer' }
                : {})}
        >
            {link.label}
        </a>
    );
}

function MailIcon() {
    return (
        <svg
            className={styles.contactIcon}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 19 15"
            fill="none"
            aria-hidden="true"
        >
            <rect x="1" y="1" width="17" height="13" rx="2" stroke="currentColor" strokeWidth="1.5" />
            <path d="M1.5 2L9.5 8L17.5 2" stroke="currentColor" strokeWidth="1.5" />
        </svg>
    );
}

function PinIcon() {
    return (
        <svg
            className={styles.contactIcon}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 20"
            fill="none"
            aria-hidden="true"
        >
            <path
                d="M8 1c-3.5 0-6 2.5-6 6 0 4.5 6 12 6 12s6-7.5 6-12c0-3.5-2.5-6-6-6z"
                stroke="currentColor"
                strokeWidth="1.5"
            />
            <circle cx="8" cy="7" r="2.2" stroke="currentColor" strokeWidth="1.5" />
        </svg>
    );
}

export default function Footer() {
    const { withBaseUrl } = useBaseUrlUtils();

    const scrollToTop = () => {
        if (typeof window !== 'undefined') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    return (
        <div className={`${styles.wrapper} footer`}>
            <button
                type="button"
                className={styles.topCurve}
                onClick={scrollToTop}
                aria-label="Scroll to top"
            >
                <img src={withBaseUrl(TOP_CURVE)} alt="" />
            </button>

            <footer className={styles.footer}>
                <img
                    src={withBaseUrl(BG_LOGO)}
                    alt=""
                    className={styles.bgLogo}
                    aria-hidden="true"
                />
                <div className={styles.content}>
                    <div className={styles.grid}>
                        <div className={styles.brand}>
                            <div className={styles.logo}>
                                <img
                                    src={withBaseUrl('/logo/logo.svg')}
                                    alt="Zemenay Logo"
                                    className={styles.logoImg}
                                />
                            </div>
                            <p className={styles.tagline}>
                                Your Complete Solution to Recruit, Hire, &amp; Pay Remote Employees
                                Anywhere in the World.
                            </p>
                            <div className={styles.socials}>

                                <a
                                    href="https://www.instagram.com/zemenay/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Instagram"
                                    className={styles.socialLink}
                                >
                                    <img src={withBaseUrl('/framer-assets/kpXkm0lM5V7RsGzBNWphhqXdKKM.svg')} alt="" className={styles.socialIcon} />
                                </a>
                                <a
                                    href="https://www.linkedin.com/company/zemenay/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="LinkedIn"
                                    className={styles.socialLink}
                                >
                                    <img src={withBaseUrl('/framer-assets/vPIACnb09ujqJ0KsGtvhpVKC6Y.svg')} alt="" className={styles.socialIcon} />
                                </a>

                            </div>
                        </div>

                        <div className={styles.linksGroup}>
                            <div className={styles.column}>
                                <h4 className={styles.columnTitle}>Quick Links</h4>
                                {QUICK_LINKS.map((link) => (
                                    <FooterLink key={link.href} link={link} />
                                ))}
                            </div>

                            <div className={styles.column}>
                                <h4 className={styles.columnTitle}>Resources</h4>
                                {RESOURCES.map((link) => (
                                    <FooterLink key={link.href} link={link} />
                                ))}
                            </div>

                            <div className={styles.column}>
                                <h4 className={styles.columnTitle}>Join The Team</h4>
                                {JOIN_TEAM.map((link) => (
                                    <FooterLink key={link.href} link={link} />
                                ))}
                            </div>

                            <div className={styles.column}>
                                <h4 className={styles.columnTitle}>Get In Touch</h4>
                                <a href="mailto:zemenaytechsolutions@gmail.com" className={styles.contactRow}>
                                    <MailIcon />
                                    <span>zemenaytechsolutions@gmail.com</span>
                                </a>
                                <div className={styles.contactRow}>
                                    <PinIcon />
                                    <span>Bole, Adiss Ababa, Ethiopia</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={styles.divider} />

                    <div className={styles.bottom}>
                        <div className={styles.bottomLeft}>
                            <p className={styles.copyright}>&copy; Copyright 2026. Zemenay.</p>
                            <div className={styles.legalRow}>
                                <a href="#">Terms &amp; Conditions</a>
                                <span className={styles.legalDot} aria-hidden="true" />
                                <a href="#">Privacy Policy</a>
                                <span className={styles.legalDot} aria-hidden="true" />
                                <a href="#">AI and LLM Info</a>
                            </div>
                        </div>
                    </div>
                </div>

            </footer>
        </div>
    );
}
