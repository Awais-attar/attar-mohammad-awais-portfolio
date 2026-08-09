import { motion, AnimatePresence } from "framer-motion";
import { HiX, HiOutlineCheckCircle } from "react-icons/hi";
import { projects } from "../data/resume";

type Project = (typeof projects)[number];

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({
  project,
  onClose,
}: ProjectModalProps) {
  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/30"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 24 }}
            transition={{
              duration: 0.35,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-3xl bg-surface shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            {/* Header */}
            <div
              className={`h-28 bg-gradient-to-r ${project.gradient} relative`}
            >
              <button
                type="button"
                onClick={onClose}
                className="absolute right-4 top-4 w-9 h-9 rounded-full bg-white/20 backdrop-blur flex items-center justify-center text-white hover:bg-white/30 transition"
                aria-label="Close project"
              >
                <HiX size={20} />
              </button>
            </div>

            {/* Content */}
            <div className="p-6 sm:p-8">
              <h3 className="font-display text-2xl sm:text-3xl font-semibold text-ink">
                {project.title}
              </h3>

              <p className="text-ink-soft mt-3 leading-relaxed">
                {project.description}
              </p>

              {/* Highlights */}
              <h4 className="font-mono text-xs uppercase tracking-widest text-indigo mt-6 mb-3">
                Highlights
              </h4>

              <ul className="space-y-2">
                {project.highlights.map((highlight) => (
                  <li
                    key={highlight}
                    className="flex items-start gap-2 text-sm text-ink-soft"
                  >
                    <HiOutlineCheckCircle className="text-emerald mt-0.5 flex-shrink-0" />
                    {highlight}
                  </li>
                ))}
              </ul>

              {/* Tech Stack */}
              <h4 className="font-mono text-xs uppercase tracking-widest text-indigo mt-6 mb-3">
                Tech Stack
              </h4>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((technology) => (
                  <span
                    key={technology}
                    className="px-3 py-1 rounded-lg text-xs font-mono bg-base text-ink-soft border border-border"
                  >
                    {technology}
                  </span>
                ))}
              </div>

              {/* Project Links */}
              <div className="flex flex-col sm:flex-row gap-3 mt-8">
                {"live" in project && project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary flex-1 justify-center"
                  >
                    Live Demo ↗
                  </a>
                )}

                {"github" in project && project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary flex-1 justify-center"
                  >
                    GitHub ↗
                  </a>
                )}

                {"behance" in project && project.behance && (
                  <a
                    href={project.behance}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary flex-1 justify-center"
                  >
                    Behance ↗
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}