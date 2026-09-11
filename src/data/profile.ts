export const profile = {
  name: "Gaurav Shukla",
  title: "Senior Mobile Application Engineer",
  location: "Varanasi, Uttar Pradesh, India",
  email: "shuklanikk@gmail.com",
  phone: "+91 7985043830",
  github: "https://github.com/GauravNikk",
  linkedin: "https://linkedin.com/in/gauravnikk",
  summary: "I build production-grade mobile applications across Native Android, Flutter and iOS, with experience spanning real-time systems, gaming, education, healthcare, matrimony, on-demand platforms, AI-powered applications and connected devices.",
  shortAbout: "I’m a Senior Mobile Application Engineer focused on reliable, scalable and maintainable mobile products. I enjoy the difficult parts of application development — architecture, real-time communication, performance, state management, device integration and production delivery.",
  longAbout: "I’m a Senior Mobile Application Engineer with 6+ years of experience building and shipping production applications across Native Android, Flutter and iOS.\n\nMy work has covered real-time systems, real-money gaming, education, matrimony, healthcare, on-demand services, AI-powered applications and connected devices.\n\nI enjoy working on the engineering problems behind products — architecture, performance, reliability, real-time communication, payments, device connectivity and release automation.",
  metrics: [
    { value: "20+", label: "Production apps shipped" },
    { value: "100K+", label: "Collective downloads" },
    { value: "50K+", label: "Monthly active users" },
    { value: "10K+", label: "Concurrent users" },
    { value: "99.1%", label: "Crash-free rate" },
    { value: "4.5+", label: "Average Google Play rating" }
  ],
  education: [
    {
      degree: "Graduation (B. Tech)",
      institution: "Rajiv Gandhi Proudyogiki Vishwavidyalaya",
      location: "Bhopal, Madhya Pradesh"
    },
    {
      degree: "Graduation (BA)",
      institution: "Mahatma Gandhi Kashi Vidyapith",
      location: "Varanasi, Uttar Pradesh"
    },
    {
      degree: "Diploma in Information Technology",
      institution: "Board of Technical Education, Uttar Pradesh",
      location: "Varanasi, Uttar Pradesh"
    }
  ],
  skills: {
    languages: ["Kotlin", "Java", "Dart", "Swift"],
    mobile: ["Android", "Flutter", "iOS"],
    architecture: ["MVVM", "MVI", "Clean Architecture", "Repository Pattern", "Modular Architecture"],
    state: ["GetX", "BLoC", "Cubit", "Provider", "Riverpod"],
    android: ["Android SDK", "Retrofit", "Room", "Coroutines", "RxJava", "Hilt", "Dagger 2", "CameraX"],
    flutter: ["BLoC / Cubit", "GetX", "Provider", "Riverpod", "Dio", "get_it"],
    realtime: ["WebSocket", "Socket.io", "WebRTC", "Agora", "Firebase RTDB", "Firebase Firestore", "FCM"],
    apis: ["REST", "Retrofit", "Dio", "gRPC", "OpenAI APIs", "Gemini APIs"],
    payments: ["Razorpay", "Stripe", "UPI Deep Links", "In-app Billing"],
    ios: ["SwiftUI", "UIKit", "Combine", "Swift Package Manager"],
    iot: ["Bluetooth", "BLE", "Smart Ring", "Smart Watch", "Smart Glasses", "Device Synchronization"],
    devops: ["Git", "GitHub Actions", "Firebase App Distribution", "Android Studio", "Xcode", "Figma"],
    delivery: ["Agile", "Scrum", "Sprint Planning", "Code Review", "Technical Documentation", "Cross-functional Collaboration", "Product Delivery", "Production Support"],
    teamManagement: ["Mentoring Junior Developers", "Technical Guidance", "Task Breakdown", "Team Coordination", "Stakeholder Communication", "Knowledge Sharing"]
  }
};
export type ProfileType = typeof profile;
