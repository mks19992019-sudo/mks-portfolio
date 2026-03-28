import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Trophy, Bot, Rocket, Code2, Zap, Target } from 'lucide-react';

const highlights = [
  {
    icon: Trophy,
    title: 'Hackathon Winner',
    description: 'Recognized for innovative AI solutions',
    stat: '🏆',
    color: 'from-amber-500 to-orange-500',
  },
  {
    icon: Bot,
    title: 'Multi-Agent Systems',
    description: 'Built production-ready agent architectures',
    stat: '5+',
    color: 'from-violet-500 to-fuchsia-500',
  },
  {
    icon: Rocket,
    title: 'Production AI Projects',
    description: 'Deployed real-world AI solutions',
    stat: '10+',
    color: 'from-cyan-500 to-blue-500',
  },
  {
    icon: Code2,
    title: 'Clean Architecture',
    description: 'Scalable, maintainable codebases',
    stat: '100%',
    color: 'from-emerald-500 to-teal-500',
  },
  {
    icon: Zap,
    title: 'Performance Focus',
    description: 'Optimized for speed and efficiency',
    stat: '⚡',
    color: 'from-yellow-500 to-amber-500',
  },
  {
    icon: Target,
    title: 'Reliability First',
    description: 'Systems that work consistently',
    stat: '99%',
    color: 'from-rose-500 to-pink-500',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.4, 0.25, 1] as const,
    },
  },
};

export function Highlights() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="highlights"
      ref={ref}
      className="relative py-24 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full bg-gradient-radial opacity-50" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] as const }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-violet-500 uppercase tracking-[0.2em]">
            Achievements
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold mt-4">
            Key <span className="gradient-text">Highlights</span>
          </h2>
          <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
            Milestones and accomplishments that define my journey
          </p>
        </motion.div>

        {/* Highlights Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {highlights.map((item) => (
            <motion.div
              key={item.title}
              variants={itemVariants}
              whileHover={{ 
                y: -8, 
                scale: 1.02,
                transition: { duration: 0.3, ease: 'easeOut' }
              }}
              className="group relative"
            >
              <div className="relative h-full rounded-2xl glass-card card-hover overflow-hidden p-6">
                {/* Gradient Border on Hover */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                
                {/* Glow Effect */}
                <div className={`absolute -inset-1 rounded-2xl bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 -z-10`} />
                
                <div className="relative">
                  {/* Icon & Stat Row */}
                  <div className="flex items-center justify-between mb-5">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:shadow-xl transition-all duration-300`}>
                      <item.icon className="h-6 w-6 text-white" />
                    </div>
                    <span className="text-3xl font-bold gradient-text">
                      {item.stat}
                    </span>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-violet-500 transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
