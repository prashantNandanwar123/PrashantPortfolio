import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => (
  <footer className="py-8 px-4 border-t border-border">
    <div className="container mx-auto max-w-5xl flex flex-col md:flex-row items-center justify-between gap-4">
      <div className="font-mono text-sm text-muted-foreground">
        <span className="text-primary">&lt;</span>
        Prashant Nandanwar
        <span className="text-primary">/&gt;</span>
        <span className="ml-2">© {new Date().getFullYear()}</span>
      </div>
      <div className="flex items-center gap-4">
        {[
          { icon: Github, href: "#", label: "GitHub" },
          { icon: Linkedin, href: "#", label: "LinkedIn" },
          { icon: Mail, href: "mailto:nandanwarprashant469@gmail.com", label: "Email" },
        ].map(({ icon: Icon, href, label }) => (
          <a
            key={label}
            href={href}
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label={label}
          >
            <Icon size={18} />
          </a>
        ))}
      </div>
    </div>
  </footer>
);

export default Footer;
