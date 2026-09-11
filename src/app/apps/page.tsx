import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { appsData } from "@/data/apps";

export default function AppsPage() {
  return (
    <div className="archive-page">
      <header className="archive-header">
        <p className="archive-kicker"><span /> App library</p>
        <h1>Twenty-plus products,<br /><em>one shipping habit.</em></h1>
        <p>A browsable record of mobile products across gaming, healthcare, education, mobility, business tools, and laundry operations.</p>
      </header>
      <div className="app-library-grid">
        {appsData.map((app) => (
          <a className="app-library-item" href={app.playStoreUrl} target="_blank" rel="noreferrer" key={app.slug}>
            <Image src={app.icon} alt={`${app.name} app icon`} width={56} height={56} />
            <div><h2>{app.name}</h2><p>{app.summary}</p><span>{app.installs} installs <ArrowUpRight size={14} /></span></div>
          </a>
        ))}
      </div>
    </div>
  );
}