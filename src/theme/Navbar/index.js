import React, { useState, useEffect, useRef } from 'react';
import Link from '@docusaurus/Link';
import { useLocation } from '@docusaurus/router';
import { useBaseUrlUtils } from '@docusaurus/useBaseUrl';
import styles from './Navbar.module.css';
import { SvgMask } from '../../components/SvgMask';

const LOGO = '/logo/logo.svg';

// The blog is reverse-proxied under the main Next.js site at /blog (see
// globaltize-next/next.config.mjs rewrites), so marketing pages are reached
// with root-relative URLs on the same domain. They must render as plain <a>
// tags (full page load) — react-router has no routes for them.
// Mirrors src/components/Navbar/Navbar.js on the main site (same structure,
// same icons); `local: true` marks pages served by the blog itself.
const NAV_LINKS = [
    {
        label: 'How It Works',
        dropdown: true,
        items: [
            { label: 'International Recruitment', href: '/recruitment', iconSrc: '/framer-assets/intl.svg' },
            { label: 'Contractor Payments & EOR', href: '/contractor-payments-and-eor', iconSrc: '/framer-assets/payrol.png' },
        ],
    },
    { label: 'Regions Guide', href: '/regions-guide' },
    { label: 'Testimonials', href: '/testimonials' },
    {
        label: 'Resources',
        dropdown: true,
        items: [
            { label: 'Blog', href: '/', local: true, iconSrc: '/framer-assets/blog_blue.svg' },
            { label: 'Popular Roles', href: '/popular-roles', iconSrc: '/framer-assets/popularroles_blue.svg' },
            { label: 'Hire By Tech Stack', href: '/hire-by-tech-stack', iconSrc: '/framer-assets/hireblue.svg' },
        ],
    },
    { label: 'Pricing', href: '/pricing' },
];

// Same booking destination as the main site (src/lib/booking.js).
const GOOGLE_BOOKING_URL =
    'https://calendar.google.com/calendar/appointments/schedules/REPLACE_WITH_REAL_SCHEDULE_ID';

// Filled-triangle caret matching the original Framer SVG (viewBox 24x24,
// path "m11.998 17 7-8h-14z"). Drawn inline so it inherits color.
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

// The small right-arrow icon on the FIND A JOB button — reuses the exact
// SVG path the Framer source masks in (M 8 0 L 6.59 1.41 ... shape).
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
    const [scrollProgress, setScrollProgress] = useState(0);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);
    const location = useLocation();
    const dropdownRef = useRef(null);
    const { withBaseUrl } = useBaseUrlUtils();

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            setScrolled(scrollTop > 20);
            const max =
                document.documentElement.scrollHeight - window.innerHeight;
            setScrollProgress(max > 0 ? Math.min(scrollTop / max, 1) : 0);
        };
        handleScroll();
        window.addEventListener('scroll', handleScroll, { passive: true });
        window.addEventListener('resize', handleScroll, { passive: true });
        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleScroll);
        };
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

    // Local blog pages keep client-side routing; marketing pages do a full
    // navigation so the main-site proxy serves them.
    const renderItemLink = (item, className, onClick) =>
        item.local ? (
            <Link
                key={item.label}
                to={withBaseUrl(item.href)}
                className={className}
                onClick={onClick}
            >
                {item.iconSrc && (
                    <span className={styles.dropdownIcon} aria-hidden="true">
                        <img src={withBaseUrl(item.iconSrc)} alt="" />
                    </span>
                )}
                <span>{item.label}</span>
            </Link>
        ) : (
            <a key={item.label} href={item.href} className={className} onClick={onClick}>
                {item.iconSrc && (
                    <span className={styles.dropdownIcon} aria-hidden="true">
                        <img src={withBaseUrl(item.iconSrc)} alt="" />
                    </span>
                )}
                <span>{item.label}</span>
            </a>
        );

    return (
        <header className={styles.header}>
            <nav className={`${styles.nav} navbar ${scrolled ? styles.scrolled : ''}`}>
                <span className={styles.progressTrack} aria-hidden="true">
                    <span
                        className={styles.progressBar}
                        style={{ transform: `scaleX(${scrollProgress})` }}
                    />
                </span>
                <Link to={withBaseUrl('/')} className={styles.logo} aria-label="Zemenay home">
                    <img src={withBaseUrl(LOGO)} alt="Zemenay" />
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
                                        {item.items.map((sub) =>
                                            renderItemLink(sub, styles.dropdownItem)
                                        )}
                                    </div>
                                )}
                            </div>
                        ) : (
                            <a key={item.label} href={item.href} className={styles.navLink}>
                                {item.label}
                            </a>
                        )
                    )}
                </div>

                <div className={styles.ctas}>
                    <a href="/careers" className={styles.findJob}>
                        FIND A JOB
                        <FindJobArrow />
                    </a>
                    <a
                        href={GOOGLE_BOOKING_URL}
                        className={styles.startHiring}
                    >
                        <SvgMask src={withBaseUrl('/framer-assets/tinted/Gr828vetCecyI5E5uMHOwGF70c.svg')} color="var(--color-white)" className={styles.ctaIcon} style={{ width: 16, height: 16 }} />
                        <span>FREE CONSULTATION</span>
                        <SvgMask src={withBaseUrl('/framer-assets/tinted/0cfN7HzjLoESazs4gVW87az7BE.svg')} color="var(--color-white)" className={styles.ctaIcon} style={{ width: 17, height: 16 }} />
                    </a>
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
                                        {item.items.map((sub) =>
                                            renderItemLink(sub, styles.mobileSubLink, () =>
                                                setMobileOpen(false)
                                            )
                                        )}
                                    </div>
                                )}
                            </div>
                        ) : (
                            <a
                                key={item.label}
                                href={item.href}
                                className={styles.mobileNavLink}
                                onClick={() => setMobileOpen(false)}
                            >
                                {item.label}
                            </a>
                        )
                    )}
                    <div className={styles.mobileCtas}>
                        <a href="/careers" className={styles.findJob}>
                            FIND A JOB
                            <FindJobArrow />
                        </a>
                        <a
                            href={GOOGLE_BOOKING_URL}
                            className={styles.startHiring}
                        >
                            <SvgMask src={withBaseUrl('/framer-assets/tinted/Gr828vetCecyI5E5uMHOwGF70c.svg')} color="var(--color-white)" className={styles.ctaIcon} style={{ width: 16, height: 16 }} />
                            <span>FREE CONSULTATION</span>
                            <SvgMask src={withBaseUrl('/framer-assets/tinted/0cfN7HzjLoESazs4gVW87az7BE.svg')} color="var(--color-white)" className={styles.ctaIcon} style={{ width: 17, height: 16 }} />
                        </a>
                    </div>
                </div>
            )}
        </header>
    );
}
