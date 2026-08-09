import { motion } from "framer-motion";
import { internships } from "../data/resume";

export default function Internships() {
  return (
    <section id="internships" className="section-pad bg-base">
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <div>
          <span className="eyebrow">Experience</span>

          <h2 className="font-display text-3xl sm:text-5xl font-semibold text-ink mt-3">
            My <span className="gradient-text">Internships</span>
          </h2>

          <p className="text-ink-soft mt-4 max-w-2xl">
            Practical experience gained through internships, real projects,
            development tasks, and data visualization work.
          </p>
        </div>

        {/* Internship Cards */}
        <div className="grid md:grid-cols-2 gap-6 mt-12">
          {internships.map((internship) => (
            <motion.div
              key={`${internship.org}-${internship.role}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -5 }}
              className="card-surface p-7 h-full relative overflow-hidden"
            >
              {/* Top Line */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo via-violet to-cyan" />

              {/* Period */}
              <div className="flex items-center justify-between gap-4">
                <span className="text-xs font-mono uppercase tracking-widest text-indigo">
                  {internship.period}
                </span>
              </div>

              {/* Role */}
              <h3 className="font-display text-xl sm:text-2xl font-semibold text-ink mt-5">
                {internship.role}
              </h3>

              {/* Organization */}
              <p className="text-indigo font-medium mt-2">
                {internship.org}
              </p>

              {/* Points */}
              <ul className="mt-6 space-y-3">
                {internship.points.map((point) => (
                  <li
                    key={point}
                    className="flex items-start gap-3 text-sm text-ink-soft leading-relaxed"
                  >
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-indigo flex-shrink-0" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}