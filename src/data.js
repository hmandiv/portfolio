export const DATA = {
  person: {
    name: "HR Mandiv",
    role: "Full-Stack Software Developer",
    tagline: "Building clean, reliable, production-ready systems.",
    subtitle:
      "Software developer with 3+ years of experience building APIs, microservices, and frontend applications. Strong in React, Node.js, C#, and SQL, with a focus on delivering real-world, production-quality systems.",
    location: "Hamilton, Ontario, Canada",
    focus: "Full-stack development, APIs, and production systems",
    strengths: "Clean Code • Reliable Systems • Performance • System Design",
    githubUsername: "hmandiv",
    email: "mandivcei@gmail.com",
    phone: "705-542-6100",
    links: [
      { label: "GitHub", href: "https://github.com/hmandiv" },
      { label: "Portfolio", href: "https://hrmandiv.vercel.app" },
    ],
    heroBadges: [
      "React + TypeScript",
      "Node.js + APIs",
      "C# / .NET",
      "Production Systems",
    ],
  },

  about: {
    subtitle:
      "I build full-stack systems end-to-end with a focus on reliability, performance, and real-world usability.",
    paragraphs: [
      "I’m a software developer with 3+ years of professional experience building and maintaining production APIs, microservices, and frontend applications. At LBMX, I worked with C#, SQL Server, Angular, and REST APIs to support core business workflows.",
      "I also build modern full-stack applications using React, Node.js, and Firebase. My projects include referral systems, dashboards, job tracking platforms, and blockchain-integrated payment verification systems.",
      "I focus on writing clean, maintainable code and building systems that perform well under real-world conditions.",
    ],
    checklist: [
      "Full-stack development with React, Node.js, and REST APIs",
      "Backend systems with C#, SQL Server, and microservices",
      "Frontend/backend integration with reliable data flow",
      "Performance optimization and scalable system design",
    ],
  },

  skills: [
    {
      group: "Frontend",
      items: ["React", "TypeScript", "JavaScript", "HTML", "CSS"],
    },
    {
      group: "Backend",
      items: ["Node.js", "Express", "REST APIs", "C# / .NET"],
    },
    {
      group: "Database",
      items: ["SQL Server", "SQL", "Firebase"],
    },
    {
      group: "Blockchain",
      items: ["Algorand", "Wallet Integration", "Transactions"],
    },
    {
      group: "Tools",
      items: ["Git", "Postman", "Docker"],
    },
  ],

  featuredProjects: [
    {
      title: "Referral Platform (Full-Stack)",
      description:
        "Multi-level referral platform with secure onboarding, real-time tracking, and blockchain-based payment verification.",
      tags: ["React", "Node.js", "Express", "Firebase", "Algorand"],
      ctas: [
        {
          label: "Live",
          href: "https://aaa-app-prod.vercel.app",
          kind: "primary",
        },
      ],
      caseStudy: {
        problem:
          "Users needed a system to securely onboard, track referrals across multiple levels, and verify blockchain-based payments while maintaining real-time updates.",
        solution:
          "Built a full-stack system using React, Node.js, and Firebase. Integrated Algorand atomic transactions for payment verification and used parallel API aggregation to improve performance.",
        impact: [
          "Implemented multi-level referral tracking with real-time updates",
          "Enabled secure onboarding with wallet and email support",
          "Improved performance through parallel API handling",
          "Delivered verifiable blockchain-based payment validation",
        ],
      },
    },

    {
      title: "Habit Tracker (Local-First TypeScript)",
      description:
        "Fast, offline-first habit tracker with clean domain modeling, correct streak logic, and testable pure functions.",
      tags: ["TypeScript", "Architecture", "Local Storage", "Testing-Friendly"],
      ctas: [
        {
          label: "Code",
          href: "https://github.com/hmandiv/habit-tracker",
          kind: "primary",
        },
      ],
      caseStudy: {
        problem:
          "Many habit trackers are slow, overbuilt, or depend on unnecessary backend services for simple daily tracking. I wanted instant UX and reliable streak logic without network dependency.",
        solution:
          "Built a local-first habit tracker in TypeScript with a domain model separating habits, check-ins, and derived streak calculations. Core behavior was implemented as predictable pure functions, and all state was persisted locally for instant load and offline use.",
        impact: [
          "Delivered instant load times with no backend dependency",
          "Implemented deterministic streak calculations",
          "Kept the codebase easy to test and extend",
          "Separated domain logic cleanly from UI concerns",
        ],
        interviewScript: {
          tellMeAbout:
            "I built a local-first habit tracker focused on speed and correctness. The main problem I saw in many habit apps is buggy streak logic and unnecessary backend complexity. I separated habits from check-ins and computed streaks through deterministic pure functions, which made the logic easy to test and kept UI state from becoming the source of truth. Because everything persists locally, the app is fast and works offline.",
          tradeoffs:
            "The key tradeoff was choosing local-first simplicity instead of multi-device sync. I chose speed and reliability first, with sync left as a future enhancement.",
          whatIdImprove:
            "I’d add export/import or optional cloud sync, and strengthen automated tests around edge-case streak scenarios.",
        },
      },
    },
  ],

  experience: [
    {
      role: "Independent Developer",
      company: "Full-Stack Projects",
      dates: "Oct 2023 — Present",
      location: "Hamilton, Ontario",
      bullets: [
        "Built production-style full-stack applications simulating real-world systems including authentication, persistence, and API integration",
        "Designed and developed applications using React, Node.js, and Firebase",
        "Developed a referral platform with multi-level tracking and real-time updates",
        "Integrated blockchain-based payment verification using Algorand",
        "Improved performance using parallel API request handling (Promise.all)",
        "Designed systems across frontend, backend, and data layers with scalability in mind",
      ],
      tech: ["React", "Node.js", "Express", "Firebase", "Algorand"],
    },
    {
      role: "Software Developer",
      company: "LBMX Inc.",
      dates: "Jan 2020 — Oct 2023",
      location: "Ontario, Canada",
      bullets: [
        "Designed and implemented backend APIs and microservices using C# and SQL Server",
        "Built responsive Angular applications for internal and customer tools",
        "Integrated frontend and backend systems via REST APIs",
        "Optimized SQL queries and stored procedures to improve performance",
        "Collaborated with cross-functional teams to deliver reliable features",
      ],
      tech: ["C#", "SQL Server", "Angular", "REST APIs", "Microservices"],
    },
  ],

  education: [
    {
      title: "Bachelor of Computer Science",
      org: "Algoma University",
      dates: "2015 — Aug 2019",
      notes: [
        "Studied algorithms, data structures, software engineering, and systems design",
      ],
    },
  ],

  contact: {
    blurb:
      "Best way to reach me is by email. For opportunities, include role, tech stack, and timeline.",
    notes: [
      "Open to full-stack and React-focused roles",
      "Strong in API and UI integration",
      "Focused on building production-ready systems",
    ],
  },

  github: {
    maxRepos: 6,
    excludeForks: true,
    excludeArchived: true,
    excludePrivate: true,
    pinTopicsAsTags: true,
    excludeNames: [
      "ecommerce-project",
      "habit-tracker",
      "aaa",
      "aaa-api",
      "lease",
      "emarketing",
      "portfolio",
      "chatbot-project",
    ],
  },
};
