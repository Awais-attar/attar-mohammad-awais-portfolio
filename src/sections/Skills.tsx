import type { ReactNode } from "react";
import {
  HiOutlineCode,
  HiOutlineCollection,
  HiOutlineDatabase,
  HiOutlineChip,
  HiOutlineAdjustments,
  HiOutlineSparkles,
  HiOutlineColorSwatch,
} from "react-icons/hi";
import Reveal from "../components/Reveal";
import MagneticCard from "../components/MagneticCard";
import { skillCategories } from "../data/resume";

const iconMap: Record<string, ReactNode> = {
  code: <HiOutlineCode />,
  layers: <HiOutlineCollection />,
  database: <HiOutlineDatabase />,
  design: <HiOutlineColorSwatch />,
  tool: <HiOutlineAdjustments />,
  cpu: <HiOutlineChip />,
  "layers-3": <HiOutlineSparkles />,
};

export default function Skills() {
  return (
    <section id="skills" className="section-pad bg-surface relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-mesh-1 opacity-40 blur-3xl -z-0" />
      <div className="max-w-6xl mx-auto relative">
        <Reveal>
          <span className="eyebrow">Skills</span>
          <h2 className="font-display text-3xl sm:text-5xl font-semibold text-ink mt-3 max-w-2xl">
            Tools I reach for to <span className="gradient-text">build &amp; ship</span>
          </h2>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
          {skillCategories.map((cat, i) => (
            <Reveal key={cat.title} delay={i * 0.08}>
              <MagneticCard className="card-surface p-6 h-full group relative overflow-hidden">
                <div className="absolute -right-6 -top-6 w-24 h-24 rounded-full bg-gradient-to-br from-indigo/10 to-cyan/10 group-hover:scale-150 transition-transform duration-700" />
                <div className="relative z-10">
                  <div className="w-11 h-11 rounded-xl bg-indigo-soft text-indigo flex items-center justify-center text-xl group-hover:shadow-glow transition-shadow duration-500">
                    {iconMap[cat.icon]}
                  </div>
                  <h3 className="font-display font-semibold text-ink text-lg mt-4">{cat.title}</h3>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {cat.skills.map((s) => (
                      <span
                        key={s}
                        className="px-3 py-1 rounded-lg text-xs font-mono bg-base text-ink-soft border border-border group-hover:border-indigo/30 group-hover:text-indigo transition-colors"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </MagneticCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
