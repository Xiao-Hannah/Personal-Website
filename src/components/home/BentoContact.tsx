import { useState } from "react";
import { Mail, MapPin, Check, Globe } from "lucide-react";
import "./BentoContact.less";

const BentoContact = () => {
  const [copied, setCopied] = useState(false);
  const [name, setName] = useState("");
  const [msg, setMsg] = useState("");

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText("hx2313@uw.edu");
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      /* no-op */
    }
  };

  const sendMail = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = name ? `Hi from ${name}` : "Hi Hannah";
    const body = msg || "Hi Hannah, I came across your portfolio and...";
    window.location.href = `mailto:hx2313@uw.edu?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section id="contact" className="bento-section bento-contact">
      <div className="bento-section__grid">
        {/* ── Combined contact tile ── */}
        <form className="bento-tile tile-paper contact-main" onSubmit={sendMail}>
          <div className="contact-main__top">
            <div className="contact-main__status">
              <span className="contact-main__dot" />
              <span>Open to PM roles &amp; freelance</span>
            </div>
            <h3 className="contact-main__title">Let's work together.</h3>
            <p className="contact-main__where">
              <MapPin size={11} /> Seattle, WA · UTC–8
            </p>
          </div>

          <div className="contact-main__fields">
            <input
              type="text"
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="contact-main__input"
            />
            <textarea
              placeholder="What's on your mind?"
              value={msg}
              onChange={(e) => setMsg(e.target.value)}
              className="contact-main__textarea"
              rows={3}
            />
          </div>

          <div className="contact-main__actions">
            <button type="submit" className="contact-main__send">
              <Mail size={13} /> Send via email
            </button>
            <button
              type="button"
              className="contact-main__copy"
              onClick={copyEmail}
            >
              {copied ? <><Check size={11} /> Copied</> : "or copy email"}
            </button>
          </div>
        </form>

        {/* ── Location tile ── */}
        <article className="bento-tile tile-paper contact-where">
          <Globe size={20} className="contact-where__globe" />
          <p className="eyebrow">
            <MapPin size={11} /> Based in
          </p>
          <h3>Seattle, WA</h3>
          <p className="contact-where__sub">UTC-8 · Pacific Time</p>
          <p className="contact-where__sub muted">
            Travel-ready for the right team.
          </p>
        </article>
      </div>
    </section>
  );
};

export default BentoContact;
