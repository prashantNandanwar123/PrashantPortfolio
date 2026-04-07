import { motion } from "framer-motion";
import { CreditCard, Building2, Shield, Activity } from "lucide-react";

const projects = [
  {
    icon: CreditCard,
    title: "Payin & Payout Payment System",
    desc: "A secure, end-to-end transaction system built with Spring Boot. Handles real-time payment processing with multiple gateway integrations.",
    tags: ["Spring Boot", "REST API", "JWT", "Webhooks"],
    features: ["Wallet System", "Encryption", "Real-time Callbacks"],
  },
  {
    icon: Building2,
    title: "BBPS / AEPS / DMT Services",
    desc: "Banking & bill payment integration platform enabling high-performance financial operations through standardized APIs.",
    tags: ["Java 17", "Banking APIs", "Hibernate", "MySQL"],
    features: ["UPI Integration", "Bill Payments", "Money Transfer"],
  },
  {
    icon: Shield,
    title: "Secure Login & Auth System",
    desc: "Enterprise-grade authentication system with JWT tokens, IP tracking, role-based access control, and session management.",
    tags: ["JWT", "Spring Security", "IP Tracking"],
    features: ["Role-Based Access", "Token Refresh", "Audit Logs"],
  },
  {
    icon: Activity,
    title: "Real-time Transaction Monitor",
    desc: "Webhook-based system for tracking transaction status updates in real-time with comprehensive logging and retry mechanisms.",
    tags: ["Webhooks", "SLF4J", "Pagination"],
    features: ["Live Updates", "Error Handling", "Data Export"],
  },
];

const ProjectsSection = () => (
  <section id="projects" className="section-padding bg-surface">
    <div className="container mx-auto max-w-5xl">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="font-mono text-sm text-primary mb-2">// projects</h2>
        <h3 className="text-3xl md:text-4xl font-bold mb-12">
          Featured <span className="gradient-text">Work</span>
        </h3>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map(({ icon: Icon, title, desc, tags, features }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              className="group p-6 rounded-xl bg-card border border-border hover:border-primary/30 transition-all hover:glow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-lg bg-primary/10 text-primary">
                  <Icon size={20} />
                </div>
                <h4 className="font-bold text-foreground text-lg">{title}</h4>
              </div>

              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{desc}</p>

              <div className="flex flex-wrap gap-1.5 mb-4">
                {features.map((f) => (
                  <span key={f} className="px-2 py-1 text-xs rounded bg-primary/10 text-primary">
                    {f}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-2 pt-4 border-t border-border">
                {tags.map((tag) => (
                  <span key={tag} className="font-mono text-xs text-muted-foreground">
                    #{tag.replace(/\s/g, "")}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default ProjectsSection;
