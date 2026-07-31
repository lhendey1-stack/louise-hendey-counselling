import type { Metadata } from "next";
import { PageIntro } from "../components/Shared";

export const metadata: Metadata = { title: "Accessibility Statement | Louise Hendey", alternates: { canonical: "/accessibility-statement/" } };

export default function AccessibilityStatement() {
  return <main id="main-content"><PageIntro eyebrow="Accessibility" title="Accessibility statement"><p>Louise Hendey Counselling and Therapy wants this website and the contact journey to be clear, calm and usable by as many people as possible.</p></PageIntro><section className="section section-white"><div className="container narrow legal-copy"><h2>Our approach</h2><p>The site is designed towards WCAG 2.2 Level AA, with clear headings, readable type, strong contrast, visible keyboard focus, accessible navigation, labelled forms and reduced-motion support.</p><h2>Using the site</h2><p>You should be able to zoom text, navigate by keyboard, use screen-reader software and access the main content without relying on colour, sound or animation.</p><h2>Known limitations</h2><p>This is a private review build. The contact form is not yet connected, and a full assistive-technology audit will be completed before public launch.</p><h2>Reasonable adjustments and feedback</h2><p>If you need information in another format or encounter an accessibility problem, call <a href="tel:+447909578954">07909 578954</a> or email <a href="mailto:therapy@louisehendeycounsellingandtherapy.com">therapy@louisehendeycounsellingandtherapy.com</a>.</p></div></section></main>;
}
