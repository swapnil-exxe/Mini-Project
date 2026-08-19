// Mock data representing college placement data for LOOP
export const branchesList = [
  {
    id: "cse-aids",
    name: "CSE / AI-DS",
    description: "Computer Science & Engineering and Artificial Intelligence & Data Science branches. Focused on software development, machine learning, data engineering, and core algorithms.",
    storyCount: 5,
  },
  {
    id: "ce",
    name: "CE",
    description: "Computer Engineering branch. Deep integration of computer science with hardware systems, microprocessors, network systems, and software engineering.",
    storyCount: 3,
  },
  {
    id: "extc",
    name: "EXTC",
    description: "Electronics & Telecommunication Engineering branch. Focuses on signal processing, embedded systems, hardware-software co-design, and communications.",
    storyCount: 2,
  }
];

export const placementStories = [
  {
    id: "aarav-sharma",
    studentName: "Aarav Sharma",
    branch: "CSE / AI-DS",
    batch: "2022-2026",
    passoutYear: 2026,
    company: "Microsoft",
    jobRole: "Software Engineer",
    cgpa: 9.1,
    placementYear: 2025,
    journey: {
      firstYear: "Started college online. Spent time learning the basics of Python and web development. Participated in my first local college hackathon which was a great learning curve.",
      secondYear: "Transitioned to physical college. Dove deep into Data Structures and Algorithms (DSA) in Java. Practiced active coding on LeetCode and completed basic projects in Web Dev.",
      thirdYear: "Formed a solid development team. Won a state-level hackathon. Selected as a technical lead in the computer society. Started intensive system design prep and solved ~400 LeetCode questions.",
      fourthYear: "Appeared for the Microsoft campus selection process. Cracked the online test, cleared two technical interviews focusing on trees/graphs and system design, and one behavioral round."
    },
    strategy: {
      preparation: "Focused on solving quality DSA problems rather than quantity. Mastered recursion, dynamic programming, and system design basics. Read 'Cracking the Coding Interview'.",
      interview: "Three rounds. Round 1 was dynamic programming (Edit Distance variant). Round 2 focused on designing a URL shortener and concurrency issues. Round 3 was with the Engineering Manager testing college project contributions.",
      howISecured: "Through campus selection drive. Maintaining a CGPA above 9.0 helped me clear the initial CGPA cutoff list.",
      advice: "Do not neglect core CS concepts like Operating Systems and DBMS. They are frequently asked in the final technical rounds."
    },
    resumeUrl: "#",
    studyMaterials: [
      { title: "My DSA Cheat Sheet", url: "https://example.com/dsa-notes" },
      { title: "Microsoft Interview Prep Guide", url: "https://example.com/ms-prep" }
    ]
  },
  {
    id: "riya-patel",
    studentName: "Riya Patel",
    branch: "CSE / AI-DS",
    batch: "2022-2026",
    passoutYear: 2026,
    company: "Google",
    jobRole: "Associate Product Manager",
    cgpa: 8.8,
    placementYear: 2025,
    journey: {
      firstYear: "Focused on adapting to engineering curriculum. Explored frontend UI design and built static landing pages.",
      secondYear: "Discovered Product Management. Joined college entrepreneurship cell and managed promotional campaigns. Maintained solid coding foundations.",
      thirdYear: "Secured a product marketing internship. Practiced product analysis, SQL, product design metrics, and case studies daily.",
      fourthYear: "Applied for Google APM program. Completed 5 rigorous rounds of product estimation, case study analysis, and cross-functional leadership assessments."
    },
    strategy: {
      preparation: "Read 'Decode and Conquer' and 'Cracking the PM Interview'. Solved over 100 product estimate cases with mock partners.",
      interview: "Product design round, analytical round, technical design round, and two leadership fit rounds. They checked my empathy for user needs.",
      howISecured: "Google off-campus application followed by referral verification.",
      advice: "Build real products, even if small. Understanding how to ship a feature is worth more than reading theory."
    },
    resumeUrl: "#",
    studyMaterials: [
      { title: "PM Case Study Deck", url: "https://example.com/pm-cases" }
    ]
  },
  {
    id: "karan-mehta",
    studentName: "Karan Mehta",
    branch: "CE",
    batch: "2021-2025",
    passoutYear: 2025,
    company: "NVIDIA",
    jobRole: "Hardware Design Engineer",
    cgpa: 9.4,
    placementYear: 2024,
    journey: {
      firstYear: "Fascinated by computer hardware. Built a custom PC and started learning digital electronics principles.",
      secondYear: "Mastered Verilog, VHDL, and computer organization subjects. Created simulation models of 8-bit processors.",
      thirdYear: "Interned at a semiconductor firm. Learned FPGA prototyping and physical layout design validation.",
      fourthYear: "NVIDIA campus drive. Cleared rigorous technical tests in computer architecture, digital design, and basic C programming."
    },
    strategy: {
      preparation: "Thoroughly revised digital system design, CMOS circuits, and computer architecture. Solved gate-level problems regularly.",
      interview: "Focused heavily on setup/hold times, cache coherence protocols, and writing assembly logic on a whiteboard.",
      howISecured: "Secured a Pre-Placement Offer (PPO) after completing a 3-month summer internship.",
      advice: "Understand hardware concepts deeply. Interviewers check if you know what happens physically on the chip."
    },
    resumeUrl: "#",
    studyMaterials: [
      { title: "Digital Logic Prep Notes", url: "https://example.com/digital-logic" }
    ]
  },
  {
    id: "neha-sen",
    studentName: "Neha Sen",
    branch: "EXTC",
    batch: "2022-2026",
    passoutYear: 2026,
    company: "Cisco",
    jobRole: "Network Consulting Engineer",
    cgpa: 8.5,
    placementYear: 2025,
    journey: {
      firstYear: "Explored basic engineering graphics and general computing courses. Built an interest in telecom technologies.",
      secondYear: "Learned signals and systems, data communications, and completed CCNA certification training on the side.",
      thirdYear: "Configured networking labs at college. Participated in cybersecurity mini-projects and routing simulations.",
      fourthYear: "Shortlisted for Cisco. Cleared technical MCQ screening and three interview rounds testing networking and scripting protocols."
    },
    strategy: {
      preparation: "Practiced subnetting, TCP/IP protocol stack, network troubleshooting, and Python scripting for automation.",
      interview: "Tested on BGP, OSPF routing algorithms, DNS flows, and writing scripts to automate network device configurations.",
      howISecured: "On-campus placement drive selection.",
      advice: "Combine your hardware/networking knowledge with basic coding (Python). Telecom is highly software-driven now."
    },
    resumeUrl: "#",
    studyMaterials: [
      { title: "Computer Networks Summary", url: "https://example.com/networks" }
    ]
  },
  {
    id: "aditya-verma",
    studentName: "Aditya Verma",
    branch: "CSE / AI-DS",
    batch: "2021-2025",
    passoutYear: 2025,
    company: "Morgan Stanley",
    jobRole: "Technology Analyst",
    cgpa: 8.9,
    placementYear: 2024,
    journey: {
      firstYear: "Dabbled in web design and fundamental mathematics. Worked on C++ console projects.",
      secondYear: "Mastered Object-Oriented Programming (OOP) in C++. Explored database management systems (DBMS) and SQL.",
      thirdYear: "Built a full-stack personal finance manager. Practiced multi-threading, concurrency, and OOP design patterns.",
      fourthYear: "Shortlisted for Morgan Stanley. Cleared coding test and 2 technical rounds focusing on OS memory models, database indexing, and OOP design."
    },
    strategy: {
      preparation: "Focused on OOP design patterns, database query optimization, operating systems memory management, and tree search algorithms.",
      interview: "R1 was SQL queries (nested joints) and multi-threading execution. R2 was OOP system design for a parking lot. R3 was values/fit assessment.",
      howISecured: "Campus placement selection process.",
      advice: "Finance firms look for excellent analytical reasoning and deep understanding of OOP and Operating Systems fundamentals."
    },
    resumeUrl: "#",
    studyMaterials: [
      { title: "OOP Design Patterns Cheat Sheet", url: "https://example.com/oop-patterns" }
    ]
  },
  {
    id: "sneha-joshi",
    studentName: "Sneha Joshi",
    branch: "CE",
    batch: "2022-2026",
    passoutYear: 2026,
    company: "Zoho",
    jobRole: "Software Developer",
    cgpa: 8.2,
    placementYear: 2025,
    journey: {
      firstYear: "Focused on learning C programming and computer engineering foundations.",
      secondYear: "Built web frontends and learned vanilla JavaScript. Conducted technical workshops in college.",
      thirdYear: "Developed a database-driven student tracker portal. Mastered data structures (arrays, hash maps, heaps).",
      fourthYear: "Participated in Zoho on-campus hiring drive. Cleared three rounds of programming and app design tasks."
    },
    strategy: {
      preparation: "Cleared Zoho's rounds by practicing dry running algorithms on paper. Mastered simple application design patterns.",
      interview: "R1 was 15 DSA MCQs and dry runs. R2 was a coding test (5 problems). R3 was designing a billing application module in 2 hours.",
      howISecured: "On-campus drive.",
      advice: "Practice core logic and writing clean code without IDE autocomplete. Zoho values core coding ability over framework knowledge."
    },
    resumeUrl: "#",
    studyMaterials: [
      { title: "Java Coding Reference Sheet", url: "https://example.com/java-coding" }
    ]
  }
];

