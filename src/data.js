export const DATA = {
  person: {
    name: "HR Mandiv",
    role: "Full-Stack Software Developer",
    tagline: "Building clean, fast, accessible web applications.",
    subtitle:
      "Full-stack software developer with 3 years of professional experience building web applications, APIs, and product features. Strong background in React, TypeScript/JavaScript, Node.js, C#, and SQL, with experience contributing to business-facing software and building independent product projects.",
    location: "Hamilton, Ontario, Canada",
    focus: "React, Node.js, APIs, and full-stack web applications",
    strengths: "Clean UI • Reliable APIs • Performance • Collaboration",
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
      "C# professional experience",
      "Performance-minded",
    ],
  },

  about: {
    subtitle:
      "I build robust APIs and polished front-end experiences, and I’m focused on full-stack and React-heavy roles where quality and shipping matter.",
    paragraphs: [
      "I’m a software developer with 3 years of professional experience building and maintaining production APIs, microservices, and front-end applications. At LBMX, I worked with C#, SQL Server, Angular, and REST APIs to support core business workflows.",
      "I also build with modern JavaScript and TypeScript stacks, especially React and Node.js/Express. My independent projects include secure onboarding flows, referral systems, dashboard interfaces, and blockchain-integrated payment verification.",
      "My strengths are clean implementation, API and UI integration, collaboration, and performance-minded development.",
    ],
    checklist: [
      "Full-stack web development with React, Node.js, and REST APIs",
      "Professional backend experience with C# and SQL Server",
      "Responsive UI development and frontend/backend integration",
      "Performance improvements through query optimization and efficient API handling",
    ],
  },

  skills: [
    {
      group: "Frontend",
      items: ["React", "TypeScript", "JavaScript"],
    },
    {
      group: "Backend",
      items: ["Node.js", "Express", "REST APIs"],
    },
    {
      group: "Database",
      items: ["SQL", "Firebase"],
    },
    {
      group: "Additional",
      items: ["C#", "SQL Server", "Algorand"],
    },
    {
      group: "Tools",
      items: ["Git", "Postman", "Docker"],
    },
  ],

  featuredProjects: [
    {
      title: "Full-Stack Referral Platform",
      description:
        "Built a full-stack referral platform with secure onboarding, multi-level referral tracking, portfolio dashboards, DeFi API aggregation, and blockchain-based payment verification.",
      tags: ["React", "Node.js", "Express", "Firebase", "Algorand"],
      ctas: [
        {
          label: "Live",
          href: "https://aaa-app-prod.vercel.app",
          kind: "primary",
        },
        {
          label: "Frontend Code",
          href: "https://github.com/hmandiv/aaa",
          kind: "ghost",
        },
        {
          label: "Backend Code",
          href: "https://github.com/hmandiv/aaa-api",
          kind: "ghost",
        },
      ],
      caseStudy: {
        problem:
          "Users needed a secure way to onboard via email or crypto wallet, track referrals across multiple levels, and verify on-chain payments while also viewing portfolio balances and DeFi token data in real time.",
        solution:
          "Built a full-stack platform using React for the UI and Node.js/Express for backend services. Firebase handled authentication and realtime updates, while Algorand atomic transactions were used to verify payments. External DeFi APIs were aggregated using Promise.all to reduce latency.",
        impact: [
          "Implemented a 5-level referral system with real-time updates",
          "Delivered a portfolio dashboard with balances, allocations, and token data",
          "Improved responsiveness through parallelized external API requests",
          "Provided secure, verifiable blockchain-based payment validation",
        ],
        interviewScript: {
          tellMeAbout:
            "I built a full-stack referral platform that supports both email and crypto-wallet onboarding, a multi-level referral system, and verifiable on-chain payments. The challenge was making the experience feel trustworthy and responsive while integrating blockchain verification and multiple external APIs. I built the React UI, Node/Express backend, used Firebase for auth and realtime updates, and used Algorand atomic transactions for payment verification. I also improved performance by aggregating DeFi data with Promise.all.",
          tradeoffs:
            "The main tradeoff was balancing realtime UX with complexity. Firebase simplified realtime updates, while the backend handled verification and data integrity for wallet and payment flows.",
          whatIdImprove:
            "I would improve observability with better logging and metrics, expand automated test coverage, and add caching for third-party API responses.",
        },
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
      location: "Canada",
      bullets: [
        "Designed and developed full-stack web applications using React, Node.js, and Firebase",
        "Built a referral platform with secure onboarding, multi-level referral tracking, and real-time updates",
        "Integrated blockchain-based payment verification using Algorand atomic transactions",
        "Aggregated external APIs and improved performance using parallel request patterns",
        "Focused on production-style application development and strengthening frontend, backend, and system design skills",
      ],
      tech: ["React", "Node.js", "Express", "Firebase", "Algorand"],
    },
    {
      role: "Software Developer",
      company: "LBMX Inc.",
      dates: "Jan 2020 — Oct 2023",
      location: "Ontario, Canada",
      bullets: [
        "Designed and implemented backend APIs and microservices using C# and SQL Server to support core business workflows",
        "Built responsive Angular applications for internal and customer-facing tools",
        "Integrated frontend and backend systems through REST APIs ensuring reliable data flow",
        "Optimized SQL queries and stored procedures to improve performance and reduce response times",
        "Collaborated with product managers, QA, and developers to deliver features and maintain code quality",
      ],
      tech: ["C#", "SQL Server", "Angular", "REST APIs", "Microservices"],
    },
  ],

  education: [
    {
      title: "Bachelor’s Degree in Computer Science",
      org: "Algoma University",
      dates: "Completed, Jan 2015 -  August 2019",
      notes: [],
    },
  ],

  contact: {
    blurb:
      "Email is the best way to reach me. If you’re reaching out about a role, include the title, stack, and timeline.",
    notes: [
      "Open to full-stack and React-focused roles.",
      "Strong in API and UI integration.",
      "Comfortable building production-style web applications.",
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
