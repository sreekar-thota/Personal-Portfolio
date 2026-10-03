export const PLAYER_INFO = {
  name: "SREEKAR THOTA",
  tag: "PLAYER",
  class: "Developer / Creator",
  level: "B.Tech Student",
  specialization: "Web Development • AI • Interactive Experiences",
  interest: "Game Development",
  avatar: "/images/player-avatar.jpg",
  bio: "I’m a B.Tech student who enjoys turning ideas into interactive digital experiences. I build websites, AI-powered applications and experimental projects while constantly exploring game development and new technologies.",
  currentObjective: "Build. Learn. Experiment. Repeat.",
  stats: [
    { label: "PUBLIC REPOSITORIES", value: 88, displayValue: "7+ REPOS" },
    { label: "PROJECTS", value: 82, displayValue: "6+ PROJECTS" },
    { label: "HACKATHON PODIUMS", value: 80, displayValue: "80%" },
    { label: "AI-INTEGRATED PROJECTS", value: 90, displayValue: "90%" },
    { label: "PROBLEM SOLVING", value: 95, displayValue: "95%" },
  ],
  techStack: "Python / JavaScript / React / HTML / CSS / MediaPipe / AI / Flask / SQLite / APIs",
  socials: {
    github: "https://github.com/sreekar-thota",
    linkedin: "https://www.linkedin.com/in/sreekar-thota-407976382/",
    email: "sreekarthota2007@gmail.com"
  }
};

export const SKILL_CATEGORIES = [
  { id: "all", label: "ALL SKILLS", icon: "Boxes" },
  { id: "web", label: "WEB DEV", icon: "Globe" },
  { id: "programming", label: "PROGRAMMING", icon: "Code2" },
  { id: "ai", label: "AI & TECH", icon: "Cpu" },
  { id: "gamedev", label: "GAME DEV", icon: "Gamepad2" },
  { id: "tools", label: "TOOLS", icon: "Wrench" },
  { id: "creative", label: "CREATIVE", icon: "Palette" }
];

