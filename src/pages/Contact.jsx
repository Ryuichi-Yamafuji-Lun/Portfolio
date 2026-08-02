import { useState, useEffect } from "react";
import { FaTimes } from "react-icons/fa";

// FormSubmit.co — sends the form straight to the email below, no backend needed.
// IMPORTANT: the very first submission triggers a one-time activation email to
// that address; click the link in it once and the form goes live permanently.
// To hide your email from the JS bundle later, swap this for the hashed endpoint
// FormSubmit shows you after activation: https://formsubmit.co/ajax/<your-hash>
const FORM_ENDPOINT = "https://formsubmit.co/ajax/ryuichi.y.lun@gmail.com";

const Contact = ({ closeContactForm }) => {
  const [status, setStatus] = useState("idle");
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const sendEmail = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.message,
          _subject: `Portfolio contact from ${form.name}`,
        }),
      });
      const data = await res.json();
      if (res.ok && (data.success === "true" || data.success === true)) {
        setStatus("success");
        setForm({ name: "", email: "", message: "" });
        setTimeout(() => closeContactForm(), 2500);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && closeContactForm();
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [closeContactForm]);

  const inputClass =
    "w-full rounded-lg border border-navy-lighter/60 bg-navy px-3 py-2 text-sm text-slate-100 placeholder-slate-500 transition-colors focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary";

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
      onClick={closeContactForm}
    >
      <div
        className="relative w-full max-w-md rounded-2xl border border-navy-lighter/50 bg-navy-light p-6 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={closeContactForm}
          aria-label="Close"
          className="absolute right-4 top-4 text-slate-400 transition-colors hover:text-slate-100"
        >
          <FaTimes />
        </button>

        <h2 className="text-lg font-bold text-slate-100">Get in touch</h2>
        <p className="mt-1 text-sm text-slate-400">
          Have a role or project in mind? I&rsquo;ll get back to you soon.
        </p>

        {status === "success" ? (
          <div className="mt-6 rounded-lg border border-primary/30 bg-primary/10 p-4 text-center text-sm text-primary-light">
            Thanks &mdash; your message has been sent. ✓
          </div>
        ) : (
          <form onSubmit={sendEmail} className="mt-4 space-y-3">
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your name"
              required
              className={inputClass}
            />
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="your.email@example.com"
              required
              className={inputClass}
            />
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Your message..."
              rows="5"
              required
              className={`${inputClass} resize-none`}
            />

            {status === "error" && (
              <p className="text-sm text-red-400">
                Something went wrong. Please try again, or email me directly at
                rlun@usc.edu.
              </p>
            )}

            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-primary-light disabled:opacity-60"
            >
              {status === "sending" ? "Sending…" : "Send message"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Contact;
