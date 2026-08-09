# Attar Mohammad Awais — Portfolio

A premium, animated portfolio built with React 19 + Vite + TypeScript, styled with Tailwind CSS,
and backed by a small Flask API that sends contact-form messages straight to your inbox.

Live sections: Home · About · Skills · Projects · Internships · Education · Certifications ·
Resume · Contact — all driven from one typed data file, `src/data/resume.ts`, sourced from the
resume you provided.

## Tech stack

**Frontend** — React 19, Vite, TypeScript, Tailwind CSS, Framer Motion, React Three Fiber + Drei
(the hero's 3D orbit), React Icons, React CountUp, React Hook Form, React Intersection Observer,
canvas-confetti.

**Backend** — Python + Flask, sends contact-form email via SMTP (`backend/app.py`).

> **A note on the original library list:** GSAP, Lenis, and Lottie were left out to keep the
> bundle lean and the animation approach consistent — Framer Motion + Intersection Observer covers
> every scroll-reveal, hover, and page-load effect used here. React Router wasn't needed since this
> is a single scrolling page with in-page anchors. Swap any of these in easily if you'd like to
> extend the site later (e.g. GSAP ScrollTrigger for the timelines).

## Project structure

```
portfolio/
├── backend/
│   ├── app.py            # Flask API: POST /api/contact
│   ├── requirements.txt
│   └── .env.example
├── public/
│   ├── assets/
│   │   ├── profile.jpg
│   │   └── Attar_Mohammad_Awais_Resume.pdf
│   └── robots.txt
├── src/
│   ├── components/       # Reusable UI: Navbar, Footer, Reveal, MagneticCard, HeroScene...
│   ├── sections/          # One file per page section
│   ├── data/resume.ts     # Single source of truth for all resume content
│   └── App.tsx
├── .env.example           # VITE_API_URL
├── tailwind.config.js     # Design tokens: colors, fonts, shadows, keyframes
└── vercel.json
```

## Run locally

### Frontend

```bash
npm install
cp .env.example .env.local     # points the form at your local Flask API
npm run dev
```

### Backend (contact form emails)

```bash
cd backend
python -m venv venv && source venv/bin/activate   # Windows: venv\Scripts\activate
pip install -r requirements.txt
cp .env.example .env
# Edit .env: set SMTP_USER / SMTP_PASS (Gmail App Password works well)
flask --app app run --debug
```

The form POSTs to `${VITE_API_URL}/api/contact`. Without the backend running, the form will show
a friendly error with your email address as a fallback — it won't fail silently.

**Prefer EmailJS instead of a Flask backend?** Swap the `fetch` call in
`src/sections/Contact.tsx` for `emailjs.send(...)` — no backend needed, everything sends straight
from the browser. Both approaches were in scope; Flask was used here since you're a Python
developer and it also demonstrates a working full-stack contact flow.

## Deployment

### Frontend → Vercel

1. Push this repo to GitHub.
2. Import it in Vercel — framework preset "Vite" is auto-detected.
3. Set an environment variable `VITE_API_URL` pointing at your deployed backend.
4. Deploy. `vercel.json` already handles SPA routing/rewrites.

### Backend → Render / Railway / Fly.io

1. Deploy `backend/` as a Python web service (`gunicorn app:app` in production).
2. Set `SMTP_USER`, `SMTP_PASS`, `RECEIVER_EMAIL`, and `ALLOWED_ORIGIN` (your Vercel URL) as env vars.
3. Copy the deployed URL into the frontend's `VITE_API_URL`.

## Updating your content

Everything text-based lives in `src/data/resume.ts` — update your roles, projects, internships,
education, or certifications there and every section (including the animated stats and resume
preview card) updates automatically.

To swap your resume PDF, replace `public/assets/Attar_Mohammad_Awais_Resume.pdf` and keep the
filename, or update the `href` in `src/sections/Hero.tsx`, `Resume.tsx`, and `CTA.tsx`.

## Performance & accessibility notes

- The 3D hero scene is lazy-loaded after first paint, so text and CTAs are interactive immediately.
- `prefers-reduced-motion` is respected globally (see `src/index.css`).
- All interactive elements have visible focus states.
- Images use `alt` text; the page ships Open Graph tags for link previews.