export const SKILL_NODES = [
  // Web Development
  {
    id: "html",
    name: "HTML5",
    category: "web",
    level: "EXPERIENCED",
    levelColor: "green",
    description: "Semantic web architecture, accessible DOM hierarchy, and standards-compliant structural markup.",
    connections: ["css", "javascript"],
    xp: "Tier 3",
    icon: "Layout"
  },
  {
    id: "css",
    name: "CSS3 / Styling",
    category: "web",
    level: "EXPERIENCED",
    levelColor: "green",
    description: "Modern layout systems (Flexbox, CSS Grid), responsive breakpoints, animations, and custom styling.",
    connections: ["javascript", "react", "ui_ux"],
    xp: "Tier 3",
    icon: "Layers"
  },
  {
    id: "javascript",
    name: "JavaScript (ES6+)",
    category: "web",
    level: "EXPERIENCED",
    levelColor: "green",
    description: "Asynchronous programming, DOM manipulation, state management, modern ESNext features and APIs.",
    connections: ["react", "mediapipe", "interactive_ui"],
    xp: "Tier 3",
    icon: "FileCode2"
  },
  {
    id: "react",
    name: "React.js",
    category: "web",
    level: "BUILDING",
    levelColor: "cyan",
    description: "Component-driven development, custom hooks, reactive state flow, and SPA architecture.",
    connections: ["interactive_ui", "vercel"],
    xp: "Tier 2",
    icon: "Atom"
  },

  // Programming
  {
    id: "python",
    name: "Python",
    category: "programming",
    level: "EXPERIENCED",
    levelColor: "green",
    description: "Data scripting, AI/ML workflows, backend prototyping with Flask, and API development.",
    connections: ["ai_apis", "computer_vision", "data_processing"],
    xp: "Tier 3",
    icon: "Terminal"
  },
  {
    id: "java",
    name: "Java",
    category: "programming",
    level: "LEARNING",
    levelColor: "yellow",
    description: "Object-oriented programming, data structures, algorithms, and core application logic.",
    connections: [],
    xp: "Tier 1",
    icon: "Coffee"
  },

  // AI & Technology
  {
    id: "ai_apis",
    name: "AI APIs",
    category: "ai",
    level: "BUILDING",
    levelColor: "cyan",
    description: "Integrating intelligent endpoints, LLMs, vision APIs, and AI workflow automation into web products.",
    connections: ["mediapipe", "data_processing"],
    xp: "Tier 2",
    icon: "Bot"
  },
  {
    id: "computer_vision",
    name: "Computer Vision",
    category: "ai",
    level: "LEARNING",
    levelColor: "yellow",
    description: "Image processing, spatial landmark estimation, satellite thermal anomaly analysis, and visual recognition.",
    connections: ["mediapipe"],
    xp: "Tier 1",
    icon: "Eye"
  },
  {
    id: "mediapipe",
    name: "MediaPipe",
    category: "ai",
    level: "BUILDING",
    levelColor: "cyan",
    description: "Real-time on-device machine learning for hand tracking, gesture classification, and camera interaction.",
    connections: ["interactive_ui"],
    xp: "Tier 2",
    icon: "Sparkles"
  },
  {
    id: "data_processing",
    name: "Data Processing",
    category: "ai",
    level: "LEARNING",
    levelColor: "yellow",
    description: "Handling geospatial datasets, NASA FIRMS streams, telemetry data, and JSON pipeline transformations.",
    connections: [],
    xp: "Tier 1",
    icon: "Database"
  },

  // Game Development
  {
    id: "game_design",
    name: "Game Design",
    category: "gamedev",
    level: "EXPLORING",
    levelColor: "purple",
    description: "Game mechanics design, player progression loops, level pacing, and immersive worldbuilding concepts.",
    connections: ["gameplay_concepts", "interactive_ui"],
    xp: "Tier 1",
    icon: "Gamepad2"
  },
  {
    id: "interactive_ui",
    name: "Interactive UI",
    category: "gamedev",
    level: "BUILDING",
    levelColor: "cyan",
    description: "AAA game-inspired HUDs, kinetic micro-interactions, canvas animations, and motion choreography.",
    connections: ["game_design"],
    xp: "Tier 2",
    icon: "Crosshair"
  },
  {
    id: "gameplay_concepts",
    name: "Gameplay Concepts",
    category: "gamedev",
    level: "EXPLORING",
    levelColor: "purple",
    description: "State machines, collision logic, input handling, feedback systems, and game loops.",
    connections: [],
    xp: "Tier 1",
    icon: "Flame"
  },

  // Tools
  {
    id: "git",
    name: "Git",
    category: "tools",
    level: "EXPERIENCED",
    levelColor: "green",
    description: "Distributed version control, branching strategies, conflict resolution, and commit hygiene.",
    connections: ["github"],
    xp: "Tier 3",
    icon: "GitBranch"
  },
  {
    id: "github",
    name: "GitHub",
    category: "tools",
    level: "EXPERIENCED",
    levelColor: "green",
    description: "Repository management, open-source collaboration, pull requests, and CI/CD triggers.",
    connections: ["vercel", "netlify"],
    xp: "Tier 3",
    icon: "Github"
  },
  {
    id: "vscode",
    name: "VS Code",
    category: "tools",
    level: "EXPERIENCED",
    levelColor: "green",
    description: "Primary development command center with debugging, snippets, extensions, and workspace tuning.",
    connections: [],
    xp: "Tier 3",
    icon: "Code"
  },
  {
    id: "netlify",
    name: "Netlify",
    category: "tools",
    level: "BUILDING",
    levelColor: "cyan",
    description: "Continuous deployment for front-end applications, custom domain setups, and edge routing.",
    connections: [],
    xp: "Tier 2",
    icon: "Cloud"
  },
  {
    id: "vercel",
    name: "Vercel",
    category: "tools",
    level: "BUILDING",
    levelColor: "cyan",
    description: "Fast deployment pipeline for React, Vite, and modern front-end web frameworks.",
    connections: [],
    xp: "Tier 2",
    icon: "Zap"
  },

  // Creative
  {
    id: "ui_ux",
    name: "UI / UX Design",
    category: "creative",
    level: "BUILDING",
    levelColor: "cyan",
    description: "User journey mapping, wireframing, dark-mode ergonomics, and visual hierarchy design.",
    connections: ["visual_design"],
    xp: "Tier 2",
    icon: "Compass"
  },
  {
    id: "visual_design",
    name: "Visual Design",
    category: "creative",
    level: "BUILDING",
    levelColor: "cyan",
    description: "Color theory, typography pairing, cyber aesthetic curation, and HUD visual elements.",
    connections: [],
    xp: "Tier 2",
    icon: "Sparkles"
  },
  {
    id: "capcut",
    name: "CapCut",
    category: "creative",
    level: "BUILDING",
    levelColor: "cyan",
    description: "Video pacing, audio synchronization, motion graphics editing, and project showcase videos.",
    connections: [],
    xp: "Tier 2",
    icon: "Video"
  }
];

