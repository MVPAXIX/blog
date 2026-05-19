import React from 'react';
import Link from '@docusaurus/Link';
import styles from './Footer.module.css';
import { SvgMask } from '../../components/SvgMask';

const FOOTER_LOGO = 'https://framerusercontent.com/assets/xN9LJ3uE95HphIib71XA6fAcus.svg';
const TOP_CURVE = 'https://framerusercontent.com/assets/8OubjvrkfmdSPi47CUoAjCIb8.png';
const REFERRAL_GIFT = 'https://framerusercontent.com/assets/MSgWu9DJWNviZTUCfcHdjzuqFM.svg';
const REFERRAL_ARROW = 'https://framerusercontent.com/assets/ZNPDZXdtBubJf1jU8z1j2HJKnI.svg';
const SOCIAL_YOUTUBE = 'https://framerusercontent.com/assets/ZptX4pGvodtrodUYPQhTacTkllc.svg';
const SOCIAL_INSTAGRAM = 'https://framerusercontent.com/assets/kpXkm0lM5V7RsGzBNWphhqXdKKM.svg';
const SOCIAL_LINKEDIN = 'https://framerusercontent.com/assets/vPIACnb09ujqJ0KsGtvhpVKC6Y.svg';
const SOCIAL_FACEBOOK = 'https://framerusercontent.com/assets/wBqNfzU558UwoMjlWvU21NXc5c.svg';
const BG_LOGO = 'https://framerusercontent.com/assets/B1DBfTYW9BvQj1xc6AVsuOZsYlw.svg';

// All non-blog routes live on the parent marketing site at
// globaltize.com/<page>. The blog deploys at a different origin, so we
// use absolute URLs regardless of baseUrl / hosting topology.
const MAIN = (p) => `https://www.globaltize.com${p}`;

const QUICK_LINKS = [
    { label: 'Home', href: MAIN('/') },
    { label: 'International Recruitment', href: MAIN('/recruitment') },
    { label: 'United States Recruitment', href: MAIN('/recruitment-united-states-canada') },
    { label: 'Contractor Payments & EOR', href: MAIN('/contractor-payments-and-eor') },
    { label: 'Regions Guide', href: MAIN('/regions-guide') },
    { label: 'Testimonials', href: MAIN('/testimonials') },
    { label: 'Pricing', href: MAIN('/pricing') },
];

const RESOURCES = [
    { label: 'Refer & Earn', href: MAIN('/refer-and-earn') },
    { label: 'Popular Roles', href: MAIN('/popular-roles') },
    { label: 'Industries', href: MAIN('/industries') },
    { label: 'Savings Calculator', href: MAIN('/payroll-calculator') },
    { label: 'Compare Globaltize', href: MAIN('/competitor-comparison') },
    { label: 'Youtube Content', href: 'https://www.youtube.com/@Globaltize', external: true },
    // Blog IS this site — link to blog home via baseUrl.
    { label: 'Blogs', href: '/' },
];

const JOIN_TEAM = [
    { label: 'Careers', href: MAIN('/careers') },
    { label: 'Past Hires Wall of Love', href: MAIN('/careers/candidate-wall-of-love') },
];

function FooterLink({ link }) {
    if (link.external) {
        return (
            <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.footerLink}
            >
                {link.label}
            </a>
        );
    }
    return (
        <Link to={link.href} className={styles.footerLink}>
            {link.label}
        </Link>
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
    const scrollToTop = () => {
        if (typeof window !== 'undefined') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    return (
        <div className={styles.wrapper}>
            <button
                type="button"
                className={styles.topCurve}
                onClick={scrollToTop}
                aria-label="Scroll to top"
            >
                <img src={TOP_CURVE} alt="" />
            </button>

            <footer className={styles.footer}>
                <div className={styles.content}>
                    <div className={styles.grid}>
                        <div className={styles.brand}>
                            <Link to="https://www.globaltize.com/" className={styles.logoLink}>
                                <SvgMask src="https://framerusercontent.com/assets/xN9LJ3uE95HphIib71XA6fAcus.svg" color="var(--color-white)" className={styles.logoImg} />
                            </Link>
                            <p className={styles.tagline}>
                                Your Complete Solution to Recruit, Hire, &amp; Pay Remote Employees
                                Anywhere in the World.
                            </p>
                            <Link to="https://www.globaltize.com/refer-and-earn" className={styles.referralBtn}>
                                <SvgMask src="https://framerusercontent.com/assets/MSgWu9DJWNviZTUCfcHdjzuqFM.svg" color="var(--color-gold)" className={styles.referralIcon} />
                                <span>Referral Program</span>
                                <SvgMask src="https://framerusercontent.com/assets/ZNPDZXdtBubJf1jU8z1j2HJKnI.svg" color="var(--color-gold)" className={styles.referralIcon} />
                            </Link>
                            <div className={styles.socials}>
                                <a
                                    href="https://www.youtube.com/@Globaltize"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="YouTube"
                                    className={styles.socialLink}
                                >
                                    <SvgMask src="https://framerusercontent.com/assets/ZptX4pGvodtrodUYPQhTacTkllc.svg" color="var(--color-white)" className={`${styles.socialIcon} ${styles.socialIconYoutube}`} />
                                </a>
                                <a
                                    href="https://www.instagram.com/globaltize/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Instagram"
                                    className={styles.socialLink}
                                >
                                    <SvgMask src="https://framerusercontent.com/assets/kpXkm0lM5V7RsGzBNWphhqXdKKM.svg" color="var(--color-white)" className={styles.socialIcon} />
                                </a>
                                <a
                                    href="https://www.linkedin.com/company/globaltize/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="LinkedIn"
                                    className={styles.socialLink}
                                >
                                    <SvgMask src="https://framerusercontent.com/assets/vPIACnb09ujqJ0KsGtvhpVKC6Y.svg" color="var(--color-white)" className={styles.socialIcon} />
                                </a>
                                <a
                                    href="https://www.facebook.com/p/Globaltize-61560837877574/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Facebook"
                                    className={styles.socialLink}
                                >
                                    <SvgMask src="https://framerusercontent.com/assets/wBqNfzU558UwoMjlWvU21NXc5c.svg" color="var(--color-white)" className={styles.socialIcon} />
                                </a>
                            </div>
                        </div>

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
                            <a href="mailto:info@globaltize.com" className={styles.contactRow}>
                                <MailIcon />
                                <span>info@globaltize.com</span>
                            </a>
                            <div className={styles.contactRow}>
                                <PinIcon />
                                <span>3400 Cottage Way STE G2 Sacramento, CA 95825</span>
                            </div>
                        </div>
                    </div>

                    <div className={styles.divider} />

                    <div className={styles.bottom}>
                        <p className={styles.copyright}>&copy; Copyright 2026. Globaltize.</p>
                        <div className={styles.legalRow}>
                            <Link to="https://www.globaltize.com/terms-and-conditions">Terms &amp; Conditions</Link>
                            <span className={styles.legalDot} aria-hidden="true" />
                            <Link to="https://www.globaltize.com/privacy-policy">Privacy Policy</Link>
                            <span className={styles.legalDot} aria-hidden="true" />
                            <Link to="https://www.globaltize.com/ai-and-llm-info">AI and LLM Info</Link>
                        </div>
                    </div>
                </div>

                <SvgMask src="https://framerusercontent.com/assets/B1DBfTYW9BvQj1xc6AVsuOZsYlw.svg" color="var(--color-mid-teal)" className={styles.bgLogo} aria-hidden="true" />
            </footer>
        </div>
    );
}
