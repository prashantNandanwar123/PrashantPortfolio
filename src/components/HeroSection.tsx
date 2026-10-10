import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  Download,
} from "lucide-react";
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
      const timeout = setTimeout(() => {
        setIsDeleting(true);
      }, 2000);

      return () => clearTimeout(timeout);
    }

    if (isDeleting && text === "") {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
      return;
    }

    const timer = setTimeout(() => {
      setText(
        isDeleting
          ? current.slice(0, text.length - 1)
          : current.slice(0, text.length + 1)
      );
    }, speed);

    return () => clearTimeout(timer);
  }, [text, isDeleting, roleIndex]);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">

      {/* Background Grid */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: `
            linear-gradient(
              hsl(199 89% 38% / 0.3) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              hsl(199 89% 38% / 0.3) 1px,
              transparent 1px
            )
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Left Glow */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/5 rounded-full blur-[128px] animate-float" />

      {/* Right Glow */}
      <div
        className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent/5 rounded-full blur-[128px] animate-float"
        style={{ animationDelay: "1.5s" }}
      />

      <div className="container mx-auto px-6 pt-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* =====================================================
              LEFT SECTION
          ====================================================== */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >

            {/* Status */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border mb-8">
              <span className="w- h-2 rounded-full bg-green-400 animate-pulse" />

              <span className="font-mono text-sm text-muted-foreground">
                Available for opportunities
              </span>
              
            </div>

            {/* Heading */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-bold mb-5 tracking-tight">
              Hi, I'm{" "}
              <span className="gradient-text">
                Prashant
              </span>
            </h1>

            {/* Typing Role */}
            <div className="h-12 md:h-14 flex items-center justify-center lg:justify-start mb-6">

              <span className="font-mono text-xl md:text-3xl text-primary">
                {text}

                <span className="border-r-2 border-primary animate-blink ml-1">
                  &nbsp;
                </span>
              </span>

            </div>

            {/* Description */}
            <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto lg:mx-0 mb-10 leading-relaxed">
              Building scalable payment systems & secure backend APIs.
              <br className="hidden md:block" />
              Passionate about fintech innovation and robust architecture.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-center lg:justify-start justify-center gap-4 mb-10">

              {/* Projects */}
              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();

                  document
                    .getElementById("projects")
                    ?.scrollIntoView({
                      behavior: "smooth",
                    });
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

                  document
                    .getElementById("contact")
                    ?.scrollIntoView({
                      behavior: "smooth",
                    });
                }}
                className="px-8 py-3.5 rounded-lg border border-border text-foreground font-semibold hover:bg-secondary transition-colors"
              >
                Contact Me
              </a>

              {/* Resume */}
              <a
                href="/resume.pdf"
                download
                className="flex items-center gap-2 px-8 py-3.5 rounded-lg border border-primary text-primary font-semibold hover:bg-primary/10 transition-colors"
              >
                <Download size={18} />
                Resume
              </a>

            </div>

            {/* Social */}
            <div className="flex items-center justify-center lg:justify-start gap-4">

              {[
                {
                  icon: Github,
                  href: "https://github.com/prashantNandanwar123",
                  label: "GitHub",
                },
                {
                  icon: Linkedin,
                  href: "#",
                  label: "LinkedIn",
                },
                {
                  icon: Mail,
                  href: "mailto:nandanwarprashant3698@gmail.com",
                  label: "Email",
                },
              ].map(({ icon: Icon, href, label }) => (

                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  aria-label={label}
                  className="p-3 rounded-lg border border-border text-muted-foreground hover:text-primary hover:border-primary/30 transition-all"
                >
                  <Icon size={20} />
                </a>

              ))}

            </div>

          </motion.div>


          {/* =====================================================
              RIGHT SECTION - PROFILE IMAGE
          ====================================================== */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{
              duration: 0.9,
              delay: 0.2,
            }}
            className="flex justify-center lg:justify-end"
          >

            <div className="relative w-[300px] h-[300px] sm:w-[360px] sm:h-[360px] md:w-[420px] md:h-[420px]">

              {/* =================================================
                  ROTATING YELLOW STRIP
              ================================================== */}
              <div
                className="
                  absolute
                  inset-[-10px]
                  rounded-full
                  animate-spin
                "
                style={{
                  animationDuration: "8s",
                  background:
                    "conic-gradient(from 0deg, transparent 0deg, transparent 250deg, rgb(101, 21, 250) 290deg, #facc15 330deg, transparent 360deg)",
                }}
              />

              {/* Inner dark background */}
              <div className="absolute inset-[-4px] rounded-full bg-background" />

              {/* =================================================
                  IMAGE CONTAINER
              ================================================== */}
              <div className="absolute inset-2 rounded-full overflow-hidden border-2 border-primary/20 bg-secondary shadow-2xl">

                <img
                  src="/profile1.jpeg"
                  alt="Prashant Nandanwar"
                  className="
                    w-full
                    h-full
                    object-cover
                    object-center
                  "
                />

              </div>

              {/* =================================================
                  SMALL DECORATIVE DOTS
              ================================================== */}

              <motion.div
                animate={{
                  y: [0, -12, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -top-4 right-10 w-5 h-5 rounded-full bg-yellow-400 shadow-lg"
              />

              <motion.div
                animate={{
                  y: [0, 12, 0],
                }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute bottom-5 -left-5 w-4 h-4 rounded-full bg-primary shadow-lg"
              />

              {/* Small Developer Badge */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
                className="
                  absolute
                  bottom-5
                  right-0
                  sm:right-[-15px]
                  px-4
                  py-2
                  rounded-lg
                  bg-card
                  border
                  border-border
                  shadow-xl
                  font-mono
                  text-xs
                "
              >
                <span className="text-primary">
                  {"<"}backend
                </span>

                <span className="text-muted-foreground">
                  {" />"}
                </span>
              </motion.div>

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  );
};

export default HeroSection;