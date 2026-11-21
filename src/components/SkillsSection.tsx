import { motion } from "framer-motion";

const categories = [
  {
    title: "Backend",
    skills: ["Java 8 & 17", "Spring Boot", "Spring MVC", "REST APIs", "Microservices"],
  },
  {
    title: "Database",
    skills: ["MySQL", "MSSQL", "Hibernate JPA", "Database Migration"],
  },
  {
    title: "Security",
    skills: ["JWT Authentication", "Encryption", "Secure APIs", "IP Tracking"],
  },
  {
    title: "Tools",
    skills: ["Postman", "Maven", "STS", "IntelliJ IDEA", "Git"],
  },
  {
    title: "Fintech",
    skills: ["UPI Integration", "AEPS", "DMT", "BBPS", "Payment Gateways"],
  },
  {
    title: "DevOps",
    skills: ["AWS Deployment", "SLF4J Logging", "Webhooks", "CI/CD"],
  },
];

const SkillsSection = () => (
  <section id="skills" className="section-padding bg-surface">
    <div className="container mx-auto">
      <h2 className="font-mono text-sm text-primary mb-2">// skills</h2>
      <h3 className="text-3xl md:text-4xl font-bold mb-12">
        Tech <span className="gradient-text">Stack</span>
      </h3>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map(({ title, skills }, i) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            whileHover={{
              y: -8,
              scale: 1.02,
            }}
            className="
        p-6 rounded-xl
        bg-card
        border border-border
        hover:border-primary/60
        hover:shadow-[0_0_25px_hsl(var(--primary)/0.15)]
        transition-all duration-300
        group
      "
          >
            {/* Category Title */}
            <h4
              className="
          font-mono text-primary text-sm mb-4
          transition-all duration-300
          group-hover:tracking-wider
        "
            >
              {`{${title}}`}
            </h4>

            {/* Skills */}
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="
              px-3 py-1.5
              text-xs
              rounded-md
              bg-secondary
              text-muted-foreground
              border border-border

              hover:text-primary
              hover:border-primary
              hover:bg-primary/10
              hover:scale-105
              hover:-translate-y-0.5

              transition-all duration-200
              cursor-default
            "
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default SkillsSection;
