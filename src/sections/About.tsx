import { motion } from "framer-motion";
import { profile, stats } from "../data/resume";

export default function About() {
  return (
    <section
      id="about"
      className="section-pad bg-base relative"
    >
      <div className="max-w-6xl mx-auto">

        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <span className="eyebrow">About</span>

          <h2 className="font-display text-3xl sm:text-5xl font-semibold text-ink mt-3 max-w-2xl">
            An engineer who likes to{" "}
            <span className="gradient-text">
              ship things
            </span>{" "}
            that work.
          </h2>
        </motion.div>

        {/* Main About content */}
        <div className="grid lg:grid-cols-5 gap-10 mt-16 items-start">

          {/* Profile image */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
          >
            <div className="relative">

              {/* Glow */}
              <div className="absolute -inset-4 bg-gradient-to-br from-indigo/20 via-violet/10 to-cyan/20 rounded-[2.5rem] blur-2xl" />

              {/* Card */}
              <div className="relative card-surface p-3 overflow-hidden">

                <div className="relative rounded-2xl overflow-hidden aspect-[4/5]">

                  <img
                    src={profile.photo}
                    alt={profile.name}
                    className="w-full h-full object-cover"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-ink/40 via-transparent to-transparent" />

                  <div className="absolute bottom-4 left-4 right-4 glass rounded-xl p-3">
                    <p className="font-display font-semibold text-ink text-sm">
                      {profile.name}
                    </p>

                    <p className="text-xs text-ink-soft font-mono mt-0.5">
                      {profile.location}
                    </p>
                  </div>

                </div>
              </div>

              {/* Floating badge */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 4,
                  ease: "easeInOut",
                }}
                className="absolute -right-4 -top-4 glass rounded-2xl px-4 py-3 shadow-glass hidden sm:block"
              >
                <p className="text-xs font-mono text-ink-soft">
                  Graduate
                </p>

                <p className="text-sm font-semibold text-emerald">
                  MCA · 2024–26
                </p>
              </motion.div>

            </div>
          </motion.div>

          {/* About text */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.7,
              delay: 0.1,
            }}
          >

            <p className="text-ink-soft text-lg leading-relaxed">
              {profile.summary}
            </p>

            {/* Statistics */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-10 p-6 card-surface">

              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="text-center"
                >
                  <div className="font-display text-4xl sm:text-5xl font-semibold gradient-text">
                    {stat.value}
                    {stat.suffix}
                  </div>

                  <p className="mt-2 text-sm text-ink-soft font-medium">
                    {stat.label}
                  </p>
                </div>
              ))}

            </div>

            {/* Technologies */}
            <div className="mt-10 flex flex-wrap gap-3">

              {[
                "Python",
                "Flask",
                "React",
                "MySQL",
                "Power BI",
                "Git",
              ].map((technology) => (
                <span
                  key={technology}
                  className="px-4 py-1.5 rounded-full text-sm font-mono bg-indigo-soft text-indigo border border-indigo/10"
                >
                  {technology}
                </span>
              ))}

            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
