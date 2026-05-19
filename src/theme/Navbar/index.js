import React, { useState, useEffect, useRef } from 'react';
import Link from '@docusaurus/Link';
import { useLocation } from '@docusaurus/router';
import styles from './Navbar.module.css';
import { SvgMask } from '../../components/SvgMask';

const LOGO = 'https://framerusercontent.com/assets/lWECWOq0Fn4mo6YfodUyQN2uBc.svg';
const SPARKLE = 'https://framerusercontent.com/assets/Gr828vetCecyI5E5uMHOwGF70c.svg';
const ARROW = 'https://framerusercontent.com/assets/0cfN7HzjLoESazs4gVW87az7BE.svg';

// These links point to the parent marketing site (globaltize.com/<page>),
// NOT this blog. The blog deploys at a different origin than the main
// site, so absolute URLs are the only thing that works regardless of
// baseUrl or deployment topology.
const MAIN = (p) => `https://www.globaltize.com${p}`;

const NAV_LINKS = [
    {
        label: 'How It Works',
        dropdown: true,
        items: [
            { label: 'International Recruitment', href: MAIN('/recruitment') },
            { label: 'US & Canada Recruitment', href: MAIN('/recruitment-united-states-canada') },
            { label: 'Contractor Payments & EOR', href: MAIN('/contractor-payments-and-eor') },
        ],
    },
    {
        label: 'Regions',
        dropdown: true,
        items: [
            { label: 'Southeast Asia', href: MAIN('/regions-guide/southeast-asia') },
            { label: 'Latin America', href: MAIN('/regions-guide/latin-america') },
            { label: 'South Africa', href: MAIN('/regions-guide/south-africa') },
            { label: 'US & Canada', href: MAIN('/regions-guide/us-canada') },
        ],
    },
    { label: 'Testimonials', href: MAIN('/testimonials') },
    {
        label: 'Resources',
        dropdown: true,
        items: [
            // The blog IS this site — link to blog home, which baseUrl already
            // resolves to /blog/.
            { label: 'Blog', href: '/' },
            { label: 'Popular Roles', href: MAIN('/popular-roles') },
            { label: 'Industries', href: MAIN('/industries') },
            { label: 'Payroll Calculator', href: MAIN('/payroll-calculator') },
            { label: 'Refer & Earn', href: MAIN('/refer-and-earn') },
            { label: 'Compare Globaltize', href: MAIN('/competitor-comparison') },
        ],
    },
    { label: 'Pricing', href: MAIN('/pricing') },
];

function Caret({ className }) {
    return (
        <svg
            className={className}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            aria-hidden="true"
        >
            <path fill="currentColor" d="m11.998 17 7-8h-14z" />
        </svg>
    );
}

