import { motion } from "framer-motion";
import { Code2, Shield, Zap } from "lucide-react";

const highlights = [
  { icon: Code2, title: "Backend Expert", desc: "Spring Boot, REST APIs, Hibernate JPA" },
  { icon: Shield, title: "Security Focused", desc: "JWT Auth, Encryption, Secure APIs" },
  { icon: Zap, title: "Fintech Specialist", desc: "Payment Gateways, UPI, AEPS, DMT" },
];

const AboutSection = () => (
  <section id="about" className="section-padding">
    <div className="container mx-auto max-w-5xl">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="font-mono text-sm text-primary mb-2">// about me</h2>
        <h3 className="text-3xl md:text-4xl font-bold mb-8">
          Crafting <span className="gradient-text">robust backends</span> for fintech
        </h3>

        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              I'm a Java Backend Developer with hands-on experience in building payment systems 
              including Payin & Payout solutions. I specialize in creating scalable, secure APIs 
              using Spring Boot and modern Java practices.
            </p>
            <p>
              Currently working at SambhavPay Payment Solutions, I've built real-time webhook systems, 
              integrated banking APIs (UPI, RBL, IDFC), and designed wallet systems handling thousands 
              of transactions daily.
            </p>
            <p>
              My focus is on clean architecture, proper security implementation, and building systems 
              that scale reliably in production.
            </p>
          </div>

          <div className="space-y-4">
            {highlights.map(({ icon: Icon, title, desc }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="flex gap-4 p-4 rounded-lg bg-card border border-border hover:border-primary/30 transition-colors"
              >
                <div className="p-2.5 rounded-lg bg-primary/10 text-primary shrink-0 h-fit">
                  <Icon size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">{title}</h4>
                  <p className="text-sm text-muted-foreground">{desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default AboutSection;
