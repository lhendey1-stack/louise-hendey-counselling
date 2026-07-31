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
  assert.match(contactForm, /08036a90-a791-41c6-881b-91ae46069e36/);
  assert.match(contactForm, /name="subject" value=\{WEB3FORMS_SUBJECT\}/);
  assert.match(contactForm, /formData\.set\("replyto"/);
  assert.match(contactForm, /name="botcheck"/);
  assert.match(contactForm, /Thank you\. Your message has been sent to Louise\. She aims to respond within 48 hours\./);
  assert.match(contactForm, /Sorry, your message could not be sent\. Please use the email address shown on the website or try again shortly\./);
});
