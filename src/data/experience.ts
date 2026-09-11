export interface ExperienceProject {
  title: string;
  description: string;
  features: string[];
  scale?: string;
  result?: string;
  slug?: string;
}

export interface WorkExperience {
  period: string;
  company: string;
  companyUrl: string;
  role: string;
  focus: string[];
  projects: ExperienceProject[];
  mentoring?: string;
}

export const experiences: WorkExperience[] = [
  {
    period: "2025 — Present",
    company: "Celestial IT Verse Pvt. Ltd.",
    companyUrl: "https://celestialitverse.com/",
    role: "Senior Mobile Application Developer",
    focus: ["Native Android", "Flutter", "Real-time systems", "Gaming", "Matrimony", "AI", "On-demand applications"],
    projects: [
      {
        title: "Real-Money Gaming Platform",
        description: "Architected a real-money gaming platform featuring live multiplayer, wallet transactions, and leaderboards.",
        features: ["Live multiplayer", "Wallet transactions", "Leaderboards", "Sub-100ms latency target"],
        scale: "50K+ MAU",
        slug: "real-money-gaming"
      },
      {
        title: "Caring Patient (Caregiver/Patient) – Compassionate Care, Delivered at Home",
        description: "Developed a healthcare application for caregivers and patients to facilitate compassionate care delivery.",
        features: ["Caregiver management", "Patient monitoring", "Communication tools", "Health records"],
        slug: "caring-patient"
      },
      {
        title: "Matrimony Application",
        description: "Rebuilt the matrimony application using a multi-module architecture and BLoC/Cubit pattern.",
        features: ["Video calling integration", "Agora SDK", "WebRTC implementation"],
        scale: "10K+ concurrent users",
        result: "35% faster feature time-to-market",
        slug: "matrimony-platform"
      },
      {
        title: "DriverGill and DriverGill Sarthi",
        description: "Worked on the customer and driver applications for the on-demand DriverGill platform.",
        features: ["On-demand workflows", "Driver operations", "Razorpay integration"],
        slug: "drivergill"
      },
      
      {
        title: "Real-Time Chat and Architecture",
        description: "Implemented Socket.io and WebSocket communication and introduced MVVM and Clean Architecture principles.",
        features: ["Socket.io", "WebSockets", "Clean Architecture", "MVVM"],
        result: "40% reduction in bug regression"
      },
      {
        title: "SnapVisionary",
        description: "Shipped an AI-powered photo application to production using native Android with Kotlin and native iOS with Swift.",
        features: ["Kotlin", "Swift", "AI integration", "Native image workflow"],
        slug: "snapvisionary"
      },
      {
        title: "FILEkavach",
        description: "Worked on a file-focused mobile product for organizing and protecting personal documents.",
        features: ["File management", "Document workflows", "Mobile product delivery"]
      }
    ],
    mentoring: "Mentored 3 junior developers, conducting code reviews, sprint planning, and technical documentation."
  },
  {
    period: "2022 — 2024",
    company: "Inventics Software Pvt. Ltd.",
    companyUrl: "https://www.inventics.tech/",
    role: "Senior Software Development Engineer",
    focus: ["E-commerce", "Healthcare", "Education", "Business tools", "Laundry and on-demand", "DevOps / CI-CD"],
    projects: [
      {
        title: "Ekal Vidyalaya App Suite",
        description: "Delivered mobile products for Ekal Vidyalaya, including education and supporting operational applications.",
        features: ["Ekal Acharya", "Ekal Arogya", "Ekal Karyakarta", "Ekal Sanchalak"],
        scale: "100K+ downloads",
        slug: "ekal-acharya"
      },
      {
        title: "SalarySlip Employee and Employer Apps",
        description: "Worked on employee and employer mobile applications for attendance, tasks, salary slips, and workforce records.",
        features: ["Employee records", "Attendance", "Salary slips", "Multi-role access"]
      },
      {
        title: "Mittal Garment Factory",
        description: "Worked on a business operations application for factory assignments, field inspection, and quality workflows.",
        features: ["Factory assignments", "Field operations", "Quality inspection", "Attendance"]
      },
      {
        title: "Spin Cycles and Laundrology",
        description: "Worked on laundry and dry-cleaning applications supporting pickup, delivery, service orders, and customer workflows.",
        features: ["Laundry booking", "Pickup and delivery", "Order tracking", "Field operations"]
      },
     
      {
        title: "CI/CD Implementation",
        description: "Automated distribution processes using GitHub Actions and Firebase App Distribution.",
        features: ["GitHub Actions", "Firebase App Distribution"],
        result: "Release cycle cut from 2 days to 4 hours"
      }
    ],
    mentoring: "Mentored 4 developers, leading to a 20% improvement in on-time sprint delivery."
  },
  {
    period: "2020 — 2021",
    company: "CODEAIR",
    companyUrl: "https://codeair.tech/",
    role: "Android Developer",
    focus: ["Java / Kotlin", "Room DB / SQLite", "Retrofit / REST", "MotionLayout"],
    projects: [
         {
        title: "Vidhya LMS",
        description: "Worked on an education-focused learning management application.",
        features: ["Education workflows", "Learning management", "Mobile delivery"]
      },
      {
        title: "Nikita Kitchen",
        description: "Worked on a mobile product for kitchen and food-service workflows.",
        features: ["Mobile workflows", "Product delivery", "Operational support"]
      },
      {
        title: "Consumer Android Applications",
        description: "Built and maintained 4 consumer Android applications with complex UI transitions.",
        features: ["Kotlin / Java", "Firebase", "Retrofit and Room", "Material Design and MotionLayout"],
        result: "Increased crash-free rate from 92% to 99.1%"
      }
    ]
  }
];
