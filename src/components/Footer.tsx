import { HiOutlineMail, HiArrowUp } from "react-icons/hi";
import { FaGithub, FaLinkedin, FaBehance } from "react-icons/fa";
import { profile } from "../data/resume";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-display text-xl font-semibold">
              Awais.
            </h3>

            <p className="text-sm text-white/60 mt-2">
              Software Engineer & Full Stack Developer, building thoughtful
              products end to end.
            </p>
          </div>

          <div className="flex items-center gap-3">
            {/* GitHub */}
            <a
              href="https://github.com/Awais-attar"
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/15 hover:-translate-y-1 transition-all"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/attarmohammadawais/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/15 hover:-translate-y-1 transition-all"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>

            {/* Behance */}
            <a
              href="https://www.behance.net/attarawais"
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/15 hover:-translate-y-1 transition-all"
              aria-label="Behance"
            >
              <FaBehance />
            </a>

            {/* Email */}
            <a
              href="mailto:attarmohammadawais05@gmail.com"
              className="w-11 h-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/15 hover:-translate-y-1 transition-all"
              aria-label="Email"
            >
              <HiOutlineMail />
            </a>
          </div>
        </div>

        <div className="max-w-6xl mx-auto relative flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 mt-6 border-t border-white/10 text-xs text-white/50">
          <p>
            © {new Date().getFullYear()} {profile.name}. All rights reserved.
          </p>

          <a
            href="#home"
            className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 hover:bg-white/10 transition-colors"
          >
            Back to top <HiArrowUp />
          </a>
        </div>
      </div>
    </footer>
  );
}
