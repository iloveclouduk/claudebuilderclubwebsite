'use client';

import { useState, useEffect } from 'react';
import ClaudeBuilderClubLogo from './ClaudeBuilderClubLogo';
import NavDropdown from './NavDropdown';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
    <header
      className={`header fixed top-0 left-0 right-0 w-full z-20 transition-all duration-300 ${scrolled ? 'bg-white shadow-sm' : 'bg-white'}`}
      style={{ minHeight: '36px' }}
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
          <div className="header-actions flex items-center gap-6">
            {/* Nav Links */}
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
                      className="button button-compact flex items-center bg-transparent text-[#45474d] hover:text-black hover:bg-[#eff0f3] transition-all"
                      style={{
                        fontSize: '14px',
                        fontWeight: 450,
                        padding: '6px 16px',
                        borderRadius: '999px'
                      }}
                    >
                      {item.label}
                    </a>
                  </div>
                )
              ))}
            </nav>

            {/* Connect Button */}
            <a
              href="https://linktr.ee/claudenorthumbria?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGnYmH3pL9TJPN49OI_rxdRTsor6i45CBbwg9XBz3R7KEBW-8ARUlIuvcPMCwc_aem_P-oNMcLt0iW81MmKW-DePw"
              target="_blank"
              rel="noopener noreferrer"
              className="button button-secondary button-compact flex items-center hidden sm:flex"
              style={{
                fontSize: '14px',
                fontWeight: 450,
                padding: '6px 16px',
                borderRadius: '999px'
              }}
              aria-label="Connect with us on social media"
            >
              Connect With Us
            </a>

            {/* Join the Club Button */}
            <a
              href="/join"
              className="button button-primary button-compact flex items-center"
              style={{
                fontSize: '14px',
                fontWeight: 450,
                backgroundColor: '#121317',
                color: 'white',
                borderRadius: '999px',
                padding: '10px 24px',
                border: 'none',
                marginRight: '24px'
              }}
            >
              Join the Club
            </a>
          </div>

        </div>
      </div>
    </header>
  );
}
