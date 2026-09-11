import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { links } from "@/data/links";

export default function Footer() {
  return (
    <footer className="border-t border-cardBorder bg-background py-16 px-6 relative z-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Intro */}
        <div className="flex flex-col gap-4">
          <Link href="/" className="font-mono text-sm tracking-wider hover:text-accent transition-colors">
            GAURAV SHUKLA
          </Link>
          <p className="text-xs text-zinc-500 font-mono uppercase tracking-wide">
            Senior Mobile Application Engineer
          </p>
          <p className="text-sm text-zinc-400 max-w-xs">
            Specializing in Native Android, Flutter, iOS, Real-Time communication, AI integrations, and IoT/BLE devices.
          </p>
        </div>

        {/* Work Navigation */}
        <div className="flex flex-col gap-4">
          <h4 className="font-mono text-xs text-zinc-500 uppercase tracking-widest">Work</h4>
          <ul className="flex flex-col gap-2.5 text-sm text-zinc-400">
            <li>
              <Link href="/experience" className="hover:text-accent transition-colors font-mono text-xs uppercase tracking-wide">
                Experience
              </Link>
            </li>
            <li>
              <Link href="/projects" className="hover:text-accent transition-colors font-mono text-xs uppercase tracking-wide">
                Projects
              </Link>
            </li>
            <li>
              <Link href="/apps" className="hover:text-accent transition-colors font-mono text-xs uppercase tracking-wide">
                App Library
              </Link>
            </li>
            <li>
              <Link href="/engineering" className="hover:text-accent transition-colors font-mono text-xs uppercase tracking-wide">Engineering</Link>
            </li>
          </ul>
        </div>

        {/* Connect Links */}
        <div className="flex flex-col gap-4">
          <h4 className="font-mono text-xs text-zinc-500 uppercase tracking-widest">Connect</h4>
          <ul className="flex flex-col gap-2.5 text-sm text-zinc-400">
            <li>
              <a
                href={links.githubRepositories}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors font-mono text-xs uppercase tracking-wide flex items-center gap-1"
              >
                GitHub
                <ArrowUpRight className="w-3 h-3 text-zinc-600" />
              </a>
            </li>
            <li>
              <a
                href={links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors font-mono text-xs uppercase tracking-wide flex items-center gap-1"
              >
                LinkedIn
                <ArrowUpRight className="w-3 h-3 text-zinc-600" />
              </a>
            </li>
            <li>
              <a
                href={links.medium}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors font-mono text-xs uppercase tracking-wide flex items-center gap-1"
              >
                Medium
                <ArrowUpRight className="w-3 h-3 text-zinc-600" />
              </a>
            </li>
            <li>
              <a
                href={links.email}
                className="hover:text-accent transition-colors font-mono text-xs uppercase tracking-wide"
              >
                Email
              </a>
            </li>
          </ul>
        </div>

        {/* Companies Links */}
        <div className="flex flex-col gap-4">
          <h4 className="font-mono text-xs text-zinc-500 uppercase tracking-widest">Companies</h4>
          <ul className="flex flex-col gap-2.5 text-sm text-zinc-400">
            <li>
              <a
                href={links.celestial}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors font-mono text-xs uppercase tracking-wide flex items-center justify-between"
              >
                Celestial IT Verse
                <ArrowUpRight className="w-3 h-3 text-zinc-600" />
              </a>
            </li>
            <li>
              <a
                href={links.inventics}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors font-mono text-xs uppercase tracking-wide flex items-center justify-between"
              >
                Inventics Tech
                <ArrowUpRight className="w-3 h-3 text-zinc-600" />
              </a>
            </li>
            <li>
              <a
                href={links.codeair}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors font-mono text-xs uppercase tracking-wide flex items-center justify-between"
              >
                CODEAIR
                <ArrowUpRight className="w-3 h-3 text-zinc-600" />
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-zinc-900 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-600">
        <div>
          <span>&copy; {new Date().getFullYear()} Gaurav Shukla. All rights reserved.</span>
        </div>
        <div className="flex gap-6 uppercase tracking-widest text-[10px]">
          <span>Android &middot; Flutter &middot; iOS</span>
        </div>
      </div>
    </footer>
  );
}
