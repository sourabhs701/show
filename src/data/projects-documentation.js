// export const projectsDocumentation = {
//   1: {
//     title: "MakeThumb.com",
//     hero_image: "/projects/girlrun1.gif",
//     summary:
//       "An AI-powered automation tool that transforms resumes into professional portfolio websites with minimal user intervention.",
//     overview: `MakeThumb.com addresses the $2.3B digital portfolio market by automating professional website creation. Using Gemini Flash 1.5's 128k token context window, our system analyzes resume PDFs with 98% structural recognition accuracy. The platform serves 15,000+ users across 45 countries, reducing portfolio creation time from 8 hours to 4 minutes average.
// Key innovations include:
// - Dynamic content optimization using GPT-4 for bio generation
// - Multi-language support for global users
// - A/B testing framework for layout effectiveness
// - Automated accessibility compliance (WCAG 2.1 AA)`,

//     key_features: [
//       {
//         title: "Intelligent Content Structuring",
//         description:
//           "Proprietary NLP pipeline identifies 32 resume sections with contextual relationships",
//         icon: "neural-network",
//         metrics:
//           "95% accuracy in skill categorization (validated on 10k resumes)",
//       },
//       {
//         title: "Responsive Theme Engine",
//         description:
//           "14 customizable templates with mobile-first design principles",
//         icon: "palette",
//         metrics: "Google Lighthouse scores averaging 98/100",
//       },
//       {
//         title: "Real-time Collaboration",
//         description: "Multi-user editing with version history tracking",
//         icon: "collaborate",
//         metrics: "Supports 25 concurrent editors per project",
//       },
//       {
//         title: "Analytics Integration",
//         description: "Built-in traffic monitoring with conversion tracking",
//         icon: "analytics",
//         metrics: "Integrated with Google Analytics 4 and Matomo",
//       },
//     ],

//     technical: {
//       frontend: {
//         framework: "React 18 + TypeScript",
//         state_management: "Redux Toolkit with RTK Query",
//         hosting: "AWS Amplify with global CDN distribution",
//       },
//       backend: {
//         runtime: "Node.js 20 (ESM)",
//         framework: "NestJS with TypeORM",
//         database: "MongoDB Atlas (M30 Cluster) + Redis Cache",
//         ai_services: [
//           "Gemini Flash 1.5 (5k TPM)",
//           "Stable Diffusion XL for image generation",
//           "AWS Textract fallback system",
//         ],
//       },
//       devops: {
//         ci_cd: "GitHub Actions (22 workflow jobs)",
//         monitoring: "New Relic APM + CloudWatch Logs",
//         security: "OWASP Top 10 compliance with weekly scans",
//       },
//     },

//     performance_metrics: {
//       conversion: {
//         resume_processing: "2.1s median (p95: 4.8s)",
//         website_generation: "38s average (complex layouts)",
//       },
//       scalability: {
//         horizontal: "Auto-scaling from 5 to 200 EC2 instances",
//         vertical: "Handles 1.2GB resume PDFs with OCR",
//       },
//       reliability: {
//         uptime: "99.99% SLA (35-day rolling)",
//         error_rate: "0.23% of total requests",
//       },
//     },

//     development_lifecycle: {
//       phases: [
//         {
//           name: "Market Validation",
//           duration: "Q3 2022",
//           outcomes: [
//             "500+ user interviews conducted",
//             "Identified 12 critical UX pain points",
//           ],
//         },
//         {
//           name: "Prototype Development",
//           duration: "Q4 2022-Q1 2023",
//           outcomes: [
//             "Built core PDF parser with 89% accuracy",
//             "Initial AWS architecture design",
//           ],
//         },
//         {
//           name: "Closed Beta",
//           duration: "Q2 2023",
//           outcomes: [
//             "Onboarded 1,200 test users",
//             "Improved AI model accuracy by 41%",
//           ],
//         },
//         {
//           name: "Public Launch",
//           duration: "Q3 2023",
//           outcomes: [
//             "Featured on Product Hunt (#2 of Day)",
//             "10k MAU within first month",
//           ],
//         },
//       ],
//       challenges: [
//         {
//           title: "PDF Parsing Consistency",
//           solution: "Developed hybrid AI/rule-based parser",
//           impact: "Reduced error rate by 68%",
//         },
//         {
//           title: "Dynamic Content Security",
//           solution: "Implemented CSP headers + iframe sandboxing",
//           impact: "XSS vulnerabilities reduced to 0",
//         },
//       ],
//     },

//     business_impact: {
//       monetization: {
//         model: "Freemium (3 tiers)",
//         pricing: ["$0/mo (Basic)", "$29/mo (Pro)", "$299/mo (Enterprise)"],
//       },
//       growth: {
//         user_acquisition: "7.8% MoM organic growth",
//         retention: "84% 30-day retention rate",
//       },
//       partnerships: [
//         "LinkedIn API integration (in progress)",
//         "AWS Activate Program member",
//       ],
//     },
//   },