export const studyResources = [
  {
    id: "dsa-folders",
    folderName: "DSA",
    description: "Data Structures & Algorithms preparation resources.",
    items: [
      { title: "Arrays & Strings Mastery", desc: "Common array operations, two-pointers, sliding window patterns, and string parsing problems.", type: "PDF", link: "https://example.com/resources/arrays-strings.pdf" },
      { title: "Linked Lists & Trees", desc: "Pointer manipulation, BST operations, DFS/BFS traversal algorithms.", type: "Link", link: "https://example.com/resources/lists-trees" },
      { title: "Dynamic Programming Guide", desc: "Memoization vs Tabulation, knapsack variants, and subsequence patterns.", type: "Document", link: "https://example.com/resources/dp-guide" }
    ]
  },
  {
    id: "core-cs",
    folderName: "Core CS",
    description: "Computer Science fundamentals: DBMS, OS, Computer Networks, and OOP.",
    items: [
      { title: "DBMS SQL & Normalization", desc: "Primary SQL Joins, subqueries, ACID properties, and 1NF to BCNF rules.", type: "PDF", link: "https://example.com/resources/dbms-prep" },
      { title: "Operating Systems Basics", desc: "Process scheduling, deadlocks, paging, memory management, and concurrency thread locks.", type: "Document", link: "https://example.com/resources/os-ref" },
      { title: "Computer Networks & TCP/IP", desc: "OSI Layer definitions, DNS routing, HTTP vs HTTPS protocol differences.", type: "PDF", link: "https://example.com/resources/cn-summary" }
    ]
  },
  {
    id: "web-dev",
    folderName: "Web Development",
    description: "Frontend and backend web technologies resource files.",
    items: [
      { title: "React Lifecycle & Hooks", desc: "Understanding useEffect, custom hooks, and state management rules.", type: "Link", link: "https://example.com/resources/react-hooks" },
      { title: "REST API Design Guidelines", desc: "HTTP methods, status codes, query parameters, and JSON standards.", type: "Document", link: "https://example.com/resources/rest-apis" }
    ]
  },
  {
    id: "sys-design",
    folderName: "System Design",
    description: "High-level and low-level system design topics.",
    items: [
      { title: "Scalability, Load Balancing & CDN", desc: "Designing for millions of users, horizontal scaling, caching strategies.", type: "PDF", link: "https://example.com/resources/sysdesign-scaling" },
      { title: "Database Sharding & Replication", desc: "Master-slave, multi-master replication architectures and horizontal database partitioning.", type: "Link", link: "https://example.com/resources/sharding-db" }
    ]
  },
  {
    id: "aptitude",
    folderName: "Aptitude",
    description: "Quantitative, Logical Reasoning, and Verbal placements preparation.",
    items: [
      { title: "Quantitative Aptitude Solved Set", desc: "Time & Work, Permutations, probability formulas, and trick sheets.", type: "PDF", link: "https://example.com/resources/quant-tricks" },
      { title: "Logical Reasoning Practice Deck", desc: "Syllogisms, blood relations, seating arrangements, and pattern puzzles.", type: "Document", link: "https://example.com/resources/logical-reasoning" }
    ]
  },
  {
    id: "interview-prep",
    folderName: "Interview Preparation",
    description: "Behavioral interview prep, HR guides, and resume templates.",
    items: [
      { title: "The STAR Method for HR Rounds", desc: "Situation, Task, Action, Result framework for behavioral questions.", type: "Link", link: "https://example.com/resources/star-method" },
      { title: "Tech Resume Checklist", desc: "Formatting guidelines, active verbs, and key metrics integration checklist.", type: "PDF", link: "https://example.com/resources/resume-checklist" }
    ]
  }
];

