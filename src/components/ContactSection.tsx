import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle,
  Loader2,
} from "lucide-react";
import { useState } from "react";

const ContactSection = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsSubmitting(true);
    setIsSuccess(false);
    setError("");

    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/nandanwarprashant3698@gmail.com",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            name: form.name,
            email: form.email,
            message: form.message,
            _subject: `New Portfolio Contact from ${form.name}`,
            _template: "table",
            _captcha: "false",
          }),
        }
      );

      const data = await response.json();

      console.log("FormSubmit Response:", data);

      if (response.ok) {
        setIsSuccess(true);

        setForm({
          name: "",
          email: "",
          message: "",
        });
      } else {
        setError("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("FormSubmit Error:", error);
      setError("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-padding">
      <div className="container mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-mono text-sm text-primary mb-2">
            // contact
          </h2>

          <h3 className="text-3xl md:text-4xl font-bold mb-12">
            Get In <span className="gradient-text">Touch</span>
          </h3>

          <div className="grid md:grid-cols-2 gap-10">

            {/* LEFT SIDE */}
            <div className="space-y-6">

              <p className="text-muted-foreground leading-relaxed">
                I'm currently open to new opportunities and collaborations.
                Whether you have a project in mind or just want to connect,
                feel free to reach out.
              </p>

              <div className="space-y-4">

                {[
                  {
                    icon: Mail,
                    label: "nandanwarprashant3698@gmail.com",
                    href: "mailto:nandanwarprashant3698@gmail.com",
                  },
                  {
                    icon: Phone,
                    label: "+91 8390535956",
                    href: "tel:+918390535956",
                  },
                  {
                    icon: MapPin,
                    label: "Gurugram, India",
                    href: "#",
                  },
                ].map(({ icon: Icon, label, href }) => (
                  <a
                    key={label}
                    href={href}
                    className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                  >
                    <div className="p-2 rounded-lg bg-secondary text-primary">
                      <Icon size={16} />
                    </div>

                    <span className="text-sm">
                      {label}
                    </span>
                  </a>
                ))}

              </div>

              {/* Terminal */}
              <div className="p-4 rounded-lg bg-card border border-border font-mono text-sm">

                <div className="flex items-center gap-2 mb-3">
                  <span className="w-3 h-3 rounded-full bg-destructive/60" />
                  <span
                    className="w-3 h-3 rounded-full"
                    style={{
                      background: "hsl(45 93% 47% / 0.6)",
                    }}
                  />
                  <span className="w-3 h-3 rounded-full bg-terminal-green/60" />
                </div>

                <p className="text-muted-foreground">
                  <span className="text-terminal-green">$ </span>
                  <span className="text-primary">whoami</span>
                </p>

                <p className="text-foreground">
                  prashant-nandanwar
                </p>

                <p className="text-muted-foreground mt-1">
                  <span className="text-terminal-green">$ </span>
                  <span className="text-primary">cat</span> status.txt
                </p>

                <p className="text-foreground">
                  Open to work 🚀
                </p>

              </div>
            </div>

            {/* RIGHT SIDE */}
            <div>

              {/* SUCCESS UI */}
              {isSuccess ? (

                <div className="flex flex-col items-center justify-center text-center py-12 px-6 rounded-xl border border-border bg-card">

                  <div className="flex items-center justify-center w-16 h-16 rounded-full bg-green-100 text-green-600 mb-5">
                    <CheckCircle size={34} />
                  </div>

                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    Message sent successfully!
                  </h3>

                  <p className="text-muted-foreground max-w-md mb-6">
                    Thank you for reaching out. I have received your
                    message and will get back to you as soon as possible.
                  </p>

                  <button
                    type="button"
                    onClick={() => setIsSuccess(false)}
                    className="px-5 py-2.5 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity"
                  >
                    Send another message
                  </button>

                </div>

              ) : (

                /* FORM */
                <form
                  onSubmit={handleSubmit}
                  className="space-y-4"
                >

                  {/* NAME */}
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">
                      Name
                    </label>

                    <input
                      type="text"
                      name="name"
                      required
                      maxLength={100}
                      value={form.name}
                      onChange={(e) =>
                        setForm({
                          ...form,
                          name: e.target.value,
                        })
                      }
                      className="w-full px-4 py-3 rounded-lg bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-colors"
                      placeholder="Your name"
                    />
                  </div>

                  {/* EMAIL */}
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">
                      Email
                    </label>

                    <input
                      type="email"
                      name="email"
                      required
                      maxLength={255}
                      value={form.email}
                      onChange={(e) =>
                        setForm({
                          ...form,
                          email: e.target.value,
                        })
                      }
                      className="w-full px-4 py-3 rounded-lg bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>

                  {/* MESSAGE */}
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">
                      Message
                    </label>

                    <textarea
                      required
                      name="message"
                      maxLength={1000}
                      rows={5}
                      value={form.message}
                      onChange={(e) =>
                        setForm({
                          ...form,
                          message: e.target.value,
                        })
                      }
                      className="w-full px-4 py-3 rounded-lg bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-colors resize-none"
                      placeholder="Tell me about your project..."
                    />
                  </div>

                  {/* ERROR */}
                  {error && (
                    <div className="p-3 rounded-lg bg-red-50 border border-red-200 text-red-600 text-sm">
                      {error}
                    </div>
                  )}

                  {/* SUBMIT BUTTON */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity glow-sm disabled:opacity-60 disabled:cursor-not-allowed"
                  >

                    {isSubmitting ? (
                      <>
                        <Loader2
                          size={17}
                          className="animate-spin"
                        />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={16} />
                        Send Message
                      </>
                    )}

                  </button>

                </form>
              )}

            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;