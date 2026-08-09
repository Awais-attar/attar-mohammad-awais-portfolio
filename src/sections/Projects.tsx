import { useState } from "react";
import { HiOutlineArrowUpRight } from "react-icons/hi2";
import Reveal from "../components/Reveal";
import ProjectModal from "../components/ProjectModal";
import { projects } from "../data/resume";

type Project = (typeof projects)[number];

export default function Projects() {
  const [active, setActive] = useState<Project | null>(null);

  return (
    <section id="projects" className="section-pad bg-base">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <Reveal>
          <span className="eyebrow">Projects</span>

          <h2 className="font-display text-3xl sm:text-5xl font-semibold text-ink mt-3">
            Things I've actually{" "}
            <span className="gradient-text">built.</span>
          </h2>
        </Reveal>

        {/* Project Cards */}
        <div className="grid md:grid-cols-2 gap-6 mt-16">
          {projects.map((project, index) => (
            <Reveal
              key={project.title}
              delay={index * 0.1}
              className={index === 0 ? "md:col-span-2" : ""}
            >
              <button
                type="button"
                onClick={() => setActive(project)}
                className="text-left w-full card-surface p-8 group relative overflow-hidden"
              >
                {/* Top Gradient */}
                <div
                  className={`absolute top-0 left-0 h-1.5 w-full bg-gradient-to-r ${project.gradient}`}
                />

                {/* Title */}
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-display text-xl sm:text-2xl font-semibold text-ink group-hover:text-indigo transition-colors">
                    {project.title}
                  </h3>

                  <span className="w-10 h-10 rounded-full bg-indigo-soft text-indigo flex items-center justify-center flex-shrink-0 group-hover:bg-indigo group-hover:text-white transition-colors">
                    <HiOutlineArrowUpRight />
                  </span>
                </div>

                {/* Description */}
                <p className="text-ink-soft mt-3 leading-relaxed line-clamp-2">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mt-6">
                  {project.tech.slice(0, 5).map((technology) => (
                    <span
                      key={technology}
                      className="px-3 py-1 rounded-lg text-xs font-mono bg-base text-ink-soft border border-border"
                    >
                      {technology}
                    </span>
                  ))}

                  {project.tech.length > 5 && (
                    <span className="px-3 py-1 rounded-lg text-xs font-mono text-ink-faint">
                      +{project.tech.length - 5} more
                    </span>
                  )}
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Project Modal */}
      <ProjectModal
        project={active}
        onClose={() => setActive(null)}
      />
    </section>
  );
}