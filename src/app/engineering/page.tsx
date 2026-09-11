import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { profile } from "@/data/profile";

const groups = [
  ["Architecture", profile.skills.architecture],
  ["State management", profile.skills.state],
  ["Real-time systems", profile.skills.realtime],
  ["APIs and AI", profile.skills.apis],
  ["Payments", profile.skills.payments],
  ["IoT and devices", profile.skills.iot],
  ["Delivery", profile.skills.delivery],
  ["Team management", profile.skills.teamManagement],
];

export default function EngineeringPage() {
  return (
    <div className="archive-page engineering-page">
      <header className="archive-header">
        <p className="archive-kicker"><span /> Engineering practice</p>
        <h1>The work behind<br /><em>the interface.</em></h1>
        <p>Architecture, reliability, real-time communication, payments, device integration, and the team practices that turn mobile work into software people can depend on.</p>
      </header>
      <div className="engineering-grid">
        {groups.map(([title, items]) => <section key={title as string}><h2>{title as string}</h2><div>{(items as string[]).map((item) => <span key={item}>{item}</span>)}</div></section>)}
      </div>
      <Link href="/experience" className="archive-link">See the experience behind the work <ArrowUpRight size={15} /></Link>
    </div>
  );
}