export const MISSIONS = [
  {
    id: "gesturesnap",
    missionNumber: "01",
    codeName: "OPERATION: GESTURESNAP",
    title: "GestureSnap AI",
    category: "AI / Computer Vision / Web",
    badge: "TOUCHLESS AI PHOTO BOOTH",
    status: "OPERATIONAL",
    statusColor: "cyan",
    image: "/images/gesturesnap.jpg",
    description: "Browser-based AI photo booth using hand gestures for touchless interaction, photo capture and automated photo strip generation.",
    technologies: ["HTML", "CSS", "JavaScript", "MediaPipe", "Webcam API", "Canvas"],
    liveUrl: "https://gesturesnap2.netlify.app/",
    githubUrl: "https://github.com/sreekar-thota",
    overview: "GestureSnap AI reimagines the traditional photo booth into a completely touchless, gesture-driven browser application. Utilizing Google MediaPipe's real-time hand landmark estimation, users can trigger countdowns with natural hand signs (such as peace/victory signs), take automated captures, and compile cyber-themed digital photo strips ready for sharing.",
    features: [
      "Real-time 21-point hand skeletal landmark tracking directly in browser",
      "Gesture classification engine with smooth 3-second visual countdown HUD",
      "Automated multi-snap capture pipeline with flash and shutter effects",
      "Instant cyber photo strip generation with customizable timestamp stamps",
      "Zero client installation required — pure client-side web application"
    ],
    challenges: "Achieving steady real-time frame rates for hand landmark detection across diverse webcams while avoiding false-positive shutter triggers from partial gestures.",
    results: "Delivered a silky 60FPS touchless experience with high recognition accuracy and instantaneous client-side photo strip rendering."
  },
  {
    id: "tennis-auction",
    missionNumber: "02",
    codeName: "OPERATION: COURT AUCTION",
    title: "Tennis Auction Platform",
    category: "Web Application / Real-Time Auction",
    badge: "LIVE SPORTS BIDDING ENGINE",
    status: "DEPLOYED",
    statusColor: "green",
    image: "/images/tennis-auction.jpg",
    description: "Interactive auction management platform developed for the Bhimavaram Tennis League.",
    technologies: ["React", "JavaScript", "Tailwind CSS", "Node.js", "Express", "Render"],
    liveUrl: "https://tennis-p7lb.onrender.com/",
    githubUrl: "https://github.com/sreekar-thota",
    overview: "A comprehensive, high-stakes live auction platform purpose-built for the Bhimavaram Tennis League. The platform orchestrates fast-paced live bidding wars between team owners, managing multi-million purse balances, dynamic player rosters, live auction timers, and real-time bidder logs.",
    features: [
      "Real-time live bidding console with instant paddle action updates",
      "Comprehensive Admin Dashboard for auction masters to control player queue",
      "Dynamic Team Purse & Budget tracking with automatic constraint validation",
      "Player Management registry complete with stats, rankings, and base prices",
      "Historical bid ledger and real-time team roster compilation"
    ],
    challenges: "Synchronizing state across multiple concurrent team managers with zero latency discrepancies during rapid last-second bidding increments.",
    results: "Successfully powered live league auctions, eliminating manual paperwork and delivering a transparent, thrilling auction experience."
  },
  {
    id: "placement-suite",
    missionNumber: "03",
    codeName: "OPERATION: PLACEMENT SUITE",
    title: "PLACEMENT SUITE",
    category: "AI / PLACEMENT / INTERACTIVE",
    badge: "PLACEMENT INTELLIGENCE SUITE",
    status: "DEPLOYED",
    statusColor: "cyan",
    image: "/images/placement-suite.png",
    description: "AI-powered placement preparation platform with JAM speaking practice, STAR interview coaching, and AI Mock Interviews.",
    technologies: ["Python", "JavaScript", "React", "HTML", "CSS", "AI", "APIs"],
    liveUrl: "https://placement-suite-two.vercel.app/",
    githubUrl: "https://github.com/sreekar-thota",
    overview: "Placement Intelligence Suite is an AI-powered placement preparation platform designed to elevate student interview readiness through real-time speech analytics and intelligent simulations. It features JAM (Just-A-Minute) impromptu speaking practice, STAR behavioral interview coaching, and voice-interactive AI mock interviews.",
    features: [
      "JAM Simulator for 60-second impromptu speech pacing and articulation practice",
      "STAR Coach providing behavioral framework training and situation response feedback",
      "Two-way interactive voice AI Mock Interview with live scoring",
      "Connected Gemini intelligence API for automated coaching suggestions",
      "Responsive interactive dashboard deployed on Vercel"
    ],
    challenges: "Building an intuitive, low-latency interview simulation flow with real-time feedback and voice evaluation.",
    results: "Successfully developed and deployed to Vercel, providing a comprehensive AI placement preparation suite."
  },
  {
    id: "agninetra",
    missionNumber: "04",
    codeName: "OPERATION: AGNI NETRA",
    title: "AGNI NETRA",
    category: "AI / DISASTER MANAGEMENT / SATELLITE",
    badge: "SATELLITE THERMAL AI",
    status: "PROTOTYPE",
    statusColor: "yellow",
    image: "/images/agninetra.jpg",
    description: "AI-powered detection and classification of industrial fires and persistent thermal sources using NASA FIRMS, satellite imagery, geospatial data, and machine learning.",
    technologies: ["Python", "Flask", "SQLite", "FIRMS", "OSM", "GEE", "Sentinel-2"],
    liveUrl: "#",
    githubUrl: "https://github.com/sreekar-thota",
    overview: "Agni Netra is an AI-powered aerospace disaster monitoring system engineered to detect, classify, and track persistent thermal anomalies and industrial fire outbreaks. By ingesting NASA FIRMS satellite telemetry, Sentinel-2 multi-spectral bands, and OpenStreetMap industrial boundaries, the system separates controlled industrial flare-offs from high-risk uncontained fires.",
    features: [
      "NASA FIRMS thermal infrared anomaly data ingestion pipeline",
      "Sentinel-2 multi-spectral band filtering (B11 SWIR / B12 MWIR) for precision burn scar tracking",
      "OpenStreetMap industrial cluster zoning integration to map pinpoint coordinates",
      "Automated fire severity scoring algorithm (0 to 10 scale)",
      "High-alert notification engine for rapid disaster response teams"
    ],
    challenges: "Filtering out false positives caused by solar glint, desert heat reflection, and routine industrial flares through multi-layer spectral thresholding.",
    results: "Created a robust multi-source geospatial classification prototype capable of automated high-confidence wildfire and industrial hazard detection."
  },
  {
    id: "incloudhub",
    missionNumber: "05",
    codeName: "OPERATION: INCLOUDHUB",
    title: "INCLOUDHUB",
    category: "EDUCATION / CLOUD / CAMPUS PLATFORM",
    badge: "ALL-IN-ONE CAMPUS HUB",
    status: "DEPLOYED",
    statusColor: "green",
    image: "/images/incloudhub.jpg",
    description: "A student-built all-in-one campus platform for accessing notes, question papers, knowledge resources, department content, attendance tools, and Cloud Delivery.",
    technologies: ["HTML", "CSS", "JavaScript", "Firebase", "APIs"],
    liveUrl: "https://incloudhub.blogspot.com/",
    githubUrl: "https://github.com/sreekar-thota",
    overview: "InCloudHub is a student-built all-in-one campus ecosystem designed for seamless academic access and campus life management. The platform unites smart access to notes, previous question papers, department resources, attendance tracking tools, and the integrated 'Cloud Delivery' campus food ordering station into a fast, accessible portal.",
    features: [
      "Centralized repository for department notes, study materials, and curated question papers",
      "Integrated Cloud Delivery ordering system for campus cafeteria, waffle, and snack outlets",
      "Interactive multi-department hubs (CSE, AIDS, AIML, ECE, IT, MECH, CIVIL, CSD, CSBS)",
      "Attendance tracking eligibility utility and AI tools ecosystem integration",
      "Clean, responsive, mobile-first interface built by students for students"
    ],
    challenges: "Consolidating fragmented campus resources, departmental archives, and quick ordering workflows into a unified, high-speed web hub.",
    results: "Deployed as a live campus destination serving students across multiple engineering departments with instant academic access and campus services."
  }
];

