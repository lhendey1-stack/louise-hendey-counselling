import type { Metadata } from "next";
import { Accordion, type FaqItem } from "../components/Accordion";
import { FinalCta, PageIntro } from "../components/Shared";

export const metadata: Metadata = {
  title: "Counselling Fees & FAQs | Louise Hendey",
  description: "£60 one-hour counselling sessions, free 15-minute introductory Zoom call, online and face-to-face options, cancellation policy and common questions.",
  alternates: { canonical: "/fees-and-questions/" },
};

const faqs: FaqItem[] = [
  {question:"What is counselling?",answer:"Counselling is a confidential, non-judgemental space to explore thoughts, feelings, worries and patterns with a trained and compassionate professional. It is not about being told what to do. It is a chance to understand yourself more clearly and consider what may help."},
  {question:"Do I need to be in crisis?",answer:"No. People come to counselling for many reasons: difficult emotions, repeated patterns, loss, major decisions, past experiences or simply needing a private space to think."},
  {question:"Can we talk before I book?",answer:"Yes. I offer a free 15-minute introductory call over Zoom so that you can ask questions and we can see whether working together feels right. Contact me to arrange a time, or book directly through my Counselling Directory profile."},
  {question:"What happens in the first session?",answer:"We will begin with what has brought you to counselling, what you hope for and any questions or concerns you have. You do not need to arrive with a perfectly organised story."},
  {question:"What if I feel nervous?",answer:"That is completely understandable. Starting therapy with someone new can feel daunting. You are welcome to say that you feel nervous, and we can begin gently."},
  {question:"Is counselling confidential?",answer:"What you share is treated confidentially. There are limited legal and safeguarding exceptions, which I will explain clearly when we begin working together."},
  {question:"Where do face-to-face sessions take place?",answer:"In a private, purpose-built therapy room in the Mottingham area. The full address, parking and travel information are shared after an appointment is arranged."},
  {question:"Can I have counselling online?",answer:"Yes. Online sessions are available across the UK. You will need a private place and a reliable internet connection."},
  {question:"How often will we meet?",answer:"Weekly sessions are usually recommended, particularly at the start, but we can discuss what is realistic and useful for you."},
  {question:"How long will I need counselling?",answer:"Some people want short-term work around a particular issue; others value longer-term work. We will review the focus together rather than assume a fixed length."},
  {question:"What if I need to cancel?",answer:"Please give at least 48 hours’ notice. When less notice is given, the full session fee remains payable."},
];
const details = [
  ["Session fee","£60"],
  ["Session length","One hour"],
  ["Client group","Adults aged 18 and over"],
  ["Introductory call","Free 15-minute Zoom call before booking"],
  ["Delivery","Mottingham area or online across the UK"],
  ["Payment","In advance by bank transfer"],
  ["Cancellation","At least 48 hours’ notice"],
  ["Availability","Sunday 9–11am; Monday and Tuesday 8am–8pm; Wednesday and Thursday 6–8pm; Friday 8–10am; Saturday 9–11am"],
];

export default function FeesQuestions() {
  return <main id="main-content">
    <PageIntro eyebrow="Practical information" title="Fees, sessions and common questions"><p>It is helpful to know the practical details before you contact a counsellor. The key information is below, followed by answers to questions people often have before starting.</p></PageIntro>
    <section className="section"><div className="container"><div className="practical-grid">{details.map(d=><article className="practical-card" key={d[0]}><span>{d[0]}</span><strong>{d[1]}</strong></article>)}</div></div></section>
    <section className="section section-white"><div className="container narrow"><div className="section-heading"><p className="eyebrow">Common questions</p><h2>What you may want to know before starting</h2></div><Accordion items={faqs}/></div></section>
    <FinalCta title="Still have a question?">Call Louise on 07909 578954 or request a free 15-minute call.</FinalCta>
  </main>;
}
