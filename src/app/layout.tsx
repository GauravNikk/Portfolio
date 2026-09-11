import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "@/styles/globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Gaurav Shukla — Senior Mobile Application Engineer",
    template: "%s — Gaurav Shukla"
  },
  description: "Senior Mobile Application Engineer specializing in Android, Flutter, iOS, real-time systems, AI and IoT.",
  keywords: ["Mobile Engineer", "Android Developer", "Flutter Developer", "iOS Developer", "Kotlin", "Swift", "Agora", "Real-Time Systems"],
  authors: [{ name: "Gaurav Shukla" }],
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    title: "Gaurav Shukla — Senior Mobile Application Engineer",
    description: "Senior Mobile Application Engineer specializing in Android, Flutter, iOS, real-time systems, AI and IoT.",
    type: "website",
    locale: "en_US"
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable} scroll-smooth`}>
      <body className="antialiased min-h-screen flex flex-col bg-background text-foreground bg-dot-grid relative">
        <div className="absolute inset-0 radial-highlight pointer-events-none z-0" />
        <Header />
        <main className="flex-grow z-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
