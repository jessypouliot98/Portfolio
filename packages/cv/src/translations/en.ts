import { Translation } from "./types";

export const en = {
  fileName: "CV Jessy Pouliot - Full-Stack (en)",
  fileName_react: "CV Jessy Pouliot - React (en)",
  title: "Jessy Pouliot",
  subtitle: "Senior Full-Stack Developer",
  subtitle_react: "Senior React & React Native Developer",
  summary: {
    title: "Professional Summary",
    content: "",
  },
  summary_react: {
    title: "Professional Summary",
    content: "",
  },
  contact: {
    items: [
      { type: "email", label: "jessypouliot98@gmail.com", url: "mailto:jessypouliot98@gmail.com" },
      { type: "phone", label: "(514) 267-2784", url: "tel:15142672784" },
      { type: "linkedin", label: "/in/jessypouliot", url: "https://linkedin.com/in/jessypouliot" },
      { type: "github", label: "/jessypouliot98", url: "https://github.com/jessypouliot98" },
      { type: "website", label: "jessypouliot.ca", url: "https://jessypouliot.ca" },
    ],
    type: {
      email: "Email",
      phone: "Phone",
      linkedin: "LinkedIn",
      github: "GitHub",
      website: "Portfolio"
    }
  },
  languages: {
    title: "Languages",
    items: [
      { label: "French", capacity: "Native" },
      { label: "English", capacity: "Professional" },
      // { label: "Japanese", capacity: "Learning" },
    ]
  },
  technologies: {
    title: "Technologies",
    items: [
      { type: "frontend", label: "React" },
      { type: "frontend", label: "React Native" },
      { type: "frontend", label: "TailwindCSS" },
      { type: "frontend", label: "Radix UI" },
      // { type: "frontend", label: "HTML" },
      // { type: "frontend", label: "CSS" },
      { type: "backend", label: "Node.js" },
      { type: "backend", label: "Next.js" },
      { type: "backend", label: "tRPC" },
      { type: "backend", label: "PostgreSQL" },
      { type: "backend", label: "Redis" },
      { type: "tools", label: "Docker" },
      // { type: "tools", label: "Git" },
      { type: "tools", label: "WebStorm" },
      { type: "tools", label: "Codex" },
      { type: "tools", label: "Claude Code" },
      { type: "tools", label: "MCP" },
      { type: "tools", label: "CI/CD (GitHub Actions)" },
      { type: "other", label: "TypeScript" },
      // { type: "other", label: "JavaScript" },
      { type: "other", label: "PHP" },
    ]
  },
  education: {
    title: "Education",
    items: [
      {
        school: "Cégep de Saint-Jérôme",
        certification: "Techniques d'intégration multimédia",
        completedOn: "2019",
        content: [
          { "text": "Front-end: HTML, CSS, JavaScript, React" },
          { "text": "Back-end: PHP, Laravel, MySQL" },
          { "text": "Game development: Unity3D, C#, ActionScript" },
          { "text": "Graphic design and UI/UX" }
        ]
      }
    ]
  },
  strengths: {
    title: "Strengths",
    items: [
      { title: "Creative problem-solving", description: "Strong at breaking down ambiguous problems, understanding underlying systems, and making pragmatic engineering decisions." },
      { title: "Technical curiosity", description: "Continuously explores tools, frameworks, and system behavior in depth to make better architectural and implementation choices." },
      { title: "End-to-end ownership", description: "Comfortable taking features from discovery through architecture, implementation, delivery, and iteration while improving team workflows along the way." },
    ]
  },
  experience: {
    title: "Professional Experiences",
    items: [
      {
        title: "Senior Mobile Developer",
        company: "National Bank of Canada",
        location: "Montreal, QC",
        locationType: "hybrid",
        positionType: "contract",
        from: "March 2025",
        to: "December 2025",
        stack: [
          "React Native",
          "TypeScript",
          "GraphQL",
          "Redux Saga",
          "React Query"
        ],
        content: [
          { text: "Owned the account transactions rewrite using modern React Native patterns, delivering a simpler, maintainable architecture that supports future development and platform stability" },
          { text: "Improved user experience by introducing loading state animations and robust error handling, increasing clarity and reliability during critical transaction flows" },
          { text: "Designed and implemented a customizable local API-mocking system, enabling developers to simulate complex account scenarios and accelerate development and testing" },
          { text: "Provided cross-team code reviews and architectural guidance, improving consistency around performance, type safety, and React Native best practices for engineers beyond the immediate team" }
        ]
      },
      {
        title: "Senior Full-Stack Developer",
        company: "GardaWorld (ECAM.ai)",
        location: "Montreal, QC",
        locationType: "remote",
        positionType: "contract",
        from: "December 2022",
        to: "February 2025",
        stack: [
          "React",
          "Next.js",
          "TypeScript",
          "TailwindCSS",
          "PostgreSQL",
          "Redis",
          "Docker",
          "Radix UI"
        ],
        content: [
          { text: "Led the monorepo architecture for web and mobile applications using Turborepo, enabling shared code and unified build workflows" },
          { text: "Led a ground-up website rewrite, building a reusable UI library and delivering advanced UX features including drag-and-drop CCTV dashboards, infinite paging, and geometry-based camera masking that improved usability for internal operations teams" },
          { text: "Designed and implemented a type-safe API layer using tRPC across the monorepo, enabling fast, reliable development and consistent API usage between web and mobile applications" },
          { text: "Built and optimized PostgreSQL- and Redis-backed APIs, supporting CRUD, processed queries, and keyset pagination; improved performance through query plan analysis, indexing, SQL function optimization, and query preprocessing" }
        ]
      },
      {
        title: "Front-End Software Developer",
        company: "GardaWorld (ECAM.ai)",
        location: "Montreal, QC",
        locationType: "remote",
        positionType: "contract",
        from: "December 2022",
        to: "February 2025",
        stack: [
          "React",
          "Next.js",
          "TypeScript",
          "TailwindCSS",
          "PostgreSQL",
          "Redis",
          "Docker",
          "Radix UI"
        ],
        content: [
          { text: "Led the monorepo architecture for web and mobile applications using Turborepo, enabling shared code and unified build workflows" },
          { text: "Led a ground-up website rewrite, building a reusable UI library and delivering advanced UX features including drag-and-drop CCTV dashboards, infinite paging, and geometry-based camera masking that improved usability for internal operations teams" },
          { text: "Designed and implemented a type-safe API layer using tRPC across the monorepo, enabling fast, reliable development and consistent API usage between web and mobile applications" },
          { text: "Built and optimized PostgreSQL- and Redis-backed APIs, supporting CRUD, processed queries, and keyset pagination; improved performance through query plan analysis, indexing, SQL function optimization, and query preprocessing" }
        ]
      }
    ]
  }
} satisfies Translation