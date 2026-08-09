import { HiOutlineMail, HiArrowUp } from "react-icons/hi";
import { FaGithub, FaLinkedin, FaBehance } from "react-icons/fa";
import { profile } from "../data/resume";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-slate-950 text-white py-10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Brand */}
          <div className="text-center md:text-left">
            <h3 className="font-display text-2xl font-semibold text-white">
              Awais<span className="text-indigo-400">.</span>
            </h3>

            <p className="text-sm text-white/60 mt-2 max-w-md">
              Software Engineer & Full Stack Developer, building thoughtful
              products end to end.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            {/* GitHub */}
            <a
              href="https://github.com/Awais-attar"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="group w-11 h-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10 hover:border-white/20 hover:-translate-y-1 transition-all duration-300"
            >
              <FaGithub className="text-lg group-hover:scale-110 transition-transform" />
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/attarmohammadawais/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="group w-11 h-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10 hover:border-white/20 hover:-translate-y-1 transition-all duration-300"
            >
              <FaLinkedin className="text-lg group-hover:scale-110 transition-transform" />
            </a>

            {/* Behance */}
            <a
              href="https://www.behance.net/attarawais"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Behance"
              className="group w-11 h-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10 hover:border-white/20 hover:-translate-y-1 transition-all duration-300"
            >
              <FaBehance className="text-lg group-hover:scale-110 transition-transform" />
            </a>

            {/* Email */}
            <a
              href="mailto:attarmohammadawais05@gmail.com"
              aria-label="Email"
              className="group w-11 h-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10 hover:border-white/20 hover:-translate-y-1 transition-all duration-300"
            >
              <HiOutlineMail className="text-lg group-hover:scale-110 transition-transform" />
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-8 pt-6 border-t border-white/10 text-xs text-white/50">
          <p>
            © {new Date().getFullYear()} {profile.name}. All rights reserved.
          </p>

          <a
            href="#home"
            className="group flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 hover:bg-white/10 hover:text-white transition-all duration-300"
          >
            Back to top
            <HiArrowUp className="group-hover:-translate-y-1 transition-transform" />
          </a>
        </div>
      </div>
    </footer>
  );
}