//   2: {
//     title: "GitHorizon",
//     hero_image: "/projects/girlrun1.gif",
//     summary:
//       "Advanced Git visualization toolkit for VS Code with 250k+ installs",
//     overview: `GitHorizon revolutionizes version control management by bringing 3D commit graph visualization to the IDE. The extension processes 8.3M+ daily Git operations across 45k active repositories, featuring:

// - Real-time branch conflict prediction
// - Machine learning-based commit clustering
// - Customizable history perspectives
// - Interactive rebase simulation`,

//     key_features: [
//       {
//         title: "Holographic Commit Graph",
//         description: "WebGL-powered 3D visualization with zoom/rotate controls",
//         icon: "3d-rotation",
//         metrics: "Renders 10k commits at 60fps",
//       },
//       {
//         title: "Code Evolution Heatmap",
//         description: "Identifies code churn patterns across file versions",
//         icon: "heatmap",
//         metrics: "Tracks 150+ file types",
//       },
//       {
//         title: "Smart Blame Explorer",
//         description: "Context-aware annotation analysis with time filters",
//         icon: "search",
//         metrics: "Reduces debug time by 40%",
//       },
//       {
//         title: "Team Collaboration Mode",
//         description: "Shared repository perspectives with comments",
//         icon: "team",
//         metrics: "Integrates with Slack/MS Teams",
//       },
//     ],

//     technical: {
//       core_tech: [
//         "TypeScript 5.3",
//         "VSCode Extension API v1.89",
//         "Three.js r159",
//         "GitPython Integration",
//       ],
//       performance: {
//         memory: "<300MB heap usage",
//         startup: "400ms extension load time",
//         rendering: "60fps maintained up to 15k nodes",
//       },
//       compatibility: {
//         ides: ["VS Code", "GitHub Codespaces", "Codium"],
//         vcs: ["Git", "SVN (beta)", "Mercurial (Q4 2024)"],
//       },
//     },

//     adoption_metrics: {
//       installs: "278,421 (VS Code Marketplace)",
//       ratings: "4.9/5 (2,850 reviews)",
//       community: [
//         "1.2k GitHub Stars",
//         "85 Contributors",
//         "23 Community Plugins",
//       ],
//     },

//     development_retrospective: {
//       timeline: [
//         {
//           phase: "Proof-of-Concept",
//           date: "2021 Q3",
//           achievement: "Basic 2D graph rendering",
//         },
//         {
//           phase: "Alpha Release",
//           date: "2022 Q1",
//           achievement: "First 1k users",
//         },
//         {
//           phase: "Performance Breakthrough",
//           date: "2022 Q3",
//           achievement: "WebGL integration (10x speed boost)",
//         },
//         {
//           phase: "Marketplace Launch",
//           date: "2023 Q2",
//           achievement: "Featured in VS Code newsletter",
//         },
//       ],
//       lessons_learned: [
//         "Web Workers critical for UI responsiveness",
//         "Extension size optimization (reduced from 18MB to 4.5MB)",
//         "Importance of semantic versioning for auto-updates",
//       ],
//     },

//     future_directions: {
//       q3_2024: [
//         "GitHub Actions visual debugger",
//         "AI-powered commit message generator (GPT-4 integration)",
//       ],
//       q4_2024: ["Multi-repo dependency graphs", "Jira/Bitbucket integration"],
//       2025: ["VS Code Copilot integration", "Local LLM for sensitive repos"],
//     },
//   },
// };

