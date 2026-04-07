import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "@/hooks/useTheme";

const navItems = ["About", "Skills", "Experience", "Projects", "Contact"];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { isDark, toggle } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  return (
    <>
      {/* Custom CSS */}
      <style>
        {`
        .logo-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          font-family: 'Poppins', sans-serif;
        }

        .logo-text {
          font-weight: 800;
          font-size: 22px;
          color:white;
          line-height: 1.2;
          text-align: center;
        }

        .line {
          width: 100%;
          height: 2px;
          position: relative;
          overflow: hidden;
          background: rgba(255,255,255,0.1);
          margin: 4px 0;
        }

        .line::before {
          content: "";
          position: absolute;
          top: 0;
          left: -100%;
          width: 50%;
          height: 100%;
          background: linear-gradient(90deg, transparent, #00c6ff, transparent);
          animation: moveLine 2s linear infinite;
        }

        @keyframes moveLine {
          0% { left: -100%; }
          100% { left: 100%; }
        }
        `}
      </style>

      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-background/80 backdrop-blur-xl border-b border-border" : ""
        }`}
      >
        <div className="container mx-auto flex items-center justify-between py-4">

          {/* 🔥 LOGO */}
          <div
            className="logo-container cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            {/* Top Line */}
            <div className="line w-24"></div>

            {/* Name */}
            <div className="logo-text " >
              PRASHANT <br />
              
              <span className="text-blue-400">NANDANWAR</span>
            </div>

            {/* Bottom Line */}
            <div className="line w-24"></div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => scrollTo(item)}
                className="text-muted-foreground hover:text-primary transition-colors text-sm font-medium"
              >
                {item}
              </button>
            ))}

            <button
              onClick={toggle}
              className="p-2 rounded-lg border border-border text-muted-foreground hover:text-primary"
            >
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                scrollTo("Contact");
              }}
              className="px-4 py-2 rounded-lg bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 text-sm font-medium"
            >
              Hire Me
            </a>
          </div>

          {/* Mobile */}
          <div className="flex items-center gap-2 md:hidden">
            <button onClick={toggle}>
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            <button onClick={() => setMobileOpen(!mobileOpen)}>
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-card/95 backdrop-blur-xl border-b border-border px-4 pb-4"
          >
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => scrollTo(item)}
                className="block w-full text-left py-3 text-muted-foreground hover:text-primary"
              >
                {item}
              </button>
            ))}
          </motion.div>
        )}
      </motion.nav>
    </>
  );
};

export default Navbar;