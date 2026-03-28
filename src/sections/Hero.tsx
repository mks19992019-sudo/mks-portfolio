import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { ArrowDown, Github, Mail, Sparkles, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40, filter: 'blur(10px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 0.8,
      ease: [0.25, 0.4, 0.25, 1] as const,
    },
  },
};

const floatingVariants = {
  animate: {
    y: [0, -15, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: 'easeInOut' as const,
    },
  },
};

export function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });
  
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, -50]);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background Orbs */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2, ease: 'easeOut' }}
          className="absolute top-[10%] -left-[10%] w-[600px] h-[600px] rounded-full"
          style={{
            background: 'radial-gradient(circle, hsl(250 100% 60% / 0.3) 0%, transparent 70%)',
            filter: 'blur(60px)',
          }}
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2, delay: 0.3, ease: 'easeOut' }}
          className="absolute bottom-[10%] -right-[10%] w-[500px] h-[500px] rounded-full"
          style={{
            background: 'radial-gradient(circle, hsl(280 100% 50% / 0.25) 0%, transparent 70%)',
            filter: 'blur(60px)',
          }}
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2, delay: 0.6, ease: 'easeOut' }}
          className="absolute top-[40%] left-[30%] w-[400px] h-[400px] rounded-full"
          style={{
            background: 'radial-gradient(circle, hsl(190 100% 50% / 0.15) 0%, transparent 70%)',
            filter: 'blur(80px)',
          }}
        />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 grid-pattern opacity-40" />
      </div>

      {/* Content */}
      <motion.div 
        style={{ opacity, scale, y }}
        className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20"
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center"
        >
          {/* Availability Badge */}
          <motion.div variants={itemVariants} className="mb-8">
            <motion.span 
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full glass text-sm font-medium"
            >
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Sparkles className="h-4 w-4 text-violet-500" />
              </motion.span>
              <span className="bg-gradient-to-r from-violet-500 to-fuchsia-500 bg-clip-text text-transparent">
                Available for opportunities
              </span>
            </motion.span>
          </motion.div>

          {/* Name */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6"
          >
            <span className="text-foreground">Mohit Kumar Suman</span>
          </motion.h1>

          {/* Title with Gradient */}
          <motion.h2
            variants={itemVariants}
            className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-8"
          >
            <span className="gradient-text-animated">AI Engineer</span>
            <span className="text-foreground/30 mx-4">|</span>
            <span className="gradient-text-animated">Agentic Systems Builder</span>
          </motion.h2>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-4 leading-relaxed"
          >
            I design and build production-ready AI systems using LLMs, RAG, and multi-agent architectures.
          </motion.p>

          {/* Tagline */}
          <motion.p
            variants={itemVariants}
            className="text-base text-foreground/50 max-w-xl mx-auto mb-12"
          >
            Focused on reliability, structured outputs, and real-world impact.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14"
          >
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
              <Button
                size="lg"
                onClick={() => scrollToSection('#projects')}
                className="group relative overflow-hidden rounded-full px-8 py-6 text-base font-semibold bg-gradient-to-r from-violet-600 via-fuchsia-600 to-violet-600 text-white shadow-lg shadow-violet-500/30 hover:shadow-xl hover:shadow-violet-500/40 transition-all duration-500"
              >
                <span className="relative z-10 flex items-center gap-2">
                  View Projects
                  <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection('#contact')}
                className="group rounded-full px-8 py-6 text-base font-semibold border-2 border-foreground/20 hover:border-violet-500/50 hover:bg-violet-500/5 transition-all duration-300"
              >
                Get in Touch
              </Button>
            </motion.div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={itemVariants}
            className="flex items-center justify-center gap-4"
          >
            <motion.a
              href="https://github.com/mks19992019-sudo"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="w-12 h-12 rounded-full glass flex items-center justify-center hover:bg-violet-500/10 transition-colors duration-300"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </motion.a>
            <motion.a
              href="mailto:mks19992019@gmail.com"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="w-12 h-12 rounded-full glass flex items-center justify-center hover:bg-violet-500/10 transition-colors duration-300"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </motion.a>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.button
          onClick={() => scrollToSection('#highlights')}
          className="flex flex-col items-center gap-3 text-muted-foreground hover:text-foreground transition-colors group"
          variants={floatingVariants}
          animate="animate"
        >
          <span className="text-xs font-medium uppercase tracking-[0.2em]">Scroll</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ArrowDown className="h-4 w-4" />
          </motion.div>
        </motion.button>
      </motion.div>
    </section>
  );
}
