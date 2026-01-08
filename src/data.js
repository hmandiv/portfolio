export const DATA = {
  person: {
    name: "HR Mandiv",
    role: "Software Developer (Full-Stack)",
    tagline: "Building clean, fast, accessible web apps.",
    subtitle:
      "Software Developer with 3+ years of professional experience building and maintaining production APIs, front-end systems, and end-to-end features. Currently a research-based developer pursuing a Master’s in Digital Humanities.",
    location: "Ontario, Canada",
    focus: "Front-end + APIs + Web3 integrations",
    strengths: "Clean UI • Reliable APIs • Performance • Collaboration",
    githubUsername: "hmandiv",
    email: "mandivcei@gmail.com",
    phone: "929-623-5476",
    links: [{ label: "GitHub", href: "https://github.com/hmandiv" }],
    heroBadges: [
      "C# + SQL APIs",
      "React UI",
      "Algorand integrations",
      "Performance-minded",
    ],
  },

  about: {
    subtitle:
      "I build robust APIs and polished front-end experiences — and I’m focused on roles where quality and shipping matter.",
    paragraphs: [
      "I’m a detail-oriented software developer with 3+ years of professional full-stack experience. I’ve built and maintained APIs/microservices in C# with SQL Server, and delivered responsive Angular front-ends that support real business workflows.",
      "I’m also hands-on with modern JavaScript/TypeScript stacks (React + Node/Express) and have built projects integrating Algorand payments, wallet flows (Pera Wallet), and atomic transaction patterns.",
      "My strengths are clean implementation, strong collaboration, and improving system performance — from query optimization to structured, maintainable UI components.",
    ],
    checklist: [
      "Robust REST APIs + microservices (C#, Node/Express)",
      "Modern front-end UI (React) with strong UX",
      "Performance improvements (SQL optimization, parallel API calls)",
      "Blockchain integrations (Algorand, wallet flows, atomic transactions)",
    ],
  },

  skills: [
    {
      group: "Front-End",
      items: [
        "React",
        "TypeScript",
        "JavaScript",
        "Component architecture",
        "Accessibility",
        "Performance",
      ],
    },
    {
      group: "Full-Stack",
      items: [
        "Node.js",
        "Express",
        "C#",
        "REST APIs",
        "Microservices",
        "Auth flows",
      ],
    },
    { group: "Data", items: ["SQL Server", "SQL", "Firebase (NoSQL)"] },
    {
      group: "Blockchain",
      items: ["Algorand", "Atomic transactions", "Pera Wallet integration"],
    },
    {
      group: "Engineering Practices",
      items: [
        "Domain modeling (DDD-lite): entities, commands, selectors",
        "Functional core / imperative shell (pure logic first)",
        "Immutability + reducer-style state transitions",
        "Derived state + single source of truth",
        "Testing pyramid (unit/integration/E2E)",
        "User-centric + accessibility-first testing",
        "Performance patterns (parallel I/O with Promise.all)",
        "Code review and maintainable architecture",
      ],
    },
    {
      group: "Tools",
      items: ["Git", "Docker", "Postman", "VS Code", "Visual Studio"],
    },
  ],

  featuredProjects: [
    {
      title: "Full-Stack Referral App",
      description:
        "Secure email/wallet onboarding, 5-level referrals, portfolio dashboard, DeFi API aggregation, and on-chain payment verification (Algorand).",
      tags: ["React", "Express", "Firebase", "Algorand", "Performance"],
      ctas: [
        {
          label: "Live",
          href: "https://aaa-app-prod.vercel.app",
          kind: "primary",
        },
        {
          label: "Code front end",
          href: "https://github.com/hmandiv/aaa",
          kind: "ghost",
        },
        {
          label: "Code back end",
          href: "https://github.com/hmandiv/aaa-api",
          kind: "ghost",
        },
      ],
      caseStudy: {
        problem:
          "Users needed a secure way to onboard via email or crypto wallet, track multi-level referrals, and verify on-chain payments—while also viewing portfolio balances and DeFi token data in real time. Existing solutions were fragmented or unreliable.",
        solution:
          "Built a full-stack platform using React for UI and Node.js/Express for backend services. Firebase handled authentication + real-time data. Algorand atomic transactions verified payments. Aggregated external DeFi APIs using Promise.all for parallel requests to reduce latency.",
        impact: [
          "Enabled a 5-level referral system with real-time updates",
          "Delivered a portfolio dashboard (balances, allocations, totals)",
          "Improved API responsiveness via parallelized external requests",
          "Provided secure, verifiable payments using Algorand atomic transactions",
        ],
        interviewScript: {
          tellMeAbout:
            "I built a full-stack referral platform that supports both email and crypto-wallet onboarding, a multi-level referral system, and verifiable on-chain payments. The key challenge was making the app feel fast and trustworthy while integrating multiple external APIs and blockchain verification. I designed a React UI, built a Node/Express API, used Firebase for auth + realtime updates, and verified payments using Algorand atomic transactions. For performance, I aggregated DeFi data using Promise.all to parallelize calls and reduce overall latency. The result was a production-style platform with real-time referral tracking, a portfolio dashboard, and secure payment verification.",
          tradeoffs:
            "Main tradeoff: real-time UX vs complexity. Firebase simplified realtime updates, while the backend enforced verification + integrity for wallet and payment flows.",
          whatIdImprove:
            "Add stronger observability (structured logs + metrics), broaden test coverage, and implement server-side caching for third-party API data.",
        },
      },
    },

    {
      title: "Habit Tracker (Local-first TypeScript)",
      description:
        "Fast, offline-first habit tracker with correct streak logic, clean domain model, and testable pure functions.",
      tags: ["TypeScript", "Architecture", "Local Storage", "Testing-friendly"],
      ctas: [
        {
          label: "Code",
          href: "https://github.com/hmandiv/habit-tracker",
          kind: "primary",
        },
      ],
      caseStudy: {
        problem:
          "Many habit trackers are slow, over-engineered, or rely on unnecessary backend services for simple daily tracking. I wanted instant UX and correct streak logic without network dependency.",
        solution:
          "Built a local-first habit tracker using TypeScript with a domain model separating habits, check-ins, and derived streak calculations. Implemented core behavior as pure functions so logic is predictable, testable, and easy to extend. Persisted state locally for instant load.",
        impact: [
          "Instant load times with no backend dependency",
          "Reliable streak calculations using deterministic logic",
          "Codebase designed for testing + easy future extension",
          "Strong separation of concerns (domain model vs UI)",
        ],
        interviewScript: {
          tellMeAbout:
            "I built a local-first habit tracker focused on speed and correctness. The main problem I saw in many habit apps is unnecessary backend complexity and buggy streak logic. I designed a domain model that separates habits from check-ins and computes streaks through deterministic pure functions. That makes the logic easy to test and prevents UI state from becoming the source of truth. Because everything persists locally, the app loads instantly and works offline. It’s a small project, but it demonstrates clean architecture, predictable behavior, and engineering maturity beyond just UI work.",
          tradeoffs:
            "Tradeoff: local-first simplicity vs multi-device sync. I chose local-first for speed and reliability; sync could be added later without changing core logic.",
          whatIdImprove:
            "Add optional export/import or cloud sync, and strengthen automated test coverage for edge-case date/streak scenarios.",
        },
      },
    },
  ],

  experience: [
    {
      role: "Research-Based Developer (Graduate Studies)",
      company: "CUNY Graduate Center",
      dates: "2024 — Present",
      location: "New York, USA",
      bullets: [
        "Developing research-driven software projects as part of a Master’s program in Digital Humanities.",
        "Applying production-grade software engineering practices (domain modeling, separation of concerns, testable logic) to data-driven research and interactive web tools.",
        "Combining front-end development, data modeling, and computational methods for humanities-focused research questions.",
      ],
      tech: [
        "JavaScript",
        "TypeScript",
        "Web Development",
        "Data Modeling",
        "Research Computing",
      ],
    },
    {
      role: "Software Developer",
      company: "LBMX Inc.",
      dates: "Jan 2020 — Oct 2023",
      location: "Ontario, Canada",
      bullets: [
        "Designed and implemented production APIs and microservices using C# and SQL Server supporting core business workflows.",
        "Built modern, responsive Angular interfaces to streamline internal and customer-facing tools.",
        "Integrated REST APIs with front-end components ensuring reliable data flow and consistent behavior.",
        "Optimized SQL queries and stored procedures to improve retrieval speed and reduce response times.",
        "Collaborated cross-functionally (product, QA, devs) and participated in code reviews to uphold standards.",
      ],
      tech: [
        "C#",
        "SQL Server",
        "Angular",
        "REST APIs",
        "Microservices",
        "Git",
      ],
    },
  ],

  education: [
    {
      title: "Master’s in Digital Humanities (Research-Based)",
      org: "CUNY Graduate Center",
      dates: "In progress",
      notes: [
        "Research-focused program combining software development, data analysis, and humanities-driven computation.",
      ],
    },
    {
      title: "B.S. (Honors) in Computer Science",
      org: "Algoma University",
      dates: "Completed",
      notes: [
        "Coursework: DSA, Databases, Software Engineering, Web Dev, Blockchain Fundamentals.",
      ],
    },
  ],

  contact: {
    blurb:
      "Email is best. If you’re reaching out about a role, include the title, stack, and timeline.",
    notes: [
      "Open to React-heavy and full-stack roles.",
      "Strong in API + UI integration and performance-minded delivery.",
      "Comfortable with web3/Algorand wallet flows in production-style apps.",
    ],
  },

  github: {
    maxRepos: 12,
    excludeForks: true,
    excludeArchived: true,
    excludePrivate: true,
    pinTopicsAsTags: true,
    excludeNames: ["ecommerce-project", "habit-tracker"],
  },
};
