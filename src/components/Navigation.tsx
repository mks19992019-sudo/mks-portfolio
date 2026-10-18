import { useState, useEffect } from 'react';
import { SITE_CONFIG } from '../config';

const NAV_LINKS = [
  { label: 'Work', sectionId: 'work' },
  { label: 'About', sectionId: 'about' },
];

function scrollTo(id: string) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setMobileOpen(false);
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-[background,border-color] duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-sm border-b border-gray-100'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <nav className="flex items-center justify-between h-16" aria-label="Primary">
          {/* Wordmark */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="text-sm font-semibold text-gray-900 tracking-tight hover:text-blue-600 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 rounded"
          >
            {SITE_CONFIG.initials}
          </a>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <button
                key={link.sectionId}
                onClick={() => scrollTo(link.sectionId)}
                className="text-sm text-gray-500 hover:text-gray-900 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 rounded"
              >
                {link.label}
              </button>
            ))}
            <a
              href={SITE_CONFIG.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-500 hover:text-gray-900 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 rounded"
            >
              GitHub
            </a>
            {SITE_CONFIG.leetcode && (
              <a
                href={SITE_CONFIG.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-gray-500 hover:text-gray-900 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 rounded"
              >
                LeetCode
              </a>
            )}
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-1 text-gray-500 hover:text-gray-900 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 rounded"
            onClick={() => setMobileOpen((o) => !o)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            )}
          </button>
        </nav>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-sm">
          <div className="max-w-5xl mx-auto px-6 py-5 flex flex-col gap-5">
            {NAV_LINKS.map((link) => (
              <button
                key={link.sectionId}
                onClick={() => {
                  scrollTo(link.sectionId);
                  setMobileOpen(false);
                }}
                className="text-sm text-gray-600 hover:text-gray-900 transition-colors text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 rounded"
              >
                {link.label}
              </button>
            ))}
            <a
              href={SITE_CONFIG.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              GitHub
            </a>
            {SITE_CONFIG.leetcode && (
              <a
                href={SITE_CONFIG.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                LeetCode
              </a>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
