"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navigation = [
  { href: "/", label: "Home" },
  { href: "/how-i-can-help/", label: "How I can help" },
  { href: "/about-louise/", label: "About Louise" },
  { href: "/fees-and-questions/", label: "Fees & questions" },
  { href: "/contact/", label: "Contact" },
];

function Monogram() {
  return <span className="monogram" aria-hidden="true"><span>LH</span></span>;
}

function CookiePanel({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [analytics, setAnalytics] = useState(false);
  if (!open) return null;
  const save = (allow: boolean) => {
    localStorage.setItem("lh-cookie-choice", allow ? "analytics" : "necessary");
    onClose();
  };
  return (
    <div className="cookie-overlay" role="presentation">
      <section className="cookie-panel" role="dialog" aria-modal="true" aria-labelledby="cookie-title">
        <p className="eyebrow">Your privacy</p>
        <h2 id="cookie-title">Cookie settings</h2>
        <p>This private preview does not load Google Analytics or Microsoft Clarity. These controls show how consent will work before a public launch.</p>
        <label className="cookie-toggle">
          <input type="checkbox" checked disabled />
          <span><strong>Necessary cookies</strong><small>Required for core site features and saved preferences.</small></span>
        </label>
        <label className="cookie-toggle">
          <input type="checkbox" checked={analytics} onChange={(e) => setAnalytics(e.target.checked)} />
          <span><strong>Optional analytics</strong><small>Off in this preview. These must never load before consent.</small></span>
        </label>
        <div className="cookie-actions">
          <button className="button button-primary" onClick={() => save(true)}>Accept</button>
          <button className="button button-outline" onClick={() => save(false)}>Reject non-essential</button>
          <button className="text-button" onClick={onClose}>Close settings</button>
        </div>
      </section>
    </div>
  );
}

export function SiteShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [cookieOpen, setCookieOpen] = useState(false);
  const [showBanner, setShowBanner] = useState(false);
  useEffect(() => {
    const timer = window.setTimeout(
      () => setShowBanner(!localStorage.getItem("lh-cookie-choice")),
      0,
    );
    return () => window.clearTimeout(timer);
  }, []);
  const choose = (choice: "analytics" | "necessary") => {
    localStorage.setItem("lh-cookie-choice", choice);
    setShowBanner(false);
  };
  return (
    <>
      <div className="review-bar"><span>Private review build</span><Link href="/build-notes/">View Louise’s confirmation checklist</Link></div>
      <header className="site-header">
        <div className="header-inner">
          <Link className="brand" href="/" aria-label="Louise Hendey home">
            <Monogram />
            <span className="brand-name">Louise Hendey<small>Counselling and Therapy</small></span>
          </Link>
          <button className="menu-button" type="button" aria-expanded={menuOpen} aria-controls="main-navigation" onClick={() => setMenuOpen(v => !v)}>
            <span aria-hidden="true">{menuOpen ? "×" : "☰"}</span><span>{menuOpen ? "Close" : "Menu"}</span>
          </button>
          <nav id="main-navigation" className={menuOpen ? "main-nav is-open" : "main-nav"} aria-label="Main navigation">
            {navigation.map(item => <Link key={item.href} href={item.href} onClick={() => setMenuOpen(false)} aria-current={pathname === item.href ? "page" : undefined}>{item.label}</Link>)}
          </nav>
          <div className="header-actions">
            <a className="header-phone" href="tel:+447909578954">07909 578954</a>
            <Link className="button button-primary button-small" href="/contact/#free-call">Book a free 15-minute call</Link>
          </div>
        </div>
      </header>
      {children}
      <footer className="site-footer">
        <div className="footer-main">
          <div className="footer-brand"><Monogram /><div><h2>Louise Hendey</h2><p>Counselling and Therapy</p><p>Mottingham and South East London · Online across the UK</p></div></div>
          <div><h3>Contact</h3><a href="tel:+447909578954">07909 578954</a><a href="mailto:therapy@louisehendeycounsellingandtherapy.com">therapy@louisehendeycounsellingandtherapy.com</a></div>
          <div><h3>Profiles and social</h3>
            <a href="https://www.counselling-directory.org.uk/counsellors/louise-hendey" target="_blank" rel="noreferrer">Counselling Directory</a>
            <a href="https://www.bacp.co.uk/therapists/419515/louise-hendey/mottingham-se9" target="_blank" rel="noreferrer">BACP register</a>
            <a href="https://www.facebook.com/share/1BmN2AZ5ko/?mibextid=wwXIfr" target="_blank" rel="noreferrer">Facebook</a>
          </div>
        </div>
        <div className="urgent-footer"><strong>This practice is not an emergency service.</strong> For urgent mental-health support, use <a href="https://www.nhs.uk/nhs-services/mental-health-services/where-to-get-urgent-help-for-mental-health/" target="_blank" rel="noreferrer">NHS urgent mental-health help</a> or call Samaritans free on <a href="tel:116123">116 123</a>.</div>
        <div className="footer-legal">
          <Link href="/privacy-notice/">Privacy notice</Link><button type="button" onClick={() => setCookieOpen(true)}>Cookie settings</button>
          <Link href="/professional-information/">Website terms / professional information</Link><Link href="/accessibility-statement/">Accessibility statement</Link><span>© {new Date().getFullYear()} Louise Hendey</span>
        </div>
      </footer>
      <nav className="mobile-actions" aria-label="Quick contact"><a href="tel:+447909578954">Call</a><Link href="/contact/#free-call">Book free call</Link></nav>
      {showBanner && <section className="cookie-banner" aria-label="Cookie choices" aria-live="polite"><div><strong>Your privacy matters</strong><p>This preview uses necessary storage only. Optional analytics are switched off.</p></div><div className="cookie-actions"><button className="button button-primary" onClick={() => choose("analytics")}>Accept</button><button className="button button-outline" onClick={() => choose("necessary")}>Reject non-essential</button><button className="text-button" onClick={() => setCookieOpen(true)}>Manage settings</button></div></section>}
      <CookiePanel open={cookieOpen} onClose={() => setCookieOpen(false)} />
    </>
  );
}
