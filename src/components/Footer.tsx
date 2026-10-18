import { SITE_CONFIG } from '../config';

const FOOTER_LINKS = [
  { label: 'GitHub', href: SITE_CONFIG.github, show: !!SITE_CONFIG.github },
  { label: 'LeetCode', href: SITE_CONFIG.leetcode, show: !!SITE_CONFIG.leetcode },
  { label: 'LinkedIn', href: SITE_CONFIG.linkedin, show: !!SITE_CONFIG.linkedin },
  { label: SITE_CONFIG.email, href: `mailto:${SITE_CONFIG.email}`, show: !!SITE_CONFIG.email },
];

export function Footer() {
  const visibleLinks = FOOTER_LINKS.filter((l) => l.show);

  return (
    <footer className="border-t border-gray-100 py-10">
      <div className="max-w-5xl mx-auto px-6 lg:px-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
        <p className="text-sm text-gray-400">
          Built with curiosity and engineering discipline.
        </p>
        {visibleLinks.length > 0 && (
          <div className="flex items-center gap-6 flex-wrap">
            {visibleLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('mailto:') ? undefined : '_blank'}
                rel={link.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                className="text-sm text-gray-400 hover:text-gray-900 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 rounded"
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </footer>
  );
}
