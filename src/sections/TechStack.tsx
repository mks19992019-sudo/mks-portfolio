import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  Brain, 
  Server, 
  Container, 
  Search,
  Workflow,
  Cpu,
  Layers,
  GitBranch,
  Terminal,
  Zap,
  Code2,
  Database,
  Activity,
  Box,
  Rocket,
  Eye,
  LineChart,
  Settings,
  Sparkles
} from 'lucide-react';

const techCategories = [
  {
    id: 'ai',
    title: 'AI / LLM Engineering',
    description: 'Building intelligent systems with modern LLM frameworks',
    icon: Brain,
    color: 'from-violet-500 to-fuchsia-500',
    tools: [
      { name: 'LangGraph', icon: Workflow, level: 90 },
      { name: 'MCP', icon: Cpu, level: 85 },
      { name: 'Advanced RAG', icon: Database, level: 88 },
      { name: 'Fine-tuning', icon: LineChart, level: 75 },
      { name: 'Structured Outputs', icon: Box, level: 92 },
    ],
  },
  {
    id: 'backend',
    title: 'Backend & Systems',
    description: 'Scalable server architecture and API design',
    icon: Server,
    color: 'from-cyan-500 to-blue-500',
    tools: [
      { name: 'FastAPI', icon: Zap, level: 90 },
      { name: 'Python', icon: Code2, level: 95 },
      { name: 'API Design', icon: Layers, level: 88 },
      { name: 'Async Systems', icon: Activity, level: 82 },
    ],
  },
  {
    id: 'infra',
    title: 'Infrastructure & DevOps',
    description: 'Containerization and deployment automation',
    icon: Container,
    color: 'from-emerald-500 to-teal-500',
    tools: [
      { name: 'Docker', icon: Box, level: 85 },
      { name: 'CI/CD Pipelines', icon: GitBranch, level: 78 },
      { name: 'System Scaling', icon: Rocket, level: 72 },
    ],
  },
  {
    id: 'debug',
    title: 'Debugging & Observability',
    description: 'Tracing, monitoring, and system visibility',
    icon: Eye,
    color: 'from-amber-500 to-orange-500',
    tools: [
      { name: 'LangSmith Tracing', icon: Search, level: 88 },
      { name: 'Workflow Debugging', icon: Terminal, level: 85 },
      { name: 'Logging Systems', icon: Settings, level: 90 },
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
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
      duration: 0.7,
      ease: [0.25, 0.4, 0.25, 1] as const,
    },
  },
};

const toolVariants = {
  hidden: { opacity: 0, x: -10 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.08,
      duration: 0.4,
      ease: [0.25, 0.4, 0.25, 1] as const,
    },
  }),
};

