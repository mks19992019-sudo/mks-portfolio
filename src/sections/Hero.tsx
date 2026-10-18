import { SITE_CONFIG } from '../config';

function ArrowRight() {
  return (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
    </svg>
  );
}

function GithubIcon() {
  return (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path
        fillRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function scrollToWork() {
  document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' });
}

export function Hero() {
  return (
    <section
      className="min-h-screen flex items-center pt-16"
      aria-label="Introduction"
    >
      <div className="max-w-5xl mx-auto px-6 lg:px-8 py-24 md:py-32 w-full">
        <div className="flex flex-col-reverse md:flex-row md:items-center md:justify-between gap-12 md:gap-16">

          {/* ── Left column: text ── */}
          <div className="flex-1 min-w-0">
            {/* Label */}
            <p className="text-sm font-medium text-blue-600 tracking-widest uppercase mb-6 select-none">
              {SITE_CONFIG.title}
            </p>

            {/* Headline */}
            <h1 className="text-[2.5rem] leading-[1.08] md:text-5xl lg:text-6xl font-bold text-gray-950 tracking-tight mb-6">
              Building AI systems that work beyond the demo.
            </h1>

            {/* Supporting text */}
            <p className="text-base md:text-lg text-gray-500 max-w-lg leading-relaxed mb-10">
              I build machine learning models and AI applications, focusing on how they work,
              how reliably they perform, and how they can solve practical problems in
              real-world workflows.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={scrollToWork}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-gray-950 text-white text-sm font-medium rounded-lg hover:bg-gray-700 active:bg-gray-800 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
              >
                View My Work
                <ArrowRight />
              </button>

              <a
                href={SITE_CONFIG.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-gray-700 border border-gray-200 rounded-lg hover:border-gray-400 hover:text-gray-900 active:bg-gray-50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
              >
                <GithubIcon />
                GitHub
              </a>

              {SITE_CONFIG.leetcode && (
                <a
                  href={SITE_CONFIG.leetcode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-gray-700 border border-gray-200 rounded-lg hover:border-gray-400 hover:text-gray-900 active:bg-gray-50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                >
                  LeetCode
                </a>
              )}
            </div>
          </div>

          {/* ── Right column: photo ── */}
          <div className="flex-shrink-0 flex justify-center md:justify-end">
            <div className="relative w-48 h-48 md:w-64 md:h-64 lg:w-72 lg:h-72">
              {/* Subtle background ring */}
              <div className="absolute inset-0 rounded-full ring-1 ring-gray-200 translate-x-1.5 translate-y-1.5" aria-hidden="true" />
              <img
                src="/profile.png"
                alt="Mohit Kumar Suman"
                className="relative w-full h-full rounded-full object-cover object-top ring-1 ring-gray-200"
                loading="eager"
                decoding="async"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
