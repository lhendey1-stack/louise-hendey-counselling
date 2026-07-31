import type { Metadata } from "next";
import { Lora, Nunito_Sans } from "next/font/google";
import { SiteShell } from "./components/SiteShell";
import "./globals.css";

const lora = Lora({ variable: "--font-heading", subsets: ["latin"], display: "swap" });
const nunito = Nunito_Sans({ variable: "--font-body", subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.louisehendeycounsellingandtherapy.com"),
  title: {
    default: "Counsellor in Mottingham & Online | Louise Hendey",
    template: "%s",
  },
  description:
    "Warm, confidential counselling for adults in Mottingham and South East London, plus online sessions across the UK. Book a free 15-minute call.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_GB",
    siteName: "Louise Hendey Counselling and Therapy",
    title: "Counsellor in Mottingham & Online | Louise Hendey",
    description:
      "Warm, confidential counselling for adults in Mottingham and South East London, plus online sessions across the UK.",
    images: [{ url: "/images/louise-hendey-therapy-room.png", alt: "Louise Hendey's calm private therapy room" }],
  },
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://www.louisehendeycounsellingandtherapy.com/#organisation",
      name: "Louise Hendey Counselling and Therapy",
      url: "https://www.louisehendeycounsellingandtherapy.com/",
      telephone: "+447909578954",
      email: "therapy@louisehendeycounsellingandtherapy.com",
      logo: "https://www.louisehendeycounsellingandtherapy.com/favicon.svg",
      sameAs: [
        "https://www.counselling-directory.org.uk/counsellors/louise-hendey",
        "https://www.bacp.co.uk/therapists/419515/louise-hendey/mottingham-se9",
        "https://www.facebook.com/share/1BmN2AZ5ko/?mibextid=wwXIfr",
      ],
    },
    {
      "@type": "Person",
      "@id": "https://www.louisehendeycounsellingandtherapy.com/#louise",
      name: "Louise Hendey",
      jobTitle: "Counsellor",
      telephone: "+447909578954",
      email: "therapy@louisehendeycounsellingandtherapy.com",
      worksFor: { "@id": "https://www.louisehendeycounsellingandtherapy.com/#organisation" },
      memberOf: [
        { "@type": "Organization", name: "British Association for Counselling and Psychotherapy" },
        { "@type": "Organization", name: "National Counselling and Psychotherapy Society" },
      ],
      sameAs: [
        "https://www.counselling-directory.org.uk/counsellors/louise-hendey",
        "https://www.bacp.co.uk/therapists/419515/louise-hendey/mottingham-se9",
        "https://www.facebook.com/share/1BmN2AZ5ko/?mibextid=wwXIfr",
      ],
    },
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-GB">
      <body className={`${lora.variable} ${nunito.variable}`}>
        <a className="skip-link" href="#main-content">Skip to main content</a>
        <SiteShell>{children}</SiteShell>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      </body>
    </html>
  );
}
