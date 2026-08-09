import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";
import { navLinks } from "../data/resume";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = navLinks
      .map((l) => document.querySelector(l.href))
      .filter(Boolean) as Element[];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div
        className={`mx-4 sm:mx-8 lg:mx-16 rounded-2xl transition-all duration-500 ${
          scrolled ? "glass shadow-glass" : "bg-transparent"
        }`}
      >
        <nav className="flex items-center justify-between px-5 sm:px-6 py-3">
          <a href="#home" className="font-display font-semibold text-lg tracking-tight text-ink">
            Awais<span className="gradient-text">.</span>
          </a>

          <ul className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <li key={link.href} className="relative">
                <a
                  href={link.href}
                  className={`relative px-4 py-2 text-sm font-medium transition-colors ${
                    active === link.href ? "text-indigo" : "text-ink-soft hover:text-ink"
                  }`}
                >
                  {link.label}
                  {active === link.href && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute left-4 right-4 -bottom-0.5 h-[2px] rounded-full bg-gradient-to-r from-indigo to-cyan"
                    />
                  )}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden lg:block">
            <a href="#contact" className="btn-primary !py-2.5 !px-5 text-sm">
              Hire Me
            </a>
          </div>

          <button
            className="lg:hidden text-2xl text-ink p-2"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <HiX /> : <HiMenu />}
          </button>
        </nav>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden mx-4 mt-2 rounded-2xl glass shadow-glass overflow-hidden"
          >
            <ul className="flex flex-col p-4 gap-1">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block px-4 py-3 rounded-xl text-sm font-medium text-ink-soft hover:bg-indigo-soft hover:text-indigo transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
