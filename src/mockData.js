// Mock data representing college placement data for LOOP

export const branchesList = [
  {
    id: "cse-aids",
    name: "CSE / AI-DS",
    description: "Computer Science & Engineering and Artificial Intelligence & Data Science branches. Focused on software development, machine learning, data engineering, and core algorithms.",
    storyCount: 6,
  },
  {
    id: "ce",
    name: "CE",
    description: "Computer Engineering branch. Deep integration of computer science with hardware systems, microprocessors, network systems, and software engineering.",
    storyCount: 4,
  },
  {
    id: "extc",
    name: "EXTC",
    description: "Electronics & Telecommunication Engineering branch. Focuses on signal processing, embedded systems, hardware-software co-design, and communications.",
    storyCount: 3,
  },
  {
    id: "it",
    name: "IT",
    description: "Information Technology branch. Specialized in cloud infrastructure, web architectures, cybersecurity, and enterprise software engineering.",
    storyCount: 3,
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
    status: "Approved",
    journey: {
      firstYear: "Started college online. Spent time learning the basics of Python and web development. Participated in my first local college hackathon which was a great learning curve.",
      secondYear: "Transitioned to physical college. Dove deep into Data Structures and Algorithms (DSA) in Java. Practiced active coding on LeetCode and completed basic projects in Web Dev.",
      thirdYear: "Formed a solid development team. Won a state-level hackathon. Selected as a technical lead in the computer society. Started intensive system design prep and solved ~400 LeetCode questions.",
      fourthYear: "Appeared for the Microsoft campus selection process. Cracked the online test, cleared two technical interviews focusing on trees/graphs and system design, and one behavioral round."
    },
    strategy: {
      dsa: "Focused heavily on Striver's SDE Sheet and LeetCode Medium/Hard problems. Mastered binary trees, graphs, and dynamic programming.",
      coreCs: "Revised OS process synchronization, DBMS indexing, and TCP/IP handshakes before every company drive.",
      projects: "Built a full-stack real-time collaboration tool using WebSockets and React, highlighting state sync issues in interviews.",
      internship: "Secured a 2-month summer internship at a fintech startup which gave real project exposure.",
      aptitude: "Practiced speed math, logical puzzles, and timing strategies on IndiaBix 2 weeks before test week.",
      interview: "Simulated mock interviews with peers to improve verbal communication of code logic before typing.",
      preparation: "Focused on solving quality DSA problems rather than quantity. Mastered recursion, dynamic programming, and system design basics. Read 'Cracking the Coding Interview'.",
      howISecured: "Through campus selection drive. Maintaining a CGPA above 9.0 helped me clear the initial CGPA cutoff list.",
      advice: "Do not neglect core CS concepts like Operating Systems and DBMS. They are frequently asked in the final technical rounds."
    },
    interviewRounds: {
      onlineAssessment: "3 Coding questions on Debugging, Binary Search, and Dynamic Programming (90 mins).",
      technicalRounds: "Round 1: Graph Traversal (Lowest Common Ancestor) & Memory management. Round 2: Design URL Shortener and Concurrency control.",
      hrRound: "Discussion on past conflicts during group projects, leadership in technical clubs, and long-term career goals.",
      keyTopics: "Trees, Graphs, DP, System Design, Concurrency, DBMS Indexing",
      generalExperience: "The interviewers were very collaborative. If stuck, explain your thought process aloud to receive hints."
    },
    resumeUrl: "#",
    studyMaterials: [
      { title: "My DSA Cheat Sheet", url: "https://example.com/dsa-notes", category: "DSA" },
      { title: "Microsoft Interview Prep Guide", url: "https://example.com/ms-prep", category: "Interview Prep" }
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
    status: "Approved",
    journey: {
      firstYear: "Focused on adapting to engineering curriculum. Explored frontend UI design and built static landing pages.",
      secondYear: "Discovered Product Management. Joined college entrepreneurship cell and managed promotional campaigns. Maintained solid coding foundations.",
      thirdYear: "Secured a product marketing internship. Practiced product analysis, SQL, product design metrics, and case studies daily.",
      fourthYear: "Applied for Google APM program. Completed 5 rigorous rounds of product estimation, case study analysis, and cross-functional leadership assessments."
    },
    strategy: {
      dsa: "Basic to intermediate DSA knowledge (Arrays, Strings, Hash Maps, Hash Sets) to pass initial screening.",
      coreCs: "SQL queries, relational database design, and web architecture fundamentals.",
      projects: "Created a product teardown deck for Spotify's social recommendation feature and launched an open-source student utility app.",
      internship: "Product marketing intern at an edtech startup, analyzing user retention metrics.",
      aptitude: "Focus on estimation math (market sizing) and logical reasoning puzzles.",
      interview: "Practiced 50+ mock product design and estimation interviews with partners on Lewis C. Lin's platform.",
      preparation: "Read 'Decode and Conquer' and 'Cracking the PM Interview'. Solved over 100 product estimate cases with mock partners.",
      howISecured: "Google off-campus application followed by referral verification.",
      advice: "Build real products, even if small. Understanding how to ship a feature is worth more than reading theory."
    },
    interviewRounds: {
      onlineAssessment: "Product Case Writing Test & Analytical Reasoning Quiz.",
      technicalRounds: "Product Design Round, Analytical Estimation Round, and Technical System Architecture Assessment.",
      hrRound: "Googleyness & Leadership round testing ethics, collaboration, and managing ambiguity.",
      keyTopics: "Product Estimation, UX Metrics, System Architecture, Product Teardowns",
      generalExperience: "Focus deeply on user empathy and structured frameworks (CIRCLES method)."
    },
    resumeUrl: "#",
    studyMaterials: [
      { title: "PM Case Study Deck", url: "https://example.com/pm-cases", category: "Interview Prep" }
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
    status: "Approved",
    journey: {
      firstYear: "Fascinated by computer hardware. Built a custom PC and started learning digital electronics principles.",
      secondYear: "Mastered Verilog, VHDL, and computer organization subjects. Created simulation models of 8-bit processors.",
      thirdYear: "Interned at a semiconductor firm. Learned FPGA prototyping and physical layout design validation.",
      fourthYear: "NVIDIA campus drive. Cleared rigorous technical tests in computer architecture, digital design, and basic C programming."
    },
    strategy: {
      dsa: "Bit manipulation, pointer math in C/C++, and array memory layouts.",
      coreCs: "Computer Organization & Architecture, Digital System Design, CMOS VLSI, Microprocessors.",
      projects: "Designed a 4-bit RISC CPU architecture on FPGA board using Verilog HDL.",
      internship: "3-month summer internship at a hardware lab validating chip timing constraints.",
      aptitude: "Digital logic puzzles, Boolean algebra simplifications, and timing diagram analysis.",
      interview: "Whiteboard coding of Verilog state machines and setup/hold time constraint calculations.",
      preparation: "Thoroughly revised digital system design, CMOS circuits, and computer architecture. Solved gate-level problems regularly.",
      howISecured: "Secured a Pre-Placement Offer (PPO) after completing a 3-month summer internship.",
      advice: "Understand hardware concepts deeply. Interviewers check if you know what happens physically on the chip."
    },
    interviewRounds: {
      onlineAssessment: "Hardware Logic MCQs, Verilog Code Snippets, and C Pointers test.",
      technicalRounds: "Round 1: Setup/Hold time analysis & FSM Design. Round 2: Cache Coherence Protocols & Memory Bus Design.",
      hrRound: "Career alignment, willingness to relocate to hardware design hubs, and team dynamics.",
      keyTopics: "Verilog HDL, Computer Architecture, Digital CMOS Logic, FSMs",
      generalExperience: "Draw circuit diagrams clearly when answering technical questions."
    },
    resumeUrl: "#",
    studyMaterials: [
      { title: "Digital Logic Prep Notes", url: "https://example.com/digital-logic", category: "Core CS" }
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
    status: "Approved",
    journey: {
      firstYear: "Explored basic engineering graphics and general computing courses. Built an interest in telecom technologies.",
      secondYear: "Learned signals and systems, data communications, and completed CCNA certification training on the side.",
      thirdYear: "Configured networking labs at college. Participated in cybersecurity mini-projects and routing simulations.",
      fourthYear: "Shortlisted for Cisco. Cleared technical MCQ screening and three interview rounds testing networking and scripting protocols."
    },
    strategy: {
      dsa: "Basic Python automation scripts, string parsing, and dictionary data structures.",
      coreCs: "Computer Networks (OSI 7 layers, TCP/IP, Subnetting, BGP, OSPF, VLANs), Operating Systems.",
      projects: "Automated network router configuration script using Python Paramiko library.",
      internship: "Network operations intern handling router configuration backups.",
      aptitude: "Aptitude & English comprehension tests conducted on Cisco test platform.",
      interview: "Lab simulation exercises and subnetting speed tests.",
      preparation: "Practiced subnetting, TCP/IP protocol stack, network troubleshooting, and Python scripting for automation.",
      howISecured: "On-campus placement drive selection.",
      advice: "Combine your hardware/networking knowledge with basic coding (Python). Telecom is highly software-driven now."
    },
    interviewRounds: {
      onlineAssessment: "Networking MCQs (Subnetting, Protocols) & Python Aptitude.",
      technicalRounds: "Round 1: Packet flow analysis (DNS to HTTP response). Round 2: Python script writing for log parsing.",
      hrRound: "Managerial round testing adaptability, night shift flexibility, and customer communication.",
      keyTopics: "TCP/IP, Subnetting, OSPF, BGP, Python Scripting",
      generalExperience: "Be fast with IP subnetting calculations during oral rounds."
    },
    resumeUrl: "#",
    studyMaterials: [
      { title: "Computer Networks Summary", url: "https://example.com/networks", category: "Computer Networks" }
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
    status: "Approved",
    journey: {
      firstYear: "Dabbled in web design and fundamental mathematics. Worked on C++ console projects.",
      secondYear: "Mastered Object-Oriented Programming (OOP) in C++. Explored database management systems (DBMS) and SQL.",
      thirdYear: "Built a full-stack personal finance manager. Practiced multi-threading, concurrency, and OOP design patterns.",
      fourthYear: "Shortlisted for Morgan Stanley. Cleared coding test and 2 technical rounds focusing on OS memory models, database indexing, and OOP design."
    },
    strategy: {
      dsa: "Arrays, Hashing, Binary Search, Trees, and Object-Oriented Design.",
      coreCs: "OOP Principles, DBMS SQL Query Optimization, OS Concurrency & Deadlocks.",
      projects: "High-frequency stock market portfolio tracker with C++ multi-threading.",
      internship: "Software developer intern at a local fintech firm.",
      aptitude: "Quantitative aptitude and financial math awareness.",
      interview: "Deep OOP design interview (Low Level Design) for a scalable parking garage system.",
      preparation: "Focused on OOP design patterns, database query optimization, operating systems memory management, and tree search algorithms.",
      howISecured: "Campus placement selection process.",
      advice: "Finance firms look for excellent analytical reasoning and deep understanding of OOP and Operating Systems fundamentals."
    },
    interviewRounds: {
      onlineAssessment: "Coding test with 3 problems (Arrays, Graphs, SQL subqueries).",
      technicalRounds: "Round 1: Complex SQL joins & OS thread locks. Round 2: LLD design pattern implementations.",
      hrRound: "Fitment round assessing financial domain interest and ethical decision making.",
      keyTopics: "OOP Patterns, Multi-threading, SQL Joins, System Design",
      generalExperience: "Focus on writing clean, reusable, and robust code snippets."
    },
    resumeUrl: "#",
    studyMaterials: [
      { title: "OOP Design Patterns Cheat Sheet", url: "https://example.com/oop-patterns", category: "Core CS" }
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
    status: "Approved",
    journey: {
      firstYear: "Focused on learning C programming and computer engineering foundations.",
      secondYear: "Built web frontends and learned vanilla JavaScript. Conducted technical workshops in college.",
      thirdYear: "Developed a database-driven student tracker portal. Mastered data structures (arrays, hash maps, heaps).",
      fourthYear: "Participated in Zoho on-campus hiring drive. Cleared three rounds of programming and app design tasks."
    },
    strategy: {
      dsa: "Dry running algorithms without IDE, matrix operations, string manipulations.",
      coreCs: "DBMS schema design, basic OOP in Java.",
      projects: "Full-stack inventory management desktop app using Java Swing and MySQL.",
      internship: "Self-driven web projects and freelance client work.",
      aptitude: "Logic puzzles and pattern recognition.",
      interview: "Advanced programming round building a miniature application from scratch in 2 hours.",
      preparation: "Cleared Zoho's rounds by practicing dry running algorithms on paper. Mastered simple application design patterns.",
      howISecured: "On-campus drive.",
      advice: "Practice core logic and writing clean code without IDE autocomplete. Zoho values core coding ability over framework knowledge."
    },
    interviewRounds: {
      onlineAssessment: "15 C/Java output predicting MCQs & 2 basic programming problems.",
      technicalRounds: "Round 1: Complex logic coding (5 problems). Round 2: Application Design (Taxi Booking / Billing System in 2.5 hours).",
      hrRound: "General interaction with engineering directors regarding mindset and career aspirations.",
      keyTopics: "Core Logic, Dry Running, Java OOP, App Architecture",
      generalExperience: "Do not rely on IDE plugins or autocompletion; practice coding on plain text editors."
    },
    resumeUrl: "#",
    studyMaterials: [
      { title: "Java Coding Reference Sheet", url: "https://example.com/java-coding", category: "Web Development" }
    ]
  },
  {
    id: "priya-deshmukh",
    studentName: "Priya Deshmukh",
    branch: "IT",
    batch: "2021-2025",
    passoutYear: 2025,
    company: "Adobe",
    jobRole: "Frontend Engineer",
    cgpa: 9.3,
    placementYear: 2024,
    status: "Approved",
    journey: {
      firstYear: "Explored web technologies and fell in love with JavaScript and Web Design.",
      secondYear: "Mastered React, CSS Flexbox/Grid, and state management frameworks.",
      thirdYear: "Built complex open-source UI libraries and interned at a product startup as a UI engineer.",
      fourthYear: "Adobe campus hiring drive. Cracked coding test, JavaScript internals round, and system design for web applications."
    },
    strategy: {
      dsa: "Focus on DOM tree traversal, custom Event Emitters, Promises implementation, and Array methods.",
      coreCs: "Browser rendering pipeline, HTTP caching, web performance optimization.",
      projects: "Interactive canvas photo editor web app using React and WebGL.",
      internship: "6-month frontend engineering internship building accessible UI component libraries.",
      aptitude: "Standard quantitative & logical reasoning.",
      interview: "Machine coding round constructing a rich UI component with drag-and-drop support.",
      preparation: "Mastered JavaScript closures, prototypal inheritance, React fiber reconciler, and web performance metrics.",
      howISecured: "Campus recruitment process.",
      advice: "Master JavaScript deep concepts. Don't just rely on React frameworks without knowing vanilla JS fundamentals."
    },
    interviewRounds: {
      onlineAssessment: "Coding problems (Strings, Hash Maps) & JS Output questions.",
      technicalRounds: "Round 1: Vanilla JS polyfills & DOM manipulation. Round 2: Web App Architecture & Frontend Performance.",
      hrRound: "Behavioral assessment & creative portfolio review.",
      keyTopics: "JavaScript, React, Web Performance, DOM APIs, CSS Architecture",
      generalExperience: "Make sure your demo UI projects are deployed live with clear documentation."
    },
    resumeUrl: "#",
    studyMaterials: [
      { title: "JS Polyfills & Performance Sheet", url: "https://example.com/js-polyfills", category: "Web Development" }
    ]
  },
  {
    id: "rahul-kulkarni",
    studentName: "Rahul Kulkarni",
    branch: "IT",
    batch: "2022-2026",
    passoutYear: 2026,
    company: "Atlassian",
    jobRole: "Site Reliability Engineer",
    cgpa: 8.7,
    placementYear: 2025,
    status: "Approved",
    journey: {
      firstYear: "Explored Linux terminal commands and shell scripting.",
      secondYear: "Set up home lab servers, learned Docker, Kubernetes, and Cloud infrastructure basics.",
      thirdYear: "Participated in DevOps hackathons, set up CI/CD automation pipelines for college project repos.",
      fourthYear: "Atlassian campus drive. Cracked coding assessments, system architecture, and incident troubleshooting rounds."
    },
    strategy: {
      dsa: "Hash Maps, Graphs, Queue/Stack simulation in Python.",
      coreCs: "Linux OS Internals, Networking Protocols, Storage Architecture, Containerization.",
      projects: "Automated Kubernetes cluster monitoring system using Prometheus and Grafana dashboards.",
      internship: "Cloud infrastructure intern managing AWS Terraform scripts.",
      aptitude: "Analytical reasoning and scenario-based troubleshooting.",
      interview: "Troubleshooting simulation round where interviewers gave broken Linux server logs to debug.",
      preparation: "Practiced Linux CLI tools, shell scripting, Kubernetes architecture, and SRE incident response principles.",
      howISecured: "On-campus drive selection.",
      advice: "Learn how systems fail. Understanding monitoring, logging, and metrics is key for infrastructure roles."
    },
    interviewRounds: {
      onlineAssessment: "2 DSA coding problems & Linux command line scenarios.",
      technicalRounds: "Round 1: System Troubleshooting & Log Analysis. Round 2: Distributed Systems Design & Infrastructure as Code.",
      hrRound: "Atlassian Values round (Open company, no BS, Heart & Balance).",
      keyTopics: "Linux, Docker, Kubernetes, Distributed Systems, SRE Principles",
      generalExperience: "Emphasize clear step-by-step diagnostic reasoning during debugging scenarios."
    },
    resumeUrl: "#",
    studyMaterials: [
      { title: "SRE & Linux Commands Cheatsheet", url: "https://example.com/sre-guide", category: "System Design" }
    ]
  }
];

export const studyResources = [
  {
    id: "dsa-folders",
    folderName: "DSA",
    description: "Data Structures & Algorithms preparation resources, cheat sheets, and problem sets.",
    items: [
      { title: "Arrays & Strings Mastery", desc: "Common array operations, two-pointers, sliding window patterns, and string parsing problems.", type: "PDF", link: "https://example.com/resources/arrays-strings.pdf" },
      { title: "Linked Lists & Trees Guide", desc: "Pointer manipulation, BST operations, DFS/BFS traversal algorithms with code samples.", type: "Link", link: "https://example.com/resources/lists-trees" },
      { title: "Dynamic Programming Handbook", desc: "Memoization vs Tabulation, knapsack variants, and subsequence patterns with step-by-step solutions.", type: "Document", link: "https://example.com/resources/dp-guide" },
      { title: "Graph Algorithms & Shortest Path", desc: "Dijkstra, Bellman-Ford, Topological Sort, and Disjoint Set Union (DSU) implementations.", type: "PDF", link: "https://example.com/resources/graphs.pdf" }
    ]
  },
  {
    id: "web-dev",
    folderName: "Web Development",
    description: "Frontend and backend web technologies, frameworks, and architecture guides.",
    items: [
      { title: "React Lifecycle & Hooks Masterclass", desc: "Deep dive into useEffect, useMemo, useCallback, custom hooks, and state management patterns.", type: "Link", link: "https://example.com/resources/react-hooks" },
      { title: "REST API Design & Best Practices", desc: "HTTP methods, status codes, query parameters, authentication, and JSON standardization.", type: "Document", link: "https://example.com/resources/rest-apis" },
      { title: "Node.js & Express Microservices", desc: "Building scalable RESTful backends, middleware pipelines, error handling, and JWT auth.", type: "PDF", link: "https://example.com/resources/nodejs-guide.pdf" },
      { title: "Frontend Performance & Optimization", desc: "Critical rendering path, lazy loading, code splitting, image optimization, and Lighthouse metrics.", type: "Link", link: "https://example.com/resources/web-perf" }
    ]
  },
  {
    id: "dbms",
    folderName: "DBMS",
    description: "Database Management Systems: SQL queries, schema design, indexing, and NoSQL databases.",
    items: [
      { title: "DBMS SQL & Normalization Cheatsheet", desc: "Primary SQL Joins, subqueries, ACID properties, and 1NF to BCNF normalization rules.", type: "PDF", link: "https://example.com/resources/dbms-prep" },
      { title: "Indexing, B-Trees & Query Optimization", desc: "How database indexes work under the hood, execution plans, and query performance tuning.", type: "Document", link: "https://example.com/resources/db-indexing" },
      { title: "MongoDB & NoSQL Architecture", desc: "Document database design, aggregation framework, indexing, and MongoDB vs SQL comparison.", type: "Link", link: "https://example.com/resources/mongodb-guide" }
    ]
  },
  {
    id: "os",
    folderName: "Operating Systems",
    description: "OS fundamentals: Process management, memory allocation, deadlocks, and virtual memory.",
    items: [
      { title: "Operating Systems Quick Revision Notes", desc: "Process scheduling, deadlocks, paging, memory management, and concurrency thread locks.", type: "Document", link: "https://example.com/resources/os-ref" },
      { title: "Multi-threading & Synchronization", desc: "Mutex locks, semaphores, producer-consumer problem, and race conditions explained.", type: "PDF", link: "https://example.com/resources/concurrency.pdf" }
    ]
  },
  {
    id: "cn",
    folderName: "Computer Networks",
    description: "Network protocols, OSI reference model, TCP/IP stack, DNS, and security basics.",
    items: [
      { title: "Computer Networks & TCP/IP Architecture", desc: "OSI Layer definitions, DNS routing, HTTP vs HTTPS protocol differences, and handshake sequences.", type: "PDF", link: "https://example.com/resources/cn-summary" },
      { title: "IP Subnetting & Routing Protocols", desc: "IPv4 subnet masking, CIDR notation, OSPF, BGP, and gateway configuration concepts.", type: "Link", link: "https://example.com/resources/subnetting" }
    ]
  },
  {
    id: "sys-design",
    folderName: "System Design",
    description: "High-level and low-level system design concepts for modern web applications.",
    items: [
      { title: "Scalability, Load Balancing & CDN Architecture", desc: "Designing for millions of users, horizontal scaling, caching strategies, and proxy layers.", type: "PDF", link: "https://example.com/resources/sysdesign-scaling" },
      { title: "Database Sharding & Replication Models", desc: "Master-slave, multi-master replication architectures and horizontal database partitioning.", type: "Link", link: "https://example.com/resources/sharding-db" },
      { title: "Low Level System Design (LLD)", desc: "Object-oriented design patterns, UML class diagrams, and SOLID design principles.", type: "Document", link: "https://example.com/resources/lld-patterns" }
    ]
  },
  {
    id: "aptitude",
    folderName: "Aptitude",
    description: "Quantitative Aptitude, Logical Reasoning, and Verbal placement assessment tools.",
    items: [
      { title: "Quantitative Aptitude Solved Set", desc: "Time & Work, Permutations, probability formulas, speed math, and trick sheets.", type: "PDF", link: "https://example.com/resources/quant-tricks" },
      { title: "Logical Reasoning Practice Deck", desc: "Syllogisms, blood relations, seating arrangements, coding-decoding, and pattern puzzles.", type: "Document", link: "https://example.com/resources/logical-reasoning" }
    ]
  },
  {
    id: "interview-prep",
    folderName: "Interview Preparation",
    description: "Behavioral interview prep, STAR framework guides, HR questions, and resume templates.",
    items: [
      { title: "The STAR Method for HR & Behavioral Rounds", desc: "Situation, Task, Action, Result framework for answering behavioral and situational questions.", type: "Link", link: "https://example.com/resources/star-method" },
      { title: "Tech Resume Checklist & LaTeX Templates", desc: "Formatting guidelines, active action verbs, metric integration checklist, and clean ATS-friendly templates.", type: "PDF", link: "https://example.com/resources/resume-checklist" },
      { title: "Top 50 Behavioral Interview Questions", desc: "Standard HR questions with response frameworks and real candidate examples.", type: "Document", link: "https://example.com/resources/hr-questions" }
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

// Pending story submissions queue for Admin Moderation
export const pendingStoriesList = [
  {
    id: "pending-1",
    studentName: "Aditi Roy",
    branch: "CSE / AI-DS",
    batch: "2022-2026",
    passoutYear: 2026,
    company: "Amazon",
    jobRole: "Software Development Engineer",
    cgpa: 9.0,
    submissionDate: "2026-08-18",
    status: "Pending",
    journey: {
      firstYear: "Focused on core programming in C++ and participating in college competitive coding challenges.",
      secondYear: "Mastered Data Structures and algorithms, solved ~300 LeetCode problems.",
      thirdYear: "Built a distributed web crawler and interned at a cloud startup.",
      fourthYear: "Applied for Amazon SDE campus drive, cleared online assessment and 3 technical rounds."
    },
    strategy: {
      dsa: "Trees, Graphs, Dynamic Programming, and Heap data structures.",
      coreCs: "Object Oriented Design, DBMS SQL queries, and OS memory layout.",
      projects: "Distributed crawler with Redis queue and Node.js workers.",
      internship: "Cloud Backend Developer Intern.",
      aptitude: "Amazon Leadership Principles & Work Style Assessment.",
      interview: "Practiced explaining trade-offs for code complexity clearly.",
      preparation: "Focused on Amazon Leadership Principles and solving medium to hard DSA problems.",
      howISecured: "On-campus placement selection drive.",
      advice: "Align your project answers with Amazon's 16 Leadership Principles."
    },
    interviewRounds: {
      onlineAssessment: "2 Coding problems + Work Simulation + Personality assessment.",
      technicalRounds: "Round 1: Binary Tree manipulation & LLD. Round 2: System Design & Leadership Principles.",
      hrRound: "Deep dive into past challenges, failures, and resolution strategies.",
      keyTopics: "Trees, System Design, Leadership Principles, OOD",
      generalExperience: "Every technical answer must reflect customer obsession and ownership."
    },
    studyMaterials: []
  },
  {
    id: "pending-2",
    studentName: "Varun Nair",
    branch: "EXTC",
    batch: "2022-2026",
    passoutYear: 2026,
    company: "Accenture",
    jobRole: "Associate Software Engineer",
    cgpa: 8.1,
    submissionDate: "2026-08-17",
    status: "Pending",
    journey: {
      firstYear: "Learned basic C programming and electronic circuit design.",
      secondYear: "Explored Python scripting and web development basics.",
      thirdYear: "Completed CCNA networking modules and built an IoT home automation project.",
      fourthYear: "Shortlisted for Accenture campus drive. Cleared Cognitive, Technical, and Communication assessments."
    },
    strategy: {
      dsa: "Arrays, Strings, Pseudo-code solving.",
      coreCs: "Basics of DBMS, Cloud computing concepts, Networking.",
      projects: "IoT Smart Home automation with Raspberry Pi & MQTT protocol.",
      internship: "Technical support intern.",
      aptitude: "Quantitative aptitude, logical reasoning, and verbal comprehension.",
      interview: "Communication round and technical interview.",
      preparation: "Practiced pseudo-code solving, verbal fluency, and fundamental CS concepts.",
      howISecured: "On-campus recruitment drive.",
      advice: "Focus on clear English communication and speed in pseudo-code questions."
    },
    interviewRounds: {
      onlineAssessment: "Cognitive & Technical Test + Coding Test + Communication Assessment.",
      technicalRounds: "Technical & Managerial combined interview testing basic coding and project explanation.",
      hrRound: "Document verification & joining location preferences.",
      keyTopics: "Pseudo-code, Communication, Basic SQL, Python",
      generalExperience: "Be confident and clear in your responses."
    },
    studyMaterials: []
  }
];

// Pending resources queue for Admin Moderation
export const pendingResourcesList = [
  {
    id: "pending-res-1",
    title: "Amazon SDE Mock Questions Sheet",
    description: "A compiled sheet of recent interview coding questions and leadership principle scenarios.",
    folder: "Interview Preparation",
    type: "PDF",
    submittedBy: "Aditi Roy"
  },
  {
    id: "pending-res-2",
    title: "React Server Components Cheat Sheet",
    description: "Comprehensive notes on Next.js App Router and React Server Components.",
    folder: "Web Development",
    type: "Document",
    submittedBy: "Priya Deshmukh"
  }
];

// User accounts list for Admin User Management
export const registeredUsersList = [
  { id: "u-1", name: "Swapnil Patel", email: "swapnil@college.edu", role: "student", branch: "CSE / AI-DS", currentYear: 3, cgpa: 9.2, status: "Active" },
  { id: "u-2", name: "Aarav Sharma", email: "aarav@college.edu", role: "contributor", branch: "CSE / AI-DS", currentYear: 4, cgpa: 9.1, status: "Active", company: "Microsoft" },
  { id: "u-3", name: "Riya Patel", email: "riya@college.edu", role: "contributor", branch: "CSE / AI-DS", currentYear: 4, cgpa: 8.8, status: "Active", company: "Google" },
  { id: "u-4", name: "Karan Mehta", email: "karan@college.edu", role: "contributor", branch: "CE", currentYear: 4, cgpa: 9.4, status: "Active", company: "NVIDIA" },
  { id: "u-5", name: "Admin Coordinator", email: "admin@college.edu", role: "admin", branch: "Training & Placement Cell", currentYear: 4, cgpa: 10.0, status: "Active" },
  { id: "u-6", name: "Neha Sen", email: "neha@college.edu", role: "contributor", branch: "EXTC", currentYear: 4, cgpa: 8.5, status: "Active", company: "Cisco" },
  { id: "u-7", name: "Aditi Roy", email: "aditi@college.edu", role: "student", branch: "CSE / AI-DS", currentYear: 4, cgpa: 9.0, status: "Pending" },
  { id: "u-8", name: "Varun Nair", email: "varun@college.edu", role: "student", branch: "EXTC", currentYear: 4, cgpa: 8.1, status: "Pending" }
];
