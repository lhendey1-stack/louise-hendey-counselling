import type { Metadata } from "next";
import { ContactForm } from "../components/ContactForm";
import { PageIntro } from "../components/Shared";

export const metadata: Metadata = {
  title: "Contact Louise Hendey | Free 15-Minute Call",
  description: "Contact Louise Hendey Counselling and Therapy to arrange a free 15-minute introductory Zoom call. Mottingham-area and online counselling.",
  alternates: { canonical: "/contact/" },
};

export default function Contact() {
  return <main id="main-content">
    <PageIntro eyebrow="Contact Louise" title="Take the first step when you are ready"><p>You are welcome to book a free 15-minute introductory call over Zoom. It is a chance to ask questions, briefly explain what you are looking for and see whether working together feels right. There is no obligation to book a session.</p></PageIntro>
    <section className="section" id="free-call"><div className="container contact-grid"><div className="contact-cards"><article className="contact-card"><h2>Call or text</h2><a href="tel:+447909578954">07909 578954</a></article><article className="contact-card"><h3>Email Louise</h3><a href="mailto:therapy@louisehendeycounsellingandtherapy.com">therapy@louisehendeycounsellingandtherapy.com</a></article><article className="contact-card"><h3>Book the free Zoom call</h3><p>Contact me to arrange a time, or book directly through my Counselling Directory profile.</p><a href="https://www.counselling-directory.org.uk/counsellors/louise-hendey" target="_blank" rel="noreferrer">Open Counselling Directory →</a></article><article className="info-card"><h3>When you will hear back</h3><p>I aim to respond within 48 hours. If you have not heard from me, please check your spam or junk folder.</p></article><article className="info-card"><h3>Therapy hours</h3><dl className="therapy-hours"><div><dt>Sunday</dt><dd>9–11am</dd></div><div><dt>Monday</dt><dd>8am–8pm</dd></div><div><dt>Tuesday</dt><dd>8am–8pm</dd></div><div><dt>Wednesday</dt><dd>6–8pm</dd></div><div><dt>Thursday</dt><dd>6–8pm</dd></div><div><dt>Friday</dt><dd>8–10am</dd></div><div><dt>Saturday</dt><dd>9–11am</dd></div></dl></article><article className="info-card"><h3>Who I work with</h3><p>I provide counselling for adults aged 18 and over.</p></article><article className="info-card"><h3>Where sessions take place</h3><p>Face-to-face counselling is available by appointment in the Mottingham and South East London area. Full address and travel details are provided after an appointment is arranged. Online sessions are available across the UK.</p></article></div><div><div className="section-heading"><p className="eyebrow">Request an introductory call</p><h2>Send a brief message</h2></div><ContactForm/></div></div></section>
    <section className="section section-white"><div className="container narrow"><div className="urgent-panel"><h2>Urgent support</h2><p><strong>This practice is not an emergency service.</strong> If someone is in immediate danger, call 999 or go to A&amp;E. For urgent mental-health support, call 111 and select the mental-health option. Samaritans: <a href="tel:116123">116 123</a>.</p></div></div></section>
  </main>;
}