export const campusAchievements = [
  {
    id: "hackathon-1",
    title: "1st Place - National Smart India Hackathon",
    studentTeam: "Team Alpha (CSE & AI-DS)",
    year: 2025,
    category: "Hackathons",
    description: "Developed an AI-powered smart agriculture monitoring drone system, winning first prize and a cash award of ₹1 Lakh.",
    imageUrl: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: "coding-1",
    title: "Finalists - ACM ICPC Regional Round",
    studentTeam: "Swapnil, Aarav & Rahul (CSE)",
    year: 2024,
    category: "Coding Competitions",
    description: "Qualified for the regionals by ranking in the top 3% globally during the online qualifiers.",
    imageUrl: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: "placement-record-1",
    title: "NVIDIA Supercomputer Lab Internship Selection",
    studentTeam: "Karan Mehta (CE)",
    year: 2024,
    category: "Internships",
    description: "Secured a highly competitive hardware design internship at NVIDIA research laboratory.",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: "technical-1",
    title: "Research Paper Published in IEEE Journal",
    studentTeam: "Riya Patel & Neha Sen",
    year: 2025,
    category: "Technical Achievements",
    description: "Published research on 'Distributed ledger validation frameworks for IoT networks'. Presented at the IEEE conference.",
    imageUrl: "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?q=80&w=600&auto=format&fit=crop"
  }
];

// Mock data storage representing active queues
export const pendingStoriesList = [
  {
    id: "pending-1",
    studentName: "Aditi Roy",
    company: "Amazon",
    branch: "CSE / AI-DS",
    submissionDate: "2026-08-18",
    jobRole: "Software Development Engineer"
  },
  {
    id: "pending-2",
    studentName: "Varun Nair",
    company: "Accenture",
    branch: "EXTC",
    submissionDate: "2026-08-17",
    jobRole: "Associate Software Engineer"
  }
];

export const pendingResourcesList = [
  {
    id: "pending-res-1",
    title: "Amazon SDE Mock Questions",
    description: "A compiled sheet of recent interview coding questions.",
    folder: "Interview Preparation",
    type: "PDF",
    submittedBy: "Aditi Roy"
  }
];
