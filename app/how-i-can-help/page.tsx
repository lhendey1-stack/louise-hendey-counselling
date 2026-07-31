import type { Metadata } from "next";
import { FinalCta, PageIntro, ServiceIcon } from "../components/Shared";

export const metadata: Metadata = {
  title: "Counselling for Anxiety, Trauma & Self-Esteem | Mottingham",
  description: "Support for anxiety, trauma, self-esteem, relationships, bereavement and life changes with Louise Hendey, in Mottingham or online.",
  alternates: { canonical: "/how-i-can-help/" },
};

const support = [
  { title: "Trauma and difficult past experiences", body: "Experiences from childhood or later life can continue to affect relationships, confidence, safety and the way your body responds to stress. We will work carefully and at your pace. You will not be pushed to discuss anything before you feel ready.", icon: 1 },
  { title: "Anxiety and overwhelm", body: "Anxiety can leave you overthinking, expecting the worst, feeling on edge or unable to rest. Counselling can help you become curious about what is happening beneath the anxiety, recognise patterns and find ways to respond with more understanding and choice.", icon: 0 },
  { title: "Self-esteem and confidence", body: "You may be hard on yourself, struggle to recognise your strengths or feel that other people’s needs always come first. Together we can explore where these beliefs came from and begin to develop a kinder, more secure relationship with yourself.", icon: 2 },
  { title: "Relationships and boundaries", body: "Counselling can help you understand repeated patterns in relationships, conflict, people-pleasing, trust, communication and boundaries. The aim is not to tell you what decision to make, but to help you understand what you need and what feels right for you.", icon: 3 },
  { title: "Bereavement and loss", body: "Grief can follow a death, separation, illness, infertility, change in identity or the loss of a hoped-for future. There is no timetable for grief. Therapy can provide space for whatever the loss means to you.", icon: 4 },
  { title: "Women’s issues and life transitions", body: "Many women seek counselling around caring roles, identity, body image, menopause, fertility, pregnancy-related experiences, relationships or major transitions.", icon: 5 },
];

export default function HowICanHelp() {
  return <main id="main-content">
    <PageIntro eyebrow="How I can help" title="Counselling shaped around you"><p>There is no “right” reason to come to counselling. You may be struggling with something specific, carrying the impact of the past, or simply finding that life feels harder than it should. We can start with whatever feels most important to you.</p></PageIntro>
    <section className="section"><div className="container support-list">{support.map(item=><article className="support-section" key={item.title}><ServiceIcon type={item.icon}/><div><h2>{item.title}</h2><p>{item.body}</p></div></article>)}</div></section>
    <section className="section section-white"><div className="container narrow"><div className="section-heading"><p className="eyebrow">You do not need a label</p><h2>Other reasons people get in touch</h2><p>Low mood, stress, family conflict, feeling lost, chronic illness, work pressure, redundancy, parenting concerns and wanting a safe space to think. You do not need to fit a category before contacting me.</p></div></div></section>
    <section className="section"><div className="container narrow"><div className="approach-panel"><p className="eyebrow">My approach</p><h2>How I work</h2><p>My approach is person-centred, integrative and relational. In plain English, that means the work is led by you rather than by a fixed programme. I draw on different therapeutic ideas where they may be helpful, while placing the relationship between us at the heart of the work.</p><p>Counselling is not about me judging you or giving you a list of answers. It is a collaborative space where we can notice patterns, make connections and explore what may help life feel more manageable and fulfilling.</p></div></div></section>
    <FinalCta title="Not sure whether your reason for seeking counselling fits?">Book a free 15-minute call and ask. You do not need to explain everything before getting in touch.</FinalCta>
  </main>;
}
