import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";

const achievements = [
  "Built end-to-end Payin & Payout systems processing real-time transactions",
  "Developed Bulk Payout APIs for batch transaction processing",
  "Integrated Banking APIs — UPI, RBL, IDFC for seamless payments",
  "Implemented JWT authentication & role-based security system",
  "Designed wallet systems with complete transaction tracking",
  "Built real-time webhook notification systems",
  "Handled MSSQL → MySQL database migration",
  "Implemented API logging & monitoring using SLF4J",
];

const ExperienceSection = () => (
  <section id="experience" className="section-padding">
    <div className="container mx-auto max-w-5xl">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="font-mono text-sm text-primary mb-2">// experience</h2>
        <h3 className="text-3xl md:text-4xl font-bold mb-12">
          Work <span className="gradient-text">History</span>
        </h3>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-border hidden md:block" />

          <div className="md:pl-16 relative">
            {/* Timeline dot */}
            <div className="absolute left-[18px] top-8 w-4 h-4 rounded-full bg-primary glow-sm hidden md:block" />

            <div className="p-6 md:p-8 rounded-xl bg-card border border-border">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6">
                <div>
                  <h4 className="text-xl font-bold text-foreground">Java Backend Developer</h4>
                  <div className="flex items-center gap-2 mt-1">
                    <Briefcase size={14} className="text-primary" />
                    <span className="text-primary font-medium">SambhavPay Payment Solutions Pvt. Ltd.</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 mt-2 sm:mt-0 text-muted-foreground text-sm">
                  <Calendar size={14} />
                  <span>Oct 2023 — Present</span>
                </div>
              </div>

              <ul className="space-y-3">
                {achievements.map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    className="flex items-start gap-3 text-muted-foreground"
                  >
                    <span className="text-primary mt-1.5 shrink-0">▹</span>
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default ExperienceSection;