export const ACHIEVEMENTS = [
  {
    id: "ach-1",
    icon: "Trophy",
    title: "HACKATHON PARTICIPANT",
    event: "Build What Moves India",
    description: "Competed and built high-pressure solutions under tight deadlines, architecting intelligent web applications.",
    tier: "GOLD",
    xp: "+1,000 XP",
    status: "UNLOCKED"
  },
  {
    id: "ach-2",
    icon: "Zap",
    title: "BUILT MULTIPLE WEB APPLICATIONS",
    event: "Production & Web Platforms",
    description: "Engineered responsive, dynamic web applications with state management, dashboards, and live interfaces.",
    tier: "PLATINUM",
    xp: "+1,500 XP",
    status: "UNLOCKED"
  },
  {
    id: "ach-3",
    icon: "Gamepad2",
    title: "GAME DEVELOPMENT ENTHUSIAST",
    event: "Interactive Experiences",
    description: "Actively studying gameplay loops, kinetic UI, canvas shaders, and game design architectures.",
    tier: "SPECIAL",
    xp: "+800 XP",
    status: "UNLOCKED"
  },
  {
    id: "ach-4",
    icon: "Code2",
    title: "OPEN SOURCE / GITHUB PROJECTS",
    event: "Code Craft & Systems",
    description: "Maintains structured Git repositories, clean modular codebases, and open developer resources.",
    tier: "SILVER",
    xp: "+600 XP",
    status: "UNLOCKED"
  },
  {
    id: "ach-5",
    icon: "Rocket",
    title: "DEPLOYED REAL-WORLD PROJECTS",
    event: "Live Production Systems",
    description: "Shipped functional platforms utilized in real organizations (Tennis League, Hackathon Deployments, AI Tools).",
    tier: "MASTER",
    xp: "+2,000 XP",
    status: "UNLOCKED"
  }
];

