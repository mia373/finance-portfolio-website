import { motion } from "framer-motion";
import { Linkedin, Mail, ArrowDown } from "lucide-react";

const socials = [
  { icon: Linkedin, href: "https://www.linkedin.com/in/zuoxu/", label: "LinkedIn" },
  { icon: Mail, href: "mailto:miazuox@gmail.com", label: "Email" },
];

const HeroSection = () => {
  return (
    <section id="about" className="min-h-screen flex items-center relative overflow-hidden">
      {/* Subtle gradient orb */}
      <div className="absolute top-1/4 -right-32 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -left-32 w-64 h-64 bg-primary/3 rounded-full blur-3xl" />

      <div className="section-container relative z-10 py-32">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p className="text-primary font-body text-sm tracking-widest uppercase mb-4">
            Finance Transformation Leader
          </p>
          <h1 className="font-display text-5xl sm:text-7xl lg:text-8xl leading-[0.95] mb-6">
            Driving
            <br />
            <span className="text-gradient">Financial</span>
            <br />
            Excellence
          </h1>
          <p className="font-body text-white/70 text-lg max-w-lg mb-8 leading-relaxed">
            I help organisations modernise their finance functions — from ERP implementations 
            and process optimisation to building high-performing teams that deliver lasting change.
          </p>

          <div className="flex items-center gap-4 mb-16">
            {socials.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-secondary/80 transition-all duration-200"
                aria-label={label}
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </motion.div>

        <motion.a
          href="#projects"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="inline-flex items-center gap-2 text-muted-foreground text-sm hover:text-primary transition-colors"
        >
          <ArrowDown size={16} className="animate-bounce" />
          Scroll to explore
        </motion.a>
      </div>
    </section>
  );
};

export default HeroSection;
