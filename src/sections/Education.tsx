import { motion } from "framer-motion";
import { education } from "../data/resume";

export default function Education() {
  return (
    <section id="education" className="section-pad bg-base">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div>
          <span className="eyebrow">Education</span>

          <h2 className="font-display text-3xl sm:text-5xl font-semibold text-ink mt-3">
            My <span className="gradient-text">Education</span>
          </h2>

          <p className="text-ink-soft mt-4 max-w-2xl">
            My academic journey and educational background.
          </p>
        </div>

        {/* Education Cards */}
        <div className="grid md:grid-cols-2 gap-6 mt-12">
          {education.map((item, index) => (
            <motion.div
              key={`${item.degree}-${item.school}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              whileHover={{ y: -5 }}
              className="card-surface p-7 relative overflow-hidden"
            >
              {/* Top Line */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo via-violet to-cyan" />

              {/* Period */}
              <span className="text-xs font-mono uppercase tracking-widest text-indigo">
                {item.period}
              </span>

              {/* Degree */}
              <h3 className="font-display text-xl sm:text-2xl font-semibold text-ink mt-5">
                {item.degree}
              </h3>

              {/* School */}
              <p className="text-ink-soft mt-3 leading-relaxed">
                {item.school}
              </p>

              {/* GPA */}
              <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-indigo-soft">
                <span className="text-xs font-mono uppercase tracking-wider text-indigo">
                  GPA
                </span>

                <span className="font-semibold text-ink">
                  {item.gpa}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}