export const PLAYER_JOURNEY = [
  {
    step: "01",
    title: "START",
    badge: "LVL 01",
    subtitle: "The Origin Point",
    description: "Began the B.Tech quest with relentless curiosity for computers, software mechanics, and digital creation."
  },
  {
    step: "02",
    title: "LEARNED PROGRAMMING",
    badge: "LVL 05",
    subtitle: "Core Algorithms & Syntax",
    description: "Mastered fundamental computer science concepts, object-oriented principles, Python scripting, and Java structures."
  },
  {
    step: "03",
    title: "STARTED BUILDING WEBSITES",
    badge: "LVL 10",
    subtitle: "Frontend Foundations",
    description: "Constructed dynamic web applications with HTML, CSS, JavaScript, and React, bringing static concepts to life."
  },
  {
    step: "04",
    title: "HACKATHONS",
    badge: "LVL 15",
    subtitle: "High-Pressure Battlegrounds",
    description: "Entered competitive hackathons including 'Build What Moves India', shipping full-featured platforms under 48-hour sprint conditions."
  },
  {
    step: "05",
    title: "AI PROJECTS",
    badge: "LVL 20",
    subtitle: "Vision & Machine Intelligence",
    description: "Pioneered computer vision prototypes: GestureSnap AI touchless photo booth and Agni Netra satellite fire detection."
  },
  {
    step: "06",
    title: "REAL-WORLD APPLICATIONS",
    badge: "LVL 25",
    subtitle: "Production Deployments",
    description: "Engineered and shipped the Tennis Auction Platform on Render for the Bhimavaram Tennis League's live player auctions."
  },
  {
    step: "07",
    title: "GAME DEVELOPMENT",
    badge: "LVL 30",
    subtitle: "Interactive Worlds & Shaders",
    description: "Deep-diving into game design, AAA HUD interfaces, gameplay loops, and experimental digital environments."
  },
  {
    step: "08",
    title: "NEXT LEVEL...",
    badge: "UNLOCKED",
    subtitle: "Future Quests Ahead",
    description: "Continuously leveling up skills, building larger scale systems, and seeking ambitious collaborations."
  }
];

