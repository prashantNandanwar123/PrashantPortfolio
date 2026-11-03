import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => (
  <footer className="py-5 px-2  border-t border-border">
    <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">

      <div className="font-mono text-sm text-muted-foreground">
        <span className="text-primary">&lt;</span>
        Prashant Nandanwar
        <span className="text-primary">/&gt;</span>
        <span className="ml-2">
          © {new Date().getFullYear()}
        </span>
      </div>

      <div className="flex items-center gap-3">
        {[
          {
            icon: Github,
            href: "https://github.com/prashantNandanwar123",
            label: "GitHub",
            bgColor: "bg-gray-800",
          },
          {
            icon: Linkedin,
            href: "https://www.linkedin.com",
            label: "LinkedIn",
            bgColor: "bg-[#0A66C2]",
          },
          {
            icon: Mail,
            href: "https://mail.google.com/mail/?view=cm&fs=1&to=nandanwarprashant3698@gmail.com",
            label: "Gmail",
            bgColor: "bg-[#EA4335]",
          },
        ].map(({ icon: Icon, href, label, bgColor }) => (
          <a
            key={label}
            href={href}
            target={label !== "Email" ? "_blank" : undefined}
            rel={label !== "Email" ? "noopener noreferrer" : undefined}
            aria-label={label}
            className={`
        w-10 h-10
        rounded-full
        flex items-center justify-center
        ${bgColor}
        text-white
        hover:scale-110
        hover:-translate-y-1
        transition-all duration-200
        shadow-md
      `}
          >
            <Icon size={19} strokeWidth={2.3} />
          </a>
        ))}
      </div>

    </div>
  </footer>
);

export default Footer;