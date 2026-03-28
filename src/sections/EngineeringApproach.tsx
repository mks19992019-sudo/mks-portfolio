import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Layers, Brain, Shield, Search } from 'lucide-react';

const approaches = [
  {
    number: '01',
    icon: Layers,
    title: 'Architecture-First Mindset',
    description: 'Every project begins with thoughtful system design. I map out the complete architecture before writing a single line of code, ensuring scalability and maintainability from day one.',
    points: ['System design documentation', 'Scalable patterns', 'Modular structure'],
    color: 'from-violet-500 to-purple-500',
  },
  {
    number: '02',
    icon: Brain,
    title: 'System Thinking',
    description: 'I see the big picture. Every component is designed with the entire ecosystem in mind, from data flow to error handling, from deployment to monitoring.',
    points: ['End-to-end visibility', 'Component relationships', 'Integration planning'],
    color: 'from-cyan-500 to-blue-500',
  },
  {
    number: '03',
    icon: Shield,
    title: 'Reliability Focus',
    description: 'Production systems must work consistently. I prioritize robustness, proper error handling, and graceful degradation over flashy features that break under load.',
    points: ['Error boundaries', 'Fallback mechanisms', 'Load testing'],
    color: 'from-emerald-500 to-teal-500',
  },
  {
    number: '04',
    icon: Search,
    title: 'Debugging via Tracing',
    description: 'When issues arise, I trace the entire workflow to understand root causes. Structured logging and observability are built in, not bolted on.',
    points: ['Structured logging', 'Workflow tracing', 'Performance monitoring'],
    color: 'from-amber-500 to-orange-500',
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

const itemVariants = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: [0.25, 0.4, 0.25, 1] as const,
    },
  },
};

export function EngineeringApproach() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="approach"
      ref={ref}
      className="relative py-24 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 right-0 w-[600px] h-[600px] rounded-full bg-gradient-radial opacity-40 -translate-y-1/2" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] as const }}
          className="text-center mb-20"
        >
          <span className="text-sm font-semibold text-violet-500 uppercase tracking-[0.2em]">
            Methodology
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold mt-4">
            Engineering <span className="gradient-text">Approach</span>
          </h2>
          <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
            How I think about building systems that last
          </p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="relative"
        >
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-violet-500/50 via-fuchsia-500/30 to-transparent hidden sm:block" />

          {approaches.map((item, index) => (
            <motion.div
              key={item.number}
              variants={itemVariants}
              className={`relative mb-12 last:mb-0 ${index % 2 === 0 ? 'md:pr-[50%]' : 'md:pl-[50%]'}`}
            >
              <motion.div
                whileHover={{ x: index % 2 === 0 ? 8 : -8 }}
                transition={{ duration: 0.3 }}
                className={`relative flex items-start gap-6 ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-br from-violet-500 to-fuchsia-500 shadow-lg shadow-violet-500/50 hidden sm:block z-10" />

                {/* Content Card */}
                <div className={`ml-16 md:ml-0 ${index % 2 === 0 ? 'md:mr-12' : 'md:ml-12'} flex-1`}>
                  <div className="group relative rounded-2xl glass-card card-hover overflow-hidden p-6 md:p-8">
                    {/* Gradient Background */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                    
                    {/* Glow */}
                    <div className={`absolute -inset-1 rounded-2xl bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-15 blur-xl transition-opacity duration-500 -z-10`} />

                    <div className="relative">
                      {/* Header Row */}
                      <div className="flex items-center gap-4 mb-5">
                        <span className="text-4xl md:text-5xl font-bold text-violet-500/20 group-hover:text-violet-500/40 transition-colors">
                          {item.number}
                        </span>
                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                          <item.icon className="h-6 w-6 text-white" />
                        </div>
                      </div>

                      {/* Title */}
                      <h3 className="text-xl md:text-2xl font-semibold mb-3 group-hover:text-violet-500 transition-colors duration-300">
                        {item.title}
                      </h3>

                      {/* Description */}
                      <p className="text-muted-foreground leading-relaxed mb-5">
                        {item.description}
                      </p>

                      {/* Points */}
                      <div className="flex flex-wrap gap-2">
                        {item.points.map((point) => (
                          <span
                            key={point}
                            className="px-3 py-1.5 text-xs font-medium rounded-full bg-violet-500/10 text-violet-500 border border-violet-500/20"
                          >
                            {point}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
