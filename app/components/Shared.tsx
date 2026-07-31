import Link from "next/link";

export function PageIntro({ eyebrow, title, children }: { eyebrow: string; title: string; children: React.ReactNode }) {
  return <section className="page-intro"><div className="container narrow"><p className="eyebrow">{eyebrow}</p><h1>{title}</h1><div className="lead">{children}</div></div></section>;
}

export function FinalCta({ title = "You do not have to decide everything today", children }: { title?: string; children: React.ReactNode }) {
  return <section className="final-cta"><div className="container"><p className="eyebrow light">A gentle first step</p><h2>{title}</h2><p>{children}</p><div className="button-row centered"><Link className="button button-light" href="/contact/#free-call">Book a free 15-minute call</Link><a className="button button-ghost-light" href="tel:+447909578954">Call 07909 578954</a></div></div></section>;
}

export function ServiceIcon({ type }: { type: number }) {
  const drawings = [
    <g key="anxiety"><path d="M4 8.5c2.2-2.1 4.4-2.1 6.6 0s4.4 2.1 6.6 0"/><path d="M6.2 13.4c1.8-1.7 3.6-1.7 5.4 0s3.6 1.7 5.4 0"/><path d="M9 18c1-1 2-1 3 0s2 1 3 0"/><circle className="icon-accent" cx="19" cy="5" r="1.5"/></g>,
    <g key="trauma"><path d="M12 3.2 19 6v5.1c0 4.3-2.7 7.6-7 9.7-4.3-2.1-7-5.4-7-9.7V6l7-2.8Z"/><path d="m10 6.8 2 3-1.6 2.2 2.2 2.2-1 3"/><circle className="icon-accent" cx="15.3" cy="9" r="1.4"/></g>,
    <g key="esteem"><path d="M12 20v-8"/><path d="M12 13c-4.1 0-6.4-2-6.7-5.7 3.9-.3 6.2 1.6 6.7 5.7Z"/><path d="M12 13c4.1 0 6.4-2 6.7-5.7-3.9-.3-6.2 1.6-6.7 5.7Z"/><path d="M7.5 20h9"/><circle className="icon-accent" cx="12" cy="5" r="1.5"/></g>,
    <g key="relationships"><circle cx="8.2" cy="8.2" r="2.4"/><circle cx="15.8" cy="8.2" r="2.4"/><path d="M3.8 19c.4-4.1 2.2-6.2 5.2-6.2 1.2 0 2.2.4 3 1.1.8-.7 1.8-1.1 3-1.1 3 0 4.8 2.1 5.2 6.2"/><path className="icon-accent" d="M10 17h4"/></g>,
    <g key="bereavement"><path d="M5.2 19.2c6.2-.7 10.5-5 13-13-8 .5-12.2 4.8-13 13Z"/><path d="M6.4 18c3-3 6-6 10-9.5"/><path d="M11.2 13.6 8.3 11M14.2 10.8l-.3-3.1"/><circle className="icon-accent" cx="18.6" cy="17.8" r="1.5"/></g>,
    <g key="transitions"><path d="M4 19c3.4-1.6 4.1-4.2 5-7.1.9-3 2.4-5.1 5.5-6.7"/><path d="m12.8 3.7 3.8.5-1.1 3.7"/><path d="M4 19h5"/><circle className="icon-accent" cx="18.2" cy="14.8" r="2.2"/></g>,
  ];
  return <span className="service-icon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.45" strokeLinecap="round" strokeLinejoin="round">{drawings[type % drawings.length]}</svg></span>;
}

export function SessionIcon({ type }: { type: "room" | "online" }) {
  return <span className="service-icon session-icon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.45" strokeLinecap="round" strokeLinejoin="round">
    {type === "online"
      ? <g><rect x="3.5" y="4.5" width="17" height="12" rx="2"/><path d="M8 20h8M12 16.5V20"/><path d="M8 9h8v4H11l-2.5 2V13H8Z"/></g>
      : <g><path d="M5 18.5V10a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v8.5"/><path d="M3.5 18.5h17M8 8V5.5h8V8"/><path d="M8 14h8"/></g>}
  </svg></span>;
}
