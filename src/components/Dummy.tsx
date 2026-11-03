import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail, Download } from "lucide-react";
import { useEffect, useState } from "react";

const roles = [
  "Java Backend Developer",
  "Spring Boot Specialist",
  "Fintech Engineer",
  "API Architect",
];

const HeroSection = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    const speed = isDeleting ? 40 : 80;

    if (!isDeleting && text === current) {
      setTimeout(() => setIsDeleting(true), 2000);
      return;
    }
    if (isDeleting && text === "") {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
      return;
    }

    const timer = setTimeout(() => {
      setText(isDeleting ? current.slice(0, text.length - 1) : current.slice(0, text.length + 1));
    }, speed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, roleIndex]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      
      {/* Background */}
      <div className="absolute inset-0 opacity-[0.06]" style={{
        backgroundImage: `linear-gradient(hsl(199 89% 38% / 0.3) 1px, transparent 1px), linear-gradient(90deg, hsl(199 89% 38% / 0.3) 1px, transparent 1px)`,
        backgroundSize: '60px 60px'
      }} />

      {/* Glow */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/5 rounded-full blur-[128px] animate-float" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent/5 rounded-full blur-[128px] animate-float" style={{ animationDelay: '1.5s' }} />

      <div className="container mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >

          {/* Status */}
          <div className="mt-[50px] inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border mb-8">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="font-mono text-sm text-muted-foreground">
              Available for opportunities
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 tracking-tight">
            Hi, I'm <span className="gradient-text">Prashant</span>
          </h1>

          {/* Typing Role */}
          <div className="h-12 md:h-16 flex items-center justify-center mb-6">
            <span className="font-mono text-xl md:text-3xl text-primary">
              {text}
              <span className="border-r-2 border-primary animate-blink ml-1">&nbsp;</span>
            </span>
          </div>

          {/* Description */}
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Building scalable payment systems & secure backend APIs.
            <br className="hidden md:block" />
            Passionate about fintech innovation and robust architecture.
          </p>

          {/* 🔥 ACTION BUTTONS */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            
            {/* View Projects */}
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-8 py-3.5 rounded-lg bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity glow-sm"
            >
              View Projects
            </a>

            {/* Contact */}
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-8 py-3.5 rounded-lg border border-border text-foreground font-semibold hover:bg-secondary transition-colors"
            >
              Contact Me
            </a>

            {/* 🔥 Resume Download */}
            <a
              href="/resume.pdf"
              download
              target="_blank"
              className="flex items-center gap-2 px-8 py-3.5 rounded-lg border border-primary text-primary font-semibold hover:bg-primary/10 transition-colors"
            >
              <Download size={18} />
              Resume
            </a>

          </div>

          {/* Social */}
          <div className="flex items-center justify-center gap-4">
            {[
              { icon: Github, href: "#", label: "GitHub" },
              { icon: Linkedin, href: "#", label: "LinkedIn" },
              { icon: Mail, href: "mailto:nandanwarprashant469@gmail.com", label: "Email" },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                className="p-3 rounded-lg border border-border text-muted-foreground hover:text-primary hover:border-primary/30 transition-all"
              >
                <Icon size={20} />
              </a>
            ))}
          </div>

        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;