import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  Bot, 
  MessageSquare, 
  Database, 
  Workflow, 
  MemoryStick, 
  Code2,
  ExternalLink,
  Github,
  ArrowUpRight,
  Cpu,
  Server,
  Sparkles,
  CheckCircle2
} from 'lucide-react';
// Button component not needed
import { Badge } from '@/components/ui/badge';

const projects = [
  {
    id: 1,
    title: 'AI Finance Advisor',
    description: 'A sophisticated multi-agent system that provides intelligent financial advice using advanced RAG pipelines and structured memory management.',
    icon: Bot,
    tags: [
      { name: 'Multi-agent', icon: Bot },
      { name: 'LangGraph', icon: Workflow },
      { name: 'Advanced RAG', icon: Database },
      { name: 'Memory', icon: MemoryStick },
    ],
    techStack: ['Python', 'LangChain', 'OpenAI', 'Pinecone', 'FastAPI'],
    highlights: [
      'Multi-agent orchestration with 5+ specialized agents',
      'Real-time financial data integration',
      'Persistent memory with user preferences',
      'Structured output validation',
    ],
    color: 'from-violet-500 to-fuchsia-500',
    githubUrl: 'https://github.com/mks19992019-sudo/AgenticFinance',
    liveUrl: null,
    featured: true,
  },
  {
    id: 2,
    title: 'Agentic Chat System',
    description: 'A scalable multi-agent chatbot with intelligent tool calling, dynamic routing, and a robust FastAPI backend for production deployment.',
    icon: MessageSquare,
    tags: [
      { name: 'Multi-agent', icon: Bot },
      { name: 'Tool Calling', icon: Code2 },
      { name: 'FastAPI', icon: Server },
      { name: 'Scalable', icon: Cpu },
    ],
    techStack: ['Python', 'FastAPI', 'LangGraph', 'Redis', 'Docker'],
    highlights: [
      'Dynamic agent routing based on query intent',
      'Intelligent tool selection and execution',
      'Sub-100ms response time',
      'Horizontal scaling support',
    ],
    color: 'from-cyan-500 to-blue-500',
    githubUrl: 'https://github.com/mks19992019-sudo',
    liveUrl: null,
    featured: true,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.4, 0.25, 1] as const,
    },
  },
};

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="projects"
      ref={ref}
      className="relative py-24 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-radial opacity-60" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] as const }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 text-sm font-semibold text-violet-500 uppercase tracking-[0.2em]">
            <Sparkles className="h-4 w-4" />
            Portfolio
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold mt-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
            Production-ready AI systems built with modern architectures
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid lg:grid-cols-2 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              whileHover={{ 
                y: -12, 
                scale: 1.01,
                transition: { duration: 0.4, ease: 'easeOut' }
              }}
              className="group relative"
            >
              <div className="relative h-full rounded-3xl overflow-hidden">
                {/* Gradient Border */}
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-[1px]`}>
                  <div className="w-full h-full rounded-3xl bg-background" />
                </div>
                
                {/* Card Content */}
                <div className="relative h-full rounded-3xl glass-card overflow-hidden m-[1px]">
                  {/* Gradient Background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500`} />
                  
                  {/* Glow Effect */}
                  <div className={`absolute -inset-4 rounded-3xl bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-20 blur-2xl transition-opacity duration-500 -z-10`} />
                  
                  <div className="relative p-8 h-full flex flex-col">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-6">
                      <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${project.color} flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:scale-105 transition-all duration-300`}>
                        <project.icon className="h-7 w-7 text-white" />
                      </div>
                      <div className="flex gap-2">
                        <motion.a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                          className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-violet-500/10 transition-colors"
                          aria-label="View on GitHub"
                        >
                          <Github className="h-5 w-5" />
                        </motion.a>
                        {project.liveUrl && (
                          <motion.a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-violet-500/10 transition-colors"
                            aria-label="View live demo"
                          >
                            <ExternalLink className="h-5 w-5" />
                          </motion.a>
                        )}
                      </div>
                    </div>

                    {/* Title & Description */}
                    <h3 className="text-2xl font-bold mb-3 group-hover:text-violet-500 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-5">
                      {project.tags.map((tag) => (
                        <Badge
                          key={tag.name}
                          variant="secondary"
                          className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/50 dark:bg-white/5 hover:bg-violet-500/10 transition-colors"
                        >
                          <tag.icon className="h-3.5 w-3.5" />
                          {tag.name}
                        </Badge>
                      ))}
                    </div>

                    {/* Tech Stack */}
                    <div className="mb-5">
                      <div className="text-xs font-semibold text-foreground/50 uppercase tracking-wider mb-2">
                        Tech Stack
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {project.techStack.map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-1 text-xs font-medium rounded-md bg-foreground/5 text-foreground/70 border border-foreground/10"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Key Highlights */}
                    <div className="mt-auto">
                      <div className="text-xs font-semibold text-foreground/50 uppercase tracking-wider mb-3">
                        Key Highlights
                      </div>
                      <ul className="space-y-2">
                        {project.highlights.map((highlight, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-2 text-sm text-muted-foreground"
                          >
                            <CheckCircle2 className={`h-4 w-4 mt-0.5 flex-shrink-0 bg-gradient-to-br ${project.color} rounded-full text-white`} />
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* View Project Link */}
                    <div className="mt-6 pt-5 border-t border-border/50">
                      <motion.a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ x: 4 }}
                        className="inline-flex items-center gap-2 text-sm font-semibold text-violet-500 hover:text-violet-400 transition-colors group/link"
                      >
                        View Project
                        <ArrowUpRight className="h-4 w-4 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                      </motion.a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
