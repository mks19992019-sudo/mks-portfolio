import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code2, Brain, Cpu, Rocket } from 'lucide-react';

const highlights = [
  {
    icon: Brain,
    title: 'AI Systems',
    description: 'Building intelligent systems with LLMs and agents',
  },
  {
    icon: Code2,
    title: 'Clean Architecture',
    description: 'Designing scalable and maintainable solutions',
  },
  {
    icon: Cpu,
    title: 'Production Ready',
    description: 'Deploying reliable systems with proper testing',
  },
  {
    icon: Rocket,
    title: 'Real Impact',
    description: 'Creating solutions that solve real problems',
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

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.4, 0, 0.2, 1] as const,
    },
  },
};

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="about"
      ref={ref}
      className="relative min-h-screen flex items-center py-20 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-violet-500/5 to-transparent" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-cyan-500/10 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid lg:grid-cols-2 gap-16 items-center"
        >
          {/* Left Column - Content */}
          <div className="space-y-8">
            <motion.div variants={itemVariants}>
              <span className="text-sm font-medium text-violet-500 uppercase tracking-wider">
                About Me
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-3 leading-tight">
                Building the future with{' '}
                <span className="gradient-text">AI systems</span>
              </h2>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                I am a 2nd-year engineering student focused on building real-world AI systems.
                Instead of just using AI tools, I design complete systems — from architecture to deployment.
              </p>
              <p>
                I specialize in agentic AI, advanced RAG pipelines, and LLM workflows, 
                with a strong focus on debugging, tracing, and system reliability.
              </p>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-8 pt-4"
            >
              <div>
                <div className="text-3xl font-bold gradient-text">2+</div>
                <div className="text-sm text-muted-foreground">Years Learning</div>
              </div>
              <div>
                <div className="text-3xl font-bold gradient-text">10+</div>
                <div className="text-sm text-muted-foreground">Projects Built</div>
              </div>
              <div>
                <div className="text-3xl font-bold gradient-text">5+</div>
                <div className="text-sm text-muted-foreground">AI Systems</div>
              </div>
            </motion.div>
          </div>

          {/* Right Column - Highlights Grid */}
          <motion.div
            variants={containerVariants}
            className="grid sm:grid-cols-2 gap-4"
          >
            {highlights.map((item) => (
              <motion.div
                key={item.title}
                variants={itemVariants}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="group relative p-6 rounded-2xl glass-card card-glow"
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-violet-500/10 to-fuchsia-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-500/20 to-fuchsia-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <item.icon className="h-6 w-6 text-violet-500" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
