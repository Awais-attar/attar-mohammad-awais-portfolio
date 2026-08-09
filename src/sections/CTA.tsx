import { HiOutlineCalendar, HiOutlineDownload } from "react-icons/hi";
import { HiOutlineRocketLaunch } from "react-icons/hi2";
import Reveal from "../components/Reveal";

export default function CTA() {
  return (
    <section className="section-pad !py-20 bg-ink relative overflow-hidden">
      <div className="absolute inset-0 bg-mesh-1 opacity-40 bg-[length:200%_200%] animate-gradient" />
      <div className="max-w-4xl mx-auto text-center relative">
        <Reveal>
          <h2 className="font-display text-3xl sm:text-5xl font-semibold text-white leading-tight">
            Ready to Build Innovative Software Solutions
          </h2>
          <p className="text-white/70 mt-5 max-w-2xl mx-auto leading-relaxed">
            I'm actively looking for Software Engineer, Full Stack Developer, Python Developer,
            React Developer, AI Engineer, and Application Developer opportunities. Let's connect
            and build something amazing together.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 mt-10">
            <a href="#contact" className="btn-primary">
              <HiOutlineRocketLaunch /> Hire Me
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-white border border-white/20 bg-white/5 backdrop-blur hover:bg-white/10 transition-colors">
              <HiOutlineCalendar /> Schedule Interview
            </a>
            <a
              href="/assets/Attar_Mohammad_Awais_Resume.pdf"
              download
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-white border border-white/20 bg-white/5 backdrop-blur hover:bg-white/10 transition-colors"
            >
              <HiOutlineDownload /> Download Resume
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
