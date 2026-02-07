import React, { useState } from 'react';
import './Header.css';

export interface NavItem {
  label: string;
  href?: string;
  active?: boolean;
}

export interface HeaderProps {
  /** Logo element (SVG or image) */
  logo?: React.ReactNode;
  /** Navigation items */
  navItems?: NavItem[];
  /** Sign in button text */
  signInLabel?: string;
  /** Register button text */
  registerLabel?: string;
  /** Called when sign-in is clicked */
  onSignIn?: () => void;
  /** Called when register is clicked */
  onRegister?: () => void;
  /** Custom class name */
  className?: string;
}

const DefaultLogo = () => (
  <svg width="40" height="35" viewBox="0 0 40 35" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10 0C4.477 0 0 4.477 0 10s4.477 10 10 10h10V10C20 4.477 15.523 0 10 0z" fill="#F24E1E"/>
    <path d="M0 17.5C0 11.977 4.477 7.5 10 7.5h10v20H10C4.477 27.5 0 23.023 0 17.5z" fill="#A259FF"/>
    <path d="M0 25c0-5.523 4.477-10 10-10h10v10c0 5.523-4.477 10-10 10S0 30.523 0 25z" fill="#0ACF83"/>
    <path d="M20 0h10c5.523 0 10 4.477 10 10s-4.477 10-10 10H20V0z" fill="#FF7262"/>
    <path d="M40 17.5c0 5.523-4.477 10-10 10s-10-4.477-10-10 4.477-10 10-10 10 4.477 10 10z" fill="#1ABCFE"/>
  </svg>
);

const HamburgerIcon = () => (
  <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <path d="M3 5h14M3 10h14M3 15h14" />
  </svg>
);

const CloseIcon = () => (
  <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <path d="M5 5l10 10M15 5L5 15" />
  </svg>
);

/**
 * Header component
 *
 * Responsive header with navigation pills and auth buttons.
 * Desktop: horizontal nav with logo, pills, and auth.
 * Mobile: hamburger menu that opens to full-screen nav.
 */
export const Header: React.FC<HeaderProps> = ({
  logo,
  navItems = [
    { label: 'Products', active: true },
    { label: 'Solutions' },
    { label: 'Community' },
    { label: 'Resources' },
    { label: 'Pricing' },
    { label: 'Contact' },
  ],
  signInLabel = 'Sign in',
  registerLabel = 'Register',
  onSignIn,
  onRegister,
  className,
}) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const modeClass = mobileOpen
    ? 'sds-header--mobile-open'
    : 'sds-header--desktop';

  const classNames = ['sds-header', modeClass, className ?? '']
    .filter(Boolean)
    .join(' ');

  return (
    <header className={classNames}>
      <div className="sds-header__brand">
        <div className="sds-header__logo">
          {logo ?? <DefaultLogo />}
        </div>
        <button
          className="sds-header__menu-toggle"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
        >
          {mobileOpen ? <CloseIcon /> : <HamburgerIcon />}
        </button>
      </div>

      <nav className="sds-header__nav">
        {navItems.map((item) => (
          <a
            key={item.label}
            href={item.href ?? '#'}
            className={`sds-nav-pill${item.active ? ' sds-nav-pill--active' : ''}`}
          >
            {item.label}
          </a>
        ))}
      </nav>

      <div className="sds-header__auth">
        <button
          className="sds-header__auth-btn sds-header__auth-btn--secondary"
          onClick={onSignIn}
        >
          {signInLabel}
        </button>
        <button
          className="sds-header__auth-btn sds-header__auth-btn--primary"
          onClick={onRegister}
        >
          {registerLabel}
        </button>
      </div>
    </header>
  );
};
