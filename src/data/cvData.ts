export const cvData = {
  personal: {
    name: "HENDRA WARDANA",
    title: "Senior Full-Stack Software Engineer",
    location: "Yogyakarta, Indonesia • Open to Remote",
    email: "maxnara19@gmail.com",
    phone: "+62 822-3355-5821",
  },
  profile: "Senior Full-Stack Software Engineer with 7+ years of experience building, maintaining, and evolving production web platforms, SDKs, data pipelines, and monetization systems. Strong expertise in Python (Django), JavaScript/TypeScript, React, cloud infrastructure, analytics, and payments. Proven ability to contribute to large codebases, improve system performance, and support business growth through data-driven and monetized platforms in remote, cross-functional teams.",

  experience: [
    {
      title: "Senior Full-Stack Software Engineer",
      company: "Wortal",
      location: "Remote, Japan",
      period: "July 2021 - December 2025",
      type: "Gaming Distribution Company",
      responsibilities: [
        "Contributed to the development, maintenance, and evolution of Wortal V1, a production platform built with Django and Django Templates, supporting early-stage game publishing operations",
        "Designed and implemented CI/CD pipelines for V1 using GitHub Actions; continued maintaining and adapting CI/CD workflows for V2",
        "Operated and supported Google Kubernetes Engine (GKE) infrastructure for v1, including deployments and production issue troubleshooting",
        "Supported infrastructure migration from GKE-based deployments to DigitalOcean Droplets, adapting deployment and operational practices",
        "Developed and maintained the Wortal SDK, a unified JavaScript SDK enabling game developers to publish and operate games across 15+ platforms through a single integration",
        "Built Waves, a Django-based backend service for game progress persistence, integrated into the Wortal SDK to support platforms without native save/load functionality",
        "Implemented Google AdSense and Prebid.js for in-game and in-page advertising, supporting monetization across web-based gaming surfaces",
        "Designed and implemented subscription billing system using Stripe, including subscription lifecycle handling, webhook processing, and plan management",
        "Built and maintained Python data pipelines ingesting analytics from BigQuery and multiple gaming platforms",
        "Wrote and optimized BigQuery SQL queries to extract insights from SDK-generated game events and consolidate revenue data from ads and in-app purchases",
        "Created internal analytics dashboards using Metabase to support product, business, and operational insights",
        "Contributed to the development of Wortal.games, an in-house game platform/portal built with Next.js and Django",
        "Collaborated on performance optimization efforts for Wortal.games, contributing to frontend improvements and caching strategies that helped achieve PageSpeed scores in the green range (90+)",
        "Contributed to the use of Cloudflare for caching web and image assets to improve performance and content delivery",
        "Actively participated in pull request reviews, contributing to code quality, architectural discussions, and team collaboration in a remote-first environment",
      ],
      technologies: ["Python", "Django", "JavaScript", "TypeScript", "React", "Next.js", "Node.js", "PostgreSQL", "BigQuery", "Google Cloud Platform (GKE)", "DigitalOcean", "GitHub Actions", "Stripe", "Metabase", "Cloudflare"],
    },
    {
      title: "Software Engineer (Freelance)",
      company: "Self-Employed",
      location: "Yogyakarta, Indonesia",
      period: "November 2020 - June 2021",
      responsibilities: [
        "Worked as a freelance software engineer supporting asset management and finance systems",
        "Contributed to the integration of asset management and finance business processes to help digitalize existing workflows",
        "Maintained existing systems and developed new features based on business requirements",
        "Collaborated with stakeholders to ensure system stability and functional improvements",
      ],
      technologies: ["HTML", "JavaScript", ".NET Framework", "SQL Server"],
    },
    {
      title: "Software Engineer (Consultant)",
      company: "PT XSIS Mitra Utama",
      location: "Greater Jakarta Area, Indonesia",
      period: "November 2018 - November 2020",
      description: "Worked as a Software Engineer consultant, contributing to enterprise projects focused on digitalizing business processes.",
      projects: [
        {
          client: "Rabobank Indonesia",
          responsibilities: [
            "Contributed to transforming procurement and asset management business processes using K2 Platform and SQL Server",
          ],
        },
        {
          client: "PT Total Bangun Persada Tbk",
          responsibilities: [
            "Maintained existing asset management systems and developed new features",
            "Contributed to the implementation of asset management processes across four departments",
            "Implemented fixed asset management functionality for the Accounting Department",
            "Improved SQL Server query performance through optimization and refactoring",
            "Built RFID-based asset movement detection system using Node.js (Express) and Socket.io to support real-time dashboards",
          ],
        },
      ],
      technologies: ["C#", "ASP.NET", "SQL Server", "K2 Platform", "Node.js (Express)", "Socket.io", "JavaScript"],
    },
    {
      title: ".NET Full-Stack Developer Trainee",
      company: "PT XSIS Mitra Utama",
      location: "Jakarta, Indonesia",
      period: "September 2018 - November 2018",
      responsibilities: [
        "Completed intensive full-stack training covering ASP.NET, C#, SQL Server, and frontend fundamentals",
        "Built multiple full-stack applications applying enterprise development patterns",
      ],
      technologies: ["ASP.NET", "C#", "SQL Server"],
    },
  ],

  skills: {
    "Programming Languages": ["Python", "JavaScript", "TypeScript", "SQL", "C#"],
    "Frontend Development": ["React", "Next.js", "HTML5", "CSS3", "Responsive Web Design"],
    "Backend Development": ["Django", "Node.js (Express)", "ASP.NET", "RESTful APIs", "Authentication"],
    "Databases & Analytics": ["PostgreSQL", "SQL Server", "BigQuery", "Data Pipelines", "Query Optimization", "Metabase"],
    "Cloud & DevOps": ["Google Cloud Platform", "DigitalOcean", "GitHub Actions (CI/CD)", "Git", "Docker"],
    "Payments & Monetization": ["Stripe Subscriptions", "Google AdSense", "Prebid.js", "In-App Purchases (IAP)"],
  },

  education: {
    degree: "Bachelor of Science in Computer Science",
    school: "University of Amikom Yogyakarta",
    period: "2014 - 2018",
    achievements: [
      "Merit Winner, Amikom ICT Award (Software Category)",
      "Developed image forgery detection system using Python (Django)",
    ],
  },

  publications: [
    {
      title: "Performance Analysis of Block Artifact Grid Features for Detecting Forging of Image Splicing",
      publisher: "University Repository",
      date: "2018",
    },
  ],

  languages: [
    {
      language: "Indonesian",
      proficiency: "Native",
    },
    {
      language: "English",
      proficiency: "Professional Working Proficiency",
    },
  ],
};
