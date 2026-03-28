import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  LineChart, 
  Target, 
  Cpu,
  Sparkles,
  ArrowRight,
  Zap,
  TrendingUp,
  Layers
} from 'lucide-react';

const explorations = [
  {
    icon: LineChart,
    title: 'Fine-tuning LLMs',
    description: 'Exploring parameter-efficient fine-tuning techniques like LoRA and QLoRA to adapt models for specific domains with limited compute resources.',
    progress: 75,
    tags: ['LoRA', 'QLoRA', 'PEFT', 'Adapter Tuning'],
    insights: ['Reduced training costs by 80%', 'Maintained 95% of base model performance'],
    color: 'from-violet-500 to-fuchsia-500',
  },
  {
    icon: Target,
    title: 'Model Evaluation Systems',
    description: 'Building comprehensive evaluation frameworks to measure LLM performance across multiple dimensions including accuracy, latency, and cost.',
    progress: 60,
    tags: ['Benchmarks', 'Metrics', 'A/B Testing', 'Human Evaluation'],
    insights: ['Automated evaluation pipeline', 'Multi-dimensional scoring'],
    color: 'from-cyan-500 to-blue-500',
  },
  {
    icon: Cpu,
    title: 'Advanced ML & Optimization',
    description: 'Deep diving into core ML algorithms, understanding optimization techniques, and implementing efficient solutions from scratch.',
    progress: 45,
    tags: ['Algorithms', 'Optimization', 'Linear Algebra', 'Calculus'],
    insights: ['Building intuition from first principles', 'Custom optimizer implementations'],
    color: 'from-emerald-500 to-teal-500',
  },
  {
    icon: TrendingUp,
    title: 'Agent Orchestration',
    description: 'Researching advanced patterns for coordinating multiple AI agents, handling conflicts, and optimizing collaborative workflows.',
    progress: 55,
    tags: ['Multi-Agent', 'Consensus', 'Routing', 'Planning'],
    insights: ['Hierarchical agent structures', 'Dynamic task allocation'],
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
      ease: [0.25, 0.4, 0.25, 1] as const,
    },
  },
};

export function Exploring() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="exploring"
      ref={ref}
      className="relative py-24 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full bg-gradient-radial opacity-40" />
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
            Continuous Learning
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold mt-4">
            What I am <span className="gradient-text">Exploring</span>
          </h2>
          <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
            Always learning, always building. Here is what I am focused on right now.
          </p>
        </motion.div>

        {/* Exploration Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-2 gap-6"
        >
          {explorations.map((item) => (
            <motion.div
              key={item.title}
              variants={cardVariants}
              whileHover={{ 
                y: -8, 
                scale: 1.01,
                transition: { duration: 0.3, ease: 'easeOut' }
              }}
              className="group relative"
            >
              <div className="relative h-full rounded-2xl glass-card card-hover overflow-hidden">
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500`} />
                
                {/* Glow */}
                <div className={`absolute -inset-1 rounded-2xl bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-15 blur-xl transition-opacity duration-500 -z-10`} />
                
                <div className="relative p-6">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-5">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:shadow-xl transition-all duration-300`}>
                      <item.icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex items-center gap-2">
                      <Zap className="h-4 w-4 text-violet-500" />
                      <span className="text-sm font-semibold text-violet-500">{item.progress}%</span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-violet-500 transition-colors duration-300">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {item.description}
                  </p>

                  {/* Progress Bar */}
                  <div className="mb-4">
                    <div className="h-1.5 rounded-full bg-muted overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${item.progress}%` } : { width: 0 }}
                        transition={{ duration: 1.2, delay: 0.5, ease: 'easeOut' }}
                        className={`h-full rounded-full bg-gradient-to-r ${item.color}`}
                      />
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 text-xs font-medium rounded-full bg-violet-500/10 text-violet-500 border border-violet-500/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Insights */}
                  <div className="pt-4 border-t border-border/50">
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Layers className="h-3.5 w-3.5" />
                      <span>Key insights:</span>
                    </div>
                    <ul className="mt-2 space-y-1">
                      {item.insights.map((insight, idx) => (
                        <li key={idx} className="text-xs text-foreground/70 flex items-center gap-2">
                          <span className="w-1 h-1 rounded-full bg-violet-500" />
                          {insight}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <motion.a
            href="https://github.com/mks19992019-sudo"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ x: 4 }}
            className="inline-flex items-center gap-2 text-sm font-semibold text-violet-500 hover:text-violet-400 transition-colors group"
          >
            Follow my journey on GitHub
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
