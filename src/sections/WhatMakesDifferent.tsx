import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  Layers, 
  Shield, 
  Zap,
  CheckCircle2
} from 'lucide-react';

const differentiators = [
  {
    icon: Layers,
    title: 'Architecture over Shortcuts',
    description: 'I believe in building solid foundations. Every system starts with thoughtful architecture that scales.',
  },
  {
    icon: Shield,
    title: 'Reliability over Hype',
    description: 'Production systems need to work consistently. I prioritize robustness over trendy features.',
  },
  {
    icon: Zap,
    title: 'Real-world Impact',
    description: 'I build solutions that solve real problems and deliver measurable value to users.',
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

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.4, 0, 0.2, 1] as const,
    },
  },
};

export function WhatMakesDifferent() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center py-20 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-violet-500/5 via-fuchsia-500/5 to-transparent" />
        <div className="absolute top-0 left-1/3 w-[500px] h-[500px] bg-gradient-to-br from-violet-500/10 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/3 w-[400px] h-[400px] bg-gradient-to-tl from-fuchsia-500/10 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Main Statement */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
            className="space-y-8"
          >
            <div>
              <span className="text-sm font-medium text-violet-500 uppercase tracking-wider">
                Philosophy
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-3 leading-tight">
                What Makes Me{' '}
                <span className="gradient-text">Different</span>
              </h2>
            </div>

            <div className="relative">
              <div className="absolute -left-4 top-0 bottom-0 w-1 rounded-full bg-gradient-to-b from-violet-500 to-fuchsia-500" />
              <p className="text-2xl sm:text-3xl font-semibold pl-6 leading-relaxed">
                I do not just build AI features — I build{' '}
                <span className="gradient-text">AI systems</span>.
              </p>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed">
              While many focus on integrating AI tools, I architect complete solutions 
              that consider the entire lifecycle — from data ingestion to deployment, 
              from error handling to scalability.
            </p>

            {/* Key Points */}
            <div className="space-y-4">
              {[
                'End-to-end system thinking',
                'Production-ready code quality',
                'Focus on maintainability',
                'Continuous learning mindset',
              ].map((point, index) => (
                <motion.div
                  key={point}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2 className="h-5 w-5 text-violet-500 flex-shrink-0" />
                  <span className="text-foreground/80">{point}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Cards */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="space-y-6"
          >
            {differentiators.map((item) => (
              <motion.div
                key={item.title}
                variants={itemVariants}
                whileHover={{ x: 8, transition: { duration: 0.2 } }}
                className="group relative"
              >
                <div className="relative p-6 rounded-2xl glass-card overflow-hidden">
                  {/* Gradient Background */}
                  <div className="absolute inset-0 bg-gradient-to-r from-violet-500/5 to-fuchsia-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative flex items-start gap-5">
                    {/* Icon */}
                    <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-violet-500/20 to-fuchsia-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <item.icon className="h-7 w-7 text-violet-500" />
                    </div>

                    {/* Content */}
                    <div>
                      <h3 className="text-xl font-semibold mb-2 group-hover:text-violet-500 transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
