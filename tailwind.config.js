/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        base: "#F6F7FB",
        surface: "#FFFFFF",
        ink: "#12131A",
        "ink-soft": "#5B5F73",
        "ink-faint": "#9297AB",
        border: "#E7E9F2",
        indigo: {
          DEFAULT: "#4F46E5",
          soft: "#EEF0FE",
        },
        royal: "#2563EB",
        violet: "#7C3AED",
        cyan: "#06B6D4",
        emerald: "#10B981",
      },
      fontFamily: {
        display: ["'Space Grotesk'", "sans-serif"],
        body: ["'Inter'", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      boxShadow: {
        glass: "0 8px 32px 0 rgba(79, 70, 229, 0.08)",
        card: "0 2px 8px rgba(18, 19, 26, 0.04), 0 12px 32px rgba(18, 19, 26, 0.06)",
        "card-hover": "0 8px 16px rgba(18, 19, 26, 0.06), 0 24px 48px rgba(79, 70, 229, 0.12)",
        glow: "0 0 40px rgba(124, 58, 237, 0.25)",
      },
      backgroundImage: {
        "mesh-1": "radial-gradient(at 20% 20%, rgba(79,70,229,0.35) 0px, transparent 50%), radial-gradient(at 80% 15%, rgba(6,182,212,0.28) 0px, transparent 50%), radial-gradient(at 50% 80%, rgba(124,58,237,0.30) 0px, transparent 50%)",
      },
      animation: {
        "spin-slow": "spin 26s linear infinite",
        "spin-slower": "spin 40s linear infinite reverse",
        float: "float 6s ease-in-out infinite",
        "float-delay": "float 7s ease-in-out infinite 1.2s",
        gradient: "gradientShift 12s ease infinite",
        marquee: "marquee 26s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-18px)" },
        },
        gradientShift: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};
