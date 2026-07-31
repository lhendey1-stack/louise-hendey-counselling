import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.louisehendeycounsellingandtherapy.com";
  return [
    { url: `${base}/`, priority: 1, changeFrequency: "monthly" },
    { url: `${base}/how-i-can-help/`, priority: 0.9, changeFrequency: "monthly" },
    { url: `${base}/about-louise/`, priority: 0.8, changeFrequency: "monthly" },
    { url: `${base}/fees-and-questions/`, priority: 0.8, changeFrequency: "monthly" },
    { url: `${base}/contact/`, priority: 0.9, changeFrequency: "monthly" },
    { url: `${base}/privacy-notice/`, priority: 0.3, changeFrequency: "yearly" },
    { url: `${base}/professional-information/`, priority: 0.3, changeFrequency: "yearly" },
    { url: `${base}/accessibility-statement/`, priority: 0.3, changeFrequency: "yearly" },
  ];
}
