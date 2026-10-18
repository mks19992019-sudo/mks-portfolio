import { SITE_CONFIG } from '../config';

// ─── Link component ──────────────────────────────────────────────────────────

interface ProjectLink {
  label: string;
  href: string;
  primary?: boolean;
}

function ExternalLinkIcon() {
  return (
    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
    </svg>
  );
}

function ProjectLinkButton({ link }: { link: ProjectLink }) {
  return (
    <a
      href={link.href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 ${
        link.primary
          ? 'bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800'
          : 'text-gray-700 border border-gray-200 hover:border-gray-400 hover:text-gray-900 active:bg-gray-50'
      }`}
    >
      {link.label}
      <ExternalLinkIcon />
    </a>
  );
}

// ─── Project data ─────────────────────────────────────────────────────────────

interface Project {
  number: string;
  title: string;
  status: 'Ongoing' | 'Deployed';
  description: string;
  points: string[];
  links: ProjectLink[];
}

const PROJECTS: Project[] = [
  {
    number: '01',
    title: 'Agentic RAG System',
    status: 'Ongoing',
    description:
      'Building and evaluating a retrieval-augmented generation system, with a focus on retrieval quality, reranking, and measuring how effectively retrieved context supports a question.',
    points: [
      'Document retrieval and vector search.',
      'Experimentation with cross-encoder reranking.',
      'Evaluation using Contextual Recall and Contextual Precision.',
      'Comparing retrieval approaches using consistent evaluation cases.',
    ],
    links: [
      // Source link will be added once the repository URL is confirmed.
      // { label: 'View Source', href: 'YOUR_REPO_URL_HERE' },
    ],
  },
  {
    number: '02',
    title: 'LSTM Next-Word Predictor',
    status: 'Deployed',
    description:
      'An LSTM-based language model trained on sequential text data to predict the next word from a given input.',
    points: [
      'Training a neural network on text data.',
      'Preparing tokenized sequences for next-word prediction.',
      'Building a prediction pipeline.',
      'Serving model predictions through an API.',
    ],
    links: [
      {
        label: 'Live Demo',
        href: SITE_CONFIG.lstmDemo,
        primary: true,
      },
      // Uncomment and set when the repository URL is confirmed:
      // { label: 'View Source', href: 'YOUR_REPO_URL_HERE' },
    ],
  },
];

// ─── Status badge ─────────────────────────────────────────────────────────────

function StatusBadge({ status }: { status: Project['status'] }) {
  const styles: Record<Project['status'], string> = {
    Ongoing: 'bg-amber-50 text-amber-700 border border-amber-200',
    Deployed: 'bg-emerald-50 text-emerald-700 border border-emerald-200',
  };
  return (
    <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${styles[status]}`}>
      {status}
    </span>
  );
}

// ─── Project card ─────────────────────────────────────────────────────────────

function ProjectCard({ project, isLast }: { project: Project; isLast: boolean }) {
  return (
    <article
      className={`grid md:grid-cols-[1fr_2fr] gap-8 md:gap-16 pb-16 ${
        !isLast ? 'border-b border-gray-100 mb-16' : ''
      }`}
    >
      {/* Left column — number, status, title */}
      <div className="pt-1">
        <div className="flex items-center gap-3 mb-3">
          <span className="text-xs font-mono text-gray-400 select-none">
            {project.number}
          </span>
          <StatusBadge status={project.status} />
        </div>
        <h3 className="text-xl font-semibold text-gray-950 tracking-tight leading-snug">
          {project.title}
        </h3>
      </div>

      {/* Right column — description, bullets, links */}
      <div>
        <p className="text-gray-600 leading-relaxed mb-7">
          {project.description}
        </p>

        <ul className="space-y-2.5 mb-8" aria-label="What I built">
          {project.points.map((point) => (
            <li key={point} className="flex items-start gap-3 text-sm text-gray-600">
              <span
                className="mt-[7px] w-1 h-1 rounded-full bg-blue-500 flex-shrink-0"
                aria-hidden="true"
              />
              {point}
            </li>
          ))}
        </ul>

        {project.links.length > 0 && (
          <div className="flex flex-wrap gap-3" role="list" aria-label="Project links">
            {project.links.map((link) => (
              <div key={link.label} role="listitem">
                <ProjectLinkButton link={link} />
              </div>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}

// ─── Section ──────────────────────────────────────────────────────────────────

export function Work() {
  return (
    <section
      id="work"
      className="py-24 md:py-32 border-t border-gray-100"
      aria-labelledby="work-heading"
    >
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <header className="mb-16">
          <h2
            id="work-heading"
            className="text-2xl font-bold text-gray-950 tracking-tight mb-3"
          >
            Selected Work
          </h2>
          <p className="text-gray-500 max-w-lg">
            A selection of projects exploring machine learning, AI applications, and system
            evaluation.
          </p>
        </header>

        {/* Project list */}
        <div>
          {PROJECTS.map((project, i) => (
            <ProjectCard
              key={project.number}
              project={project}
              isLast={i === PROJECTS.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
