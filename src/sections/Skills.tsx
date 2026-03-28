import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  Bot, 
  Brain, 
  Server, 
  Eye,
  Workflow,
  Database,
  Code2,
  Terminal,
  GitBranch,
  LineChart
} from 'lucide-react';

const skillCategories = [
  {
    title: 'Agentic AI Systems',
    icon: Bot,
    description: 'Building autonomous multi-agent architectures',
    skills: [
      { name: 'LangGraph', icon: Workflow },
      { name: 'Multi-Agent', icon: Bot },
      { name: 'Tool Calling', icon: Terminal },
      { name: 'Agent Orchestration', icon: GitBranch },
    ],
    color: 'from-violet-500 to-fuchsia-500',
  },
  {
    title: 'LLM Engineering',
    icon: Brain,
    description: 'Working with large language models',
    skills: [
      { name: 'RAG Pipelines', icon: Database },
      { name: 'Prompt Engineering', icon: Code2 },
      { name: 'Fine-tuning', icon: LineChart },
      { name: 'Structured Outputs', icon: Terminal },
    ],
    color: 'from-cyan-500 to-blue-500',
  },
  {
    title: 'Backend & Systems',
    icon: Server,
    description: 'Building scalable backend infrastructure',
    skills: [
      { name: 'FastAPI', icon: Code2 },
      { name: 'Python', icon: Terminal },
      { name: 'Vector DBs', icon: Database },
      { name: 'API Design', icon: Workflow },
    ],
    color: 'from-emerald-500 to-teal-500',
  },
  {
    title: 'Debugging & Observability',
    icon: Eye,
    description: 'Monitoring and tracing AI systems',
    skills: [
      { name: 'Tracing', icon: GitBranch },
      { name: 'Logging', icon: Terminal },
      { name: 'Evaluation', icon: LineChart },
      { name: 'Error Handling', icon: Code2 },
    ],
    color: 'from-amber-500 to-orange-500',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: [0.4, 0, 0.2, 1] as const,
    },
  },
};

export function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="skills"
      ref={ref}
      className="relative min-h-screen flex items-center py-20 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-violet-500/5 via-transparent to-cyan-500/5" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-fuchsia-500/10 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-tl from-cyan-500/10 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-violet-500 uppercase tracking-wider">
            Expertise
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-3">
            Skills & <span className="gradient-text">Technologies</span>
          </h2>
          <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
            A comprehensive toolkit for building production-ready AI systems.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {skillCategories.map((category) => (
            <motion.div
              key={category.title}
              variants={cardVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group"
            >
              <div className="relative h-full rounded-2xl glass-card overflow-hidden">
                {/* Gradient Background on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                
                <div className="relative p-6">
                  {/* Icon */}
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <category.icon className="h-6 w-6 text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-violet-500 transition-colors">
                    {category.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground mb-4">
                    {category.description}
                  </p>

                  {/* Skills List */}
                  <div className="space-y-2">
                    {category.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className="flex items-center gap-2 text-sm text-foreground/70 hover:text-foreground transition-colors"
                      >
                        <skill.icon className="h-4 w-4 text-muted-foreground" />
                        {skill.name}
                      </div>
                    ))}
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
