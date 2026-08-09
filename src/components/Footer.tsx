import { HiOutlineMail, HiArrowUp } from "react-icons/hi";
import { FaGithub, FaLinkedin, FaBehance } from "react-icons/fa";
import { profile } from "../data/resume";

export default function Footer() {
  return (
    <footer className="relative bg-ink text-white/70 px-6 sm:px-10 lg:px-24 pt-16 pb-8 overflow-hidden">
      <div className="absolute inset-0 bg-mesh-1 opacity-10" />
      <div className="max-w-6xl mx-auto relative flex flex-col sm:flex-row items-center justify-between gap-8 pb-8 border-b border-white/10">
        <div>
          <p className="font-display text-xl font-semibold text-white">
            Awais<span className="gradient-text">.</span>
          </p>
          <p className="text-sm mt-2 max-w-xs">
            Software Engineer &amp; Full Stack Developer, building thoughtful products end to end.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="w-11 h-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/15 hover:-translate-y-1 transition-all"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="w-11 h-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/15 hover:-translate-y-1 transition-all"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href={profile.behance}
            target="_blank"
            rel="noreferrer"
            className="w-11 h-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/15 hover:-translate-y-1 transition-all"
            aria-label="Behance"
          >
            <FaBehance />
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="w-11 h-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/15 hover:-translate-y-1 transition-all"
            aria-label="Email"
          >
            <HiOutlineMail />
          </a>
        </div>
      </div>

      <div className="max-w-6xl mx-auto relative flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 text-xs">
        <p>© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
        <a
          href="#home"
          className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 hover:bg-white/10 transition-colors"
        >
          Back to top <HiArrowUp />
        </a>
      </div>
    </footer>
  );
}
