import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="section-pad bg-base">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="eyebrow">Get in Touch</span>

          <h2 className="font-display text-4xl sm:text-5xl font-semibold text-ink mt-3">
            Let's build something{" "}
            <span className="gradient-text">great.</span>
          </h2>

          <p className="text-ink-soft text-lg max-w-2xl mx-auto mt-6 leading-relaxed">
            Interested in working together, discussing an opportunity, or
            simply want to connect? Feel free to send me an email.
          </p>

          <p className="text-ink-soft mt-4">
            I usually respond as quickly as possible.
          </p>

          <motion.a
            href="mailto:attarmohammadawais05@gmail.com?subject=Portfolio%20Inquiry"
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.98 }}
            className="btn-primary inline-flex items-center gap-2 mt-8"
          >
            <span>✉</span>
            Email Me
            <span>↗</span>
          </motion.a>

          <div className="mt-6">
            <a
              href="mailto:attarmohammadawais05@gmail.com"
              className="text-indigo font-mono text-sm hover:underline"
            >
              attarmohammadawais05@gmail.com
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}