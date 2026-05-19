import { useState } from "react";
import {
  Mail,
  Calendar,
  Coffee,
  Lightbulb,
  Users,
  MessageCircle,
  ArrowUpRight,
  MapPin,
  Globe,
  Check,
} from "lucide-react";
import aboutImg from "@/assets/images/about/about.jpg";
import "./BentoContact.less";

const askMeAbout = [
  { label: "Growth experiments", color: "tile-coral" },
  { label: "PM ↔ engineering", color: "tile-cyan" },
  { label: "AI products", color: "tile-lavender" },
  { label: "Onboarding flows", color: "tile-mint" },
  { label: "Career switching", color: "tile-yellow" },
  { label: "Archaeology (yes really)", color: "tile-pink" },
];

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
      <div className="bento-section__label">
        <span className="label-text">Let's connect</span>
        <span className="label-aside">05</span>
      </div>

      <div className="bento-section__grid">
        {/* ───────── Mini email form — primary CTA ───────── */}
        <form
          className="bento-tile tile-paper contact-form"
          onSubmit={sendMail}
          style={{ "--delay": "0ms" } as React.CSSProperties}
        >
          <p className="eyebrow">
            <MessageCircle size={11} /> Drop a line
          </p>
          <h3 className="contact-form__title">
            Say hi the
            <br />
            quick way.
          </h3>
          <div className="contact-form__fields">
            <input
              type="text"
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="contact-form__input"
            />
            <textarea
              placeholder="What's on your mind?"
              value={msg}
              onChange={(e) => setMsg(e.target.value)}
              className="contact-form__textarea"
              rows={3}
            />
          </div>
          <div className="contact-form__actions">
            <button type="submit" className="contact-form__send">
              <Mail size={14} /> Send via email
            </button>
            <button
              type="button"
              className="contact-form__copy"
              onClick={copyEmail}
            >
              {copied ? (
                <><Check size={12} /> Copied</>
              ) : (
                "or copy email"
              )}
            </button>
          </div>
        </form>

        {/* ───────── Photo / hello tile ───────── */}
        <article
          className="bento-tile contact-photo"
          style={{ "--delay": "80ms" } as React.CSSProperties}
        >
          <img src={aboutImg} alt="Hannah" />
          <div className="contact-photo__overlay">
            <p className="eyebrow eyebrow--light">Hannah, IRL</p>
            <h3>Friendliest stranger you'll meet on a Zoom call.</h3>
          </div>
        </article>

        {/* ───────── Schedule a chat ───────── */}
        <a
          href="mailto:hx2313@uw.edu?subject=Coffee%20chat%3F&body=Hi%20Hannah%2C%20I%27d%20love%20to%20grab%2030%20mins."
          className="bento-tile tile-coral contact-schedule"
          style={{ "--delay": "160ms" } as React.CSSProperties}
        >
          <Calendar size={22} />
          <h3>
            30-min
            <br />
            coffee chat
          </h3>
          <p>Tuesdays & Thursdays, PT.</p>
          <span className="contact-schedule__cta">
            <Coffee size={14} /> Book one
          </span>
          <span className="tile-corner" aria-hidden>
            <ArrowUpRight size={16} />
          </span>
        </a>

        {/* ───────── Ask me about (chips wall) ───────── */}
        <article
          className="bento-tile tile-paper contact-topics"
          style={{ "--delay": "220ms" } as React.CSSProperties}
        >
          <p className="eyebrow">
            <Lightbulb size={11} /> Ask me about
          </p>
          <div className="contact-topics__cloud">
            {askMeAbout.map((t, i) => (
              <span
                key={t.label}
                className={`contact-topics__chip ${t.color}`}
                style={
                  {
                    "--rot": `${(i % 2 === 0 ? -1 : 1) * (1 + (i % 3))}deg`,
                  } as React.CSSProperties
                }
              >
                {t.label}
              </span>
            ))}
          </div>
        </article>

        {/* ───────── Availability ───────── */}
        <article
          className="bento-tile tile-dark contact-availability"
          style={{ "--delay": "280ms" } as React.CSSProperties}
        >
          <span className="contact-availability__dot" />
          <p className="eyebrow eyebrow--light">Currently</p>
          <h3>Open to PM roles & freelance briefs.</h3>
          <ul className="contact-availability__list">
            <li><Check size={12} /> Full-time roles</li>
            <li><Check size={12} /> 0→1 product briefs</li>
            <li><Check size={12} /> Mentoring & coffee chats</li>
          </ul>
        </article>

        {/* ───────── Location / timezone ───────── */}
        <article
          className="bento-tile tile-paper contact-where"
          style={{ "--delay": "340ms" } as React.CSSProperties}
        >
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

        {/* ───────── Refer / share ───────── */}
        <article
          className="bento-tile tile-yellow contact-refer"
          style={{ "--delay": "400ms" } as React.CSSProperties}
        >
          <Users size={20} />
          <h3>Know someone who'd hit it off?</h3>
          <p>Forward this page — I'll owe you a coffee.</p>
        </article>

        {/* ───────── Sign-off ───────── */}
        <article
          className="bento-tile tile-paper contact-signoff"
          style={{ "--delay": "460ms" } as React.CSSProperties}
        >
          <h3>Thanks for scrolling all the way down. ✦</h3>
          <p>— Hannah</p>
        </article>
      </div>
    </section>
  );
};

export default BentoContact;
