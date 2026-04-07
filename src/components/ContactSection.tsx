import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = `mailto:nandanwarprashant469@gmail.com?subject=Portfolio Contact from ${form.name}&body=${encodeURIComponent(form.message)}`;
  };

  return (
    <section id="contact" className="section-padding">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-mono text-sm text-primary mb-2">// contact</h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-12">
            Get In <span className="gradient-text">Touch</span>
          </h3>

          <div className="grid md:grid-cols-2 gap-10">
            <div className="space-y-6">
              <p className="text-muted-foreground leading-relaxed">
                I'm currently open to new opportunities and collaborations. Whether you have a project in mind or just want to connect, feel free to reach out.
              </p>

              <div className="space-y-4">
                {[
                  { icon: Mail, label: "nandanwarprashant469@gmail.com", href: "mailto:nandanwarprashant469@gmail.com" },
                  { icon: Phone, label: "+91 8390535956", href: "tel:+918390535956" },
                  { icon: MapPin, label: "Gurugram, India", href: "#" },
                ].map(({ icon: Icon, label, href }) => (
                  <a
                    key={label}
                    href={href}
                    className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                  >
                    <div className="p-2 rounded-lg bg-secondary text-primary">
                      <Icon size={16} />
                    </div>
                    <span className="text-sm">{label}</span>
                  </a>
                ))}
              </div>

              {/* Terminal-style card */}
              <div className="p-4 rounded-lg bg-card border border-border font-mono text-sm">
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-3 h-3 rounded-full bg-destructive/60" />
                  <span className="w-3 h-3 rounded-full" style={{ background: 'hsl(45 93% 47% / 0.6)' }} />
                  <span className="w-3 h-3 rounded-full bg-terminal-green/60" />
                </div>
                <p className="text-muted-foreground">
                  <span className="text-terminal-green">$ </span>
                  <span className="text-primary">whoami</span>
                </p>
                <p className="text-foreground">prashant-nandanwar</p>
                <p className="text-muted-foreground mt-1">
                  <span className="text-terminal-green">$ </span>
                  <span className="text-primary">cat</span> status.txt
                </p>
                <p className="text-foreground">Open to work 🚀</p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">Name</label>
                <input
                  type="text"
                  required
                  maxLength={100}
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">Email</label>
                <input
                  type="email"
                  required
                  maxLength={255}
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-colors"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">Message</label>
                <textarea
                  required
                  maxLength={1000}
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-colors resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity glow-sm"
              >
                <Send size={16} />
                Send Message
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
