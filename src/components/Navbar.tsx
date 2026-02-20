'use client';

import { useState, useEffect } from 'react';
import ClaudeBuilderClubLogo from './ClaudeBuilderClubLogo';
import NavDropdown from './NavDropdown';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const navItems = [
    {
      label: 'Home',
      href: '/',
      hasDropdown: false
    },
    {
      label: 'Build',
      href: '/build',
      hasDropdown: true,
      dropdownItems: [
        {
          label: 'Workshops',
          href: '/workshops',
          description: 'Hands-on learning sessions'
        },
        {
          label: 'Student Projects',
          href: '/projects',
          description: 'AI innovations by students'
        }
      ]
    },
    {
      label: 'Events',
      href: '/events',
      hasDropdown: false
    },
    {
      label: 'Partnership',
      href: '/partnership',
      hasDropdown: true,
      dropdownItems: [
        {
          label: 'Become a Partner',
          href: '/partner',
          description: 'Collaborate with our community'
        },
        {
          label: 'Meet the Team',
          href: '/team',
          description: 'Our leadership board'
        }
      ]
    },
  ];

  return (
    <>
      <header
        className={`header fixed top-0 left-0 right-0 w-full z-20 transition-all duration-300 ${scrolled ? 'bg-white shadow-sm' : 'bg-white'}`}
        style={{ minHeight: '56px' }}
      >
        <div className="grid-container">
          <div className="main-content flex items-center justify-between py-2">
            {/* Logo */}
            <a
              href="/"
              aria-label="Claude Builder Club Northumbria"
              className="logo-link flex items-center mr-6"
            >
              <ClaudeBuilderClubLogo height={32} />
            </a>

            {/* Navigation & Actions - Right Aligned */}
            <div className="header-actions flex items-center gap-4 sm:gap-6">
              {/* Nav Links - hidden below md */}
              <nav className="nav hidden md:flex items-center">
                {navItems.map((item) => (
                  item.hasDropdown && item.dropdownItems ? (
                    <NavDropdown
                      key={item.label}
                      label={item.label}
                      href={item.href}
                      items={item.dropdownItems}
                    />
                  ) : (
                    <div key={item.label} className="nav-item">
                      <a
                        href={item.href}
                        className="button button-compact flex items-center bg-transparent text-[#45474d] hover:text-black hover:bg-[#eff0f3] transition-all text-sm font-[450] px-4 py-1.5 rounded-full"
                      >
                        {item.label}
                      </a>
                    </div>
                  )
                ))}
              </nav>

              {/* Connect Button - hidden below sm */}
              <a
                href="https://linktr.ee/claudenorthumbria?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGnYmH3pL9TJPN49OI_rxdRTsor6i45CBbwg9XBz3R7KEBW-8ARUlIuvcPMCwc_aem_P-oNMcLt0iW81MmKW-DePw"
                target="_blank"
                rel="noopener noreferrer"
                className="button button-secondary button-compact hidden sm:inline-flex items-center text-sm font-[450] px-4 py-1.5 rounded-full"
                aria-label="Connect with us on social media"
              >
                Connect With Us
              </a>

              {/* Join the Club Button - hidden below md on mobile (shown in menu instead) */}
              <a
                href="/join"
                className="button button-primary button-compact hidden md:inline-flex items-center text-sm font-[450] bg-[#121317] text-white rounded-full px-6 py-2.5 border-none"
              >
                Join the Club
              </a>

              {/* Hamburger Menu Button - visible below md */}
              <button
                className="md:hidden flex items-center justify-center w-11 h-11 rounded-lg hover:bg-gray-100 transition-colors"
                onClick={() => setMobileMenuOpen(true)}
                aria-label="Open menu"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/20 backdrop-blur-sm"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Drawer */}
          <div className="absolute inset-y-0 right-0 w-full max-w-sm bg-white shadow-xl flex flex-col">
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100">
              <ClaudeBuilderClubLogo height={28} />
              <button
                className="flex items-center justify-center w-11 h-11 rounded-lg hover:bg-gray-100 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close menu"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>

            {/* Nav Links */}
            <nav className="flex-1 overflow-y-auto px-4 py-6">
              <div className="flex flex-col gap-1">
                {navItems.map((item) => (
                  <div key={item.label}>
                    <a
                      href={item.href}
                      className="flex items-center px-4 py-3 text-base font-medium text-[#121317] rounded-xl hover:bg-gray-50 transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.label}
                    </a>
                    {item.hasDropdown && item.dropdownItems && (
                      <div className="ml-4 flex flex-col gap-1">
                        {item.dropdownItems.map((sub) => (
                          <a
                            key={sub.label}
                            href={sub.href}
                            className="flex flex-col px-4 py-2.5 rounded-lg hover:bg-gray-50 transition-colors"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            <span className="text-sm font-medium text-[#121317]">{sub.label}</span>
                            <span className="text-xs text-[#45474d]">{sub.description}</span>
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </nav>

            {/* CTAs */}
            <div className="px-4 py-6 border-t border-gray-100 flex flex-col gap-3">
              <a
                href="https://linktr.ee/claudenorthumbria?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGnYmH3pL9TJPN49OI_rxdRTsor6i45CBbwg9XBz3R7KEBW-8ARUlIuvcPMCwc_aem_P-oNMcLt0iW81MmKW-DePw"
                target="_blank"
                rel="noopener noreferrer"
                className="button button-secondary flex items-center justify-center text-sm font-[450] px-6 py-3 rounded-full w-full"
                onClick={() => setMobileMenuOpen(false)}
              >
                Connect With Us
              </a>
              <a
                href="/join"
                className="button button-primary flex items-center justify-center text-sm font-[450] bg-[#121317] text-white rounded-full px-6 py-3 border-none w-full"
                onClick={() => setMobileMenuOpen(false)}
              >
                Join the Club
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