export const ABILITIES = [
  {
    id: "web-dev",
    name: "WEB DEVELOPMENT",
    code: "ABILITY_01",
    icon: "Globe",
    cooldown: "0.0s",
    energy: "100%",
    description: "Build modern responsive websites and web applications with rock-solid architecture, clean state management, and blazing load times.",
    tags: ["React", "JavaScript", "HTML5", "CSS3 / Tailwind", "SPA Architecture"]
  },
  {
    id: "ui-ux",
    name: "UI / UX DESIGN",
    code: "ABILITY_02",
    icon: "Palette",
    cooldown: "0.0s",
    energy: "95%",
    description: "Design clean, interactive and engaging digital experiences with cohesive typography, cyber ergonomics, and intuitive user flows.",
    tags: ["User Flow", "Dark Theme Ergonomics", "Visual Hierarchy", "Micro-Interactions"]
  },
  {
    id: "ai-integration",
    name: "AI INTEGRATION",
    code: "ABILITY_03",
    icon: "Cpu",
    cooldown: "0.5s",
    energy: "90%",
    description: "Build applications using AI APIs, computer vision and intelligent workflows to deliver smart, automated user capabilities.",
    tags: ["MediaPipe", "Computer Vision", "AI APIs", "Geospatial Data", "Python Scripts"]
  },
  {
    id: "interactive-exp",
    name: "INTERACTIVE EXPERIENCES",
    code: "ABILITY_04",
    icon: "Gamepad2",
    cooldown: "0.0s",
    energy: "100%",
    description: "Create engaging interfaces with animations and game-inspired interactions, HUD telemetry, and smooth reactive feedback.",
    tags: ["Kinetic UI", "Canvas Graphics", "Framer Motion", "Game-Feel UI", "Smooth Parallax"]
  }
];
