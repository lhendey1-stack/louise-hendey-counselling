import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const privateReviewMeta =
  /<meta(?=[^>]*\bname=["']codex-preview["'])(?=[^>]*\bcontent=["']private-review["'])[^>]*>/i;

test("renders without private review elements", async () => {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  const response = await worker.fetch(
    new Request("http://localhost/", {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );

  assert.equal(response.status, 200);
  assert.match(
    response.headers.get("content-type") ?? "",
    /^text\/html\b/i,
  );
  const html = await response.text();
  assert.doesNotMatch(html, privateReviewMeta);
  assert.doesNotMatch(html, /Private review build/i);
  assert.doesNotMatch(html, /View Louise’s confirmation checklist/i);
});

test("includes the portable Web3Forms integration", async () => {
  const contactForm = await readFile(new URL("../app/components/ContactForm.tsx", import.meta.url), "utf8");

  assert.match(contactForm, /https:\/\/api\.web3forms\.com\/submit/);
  assert.match(contactForm, /WEB3FORMS_ACCESS_KEY/);
  assert.match(contactForm, /name="subject" value=\{WEB3FORMS_SUBJECT\}/);
  assert.match(contactForm, /formData\.set\("replyto"/);
  assert.match(contactForm, /name="botcheck"/);
  assert.match(contactForm, /Thank you\. Your message has been sent to Louise\. She aims to respond within 48 hours\./);
  assert.match(contactForm, /Sorry, your message could not be sent\. Please use the email address shown on the website or try again shortly\./);
});

test("redirects successful Web3Forms submissions on the current site origin", async () => {
  const contactForm = await readFile(new URL("../app/components/ContactForm.tsx", import.meta.url), "utf8");

  assert.match(contactForm, /const WEB3FORMS_SUCCESS_PATH = "\/contact\/\?sent=1"/);
  assert.match(contactForm, /new URL\(WEB3FORMS_SUCCESS_PATH, window\.location\.origin\)/);
  assert.match(contactForm, /window\.location\.assign\(successUrl\.href\)/);
  assert.doesNotMatch(contactForm, /workers\.dev/);
  assert.ok(contactForm.indexOf("if (!response.ok || !result.success)") < contactForm.indexOf("window.location.assign(successUrl.href)"));
});

test("uses the supplied photos in their requested page positions", async () => {
  const home = await readFile(new URL("../app/page.tsx", import.meta.url), "utf8");
  const about = await readFile(new URL("../app/about-louise/page.tsx", import.meta.url), "utf8");
  const css = await readFile(new URL("../app/globals.css", import.meta.url), "utf8");

  assert.match(home, /louise-hendey-therapy-room-empty\.webp/);
  assert.match(home, /louise-hendey-therapy-room-overlay\.webp/);
  assert.match(home, /louise-hendey-portrait-blue\.webp/);
  assert.match(about, /louise-hendey-seated-therapy-room\.webp/);
  assert.match(about, /louise-hendey-therapy-room-empty\.webp/);
  assert.match(css, /\.portrait-card\{[^}]*height:150px;[^}]*width:150px\}/);
  assert.match(css, /@media\(max-width:680px\)\{[\s\S]*?\.portrait-card\{height:110px;width:110px\}/);
});
