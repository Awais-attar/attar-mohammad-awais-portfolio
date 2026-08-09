// Single source of truth for the portfolio data.
// Keep all personal, education, internship, skill and project
// information in this file.

export const profile = {
  name: "Attar Mohammad Awais",

  roles: [
    "Software Engineer",
    "Full Stack Developer",
    "Python Developer",
    "React Developer",
    "AI Enthusiast",
    "Problem Solver",
    "MCA Graduate",
  ],

  location: "Nandyal, Andhra Pradesh, India",

  phone: "+91 9515339926",

  email: "awaismca22@gmail.com",

  linkedin: "https://linkedin.com/in/",

  github: "https://github.com/",

  behance: "https://behance.net/",

  photo: "/assets/profile.jpg",

  summary:
    "MCA graduate with hands-on experience in Python, Java, Flask, REST APIs, SQL, HTML, CSS, JavaScript, Git, and Power BI. I've developed web applications and completed internships in Python Full Stack Development and Data Visualization, gaining practical experience in software development, database management, testing, and data analysis. I'm motivated to apply my technical skills, contribute to real software projects, and continuously learn and adapt to modern technologies.",
};

export const stats = [
  {
    label: "Projects Completed",
    value: 5,
    suffix: "",
  },
  {
    label: "Internships",
    value: 2,
    suffix: "",
  },
  {
    label: "CGPA (MCA)",
    value: 8.39,
    suffix: "",
    decimals: 2,
  },
  {
    label: "Technologies",
    value: 25,
    suffix: "+",
  },
];

export const skillCategories = [
  {
    title: "Programming Languages",
    icon: "code",
    skills: [
      "Python",
      "Java",
      "JavaScript",
      "SQL",
      "HTML",
      "CSS",
    ],
  },

  {
    title: "Frameworks & APIs",
    icon: "layers",
    skills: [
      "React (Basics)",
      "Flask",
      "REST APIs",
      "Bootstrap",
      "Tailwind CSS",
    ],
  },

  {
    title: "Databases",
    icon: "database",
    skills: [
      "MySQL",
      "SQL",
    ],
  },

  {
    title: "UI/UX & Design",
    icon: "design",
    skills: [
      "Figma",
      "Wireframing",
      "Prototyping",
      "UI Design",
      "Design Systems",
    ],
  },

  {
    title: "Developer Tools",
    icon: "tool",
    skills: [
      "Git",
      "GitHub",
      "VS Code",
      "Power BI",
      "Excel",
      "Postman",
      "Jupyter Notebook",
    ],
  },

  {
    title: "AI Tools",
    icon: "cpu",
    skills: [
      "GitHub Copilot",
      "Claude",
      "Google Gemini",
      "ChatGPT",
    ],
  },

  {
    title: "Core Concepts",
    icon: "layers-3",
    skills: [
      "AWS Fundamentals",
      "Manual Testing",
      "Agile",
      "SDLC",
      "REST APIs",
      "Problem Solving",
      "Responsive Design",
      "Version Control",
    ],
  },
];