export function TechStack() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="techstack"
      ref={ref}
      className="relative py-24 overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gradient-radial opacity-40" />
        <div className="absolute top-0 right-1/4 w-[400px] h-[400px] rounded-full bg-violet-500/10 blur-[100px]" />
        <div className="absolute bottom-0 left-1/4 w-[300px] h-[300px] rounded-full bg-cyan-500/10 blur-[80px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] as const }}
          className="text-center mb-6"
        >
          <span className="inline-flex items-center gap-2 text-sm font-semibold text-violet-500 uppercase tracking-[0.2em]">
            <Sparkles className="h-4 w-4" />
            Toolkit
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold mt-4">
            Tech Stack & <span className="gradient-text">Tools I Use</span>
          </h2>
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center text-lg text-muted-foreground max-w-2xl mx-auto mb-16"
        >
          I focus on building reliable, production-ready AI systems using modern tools and architectures.
        </motion.p>

        {/* Tech Stack Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-2 gap-6"
        >
          {techCategories.map((category) => (
            <motion.div
              key={category.id}
              variants={cardVariants}
              whileHover={{ 
                y: -8, 
                scale: 1.01,
                transition: { duration: 0.3, ease: 'easeOut' }
              }}
              className="group relative"
            >
              <div className="relative h-full rounded-3xl overflow-hidden">
                {/* Gradient Border */}
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-[1px]`}>
                  <div className="w-full h-full rounded-3xl bg-background" />
                </div>

                {/* Card Content */}
                <div className="relative h-full rounded-3xl glass-card overflow-hidden m-[1px]">
                  {/* Gradient Background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-[0.05] transition-opacity duration-500`} />
                  
                  {/* Glow Effect */}
                  <div className={`absolute -inset-4 rounded-3xl bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-20 blur-2xl transition-opacity duration-500 -z-10`} />

                  <div className="relative p-6 md:p-8">
                    {/* Category Header */}
                    <div className="flex items-start gap-4 mb-6">
                      <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${category.color} flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:scale-105 transition-all duration-300`}>
                        <category.icon className="h-7 w-7 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl md:text-2xl font-bold mb-1 group-hover:text-violet-500 transition-colors duration-300">
                          {category.title}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {category.description}
                        </p>
                      </div>
                    </div>

                    {/* Tools List */}
                    <div className="space-y-3">
                      {category.tools.map((tool, index) => (
                        <motion.div
                          key={tool.name}
                          custom={index}
                          variants={toolVariants}
                          initial="hidden"
                          animate={isInView ? 'visible' : 'hidden'}
                          className="group/tool"
                        >
                          <div className="flex items-center gap-3 p-3 rounded-xl bg-foreground/5 hover:bg-violet-500/10 transition-colors duration-300">
                            {/* Tool Icon */}
                            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-violet-500/20 to-fuchsia-500/20 flex items-center justify-center group-hover/tool:scale-110 transition-transform duration-300">
                              <tool.icon className="h-4 w-4 text-violet-500" />
                            </div>

                            {/* Tool Name */}
                            <span className="flex-1 font-medium text-sm">
                              {tool.name}
                            </span>

                            {/* Skill Level Bar */}
                            <div className="flex items-center gap-2">
                              <div className="w-16 h-1.5 rounded-full bg-muted overflow-hidden">
                                <motion.div
                                  initial={{ width: 0 }}
                                  animate={isInView ? { width: `${tool.level}%` } : { width: 0 }}
                                  transition={{ duration: 1, delay: 0.5 + index * 0.1, ease: 'easeOut' }}
                                  className={`h-full rounded-full bg-gradient-to-r ${category.color}`}
                                />
                              </div>
                              <span className="text-xs font-medium text-muted-foreground w-8">
                                {tool.level}%
                              </span>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>

                    {/* Category Footer - Tool Count */}
                    <div className="mt-5 pt-4 border-t border-border/30 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-muted-foreground">
                          {category.tools.length} tools
                        </span>
                      </div>
                      <div className="flex -space-x-2">
                        {category.tools.slice(0, 3).map((tool, i) => (
                          <div
                            key={i}
                            className="w-6 h-6 rounded-full bg-gradient-to-br from-violet-500/30 to-fuchsia-500/30 flex items-center justify-center border-2 border-background"
                          >
                            <tool.icon className="h-3 w-3 text-violet-400" />
                          </div>
                        ))}
                        {category.tools.length > 3 && (
                          <div className="w-6 h-6 rounded-full bg-muted flex items-center justify-center border-2 border-background text-[10px] font-medium">
                            +{category.tools.length - 3}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full glass">
            <div className="flex -space-x-2">
              {techCategories.slice(0, 3).map((cat, i) => (
                <div
                  key={i}
                  className={`w-8 h-8 rounded-full bg-gradient-to-br ${cat.color} flex items-center justify-center border-2 border-background`}
                >
                  <cat.icon className="h-4 w-4 text-white" />
                </div>
              ))}
            </div>
            <span className="text-sm text-muted-foreground">
              <span className="text-foreground font-semibold">
                {techCategories.reduce((acc, cat) => acc + cat.tools.length, 0)}
              </span>{' '}
              tools across{' '}
              <span className="text-foreground font-semibold">
                {techCategories.length}
              </span>{' '}
              categories
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
