import { motion } from "framer-motion";
import { HiOutlineDownload, HiOutlineDocumentText } from "react-icons/hi";
import Reveal from "../components/Reveal";
import { profile, education, skillCategories } from "../data/resume";

export default function Resume() {
  return (
    <section id="resume" className="section-pad bg-base">
      <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <Reveal>
          <span className="eyebrow">Resume</span>
          <h2 className="font-display text-3xl sm:text-5xl font-semibold text-ink mt-3">
            Prefer the <span className="gradient-text">one-pager?</span>
          </h2>
          <p className="text-ink-soft mt-5 leading-relaxed max-w-md">
            Everything on this site — education, internships, projects, and skills — condensed
            into a single PDF, ready to forward to your hiring team.
          </p>
          <a href="/assets/Attar_Mohammad_Awais_Resume.pdf" download className="btn-primary mt-8">
            <HiOutlineDownload /> Download Resume (PDF)
          </a>
        </Reveal>

        <Reveal delay={0.15}>
          <motion.div
            whileHover={{ rotate: 0, scale: 1.02 }}
            initial={{ rotate: 2 }}
            className="relative card-surface p-8 max-w-sm mx-auto"
          >
            <div className="flex items-center gap-3 pb-4 border-b border-border">
              <span className="w-10 h-10 rounded-xl bg-indigo-soft text-indigo flex items-center justify-center text-lg">
                <HiOutlineDocumentText />
              </span>
              <div>
                <p className="font-display font-semibold text-ink text-sm">{profile.name}</p>
                <p className="text-xs text-ink-faint font-mono">Resume.pdf</p>
              </div>
            </div>

            <div className="mt-5 space-y-3">
              {education.slice(0, 2).map((e) => (
                <div key={e.degree} className="text-xs">
                  <p className="font-semibold text-ink-soft">{e.degree}</p>
                  <p className="text-ink-faint font-mono">
                    {e.period} · GPA {e.gpa.toFixed(2)}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-5 flex flex-wrap gap-1.5">
              {skillCategories
                .flatMap((c) => c.skills)
                .slice(0, 8)
                .map((s) => (
                  <span
                    key={s}
                    className="text-[10px] font-mono px-2 py-1 rounded-md bg-base text-ink-faint border border-border"
                  >
                    {s}
                  </span>
                ))}
            </div>

            <div className="absolute -z-10 -inset-3 bg-gradient-to-br from-indigo/10 to-cyan/10 rounded-[2rem] blur-xl" />
          </motion.div>
        </Reveal>
      </div>
    </section>
  );
}
