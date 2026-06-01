import { useState, useEffect } from "react";
import { Lock } from "lucide-react";
import Navigation from "@/components/navigation/Navigation";
import Footer from "@/components/layout/Footer";
import atypicaLogo from "@/assets/images/atypica/atypica_logo.jpg";
import heroImg from "@/assets/images/atypica/Hero.png";
import oldPromptImg from "@/assets/images/atypica/old_prompt.png";
import intercomFlowImg from "@/assets/images/atypica/intercom_flow.png";
import prompt2Img from "@/assets/images/atypica/prompt2.png";
import './Atypica.less';

const STORAGE_KEY = 'atypica-auth';
const CORRECT_PASSWORD = 'launch';

const Atypica = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [activeSection, setActiveSection] = useState('context');

  useEffect(() => {
    const storedAuth = localStorage.getItem(STORAGE_KEY);
    if (storedAuth === 'true') {
      setIsAuthenticated(true);
    }
  }, []);

  useEffect(() => {
    if (!isAuthenticated) return;

    const sectionIds = ['context', 'number', 'discovery', 'bets', 'results', 'learnings'];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-30% 0px -60% 0px' }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    const handleScroll = () => {
      const nearBottom =
        window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 80;
      if (nearBottom) setActiveSection('learnings');
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isAuthenticated]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === CORRECT_PASSWORD) {
      setIsAuthenticated(true);
      localStorage.setItem(STORAGE_KEY, 'true');
      setError('');
    } else {
      setError('Incorrect password');
      setPassword('');
    }
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  if (!isAuthenticated) {
    return (
      <div className="atypica-page">
        <Navigation />
        <div className="password-gate">
          <div className="password-gate-content">
            <div className="password-gate-icon">
              <Lock size={48} />
            </div>
            <h1>This page is password protected</h1>
            <p>Please enter the password to view this content.</p>
            <form onSubmit={handleSubmit} className="password-form">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
                className="password-input"
                autoFocus
              />
              {error && <div className="password-error">{error}</div>}
              <button type="submit" className="password-submit">
                Submit
              </button>
            </form>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="atypica-page">
      <Navigation />

      {/* Hero Section */}
      <section className="atypica-hero">
        <div className="container">
          <div className="atypica-hero-content">
            <div className="atypica-hero-text">
              <h1 className="atypica-title">
                Atypica
              </h1>
              <p className="atypica-subtitle">
                Turning "interesting AI tech" into something people actually finish using.
              </p>
              <div className="atypica-role-line">
                Product Growth Manager Intern · Dec 2025 – Feb 2026
              </div>
              <div className="atypica-links">
                <a
                  href="https://atypica.ai/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="atypica-btn"
                >
                  Visit Atypica
                </a>
              </div>
            </div>
            <img src={atypicaLogo} alt="Atypica" className="atypica-hero-logo" />
          </div>
          <img src={heroImg} alt="Atypica hero" className="atypica-img-full" />
        </div>
      </section>

      {/* TL;DR */}
      <section className="atypica-tldr">
        <div className="container">
          <p className="atypica-tldr__eyebrow">TL;DR</p>
          <div className="atypica-tldr__grid">
            <div className="atypica-tldr__col">
              <h3 className="atypica-tldr__heading">The Problem</h3>
              <p className="atypica-tldr__body">
                Atypica lets consultants, PMs, and marketers interview AI personas built from behavioral data of 300,000+ real people. The pitch is compelling. The product works. But when I joined, thousands of users were signing up monthly and 70%+ were churning within two weeks, most before ever completing a first session.
              </p>
              <p className="atypica-tldr__body">
                Funnel data showed low activation, but not where or why. Users were getting stuck at the prompt page before they'd even started.
              </p>
            </div>
            <div className="atypica-tldr__col">
              <h3 className="atypica-tldr__heading">What I Did</h3>
              <p className="atypica-tldr__body">I set up granular event tracking, diagnosed the root cause as prompt confusion (not UI clutter), and shipped three targeted fixes in priority order:</p>
              <ul className="atypica-tldr__list">
                <li>Inspirational use cases below the prompt box to reduce blank-page anxiety</li>
                <li>Simplified homepage UI to make the prompt window the clear centerpiece</li>
                <li>Intercom onboarding tour as a supplementary layer, after the real problems were solved</li>
              </ul>
            </div>
          </div>
          <div className="atypica-tldr__impact">
            <div className="atypica-tldr__stat">
              <span className="atypica-tldr__stat-num">+30%</span>
              <span className="atypica-tldr__stat-label">activation rate</span>
            </div>
            <div className="atypica-tldr__stat">
              <span className="atypica-tldr__stat-num">+20%</span>
              <span className="atypica-tldr__stat-label">MRR</span>
            </div>
            <div className="atypica-tldr__stat">
              <span className="atypica-tldr__stat-num">3×</span>
              <span className="atypica-tldr__stat-label">longer retention</span>
            </div>
          </div>
        </div>
      </section>

      {/* Body: sidebar + content */}
      <div className="atypica-body">
        <aside className="atypica-sidebar">
          <nav className="atypica-sidebar__nav">
            {[
              { id: 'context',   label: 'Context' },
              { id: 'number',    label: 'The Starting Point' },
              { id: 'discovery', label: 'Why They Got Stuck' },
              { id: 'bets',      label: 'Three Bets' },
              { id: 'results',   label: 'What Moved' },
              { id: 'learnings', label: "What I'd Change" },
            ].map(({ id, label }) => (
              <button
                key={id}
                className={`atypica-sidebar__link${activeSection === id ? ' is-active' : ''}`}
                onClick={() => scrollToSection(id)}
              >
                {label}
              </button>
            ))}
          </nav>
        </aside>

        <main className="atypica-content">

          {/* Context */}
          <section id="context" className="atypica-section">
            <h2 className="atypica-section-title">Context</h2>
            <p className="atypica-prose">
              Atypica lets consultants, PMs, and marketers interview AI personas built from behavioral data of 300,000+ real people, with 80% accuracy to actual human responses. The pitch is compelling. The product works.
            </p>
            <p className="atypica-prose">
              When I joined, the problem wasn't the product. It was that nobody was staying long enough to find that out.
            </p>
          </section>

          {/* The Number That Started Everything */}
          <section id="number" className="atypica-section">
            <h2 className="atypica-section-title">The Number That Started Everything</h2>
            <p className="atypica-prose">
              My goal was simple: increase activation for new users. The funnel data told me activation was low, but not where or why. So I started the way I usually do: just using the product, and watching other people use it. Most of them got stuck at the same place — the prompt page, before they'd even started.
            </p>
            <img src={oldPromptImg} alt="Prompt page before changes" className="atypica-img-full" />
          </section>

          {/* Why Users Were Actually Getting Stuck */}
          <section id="discovery" className="atypica-section">
            <h2 className="atypica-section-title">Why Users Were Actually Getting Stuck</h2>
            <p className="atypica-prose">
              I had two theories. Either the page was too noisy, with too many entry points pulling attention away mid-prompt, or users simply didn't know what to type. The blank box felt intimidating. I worked with engineers to set up granular event tracking on the prompt page: keystroke events, click patterns on other UI elements during prompt writing, and time-on-page without activity.
            </p>
            <p className="atypica-prose">
              Then I segmented every user who hit the prompt page but never started a session into two buckets:
            </p>
            <ul className="atypica-bullets">
              <li>Distracted: typed something, then clicked away to other features mid-flow</li>
              <li>Stuck: barely typed, long pauses, lots of deletion and rewriting</li>
            </ul>
            <p className="atypica-prose">
              The second bucket was significantly larger than I expected. My honest first instinct had been that the UI clutter was the main problem. It looked messy, so I assumed that's what was hurting people. The data said otherwise. Prompt confusion was the dominant issue, and visual noise was secondary.
            </p>
            <p className="atypica-prose">
              That reordering mattered for what we built first.
            </p>
          </section>

          {/* Three Bets, In Order */}
          <section id="bets" className="atypica-section">
            <h2 className="atypica-section-title">Three Bets, In Order</h2>

            <div className="atypica-bet">
              <div className="atypica-bet__text">
                <span className="atypica-bet__num">01</span>
                <strong>Inspirational use cases under the prompt box</strong>
                <p>Highest priority. Directly addressed the dominant problem, and it was the lowest-effort change we could ship. If someone doesn't know what to write, show them what other people have asked.</p>
              </div>
              <img src={prompt2Img} alt="Prompt page with use cases" className="atypica-img-full" />
            </div>

            <div className="atypica-bet">
              <div className="atypica-bet__text">
                <span className="atypica-bet__num">02</span>
                <strong>Simplify the homepage UI</strong>
                <p>Moved other feature entry points off the main screen, made the prompt window the centerpiece. This had the widest coverage since it touched every new user on landing.</p>
              </div>
            </div>

            <div className="atypica-bet">
              <div className="atypica-bet__text">
                <span className="atypica-bet__num">03</span>
                <strong>Onboarding tour via Intercom</strong>
                <p>Shipped last, on purpose. Tours are a patch, not a fix. We didn't want to use it to compensate for a cluttered interface; we wanted it as a supplementary layer after the real problems were solved. When I set up the trigger logic, I made sure to account for the unhappy path: if someone didn't complete their first session within an hour, they'd get a reassurance message instead of silence.</p>
              </div>
              <img src={intercomFlowImg} alt="Intercom onboarding flow" className="atypica-img-full" />
            </div>
          </section>

          {/* What Moved */}
          <section id="results" className="atypica-section">
            <h2 className="atypica-section-title">What Moved</h2>
            <div className="atypica-impact-row">
              <div className="atypica-impact-stat">
                <span className="atypica-impact-stat__num">+30%</span>
                <span className="atypica-impact-stat__label">activation rate</span>
              </div>
              <div className="atypica-impact-stat">
                <span className="atypica-impact-stat__num">+20%</span>
                <span className="atypica-impact-stat__label">MRR</span>
              </div>
              <div className="atypica-impact-stat">
                <span className="atypica-impact-stat__num">3×</span>
                <span className="atypica-impact-stat__label">longer retention</span>
              </div>
            </div>
            <p className="atypica-prose">
              Activation rate went from 30% to 39% (a 30% increase) after shipping these three changes.
            </p>
            <p className="atypica-prose">
              More importantly, secondary metrics moved too: report generation frequency went up, and users were more likely to share and download their reports. That last part mattered to me. Sharing and downloading means someone got enough value to want to keep it. They weren't just completing the onboarding flow. They were actually using the product.
            </p>
          </section>

          {/* What I'd Do Differently */}
          <section id="learnings" className="atypica-section">
            <h2 className="atypica-section-title">What I'd Do Differently</h2>
            <p className="atypica-prose">
              I wish I'd pushed for the event tracking setup earlier. I spent some time doing qualitative observation before realizing I needed data to confirm what I was seeing. The qualitative work wasn't wasted (it pointed me in the right direction), but if I'd had the tracking in place from day one, we'd have gotten to the solution faster.
            </p>
          </section>

        </main>
      </div>

      <Footer />
    </div>
  );
};

export default Atypica;