export const projects = [
  {
    title: "Student Management System",

    description:
      "A role-based Student Management System for managing students, teachers, attendance, exams, fees, and announcements — with authentication, teacher activity tracking, dashboard analytics, and student ID card generation.",

    highlights: [
      "Authentication & role-based access",
      "Teacher module & activity tracking",
      "Attendance & dashboard analytics",
      "SQLAlchemy data modelling",
      "Deployed on Render via GitHub integration",
    ],

    tech: [
      "Python",
      "Flask",
      "MySQL",
      "HTML",
      "CSS",
      "JavaScript",
      "SQLAlchemy",
      "Render",
    ],

    gradient: "from-indigo via-royal to-cyan",

    // Add your actual project URLs here.
    live: "https://student-management-system-x65t.onrender.com/",
    github: "https://github.com/Awais-attar/student-management-system",
  },

  {
    title: "Karnataka & Punjab Election Dashboard",

    description:
      "An interactive Power BI dashboard built on 5,000+ election records from Karnataka and Punjab, analyzing voter turnout, candidate performance, and constituency-level trends — validated with AI tools.",

    highlights: [
      "5,000+ records from India Votes & ECI",
      "Power Query automation cut prep time by 50%",
      "DAX measures & KPI cards",
      "Validated using ChatGPT & Gemini AI",
    ],

    tech: [
      "Power BI",
      "Excel",
      "Power Query",
      "DAX",
      "Gemini AI",
      "ChatGPT",
    ],

    gradient: "from-violet via-indigo to-royal",

    // Add your actual project URLs here.
    live: "https://github.com/Awais-attar/ElectViz_Karnataka_And_Punjab_Election",
    github: "https://github.com/Awais-attar/ElectViz_Karnataka_And_Punjab_Election",
  },

  {
    title: "Manual Testing Project — AIVOA AI Platform",

    description:
      "End-to-end manual testing of the AIVOA AI web application to validate functionality, usability, and user workflows across the product.",

    highlights: [
      "40+ test cases (UI, functional, validation)",
      "4 defects documented with reproduction steps",
      "Test evidence tracked in Excel",
      "Expected vs. actual result verification",
    ],

    tech: [
      "Manual Testing",
      "Excel",
      "Bug Reporting",
      "UI Testing",
    ],

    gradient: "from-cyan via-emerald to-royal",

    // Add your actual project URLs here.
    live: "https://drive.google.com/file/d/1-Q5fA49Zs3NUaEz_tZ2UX-sia6vewdYj/view?usp=sharing",
    github: "https://github.com/Awais-attar/AIVOA-Website-Manual-Testing",
  },

  {
    title: "E-MeatZ — Meat Delivery E-Commerce UI",

    description:
      "An end-to-end e-commerce experience covering homepage, product discovery, offers, product listings, and checkout — with a consistent dark-themed visual identity built from reusable design patterns.",

    highlights: [
      "Full e-commerce flow: discovery to checkout",
      "Consistent dark-themed visual identity",
      "Reusable design-pattern library",
      "Focused on usability & customer engagement",
    ],

    tech: [
      "Figma",
      "UI/UX Design",
      "Wireframing",
      "Prototyping",
    ],

    gradient: "from-indigo via-violet to-royal",

    // Add your actual project URLs here.
    behance: "https://www.behance.net/gallery/193532221/E-Meatz-Shopping-Web-Design",
    
  },

  {
    title: "SuperCrypto — Crypto Payment App UI",

    description:
      "A mobile crypto payment experience covering onboarding, payment selection, checkout, and transaction confirmation, with interactive prototypes and mapped user flows.",

    highlights: [
      "Onboarding to transaction confirmation flow",
      "Interactive prototypes with bottom navigation",
      "Mapped end-to-end user flows",
    ],

    tech: [
      "Figma",
      "UI/UX Design",
      "Prototyping",
    ],

    gradient: "from-violet via-cyan to-emerald",

    // Add your actual project URLs here.
    behance: "https://www.behance.net/gallery/206751053/Supercryto-App-design",
  },
];

export const internships = [
  {
    role: "Data Visualization Intern",

    org: "Infosys Springboard",

    period: "2025",

    points: [
      "Extracted and cleaned 5,000+ election records from Election Commission PDF datasets using Gemini AI with 95% accuracy.",
      "Built 3+ interactive Power BI dashboards to analyze election trends across different Indian states, using DAX and Power Query.",
      "Used AI tools like ChatGPT and Gemini AI to reduce manual data cleaning time by 40%.",
    ],
  },

  {
    role: "Python Full Stack Development Intern",

    org: "IIDT & Blackbuck Engineers",

    period: "2024",

    points: [
      "Completed a Python Full Stack Development internship with hands-on real-world development tasks and project building.",
      "Developed and enhanced a To-Do List application with additional features using branch-based development.",
      "Worked on frontend, backend, database integration, and version control as part of internship assignments.",
    ],
  },
];

export const education = [
  {
    degree: "Master of Computer Applications (MCA)",

    school:
      "Rajeev Gandhi Memorial College of Engineering & Technology, Nandyal",

    period: "2024 – 2026",

    gpa: 8.39,
  },

  {
    degree: "Bachelor of Computer Applications (BCA)",

    school: "National Degree College, Nandyal",

    period: "2021 – 2024",

    gpa: 8.16,
  },

  {
    degree: "Board of Intermediate Education (CEC)",

    school: "Rao's Junior College, Nandyal",

    period: "2019 – 2021",

    gpa: 7.04,
  },

  {
    degree: "Board of Secondary Education (SSC)",

    school: "Sri Shantiniketan E.M School, Nandyal",

    period: "2018 – 2019",

    gpa: 8.8,
  },
];

export const certifications = [
  {
    title: "Software Engineering & Agile Software Development",
    issuer: "Infosys Springboard",
  },

  {
    title: "MS Power BI",
    issuer: "Infosys Springboard",
  },

  {
    title: "Python Essentials",
    issuer: "Cisco Networking Academy",
  },

  {
    title: "MySQL Basics",
    issuer: "Great Learning",
  },

  {
    title: "Web Development",
    issuer: "Eleven Ideas",
  },

  {
    title: "Soft Skills & Professional Communication",
    issuer: "TCS-iON",
  },
];

export const navLinks = [
  {
    label: "Home",
    href: "#home",
  },

  {
    label: "About",
    href: "#about",
  },

  {
    label: "Skills",
    href: "#skills",
  },

  {
    label: "Projects",
    href: "#projects",
  },

  {
    label: "Internships",
    href: "#internships",
  },

  {
    label: "Education",
    href: "#education",
  },

  {
    label: "Certifications",
    href: "#certifications",
  },

  {
    label: "Contact",
    href: "#contact",
  },
];