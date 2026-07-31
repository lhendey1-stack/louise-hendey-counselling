import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro } from "../components/Shared";

export const metadata: Metadata = {
  title: "Private Build Notes | Louise Hendey",
  robots: { index: false, follow: false },
};

const confirmations = [
  ["Client group","Confirmed: adults aged 18 and over only."],
  ["Availability","Confirmed: Sunday 9–11am; Monday and Tuesday 8am–8pm; Wednesday and Thursday 6–8pm; Friday 8–10am; Saturday 9–11am."],
  ["Free introductory call","Confirmed: a free 15-minute Zoom call, arranged by contacting Louise or booked through her Counselling Directory profile."],
  ["Promoted topics","Confirm whether Women’s Issues remains a lead specialism and which sensitive topics should be actively promoted."],
  ["Experience wording","Confirmed: Louise is happy with the existing wording."],
  ["Privacy facts","Confirmed: counselling records are kept for seven years in keeping with BACP guidelines; ICO registration ZC0843370; insurance through Holistic Insurance Services."],
  ["Professional links","Facebook, Counselling Directory and BACP links are included. NCPS and Google Business links remain to be confirmed."],
  ["Professional endorsement","Optional later feature only. Use a supervisor, manager or professional colleague with explicit permission, never Louise’s own therapist or a current client."],
];
const images = [
  ["Louise portrait","The attached close-up is used temporarily in a small card. Replace with an approved relaxed head-and-shoulders portrait with natural light and both portrait and landscape crops."],
  ["Therapy room","The attached real interior is used as the main image. Louise should approve the crop and confirm no identifying detail is visible."],
  ["Exterior images","The attached garden-room exterior photographs are deliberately not used because they reveal the property."],
  ["BACP badge","The supplied rectangular badge is used at its natural proportions. Confirm permission and retain the register link."],
  ["Online counselling visual","No stock or generated image has been added. The design uses copy and line graphics, avoiding a staged fake therapy session."],
];
const launch = [
  ["Contact form","Visual preview and validation are complete. Secure email delivery, spam protection, processor agreement and retention rules must be selected and tested before launch."],
  ["Cookies and tracking","The consent interface is shown, but GA4 G-LT3B6453LM and Clarity xd6y8c3s9n are not loaded. Add them only after consent blocking and privacy wording are verified."],
  ["Legal review","Privacy notice, professional information and accessibility pages are structured placeholders. Replace with facts matched to Louise’s real systems and review before launch."],
  ["Redirects","If the domain moves, set 301 redirects for /counselling/, /about-me/, /fees/, /faq/ and the current /contact/ route where needed."],
  ["Domain and search","Do not connect the domain yet. Later: preserve Search Console, submit the new sitemap, verify canonical URLs and test the live contact journey."],
  ["Helpful articles","Architecture is reserved but hidden. Launch an articles area only when at least three genuinely useful articles exist."],
  ["Analytics and contact goals","After consent is working, configure privacy-safe call, email and form completion events without collecting message content."],
  ["Testing","Complete device checks at 320px, 375px, 768px and desktop, plus keyboard, screen-reader and real form-delivery testing before launch."],
];

function Checklist({ items }: { items: string[][] }) {
  return <div className="notes-list">{items.map(i=><article className="note-item" key={i[0]}><div><strong>{i[0]}</strong><p>{i[1]}</p></div></article>)}</div>;
}

export default function BuildNotes() {
  return <main id="main-content">
    <PageIntro eyebrow="Private review only" title="Louise’s build notes and launch checklist"><p>This page is intentionally outside the public navigation. It records every provisional fact, image and technical task that must be resolved before this private preview could replace the existing website.</p></PageIntro>
    <section className="section"><div className="container narrow"><div className="section-heading"><p className="eyebrow">Confirm with Louise</p><h2>Facts and choices</h2></div><Checklist items={confirmations}/></div></section>
    <section className="section section-sage"><div className="container narrow"><div className="section-heading"><p className="eyebrow">Image review</p><h2>Current and replacement images</h2></div><Checklist items={images}/></div></section>
    <section className="section section-white"><div className="container narrow"><div className="section-heading"><p className="eyebrow">Before any public launch</p><h2>Technical, privacy and migration work</h2></div><Checklist items={launch}/><div className="button-row"><Link className="button button-primary" href="/">Return to the private homepage</Link></div></div></section>
  </main>;
}
