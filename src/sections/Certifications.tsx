import { HiOutlineBadgeCheck } from "react-icons/hi";
import Reveal from "../components/Reveal";
import MagneticCard from "../components/MagneticCard";
import { certifications } from "../data/resume";

export default function Certifications() {
  return (
    <section id="certifications" className="section-pad bg-surface">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <span className="eyebrow">Certifications</span>
          <h2 className="font-display text-3xl sm:text-5xl font-semibold text-ink mt-3 max-w-2xl">
            Learning, <span className="gradient-text">validated</span>
          </h2>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
          {certifications.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.06}>
              <MagneticCard className="card-surface p-6 h-full flex items-start gap-4 group">
                <span className="w-11 h-11 rounded-xl bg-gradient-to-br from-indigo to-cyan text-white flex items-center justify-center text-lg flex-shrink-0 group-hover:scale-110 transition-transform">
                  <HiOutlineBadgeCheck />
                </span>
                <div>
                  <h3 className="font-display font-semibold text-ink text-sm leading-snug">
                    {c.title}
                  </h3>
                  <p className="text-xs text-ink-faint font-mono mt-2">{c.issuer}</p>
                </div>
              </MagneticCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
