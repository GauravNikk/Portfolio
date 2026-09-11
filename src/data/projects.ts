export interface CaseStudy {
  slug: string;
  title: string;
  category: string;
  oneSentence: string;
  description: string;
  role: string;
  platforms: string[];
  tech: string[];
  industry: string;
  scale?: string;
  result?: string;
  challenge: string;
  solution: string;
  decisions: { question: string; answer: string }[];
  playStoreUrl?: string;
  adminUrl?: string;
  screenshots: string[];
}

export const featuredProjects: CaseStudy[] = [
  {
    slug: "real-money-gaming",
    title: "Real-Money Gaming Platform",
    category: "Gaming · Real-Time · Transactions",
    oneSentence: "A production real-money gaming platform architected with Kotlin and Flutter.",
    description: "A secure, high-performance mobile gaming application that integrates real-time competitive gameplay with a secure virtual wallet economy, global leaderboards, and instant player matching.",
    role: "Lead Mobile Architect — Owned native Kotlin and Flutter integration, socket synchronization, and payment gateway security.",
    platforms: ["Android", "Flutter"],
    tech: ["Kotlin", "Flutter", "WebSocket", "Socket.io", "Razorpay", "In-App Billing", "State Flow"],
    industry: "Gaming / Fintech",
    scale: "50K+ MAU",
    result: "Sub-100ms multiplayer synchronization target achieved in production.",
    challenge: "Minimizing state synchronization latency between players and the server while maintaining a secure, tamper-proof system for wallet balances and real-time ledger updates.",
    solution: "We designed a lightweight WebSocket event-driven communication layer built using Kotlin Coroutines and custom Flutter channels. A local memory-caching layer optimized matching state read/write speeds, while transaction events are verified server-side through cryptographic signature hooks.",
    decisions: [
      {
        question: "Why this state-management approach?",
        answer: "We used BLoC in Flutter to strictly separate user-interface events from the incoming stream of real-time multiplayer socket events, avoiding unnecessary UI repaints."
      },
      {
        question: "Why Socket.io over polling?",
        answer: "Polling creates substantial battery drain and server load. An event-driven WebSocket system reduced network overhead by 80% and lowered game state latency to sub-100ms."
      },
      {
        question: "How was transaction security handled?",
        answer: "Every wallet transaction triggers a two-way cryptographic verification. We implemented device-level secure storage (EncryptedSharedPreferences and Keychain) for session tokens and processed Razorpay webhooks directly."
      }
    ],
    screenshots: [
      "/playstore_apps/aag_play_games_win_coins/screenshots/01.png",
      "/playstore_apps/aag_play_games_win_coins/screenshots/02.png",
      "/playstore_apps/aag_play_games_win_coins/screenshots/03.png",
      "/playstore_apps/aag_play_games_win_coins/screenshots/04.png"
    ],
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.civ.aag"
  },
  {
    slug: "matrimony-platform",
    title: "Aajeevansang Matrimony App",
    category: "Matrimony · Real-Time · Video",
    oneSentence: "A Flutter rebuild of a premium matrimony application using multi-module architecture and Agora video.",
    description: "Re-engineered a legacy matrimony platform to support high-concurrent messaging, modern video calling, and high-fidelity matching profiles.",
    role: "Senior Mobile Engineer — Re-architected the app from the ground up, moving to a modular codebase and implementing real-time video features.",
    platforms: ["Flutter", "Android", "iOS"],
    tech: ["Flutter", "Agora SDK", "WebRTC", "BLoC/Cubit", "Multi-module architecture"],
    industry: "Social / Matrimony",
    scale: "10K+ Concurrent Users",
    result: "35% faster feature time-to-market and 40% reduction in bug regressions.",
    challenge: "The existing codebase was highly coupled, leading to slow feature delivery and regression bugs. Video calling also suffered from connection drops on poor cellular networks.",
    solution: "We decoupled the application into independent feature modules (Authentication, Matching, Chat, Calling). We integrated the Agora RTC engine with WebRTC fallbacks, introducing adaptive video streaming that dynamically downgrades resolution rather than dropping calls on unstable connections.",
    decisions: [
      {
        question: "Why multi-module architecture?",
        answer: "Multi-module architecture isolates code blocks. It enables separate team members to work on distinct modules simultaneously and reduces build compile times by caching unchanged libraries."
      },
      {
        question: "Why Agora SDK?",
        answer: "Agora provides robust Global Video Routing (SD-RTN), which dynamically routes traffic around congested paths. This was critical for maintaining high-quality calls for users across regional India."
      },
      {
        question: "What changed after implementation?",
        answer: "Features could be developed and deployed individually. App crash rates dropped below 0.9%, and the time to onboard new developers was reduced significantly."
      }
    ],
    screenshots: [
      "/playstore_apps/aajeevansangcom_-_shaadi_app/screenshots/01.png",
      "/playstore_apps/aajeevansangcom_-_shaadi_app/screenshots/02.png",
      "/playstore_apps/aajeevansangcom_-_shaadi_app/screenshots/03.png",
      "/playstore_apps/aajeevansangcom_-_shaadi_app/screenshots/04.png"
    ],
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.affluent.aajeevansang"
  },
  {
    slug: "ekal-acharya",
    title: "Ekal Acharya",
    category: "Education · Offline-First",
    oneSentence: "A production mobile education app within the Ekal Vidyalaya rural-education suite.",
    description: "A specialized app empowering teachers (Acharyas) in remote rural areas of India to manage classes, register students, and record educational metrics offline.",
    role: "Lead Mobile Developer — Designed the offline database structure, localized UI, and sync-engine pipelines.",
    platforms: ["Android"],
    tech: ["Java", "Kotlin", "Android SDK", "Room DB", "SQLite", "WorkManager", "Retrofit"],
    industry: "Education / NGO",
    scale: "100K+ Downloads",
    result: "Successfully synced offline teaching records for tens of thousands of schools across remote villages.",
    challenge: "Designing an application that remains fully operational in rural zones without cellular internet, synchronizing large volumes of records seamlessly when a connection is occasionally established.",
    solution: "We engineered an offline-first storage engine using Room DB. All user actions are stored locally in transaction tables and queued. We implemented Android WorkManager to auto-sync transactions in chunks in the background whenever the device detects network access, handling conflict resolutions automatically.",
    decisions: [
      {
        question: "Why Room DB?",
        answer: "Room provides compile-time SQLite query verification and fits natively with modern Android architectural components like LiveData and Coroutines, making data state updates predictable."
      },
      {
        question: "How was sync conflict handled?",
        answer: "We implemented a 'Last-Write-Wins' synchronization mechanism coupled with client-side unique transaction hashes, preventing duplicate registration records from being generated on retry actions."
      }
    ],
    screenshots: [
      "/playstore_apps/ekal_acharya/screenshots/01.jpg",
      "/playstore_apps/ekal_acharya/screenshots/02.jpg",
      "/playstore_apps/ekal_acharya/screenshots/03.jpg"
    ],
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.ekal.acharya"
  },
  {
    slug: "drivergill",
    title: "DriverGill Mobility Suite",
    category: "On-Demand · Mobility · Payments",
    oneSentence: "An on-demand driver booking platform with real-time tracking, automated fare calculations, and payments.",
    description: "A complete mobile transit platform providing on-demand driver services with real-time location tracking, automatic surge-pricing, and an operations dashboard.",
    role: "Senior Mobile Engineer — Developed the driver tracking WebSocket channels, Google Maps SDK integrations, and payment interfaces.",
    platforms: ["Flutter", "Android", "iOS"],
    tech: ["Flutter", "Google Maps SDK", "WebSocket", "Razorpay", "Geofencing", "Dio"],
    industry: "Mobility / On-Demand",
    adminUrl: "https://admin.drivergill.com/",
    challenge: "Providing smooth, low-latency car coordinate movement updates on a map view without lagging the user interface or draining device batteries.",
    solution: "We integrated Google Maps SDK and optimized map rendering by listening to a WebSocket driver location channel. Coordinate updates are run through a custom interpolation filter, creating smooth car movements while throttling updates to once per 2 seconds to preserve battery.",
    decisions: [
      {
        question: "Why custom coordinates interpolation?",
        answer: "Raw GPS signals can bounce, causing map pins to jump erratically. Interpolation calculates the path between point A and B, sliding the marker smoothly."
      },
      {
        question: "How was surge pricing computed?",
        answer: "We sent user request density and driver coordinates through real-time geofence calculations. The server computes surge multipliers, which are rendered inside the Flutter app's booking sheet before payment completion."
      }
    ],
    screenshots: [
      "/playstore_apps/drivergill/screenshots/01.png",
      "/playstore_apps/drivergill/screenshots/02.png",
      "/playstore_apps/drivergill/screenshots/03.png"
    ],
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.driver_gill"
  },
  {
    slug: "snapvisionary",
    title: "SnapVisionary AI Photo Tool",
    category: "AI · Photo · Utilities",
    oneSentence: "An AI-powered photo editing and enhancement application shipped to production.",
    description: "A creative photo suite integrating device camera controls, local image compression workflows, and cloud-based generative AI systems.",
    role: "Lead Mobile Developer — Designed the high-performance local image pipeline, camera controllers, and AI integration channels.",
    platforms: ["Native Android", "Native iOS"],
    tech: ["Kotlin", "Swift", "Gemini APIs", "OpenAI APIs", "ML Kit", "TensorFlow Lite"],
    industry: "Creative / AI",
    challenge: "Uploading massive multi-megapixel camera images directly to AI servers causes latency and upload failures. The app needed a rapid, local pre-processing pipeline.",
    solution: "We built an isolated native image workflow for Android and iOS that compresses and crops raw images before API submission. The app performs local object detection using TensorFlow Lite to isolate subjects before sending optimized image segments to Gemini/OpenAI cloud models.",
    decisions: [
      {
        question: "Why TensorFlow Lite?",
        answer: "Running object detection locally on-device saves server bandwidth and provides instant UI feedback to the user, allowing them to crop precisely before final generation."
      },
      {
        question: "How was Camera integration optimized?",
        answer: "The Android and iOS camera workflows were implemented in their native layers, keeping capture, image processing, and platform-specific camera behavior close to each operating system."
      }
    ],
    screenshots: [
      "/playstore_apps/snapvisionary/screenshots/01.jpg",
      "/playstore_apps/snapvisionary/screenshots/02.jpg"
    ],
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.snapvisionary"
  },
  {
    slug: "filekavach",
    title: "FILEkavach Cryptographic Vault",
    category: "Utility · Security · File Cryptography",
    oneSentence: "A production file-security vault encrypting device directories securely.",
    description: "A robust mobile security tool that lets users encrypt personal documents, photos, and files using AES-256 local keys.",
    role: "Lead Mobile Architect — Built the cryptographic libraries and native Android storage access channels.",
    platforms: ["Android"],
    tech: ["Kotlin", "Java", "Android Security SDK", "AES-256", "Room DB", "Biometric Authentication"],
    industry: "Utility / Security",
    challenge: "Performing multi-gigabyte file encryption natively without locking the main thread, while protecting cryptographic keys from memory dump exploits.",
    solution: "We implemented AES-256 encryption in GCM mode utilizing the Android Keystore system. Encryption processes run inside custom Kotlin Coroutine background threads, showing a progress notification while streaming files block-by-block to avoid loading entire files into volatile RAM.",
    decisions: [
      {
        question: "Why Android Keystore system?",
        answer: "Keystore prevents key material from entering the application memory space, making it virtually impossible for malware to extract key files."
      },
      {
        question: "How is UI lock prevented?",
        answer: "We streamed the file blocks using Kotlin Flow and Coroutines on the Dispatchers.IO pool. This separates the encryption process from the main thread, keeping the user interface completely responsive."
      }
    ],
    screenshots: [
      "/playstore_apps/filekavach/screenshots/01.jpg",
      "/playstore_apps/filekavach/screenshots/02.jpg"
    ],
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.civ.filekavach"
  }
];
export type FeaturedProjectSlug = "real-money-gaming" | "matrimony-platform" | "ekal-acharya" | "drivergill" | "snapvisionary" | "filekavach";
