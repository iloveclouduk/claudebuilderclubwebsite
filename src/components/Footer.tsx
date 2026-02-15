'use client';

import ClaudeBuilderClubLogo from './ClaudeBuilderClubLogo';

export default function Footer() {
  return (
    <footer className="footer w-full" style={{ paddingBlockStart: '56px' }}>
      <div className="grid-container">
        {/* Main Content */}
        <div className="footer-main-content w-full mb-5">
          {/* Experience Liftoff Section */}
          <h2
            className="heading-2 mb-12"
            style={{
              fontWeight: 450,
              maxWidth: '600px'
            }}
          >
            Experience liftoff
          </h2>

          {/* Navigation Sections */}
          <div className="footer-nav-section-container flex justify-between gap-6 flex-wrap">
            {/* Column 1 */}
            <div className="footer-nav-section flex flex-col items-start max-w-[288px]">
              <p className="caption mb-3 text-[#45474d]">Download</p>
              <a href="/download" className="body block py-1 text-[#121317] font-medium hover:underline">
                Download for MacOS
              </a>
              <a href="/download" className="body block py-1 text-[#121317] font-medium hover:underline">
                Download for Windows
              </a>
              <a href="/download" className="body block py-1 text-[#121317] font-medium hover:underline">
                Download for Linux
              </a>
            </div>

            {/* Column 2 */}
            <div className="footer-nav-section flex flex-col items-start max-w-[288px]">
              <p className="caption mb-3 text-[#45474d]">Product</p>
              <a href="/product" className="body block py-1 text-[#121317] font-medium hover:underline">
                Features
              </a>
              <a href="/pricing" className="body block py-1 text-[#121317] font-medium hover:underline">
                Pricing
              </a>
              <a href="/changelog" className="body block py-1 text-[#121317] font-medium hover:underline">
                Changelog
              </a>
            </div>

            {/* Column 3 */}
            <div className="footer-nav-section flex flex-col items-start max-w-[288px]">
              <p className="caption mb-3 text-[#45474d]">Resources</p>
              <a href="/docs" className="body block py-1 text-[#121317] font-medium hover:underline">
                Documentation
              </a>
              <a href="/use-cases" className="body block py-1 text-[#121317] font-medium hover:underline">
                Use cases
              </a>
              <a href="/blog" className="body block py-1 text-[#121317] font-medium hover:underline">
                Blog
              </a>
            </div>

            {/* Column 4 */}
            <div className="footer-nav-section flex flex-col items-start max-w-[288px]">
              <p className="caption mb-3 text-[#45474d]">Support</p>
              <a href="/support" className="body block py-1 text-[#121317] font-medium hover:underline">
                Help Center
              </a>
              <a href="/press" className="body block py-1 text-[#121317] font-medium hover:underline">
                Press
              </a>
              <a href="/releases" className="body block py-1 text-[#121317] font-medium hover:underline">
                Releases
              </a>
            </div>
          </div>
        </div>

        {/* Large Claude Builder Club Northumbria Logo */}
        <div className="footer-img-container w-full py-16">
          <div className="claude-builder-club-logo block px-6">
            <ClaudeBuilderClubLogo height={100} className="max-w-full" />
          </div>
        </div>

        {/* Copyright */}
        <div
          className="footer-copyright w-full flex items-center justify-start border-t border-[rgba(33,34,38,0.06)]"
          style={{ paddingBlock: '42px 32px' }}
        >
          <p className="body text-[#121317] font-medium">© 2026 Claude Builder Club Northumbria. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