function FindJobArrow() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            aria-hidden="true"
        >
            <path
                d="M 8 0 L 6.59 1.41 L 12.17 7 L 0 7 L 0 9 L 12.17 9 L 6.59 14.59 L 8 16 L 16 8 Z"
                fill="currentColor"
                transform="translate(4 4)"
            />
        </svg>
    );
}

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);
    const location = useLocation();
    const dropdownRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setMobileOpen(false);
        setActiveDropdown(null);
    }, [location.pathname]);

    useEffect(() => {
        const handleClick = (e) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
                setActiveDropdown(null);
            }
        };
        document.addEventListener('mousedown', handleClick);
        return () => document.removeEventListener('mousedown', handleClick);
    }, []);

    const toggleDropdown = (label) => {
        setActiveDropdown(activeDropdown === label ? null : label);
    };

    return (
        <header className={styles.header}>
            <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
                <Link to="/" className={styles.logo} aria-label="Globaltize home">
                    <img src={`${LOGO}?width=157&height=28`} alt="Globaltize" />
                </Link>

                <div className={styles.links} ref={dropdownRef}>
                    {NAV_LINKS.map((item) =>
                        item.dropdown ? (
                            <div
                                key={item.label}
                                className={styles.dropdownWrapper}
                                onMouseEnter={() => setActiveDropdown(item.label)}
                                onMouseLeave={() => setActiveDropdown(null)}
                            >
                                <button
                                    type="button"
                                    className={styles.navLink}
                                    onClick={() => toggleDropdown(item.label)}
                                    aria-expanded={activeDropdown === item.label}
                                >
                                    {item.label}
                                    <Caret
                                        className={`${styles.caret} ${activeDropdown === item.label ? styles.caretOpen : ''}`}
                                    />
                                </button>
                                {activeDropdown === item.label && (
                                    <div className={styles.dropdown}>
                                        {item.items.map((sub) => (
                                            <Link
                                                key={sub.href}
                                                to={sub.href}
                                                className={styles.dropdownItem}
                                            >
                                                {sub.label}
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ) : (
                            <Link key={item.label} to={item.href} className={styles.navLink}>
                                {item.label}
                            </Link>
                        )
                    )}
                </div>

                <div className={styles.ctas}>
                    <Link to="https://www.globaltize.com/careers" className={styles.findJob}>
                        FIND A JOB
                        <FindJobArrow />
                    </Link>
                    <Link
                        href="https://app.iclosed.io/e/globaltize/hiring-strategy-session-website"
                        className={styles.startHiring}
                    >
                        <SvgMask src="https://framerusercontent.com/assets/Gr828vetCecyI5E5uMHOwGF70c.svg" color="var(--color-white)" className={styles.ctaIcon} style={{ width: 16, height: 16 }} />
                        <span>START HIRING</span>
                        <SvgMask src="https://framerusercontent.com/assets/0cfN7HzjLoESazs4gVW87az7BE.svg" color="var(--color-white)" className={styles.ctaIcon} style={{ width: 17, height: 16 }} />
                    </Link>
                </div>

                <button
                    type="button"
                    className={`${styles.hamburger} ${mobileOpen ? styles.hamburgerOpen : ''}`}
                    onClick={() => setMobileOpen(!mobileOpen)}
                    aria-label="Toggle menu"
                >
                    <span />
                    <span />
                    <span />
                </button>
            </nav>

            {mobileOpen && (
                <div className={styles.mobileMenu}>
                    {NAV_LINKS.map((item) =>
                        item.dropdown ? (
                            <div key={item.label}>
                                <button
                                    type="button"
                                    className={styles.mobileNavLink}
                                    onClick={() => toggleDropdown(item.label)}
                                >
                                    {item.label}
                                    <Caret
                                        className={`${styles.caret} ${activeDropdown === item.label ? styles.caretOpen : ''}`}
                                    />
                                </button>
                                {activeDropdown === item.label && (
                                    <div className={styles.mobileSubMenu}>
                                        {item.items.map((sub) => (
                                            <Link
                                                key={sub.href}
                                                to={sub.href}
                                                className={styles.mobileSubLink}
                                            >
                                                {sub.label}
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ) : (
                            <Link
                                key={item.label}
                                href={item.href}
                                className={styles.mobileNavLink}
                            >
                                {item.label}
                            </Link>
                        )
                    )}
                    <div className={styles.mobileCtas}>
                        <Link to="https://www.globaltize.com/careers" className={styles.findJob}>
                            FIND A JOB
                            <FindJobArrow />
                        </Link>
                        <Link
                            href="https://app.iclosed.io/e/globaltize/hiring-strategy-session-website"
                            className={styles.startHiring}
                        >
                            <SvgMask src="https://framerusercontent.com/assets/Gr828vetCecyI5E5uMHOwGF70c.svg" color="var(--color-white)" className={styles.ctaIcon} style={{ width: 16, height: 16 }} />
                            <span>START HIRING</span>
                            <SvgMask src="https://framerusercontent.com/assets/0cfN7HzjLoESazs4gVW87az7BE.svg" color="var(--color-white)" className={styles.ctaIcon} style={{ width: 17, height: 16 }} />
                        </Link>
                    </div>
                </div>
            )}
        </header>
    );
}
