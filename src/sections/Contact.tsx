import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { 
  Github, 
  Instagram,
  Linkedin,
  Mail, 
  ArrowUpRight,
  Sparkles,
  Send,
  Copy,
  Check,
  MessageCircle,
  ExternalLink
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const contactLinks = [
  {
    name: 'GitHub',
    description: 'Explore my code and projects',
    icon: Github,
    href: 'https://github.com/mks19992019-sudo',
    color: 'from-gray-600 to-gray-800',
    stats: '10+ repositories',
  },
  {
    name: 'Instagram',
    description: 'Follow my journey and updates',
    icon: Instagram,
    href: 'https://www.instagram.com/mohit_suman28/',
    color: 'from-amber-500 via-pink-500 to-fuchsia-600',
    stats: '@mohit_suman28',
  },
  {
    name: 'LinkedIn',
    description: 'Connect with me professionally',
    icon: Linkedin,
    href: 'https://www.linkedin.com/in/mohit-kumar-suman-4ab261346/',
    color: 'from-sky-500 to-blue-700',
    stats: 'LinkedIn profile',
  },
  {
    name: 'Email',
    description: 'Let us discuss your project',
    icon: Mail,
    href: 'mailto:mks19992019@gmail.com',
    color: 'from-violet-500 to-fuchsia-500',
    stats: 'mks19992019@gmail.com',
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
  hidden: { opacity: 0, y: 30, scale: 0.95 },
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

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    await navigator.clipboard.writeText('mks19992019@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="contact"
      ref={ref}
      className="relative py-24 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gradient-radial opacity-50" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] as const }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 text-sm font-semibold text-violet-500 uppercase tracking-[0.2em]">
            <Sparkles className="h-4 w-4" />
            Get in Touch
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mt-4">
            Let us Build Something{' '}
            <span className="gradient-text">Impactful</span>
          </h2>
          <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto">
            I am always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
        </motion.div>

        {/* Contact Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid sm:grid-cols-2 gap-6 mb-16"
        >
          {contactLinks.map((link) => (
            <motion.a
              key={link.name}
              href={link.href}
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              variants={itemVariants}
              whileHover={{ 
                y: -8, 
                scale: 1.02,
                transition: { duration: 0.3, ease: 'easeOut' }
              }}
              className="group relative"
            >
              <div className="relative rounded-3xl glass-card card-hover overflow-hidden p-8">
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${link.color} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500`} />
                
                {/* Glow */}
                <div className={`absolute -inset-1 rounded-3xl bg-gradient-to-br ${link.color} opacity-0 group-hover:opacity-15 blur-xl transition-opacity duration-500 -z-10`} />

                <div className="relative flex items-center justify-between">
                  <div className="flex items-center gap-5">
                    {/* Icon */}
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${link.color} flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:shadow-xl transition-all duration-300`}>
                      <link.icon className="h-8 w-8 text-white" />
                    </div>

                    {/* Content */}
                    <div>
                      <h3 className="text-xl font-semibold mb-1 group-hover:text-violet-500 transition-colors duration-300">
                        {link.name}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-1">
                        {link.description}
                      </p>
                      <p className="text-xs text-violet-500 font-medium">
                        {link.stats}
                      </p>
                    </div>
                  </div>

                  {/* Arrow */}
                  <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center group-hover:bg-violet-500 group-hover:text-white transition-all duration-300">
                    <ArrowUpRight className="h-5 w-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>

        {/* Email Copy Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.4, 0.25, 1] as const }}
          className="mb-16"
        >
          <div className="relative rounded-3xl glass-card overflow-hidden p-8">
            <div className="absolute inset-0 bg-gradient-to-r from-violet-500/5 to-fuchsia-500/5" />
            
            <div className="relative flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center">
                  <MessageCircle className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Prefer email?</h3>
                  <p className="text-sm text-muted-foreground">Copy my email address directly</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <code className="px-4 py-2.5 rounded-xl bg-muted font-mono text-sm">
                  mks19992019@gmail.com
                </code>
                <motion.button
                  onClick={copyEmail}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-xl bg-violet-500 text-white flex items-center justify-center hover:bg-violet-600 transition-colors"
                  aria-label="Copy email"
                >
                  {copied ? <Check className="h-5 w-5" /> : <Copy className="h-5 w-5" />}
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Strong CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.4, 0.25, 1] as const }}
          className="text-center"
        >
          <div className="relative inline-block">
            {/* Glow Background */}
            <div className="absolute inset-0 bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-3xl blur-2xl opacity-30" />
            
            <div className="relative glass-card rounded-3xl p-10 sm:p-14">
              <h3 className="text-2xl sm:text-3xl font-bold mb-4">
                Ready to start a project?
              </h3>
              <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
                I am currently available for remote work opportunities.
                Let us create something amazing together.
              </p>
              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  size="lg"
                  asChild
                  className="group relative overflow-hidden rounded-full px-10 py-7 text-base font-semibold bg-gradient-to-r from-violet-600 via-fuchsia-600 to-violet-600 text-white shadow-lg shadow-violet-500/30 hover:shadow-xl hover:shadow-violet-500/40 transition-all duration-500"
                >
                  <a href="mailto:mks19992019@gmail.com">
                    <span className="relative z-10 flex items-center gap-3">
                      <Send className="h-5 w-5" />
                      Send me an email
                      <ExternalLink className="h-4 w-4 opacity-70" />
                    </span>
                  </a>
                </Button>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-20 pt-8 border-t border-border/30 text-center"
        >
          <p className="text-sm text-muted-foreground">
            Built with passion by{' '}
            <span className="text-foreground font-semibold">Mohit Kumar Suman</span>
          </p>
          <p className="text-xs text-muted-foreground/60 mt-2">
            AI Engineer | Agentic Systems Builder
          </p>
        </motion.div>
      </div>
    </section>
  );
}
