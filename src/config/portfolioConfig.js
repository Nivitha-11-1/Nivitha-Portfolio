/**
 * Central Portfolio Configuration
 * ---------------------------------------------------------------------------
 * Update all personal details, repository URLs, academic placeholders,
 * training entries, achievements, and contact settings in this single file.
 *
 * NOTE:
 * - Leave optional URLs (such as `liveDemoUrl`, `githubUrl`, `linkedinUrl`)
 *   as empty strings ("") until ready; the UI handles unlinked entries
 *   gracefully without rendering broken links.
 * - Replace `public/resume/Nivitha_R_Resume.pdf` with your final resume PDF
 *   and ensure `resume.filePath` matches its public path.
 */

export const portfolioConfig = {
  personal: {
    name: "Nivitha R",
    initials: "NR",
    degree: "Computer Science and Business Systems (CSBS)",
    careerGoal: "Software Developer Intern",
    targetRoleBadge: "Seeking Software Developer Internships · Winter 2026",
    shortSubtitle: "Aspiring Software Developer | CSBS Student",
    headline:
      "Aspiring Software Developer | CSBS Student | Java | Python | Full-Stack Development",
    heroTagline:
      "I enjoy building software applications, solving technical problems, and exploring technologies that create practical solutions.",
    aboutSummary:
      "I am a Computer Science and Business Systems (CSBS) student at R.M.K. Engineering College passionate about software development, problem-solving, and building practical technology solutions. I enjoy developing applications, exploring emerging technologies, and transforming ideas into functional software. I am continuously improving my programming and development skills while seeking opportunities to contribute to real-world engineering projects.",
    closingStatement:
      "I am a motivated Computer Science and Business Systems student with practical software development experience, hands-on technical projects, problem-solving abilities, and a strong interest in software engineering.",
    location: "Chennai, India",
    /**
     * Place your profile photo in `public/images/profile.jpg` and set:
     * profileImageUrl: "/images/profile.jpg"
     * Leave empty ("") to display the clean corporate monogram placeholder.
     */
    profileImageUrl: "",
    profileImageAlt: "Nivitha R — Aspiring Software Developer",
  },

  resume: {
    label: "Download Resume",
    /**
     * Place your actual PDF at `public/resume/Nivitha_R_Resume.pdf`.
     * A starter placeholder PDF is included so the download works immediately.
     */
    filePath: "/resume/Nivitha_R_Resume.pdf",
    downloadFileName: "Nivitha_R_Resume.pdf",
  },

  social: {
    /**
     * Add your actual email, GitHub, and LinkedIn URLs below.
     * Example:
     *   email: "nivitha.r@yourdomain.com"
     *   githubUrl: "https://github.com/your-username"
     *   linkedinUrl: "https://www.linkedin.com/in/your-profile"
     */
    email: "",
    githubUrl: "https://github.com/Nivitha-11-1",
    linkedinUrl: "https://www.linkedin.com/in/nivitha-r-2b904b389",
  },

  contact: {
    heading: "Get in Touch",
    subheading:
      "Open to Software Developer Internship opportunities (including CDI Software Developer Intern – Winter 2026) and collaborative engineering projects.",
    /**
     * Optional: Set a Formspree / backend endpoint URL if you want form
     * submissions to POST to a server. If empty, the form validates all inputs
     * and lets the user review or launch their email client with the composed message.
     */
    formEndpoint: "",
  },

  aboutHighlights: [
    {
      title: "Software Engineering",
      description:
        "Focused on writing clean, maintainable, and modular code with attention to real-world reliability and structure.",
      icon: "Code2",
    },
    {
      title: "Logical Problem-Solving",
      description:
        "Grounded in Object-Oriented Programming, Data Structures, and systematic debugging across languages.",
      icon: "Cpu",
    },
    {
      title: "Full-Stack Development",
      description:
        "Experience building responsive React interfaces backed by Node.js, Express.js, and RESTful API architectures.",
      icon: "Layers",
    },
    {
      title: "Database Management",
      description:
        "Hands-on work designing schemas and querying relational and NoSQL systems including SQL, MongoDB, and SAP HANA.",
      icon: "Database",
    },
    {
      title: "AI-Based Applications",
      description:
        "Exploring applied AI and ML workflows, including human-in-the-loop decision support prototypes in Python.",
      icon: "BrainCircuit",
    },
    {
      title: "Continuous Learning & Teamwork",
      description:
        "Adaptable learner who thrives in collaborative hackathon and engineering team environments.",
      icon: "Users",
    },
  ],

  skills: [
    {
      category: "Programming Languages",
      description: "Core languages used for application logic and problem-solving.",
      items: ["Java", "Python", "JavaScript"],
    },
    {
      category: "Frontend",
      description: "Building structured, accessible, and responsive web interfaces.",
      items: ["HTML", "CSS", "React.js"],
    },
    {
      category: "Backend",
      description: "Server-side application architecture and API integration.",
      items: ["Node.js", "Express.js", "REST APIs"],
    },
    {
      category: "Database",
      description: "Data modeling, persistence, and enterprise data platforms.",
      items: ["SQL", "MongoDB", "SAP HANA"],
    },
    {
      category: "Tools",
      description: "Version control, collaboration, and daily development workflow.",
      items: ["Git", "GitHub", "VS Code"],
    },
    {
      category: "Core Computer Science",
      description: "Foundational engineering principles applied across projects.",
      items: [
        "Object-Oriented Programming",
        "Data Structures",
        "Database Management Systems",
        "Problem Solving",
      ],
    },
  ],

  projects: [
    {
      id: "eco-alert-aggregator",
      title: "Eco Alert Aggregator",
      subtitle: "Environmental Alert & Information Aggregation Project",
      featured: true,
      category: "Featured Project",
      statusNote:
        "Repository URL awaiting configuration in src/config/portfolioConfig.js for source-code inspection.",
      description:
        "An environmental alert aggregation project transferred to my primary GitHub account. Once the GitHub repository URL is linked in the portfolio configuration, its verified stack and implementation details can be inspected directly.",
      problemStatement:
        "Configure after linking the Eco Alert Aggregator GitHub repository so the problem scope reflects the exact implemented codebase.",
      solution:
        "Configure after linking the Eco Alert Aggregator GitHub repository to document the exact architecture and data flow implemented in source code.",
      technologies: ["GitHub Repository Ready to Link"],
      keyFeatures: [
        "Featured project slot prepared for direct GitHub repository verification",
        "Supports verified technology tags, problem/solution breakdown, and live demo link",
      ],
      githubUrl: "",
      liveDemoUrl: "",
    },
    {
      id: "portfolio-management-system",
      title: "Personal Portfolio Management System",
      subtitle: "Full-Stack Web Application with Authentication & Admin CRUD",
      featured: false,
      category: "Full-Stack Web",
      description:
        "A full-stack portfolio management application designed to manage portfolio information, user authentication, contact submissions, and application data.",
      problemStatement:
        "Static portfolio websites require manual code edits for every content update and lack centralized handling for contact submissions and protected administrative workflows.",
      solution:
        "Built a full-stack MERN architecture exposing authenticated REST API endpoints with JWT protection, MongoDB persistence, and structured CRUD operations for portfolio data and contact inquiries.",
      technologies: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "JWT Authentication",
      ],
      keyFeatures: [
        "JWT-based user authentication and protected routes",
        "REST API development with Express.js",
        "Full CRUD operations for portfolio content and application data",
        "MongoDB database integration and schema modeling",
        "Structured backend architecture",
        "Contact submission management",
      ],
      githubUrl: "",
      liveDemoUrl: "",
    },
    {
      id: "demandshield-ai",
      title: "DemandShield AI",
      subtitle:
        "An Agentic AI System for Predicting Customer Demand Shifts and Adapting Supply Chain and Marketing Decisions",
      featured: false,
      category: "AI & Enterprise Data",
      eventBadge: "SAP HackFest 2026 – South & East Regional Finale Participant",
      description:
        "An agentic AI prototype designed to analyze customer demand, inventory availability, supplier capacity, and transportation disruptions to generate intelligent business recommendations.",
      problemStatement:
        "Sudden shifts in customer demand alongside supplier bottlenecks and transit disruptions make manual coordination across inventory, supply chain, and marketing slow and error-prone.",
      solution:
        "Developed an interactive Python and Streamlit prototype backed by SAP HANA data integration that evaluates demand signals and operational constraints while keeping human-in-the-loop approval before decisions are finalized.",
      technologies: ["Python", "SAP HANA", "Streamlit", "AI/ML"],
      keyFeatures: [
        "Customer demand prediction analysis",
        "Inventory availability evaluation",
        "Supply-chain and transportation disruption risk monitoring",
        "Adaptive marketing recommendations",
        "Human-in-the-loop approval workflow",
        "SAP HANA integration",
      ],
      githubUrl: "",
      liveDemoUrl: "",
    },
    {
      id: "mine-subsidence-monitoring",
      title: "Underground Coal Mine Subsidence Monitoring",
      subtitle: "IoT Sensor Prototype for Environmental & Structural Early Warning",
      featured: false,
      category: "IoT & Embedded",
      description:
        "An IoT-based prototype designed to monitor underground mine environmental and structural conditions and provide early warnings using sensor data.",
      problemStatement:
        "Underground coal mining environments carry safety risks from structural instability and hazardous environmental shifts that require continuous monitoring rather than periodic manual inspection.",
      solution:
        "Built an ESP32 microcontroller prototype interfaced with IoT sensors to capture real-time environmental and structural readings and trigger early warning alerts when threshold conditions are detected.",
      technologies: ["ESP32", "IoT Sensors", "Embedded Programming"],
      keyFeatures: [
        "Sensor-based environmental and structural monitoring",
        "Real-time data collection via ESP32",
        "Continuous environmental condition tracking",
        "Threshold-based alert mechanisms",
        "Early warning functionality for safety response",
      ],
      githubUrl: "",
      liveDemoUrl: "",
    },
  ],

  education: [
    {
      institution: "R.M.K. Engineering College",
      degree: "Computer Science and Business Systems (CSBS)",
      location: "Chennai, India",
      academicPeriod: "2025–2029",
      graduationYear: "2029",
      cgpa: "9.365/10",
      coursework: [
        "Object-Oriented Programming",
        "Data Structures & Algorithms",
        "Database Management Systems",
        "Software Engineering",
        "Business Systems & Analytics",
      ],
    },
  ],

  experienceAndTraining: [
    {
      organization: "Thiranex – Skill Development and Future Tech",
      role: "Full Stack Development Intern",
      type: "Online Internship",
      duration: "23 May 2026 – 22 June 2026",
      achievement:
        "Successfully completed an internship in Full Stack Development.",
      certificateId: "THX-MAY2326-833",
      /**
       * Place your actual internship certificate PDF in `public/certificates/`
       * (for example, `public/certificates/Thiranex_Internship_Certificate.pdf`)
       * and set `certificateUrl` to "/certificates/Thiranex_Internship_Certificate.pdf".
       * The "View Internship Certificate" button only renders when this path is set.
       */
      certificateUrl: "",
      certificateLabel: "View Internship Certificate",
      projectsCompleted: [
        {
          title: "Personal Portfolio Website",
          description:
            "Developed a personal portfolio website to showcase professional information, technical skills and projects.",
        },
        {
          title: "Task Management Application",
          description:
            "Worked on a task management application for organizing and managing tasks.",
        },
        {
          title: "E-Commerce Web Application",
          description:
            "Worked on an e-commerce web application with shopping-related functionality.",
        },
        {
          title: "Blog Platform with Comments",
          description:
            "Worked on a blog platform with commenting functionality.",
        },
      ],
    },
  ],

  achievements: [
    {
      title: "SAP HackFest 2026 – South & East Regional Finale Participant",
      category: "Hackathon",
      year: "2026",
      description:
        "Participated in the South & East Regional Finale of SAP HackFest 2026 with the DemandShield AI prototype integrating Python, Streamlit, and SAP HANA.",
    },
    {
      title: "Applied Full-Stack, AI & IoT Technical Projects",
      category: "Engineering Projects",
      year: "2025 – 2026",
      description:
        "Designed and built multi-domain prototypes spanning MERN stack web applications, agentic AI decision-support systems, and ESP32 IoT monitoring.",
    },
  ],
};
