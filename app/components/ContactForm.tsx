"use client";
import { FormEvent, useState } from "react";

const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";
const WEB3FORMS_ACCESS_KEY = "08036a90-a791-41c6-881b-91ae46069e36";
const WEB3FORMS_SUBJECT = "New website enquiry for Louise Hendey Counselling and Therapy";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    setStatus("sending");

    try {
      const formData = new FormData(form);
      formData.set("replyto", String(formData.get("email") ?? ""));

      const response = await fetch(WEB3FORMS_ENDPOINT, {
        method: "POST",
        body: formData,
      });
      const result = await response.json() as { success?: boolean };

      if (!response.ok || !result.success) throw new Error("Web3Forms submission failed");

      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  return <form className="contact-form" action={WEB3FORMS_ENDPOINT} method="post" onSubmit={submit} noValidate>
    <input type="hidden" name="access_key" value={WEB3FORMS_ACCESS_KEY} />
    <input type="hidden" name="subject" value={WEB3FORMS_SUBJECT} />
    <input type="checkbox" name="botcheck" tabIndex={-1} autoComplete="off" aria-hidden="true" style={{ display: "none" }} />
    <div className="form-grid">
      <label>Name <span aria-hidden="true">*</span><input name="name" autoComplete="name" required /></label>
      <label>Email <span aria-hidden="true">*</span><input name="email" type="email" autoComplete="email" required /></label>
      <label>Telephone number <span className="optional">(optional)</span><input name="telephone" type="tel" autoComplete="tel" /></label>
      <label>Preferred contact method<select name="preferredContactMethod" defaultValue="Email"><option>Email</option><option>Phone</option><option>Text</option></select></label>
    </div>
    <label>Short general message <span className="optional">(optional)</span><textarea name="message" rows={5} maxLength={500} /></label>
    <p className="form-help">Please do not include detailed personal, medical or therapeutic information in this form.</p>
    <label className="checkbox-label"><input type="checkbox" required /><span>I have read the <a href="/privacy-notice/">privacy notice</a>. <span aria-hidden="true">*</span></span></label>
    {status === "success" && <p className="form-status" role="status">Thank you. Your message has been sent to Louise. She aims to respond within 48 hours.</p>}
    {status === "error" && <p className="form-status error" role="alert">Sorry, your message could not be sent. Please use the email address shown on the website or try again shortly.</p>}
    <button className="button button-primary" type="submit" disabled={status === "sending"}>Send message</button>
  </form>;
}
