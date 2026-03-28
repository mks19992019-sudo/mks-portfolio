import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  LineChart, 
  Target, 
  Cpu,
  Sparkles,
  ArrowRight
} from 'lucide-react';

const currentWork = [
  {
    icon: LineChart,
    title: 'Fine-tuning LLMs',
    description: 'Exploring parameter-efficient fine-tuning techniques like LoRA and QLoRA to adapt models for specific domains with limited compute.',
    progress: 75,
    tags: ['LoRA', 'QLoRA', 'PEFT'],
  },
  {
    icon: Target,
    title: 'Model Evaluation Systems',
    description: 'Building comprehensive evaluation frameworks to measure LLM performance across multiple dimensions including accuracy, latency, and cost.',
    progress: 60,
    tags: ['Benchmarks', 'Metrics', 'Testing'],
  },
  {
    icon: Cpu,
    title: 'ML Algorithms & Optimization',
    description: 'Deep diving into core ML algorithms, understanding optimization techniques, and implementing efficient solutions from scratch.',
    progress: 45,
    tags: ['Algorithms', 'Optimization', 'Math'],
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
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.4, 0, 0.2, 1] as const,
    },
  },
};

export function CurrentlyWorking() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center py-20 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/5 via-transparent to-violet-500/5" />
        <div className="absolute top-1/3 right-0 w-96 h-96 bg-gradient-to-bl from-fuchsia-500/10 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 text-sm font-medium text-violet-500 uppercase tracking-wider">
            <Sparkles className="h-4 w-4" />
            In Progress
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-3">
            Currently <span className="gradient-text">Working On</span>
          </h2>
          <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
            Always learning, always building. Here is what I am focused on right now.
          </p>
        </motion.div>

        {/* Work Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-3 gap-6"
        >
          {currentWork.map((work) => (
            <motion.div
              key={work.title}
              variants={cardVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group relative"
            >
              <div className="relative h-full rounded-2xl glass-card overflow-hidden p-6">
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 to-fuchsia-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative">
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-violet-500/20 to-fuchsia-500/20 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                    <work.icon className="h-7 w-7 text-violet-500" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-violet-500 transition-colors">
                    {work.title}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground mb-5 leading-relaxed">
                    {work.description}
                  </p>

                  {/* Progress Bar */}
                  <div className="mb-5">
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-muted-foreground">Progress</span>
                      <span className="font-medium text-violet-500">{work.progress}%</span>
                    </div>
                    <div className="h-2 rounded-full bg-muted overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${work.progress}%` } : { width: 0 }}
                        transition={{ duration: 1, delay: 0.5, ease: 'easeOut' }}
                        className="h-full rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500"
                      />
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {work.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs font-medium rounded-full bg-violet-500/10 text-violet-500"
                      >
                        {tag}
                      </span>
                    ))}
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
          <a
            href="https://github.com/mks19992019-sudo"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-violet-500 hover:text-violet-600 transition-colors group"
          >
            Follow my journey on GitHub
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
