import { useState, useEffect } from "react";
import { FaTimes } from "react-icons/fa";

// No third-party service: the form builds a mailto: link and hands it to the
// visitor's own mail app, with the address shown (and copyable) as a fallback.
// The address is assembled at runtime so it never appears as one string in the
// bundle, which keeps naive email-harvesting scrapers from picking it up.
const EMAIL = ["ryuichi.y.lun", "gmail.com"].join("@");
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

const Contact = ({ closeContactForm }) => {
  const [opened, setOpened] = useState(false);
  const [copied, setCopied] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [emailError, setEmailError] = useState(false);

  const handleChange = (e) => {
    if (e.target.name === "email") setEmailError(false);
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const openMail = (e) => {
    e.preventDefault();
    if (!EMAIL_PATTERN.test(form.email.trim())) {
      setEmailError(true);
      return;
    }
    const subject = encodeURIComponent(`Portfolio contact from ${form.name}`);
    const body = encodeURIComponent(
      `${form.message}\n\n${form.name}\nReply to: ${form.email.trim()}`
    );
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
    setOpened(true);
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard can be blocked; the address is still visible to copy by hand.
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

        <div className="mt-4 flex items-center justify-between gap-3 rounded-lg border border-navy-lighter/60 bg-navy px-3 py-2">
          <a
            href={`mailto:${EMAIL}`}
            className="truncate text-sm text-primary-light hover:underline"
          >
            {EMAIL}
          </a>
          <button
            type="button"
            onClick={copyEmail}
            className="flex-shrink-0 text-xs font-semibold text-slate-400 transition-colors hover:text-slate-100"
          >
            {copied ? "Copied ✓" : "Copy"}
          </button>
        </div>

        <form onSubmit={openMail} className="mt-4 space-y-3">
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
            placeholder="Your email (so I can reply)"
            required
            aria-invalid={emailError}
            className={inputClass}
          />
          {emailError && (
            <p className="text-sm text-red-400">Please enter a valid email address.</p>
          )}
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Your message..."
            rows="5"
            required
            className={`${inputClass} resize-none`}
          />

          {opened && (
            <p className="text-sm text-slate-400">
              Your email app should have opened with this message. If it
              didn&rsquo;t, copy the address above and send it from your inbox.
            </p>
          )}

          <button
            type="submit"
            className="w-full rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-primary-light"
          >
            Open in email app
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
