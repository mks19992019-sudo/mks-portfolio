import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  Layers, 
  Bot, 
  CheckCircle2, 
  Shield, 
  Search,
  ArrowRight
} from 'lucide-react';

const workPrinciples = [
  {
    icon: Layers,
    number: '01',
    title: 'Architecture First',
    description: 'I design system architecture before writing code. Planning the structure ensures scalability and maintainability from day one.',
  },
  {
    icon: Bot,
    number: '02',
    title: 'AI as Assistant',
    description: 'I use AI as a coding assistant, not a dependency. Understanding the fundamentals allows me to build better systems.',
  },
  {
    icon: CheckCircle2,
    number: '03',
    title: 'Structured Validation',
    description: 'I validate LLM outputs using structured pipelines. Reliability comes from proper validation, not just good prompts.',
  },
  {
    icon: Shield,
    number: '04',
    title: 'Reliability Focus',
    description: 'I focus on reliability, not just responses. Production systems need to work consistently, not just occasionally.',
  },
  {
    icon: Search,
    number: '05',
    title: 'Tracing & Debugging',
    description: 'I debug using tracing and workflow-level thinking. Understanding the full flow helps identify and fix issues faster.',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: [0.4, 0, 0.2, 1] as const,
    },
  },
};

export function HowIWork() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="work"
      ref={ref}
      className="relative min-h-screen flex items-center py-20 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-0 w-1/2 h-full bg-gradient-to-r from-fuchsia-500/5 to-transparent -translate-y-1/2" />
        <div className="absolute top-0 right-1/4 w-64 h-64 bg-gradient-to-br from-violet-500/10 to-transparent rounded-full blur-3xl" />
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
            My Approach
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-3">
            How I <span className="gradient-text">Work</span>
          </h2>
          <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
            My methodology is built on systematic thinking, proper validation, and a relentless focus on reliability.
          </p>
        </motion.div>

        {/* Principles List */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="space-y-4 max-w-4xl mx-auto"
        >
          {workPrinciples.map((principle) => (
            <motion.div
              key={principle.number}
              variants={itemVariants}
              whileHover={{ x: 8, transition: { duration: 0.2 } }}
              className="group relative"
            >
              <div className="flex items-start gap-6 p-6 rounded-2xl glass-card hover:bg-white/90 dark:hover:bg-white/10 transition-all duration-500">
                {/* Number */}
                <div className="flex-shrink-0">
                  <span className="text-4xl font-bold text-violet-500/30 group-hover:text-violet-500/50 transition-colors">
                    {principle.number}
                  </span>
                </div>

                {/* Content */}
                <div className="flex-1 flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-violet-500/20 to-fuchsia-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <principle.icon className="h-6 w-6 text-violet-500" />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-violet-500 transition-colors">
                      {principle.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {principle.description}
                    </p>
                  </div>

                  {/* Arrow */}
                  <div className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ArrowRight className="h-5 w-5 text-violet-500" />
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