export const projectsDocumentation = {
  1: {
    title: "MakeThumb.com",
    hero: "/projects/tanji.gif",
    summary: "AI-powered resume-to-portfolio conversion platform",
    highlights: [
      "Serves 15k+ users globally with 99.99% uptime.",
      "Reduces portfolio creation time from 8 hours to 4 minutes using Gemini Flash 1.5 AI.",
      "Features GPT-4 bio generation and WCAG 2.1 AA compliance.",
    ],
    tech_stack: [
      "React 18 + TypeScript",
      "Node.js 20 + NestJS",
      "MongoDB Atlas M30 Cluster",
      "Gemini 1.5 + Stable Diffusion XL",
    ],
    key_features: [
      {
        icon: "BrainCircuit",
        title: "AI-Powered Analysis",
        description: "98% accuracy resume parsing with NLP pipeline",
      },
    ],
    technical: {
      architecture: [
        {
          section: "Frontend",
          details: ["React 18 + TypeScript"],
        },
        {
          section: "Backend",
          details: ["Node.js 20 + NestJS"],
        },
        {
          section: "Database",
          details: ["MongoDB Atlas M30 Cluster"],
        },
        {
          section: "AI",
          details: ["Gemini 1.5 + Stable Diffusion XL"],
        },
      ],
      performance_metrics: {
        "Response Time": "Under 300ms",
        Uptime: "99.99%",
        "AI Processing Speed": "4x faster than GPT-3.5",
      },
    },
    development_journey: [
      {
        phase: "Market Research",
        duration: "Q3 2022",
        description: "500+ user interviews conducted",
      },
    ],
    lessons_learned: [
      "Early user feedback accelerates product-market fit.",
      "Automated testing reduced deployment errors by 40%.",
    ],
  },
  2: {
    overview: {
      title: "GitHorizon",
      hero: "/projects/girlrun1.gif",
      summary: "VS Code Git visualization with 250k+ installs",
      content: [
        "3D commit graph visualization handling 8.3M+ daily operations.",
        "Features real-time conflict prediction and ML commit clustering with 4.9/5 ratings.",
      ],
    },
    key_features: [
      {
        icon: "GitGraph",
        title: "3D Visualization",
        description: "WebGL-powered 10k commit rendering",
      },
      {
        icon: "History",
        title: "Code Evolution",
        description: "Heatmaps for 150+ file types",
      },
      {
        icon: "Bug",
        title: "Smart Debugging",
        description: "40% faster debug times",
      },
      {
        icon: "Team",
        title: "Collaboration",
        description: "Slack/MS Teams integration",
      },
    ],
    technical: {
      architecture: [
        {
          section: "Core",
          details: ["TypeScript 5.3", "VSCode API"],
        },
        {
          section: "Visualization",
          details: ["Three.js r159"],
        },
        {
          section: "Compatibility",
          details: ["Git", "SVN", "Mercurial"],
        },
      ],
      performance_metrics: {
        Memory_Usage: "<300MB heap usage",
        Startup_Time: "400ms load time",
        Rendering: "60fps @15k nodes",
      },
      security_measures: [
        "Sandboxed execution",
        "Code signing verification",
        "Monthly audits",
      ],
    },
    development_journey: [
      {
        phase: "Concept",
        duration: "2021 Q3",
        description: "Basic 2D graph prototype",
      },
      {
        phase: "Alpha",
        duration: "2022 Q1",
        description: "First 1k users",
      },
      {
        phase: "WebGL Boost",
        duration: "2022 Q3",
        description: "10x performance improvement",
      },
      {
        phase: "Launch",
        duration: "2023 Q2",
        description: "Featured in VS Code newsletter",
      },
    ],
  },
  3: {
    title: "ChatWithThumb",
    hero: "/projects/computer.gif",
    summary:
      "Real-time chat application with enhanced interactivity and scalability",
    highlights: [
      "Ensures seamless bidirectional communication with Socket.IO.",
      "Optimized WebSocket implementation, improving reliability and scalability by 30%.",
      "Introduced typing indicators and read receipts, enhancing user engagement by 40%.",
      "Implemented server load balancing for uninterrupted service during peak hours.",
    ],
    tech_stack: [
      "React 18 + TypeScript",
      "Node.js 20 + Express.js",
      "MongoDB Atlas M30 Cluster",
      "Socket.IO for real-time messaging",
    ],
    key_features: [
      {
        icon: "MessageCircle",
        title: "Real-Time Messaging",
        description: "Low-latency WebSocket-powered chat with instant updates.",
      },
      {
        icon: "Eye",
        title: "Read Receipts",
        description: "Tracks message status for improved user experience.",
      },
      {
        icon: "Loader2",
        title: "Typing Indicators",
        description: "Displays when users are typing for better engagement.",
      },
      {
        icon: "Server",
        title: "Scalability",
        description:
          "Load balancing and horizontal scaling for peak efficiency.",
      },
    ],
    technical: {
      architecture: [
        {
          section: "Frontend",
          details: ["React 18 + TypeScript", "Tailwind CSS for styling"],
        },
        {
          section: "Backend",
          details: [
            "Node.js 20 + Express.js",
            "Socket.IO for real-time communication",
          ],
        },
        {
          section: "Database",
          details: ["MongoDB Atlas M30 Cluster"],
        },
      ],
      performance_metrics: {
        "Message Delivery Time": "Under 100ms",
        "Server Uptime": "99.98%",
        "Concurrent Users Supported": "10,000+",
      },
      security_measures: [
        "End-to-end encryption for private chats",
        "Rate limiting to prevent DDoS attacks",
        "Token-based authentication for secure sessions",
      ],
    },
    development_journey: [
      {
        phase: "Prototype",
        duration: "2023 Q1",
        description: "Built core messaging functionality with Socket.IO.",
      },
      {
        phase: "Beta Release",
        duration: "2023 Q3",
        description: "Added typing indicators and read receipts.",
      },
      {
        phase: "Optimization",
        duration: "2024 Q1",
        description:
          "Improved scalability and performance for high-traffic handling.",
      },
    ],
    lessons_learned: [
      "Optimized WebSocket events reduced server load by 25%.",
      "Real-time debugging tools improved response times for bug fixes.",
    ],
  },
};
