import { lazy, Suspense } from "react";
import { motion } from "framer-motion";
import { HiOutlineArrowDown, HiOutlineDownload, HiOutlineMail } from "react-icons/hi";
import { HiOutlineRocketLaunch } from "react-icons/hi2";
import ErrorBoundary from "../components/ErrorBoundary";
import { profile } from "../data/resume";

// Three.js is heavy — load it only after the initial paint so the hero's
// text and CTAs are interactive immediately.
const HeroScene = lazy(() => import("../components/HeroScene"));

const wordVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.06 },
  },
};

const letter = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
};

export default function Hero() {
  const name = profile.name.split(" ");

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-base"
    >
      {/* Animated gradient mesh */}
      <div className="absolute inset-0 bg-mesh-1 bg-[length:200%_200%] animate-gradient" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-base" />

      {/* Floating glow orbs */}
      <div className="absolute top-1/4 left-[10%] w-72 h-72 rounded-full bg-indigo/20 blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-[8%] w-96 h-96 rounded-full bg-cyan/20 blur-3xl animate-float-delay" />
      <div className="absolute top-1/2 right-1/3 w-64 h-64 rounded-full bg-violet/20 blur-3xl animate-float" />

      {/* 3D signature scene — isolated so a WebGL failure can't blank the page */}
      <ErrorBoundary>
        <Suspense fallback={null}>
          <HeroScene />
        </Suspense>
      </ErrorBoundary>

      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-5xl">
        <motion.span
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="eyebrow mb-6 px-4 py-1.5 rounded-full glass"
        >
          Open to IT Roles
        </motion.span>

        <motion.h1
          variants={wordVariants}
          initial="hidden"
          animate="show"
          className="font-display font-semibold text-[13vw] sm:text-7xl md:text-8xl leading-[0.95] tracking-tight text-ink"
        >
          <span className="block overflow-hidden">
            {name[0].split("").map((c, i) => (
              <motion.span key={i} variants={letter} className="inline-block">
                {c}
              </motion.span>
            ))}
          </span>
          <span className="block overflow-hidden gradient-text">
            {name.slice(1).join(" ").split("").map((c, i) => (
              <motion.span key={i} variants={letter} className="inline-block">
                {c === " " ? "\u00A0" : c}
              </motion.span>
            ))}
          </span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="mt-6 h-8 overflow-hidden"
        >
          <RotatingRoles />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.6 }}
          className="mt-6 max-w-xl text-ink-soft text-base sm:text-lg leading-relaxed"
        >
          Building full-stack products with Python, Flask &amp; React — and turning messy data
          into dashboards people actually use.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 0.6 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <a href="/assets/Attar_Mohammad_Awais_Resume.pdf" download className="btn-primary">
            <HiOutlineDownload /> Download Resume
          </a>
          <a href="#contact" className="btn-secondary">
            <HiOutlineRocketLaunch /> Hire Me
          </a>
          <a href="#projects" className="btn-secondary">
            View Projects
          </a>
          <a href="#contact" className="btn-secondary">
            <HiOutlineMail /> Contact Me
          </a>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="absolute bottom-10 z-10 flex flex-col items-center gap-2 text-ink-faint text-xs font-mono"
      >
        Scroll
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.6 }}
        >
          <HiOutlineArrowDown />
        </motion.span>
      </motion.a>
    </section>
  );
}

function RotatingRoles() {
  const roles = [
    "Software Engineer",
    "Full Stack Developer",
    "Python Developer",
    "React Developer",
    "AI Enthusiast",
    "Problem Solver",
    "MCA Graduate",
  ];

  return (
    <div className="relative h-8 font-mono text-sm sm:text-base text-indigo font-medium">
      {roles.map((role, i) => (
        <motion.span
          key={role}
          className="absolute inset-x-0"
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: [0, 1, 1, 0],
            y: [20, 0, 0, -20],
          }}
          transition={{
            duration: roles.length * 2,
            times: [0, 0.05, 0.85, 1],
            delay: i * 2,
            repeat: Infinity,
            repeatDelay: 0,
          }}
        >
          {role}
        </motion.span>
      ))}
    </div>
  );
}
