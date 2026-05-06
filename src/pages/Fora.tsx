import Navigation from "@/components/navigation/Navigation";
import Footer from "@/components/layout/Footer";
import foraHub from "@/assets/images/fora/hub.png";
import foraClientFinder from "@/assets/images/fora/client-finder.png";
import foraQuote from "@/assets/images/fora/quote-walkthrough.png";
import './Fora.less';

const Fora = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="fora-page">
      <Navigation />

      {/* Hero Section */}
      <section className="fora-hero">
        <div className="container">
          <div className="fora-hero-content">
            <div className="fora-hero-text">
              <p className="fora-eyebrow">Self-initiated case study</p>
              <h1 className="fora-title">Fora Tools</h1>
              <p className="fora-subtitle">
                Reimagining the first 60 days for new Fora travel advisors — a personalized onboarding hub and two self-serve tools that turn "I don't know where to start" into a first booking.
              </p>

              <div className="fora-role-line">
                Product Designer &amp; Developer · April 2026
              </div>

              <div className="fora-links">
                <a
                  href="https://xiao-hannah.github.io/foratravel/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="fora-btn fora-btn-primary"
                >
                  Open the Hub
                </a>
                <a
                  href="https://xiao-hannah.github.io/foratravel/first-client-finder/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="fora-btn fora-btn-secondary"
                >
                  First Client Finder
                </a>
                <a
                  href="https://xiao-hannah.github.io/foratravel/first-quote-walkthrough/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="fora-btn fora-btn-secondary"
                >
                  Quote Walkthrough
                </a>
              </div>

              <div className="fora-tech-tags">
                <span>Next.js 15</span>
                <span>React 19</span>
                <span>TypeScript</span>
                <span>Tailwind CSS</span>
                <span>localStorage</span>
              </div>
            </div>
            <div className="fora-hero-image-wrap">
              <img src={foraHub} alt="Fora Tools onboarding hub" className="fora-hero-image" />
            </div>
          </div>
        </div>
      </section>

      {/* Table of Contents */}
      <section className="fora-toc">
        <div className="container">
          <nav className="fora-toc-nav">
            <button onClick={() => scrollToSection('opportunity')}>The Opportunity</button>
            <button onClick={() => scrollToSection('problem')}>The Problem</button>
            <button onClick={() => scrollToSection('discovery')}>What I Uncovered</button>
            <button onClick={() => scrollToSection('approach')}>What I Built</button>
            <button onClick={() => scrollToSection('impact')}>Outcome</button>
            <button onClick={() => scrollToSection('learnings')}>What I Learned</button>
          </nav>
        </div>
      </section>

      {/* The Opportunity */}
      <section id="opportunity" className="fora-section">
        <div className="container">
          <h2 className="fora-section-title">The Opportunity</h2>

          <div className="fora-context-main">
            <p>
              Fora is one of the fastest-growing travel agencies in the U.S., onboarding thousands of new advisors a year. Like most marketplace platforms, Fora's growth depends on a critical activation moment: the first booking. Advisors who reach it stay and earn; advisors who don't, churn quietly.
            </p>
            <p>
              I built Fora Tools as a speculative case study to explore what an opinionated, segment-aware onboarding experience could look like — one that meets each new advisor exactly where they are in their first 60 days.
            </p>
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section id="problem" className="fora-section">
        <div className="container">
          <h2 className="fora-section-title">The Problem</h2>

          <div className="problem-blocks">
            <div className="problem-block">
              <h3>Blank-page paralysis</h3>
              <p>New advisors don't lack potential clients — they don't recognize them. Without a starting point, the &ldquo;reach out&rdquo; step never happens.</p>
            </div>
            <div className="problem-block">
              <h3>The quote chasm</h3>
              <p>Even after an interested client, sending a first quote feels like a 50-step process. Most new advisors freeze before they hit send.</p>
            </div>
            <div className="problem-block">
              <h3>One-size-fits-all onboarding</h3>
              <p>A single linear checklist treats Day 10 the same as Day 40 — wasting effort on advisors already past that step and ignoring the ones who are stuck.</p>
            </div>
          </div>
        </div>
      </section>

      {/* What I Uncovered */}
      <section id="discovery" className="fora-section">
        <div className="container">
          <h2 className="fora-section-title">What I Uncovered</h2>

          <div className="fora-context-main">
            <p>
              I mapped the new-advisor journey into five behavioral segments — Not Started, Client Found, Quote Started, Almost There, and Stalled — and pressure-tested the copy, tools, and milestones for each one.
            </p>

            <ul className="insight-list">
              <li>
                The hardest moment isn't sending a quote — it's writing the <strong>first message</strong> to a person you actually know.
              </li>
              <li>
                Network breadth matters: showing one close tie, one weak tie, and one broadcast option helps advisors see their network as bigger than it feels.
              </li>
              <li>
                Naming a recipient is itself a commitment device — typing &ldquo;Sam&rdquo; into a card is a tiny first booking-action.
              </li>
              <li>
                The biggest blocker after sending isn't &ldquo;will they reply&rdquo; — it's <strong>&ldquo;what do I say if they do&rdquo;</strong>. Pre-writing the follow-up changes the math.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* What I Built */}
      <section id="approach" className="fora-section fora-approach-section">
        <div className="container">
          <h2 className="fora-section-title">What I Built</h2>

          {/* The Hub */}
          <div className="approach-subsection">
            <h3 className="approach-subsection-title">The Hub — a segment-aware first 60 days</h3>

            <div className="approach-blocks">
              <div className="approach-block">
                <h4>Five behavioral segments</h4>
                <p>
                  Headline, recommended next step, milestones, metrics, and resource cards all swap based on where the advisor is in their journey — Day 10 vs Day 40 vs Stalled.
                </p>
              </div>
              <div className="approach-block">
                <h4>One recommended next step</h4>
                <p>
                  Instead of a 12-item checklist, the hub surfaces a single clear action with the highest probability of unblocking the advisor right now.
                </p>
              </div>
              <div className="approach-block">
                <h4>Sidekick, baked in</h4>
                <p>
                  An AI assistant is wired into the contextual CTA — it can write the follow-up message, suggest the next reply, or explain a confusing portal screen.
                </p>
              </div>
            </div>

            <div className="fora-image-container">
              <img src={foraHub} alt="Fora Tools personalized hub with segment switcher" className="fora-case-image" />
              <p className="image-caption">
                Hub with a demo segment switcher — every block (headline, recommendation, milestones, metrics) re-renders to match the selected stage.
              </p>
            </div>
          </div>

          {/* First Client Finder */}
          <div className="approach-subsection">
            <h3 className="approach-subsection-title">Tool 01 — First Client Finder</h3>

            <ul className="approach-list">
              <li>5-question quiz capturing background, network, and travel specialty.</li>
              <li>Returns 3 distinct archetypes — one <strong>close tie</strong>, one <strong>weak tie</strong>, one <strong>broadcast</strong> — so advisors see breadth, not 3 variants of the same person.</li>
              <li>Live recipient-name fill on each card, with a personalized rationale (&ldquo;why this person?&rdquo;) and a pre-written reply template (&ldquo;what to say if they say yes&rdquo;).</li>
              <li>Copy / mark-as-sent actions feed into a refresh-safe outreach log — no login, no backend, no PII.</li>
            </ul>

            <div className="fora-image-container">
              <img src={foraClientFinder} alt="First Client Finder intro screen" className="fora-case-image" />
              <p className="image-caption">
                First Client Finder intro — a worked example sets expectations before the quiz starts, removing &ldquo;will this be useful for me?&rdquo; hesitation.
              </p>
            </div>
          </div>

          {/* Quote Walkthrough */}
          <div className="approach-subsection">
            <h3 className="approach-subsection-title">Tool 02 — First Quote Walkthrough</h3>

            <ul className="approach-list">
              <li>Five-step linear flow: choose a property → review earnings → build the quote → review &amp; send → done.</li>
              <li>An optional client-brief input personalizes the rest of the walkthrough — small commitment, big payoff.</li>
              <li>Sidekick drawer is available at every step to draft copy, compare properties, or explain commission math.</li>
              <li>Step state persists across refresh so the advisor can leave mid-flow and pick back up.</li>
            </ul>

            <div className="fora-image-container">
              <img src={foraQuote} alt="First Quote Walkthrough start screen" className="fora-case-image" />
              <p className="image-caption">
                Quote Walkthrough — collapses a multi-tab portal task into a guided 5-minute path with progress, context, and an inline AI assistant.
              </p>
            </div>
          </div>

          {/* Engineering */}
          <div className="approach-subsection">
            <h3 className="approach-subsection-title">Engineering</h3>

            <ul className="approach-list">
              <li>Built end-to-end with Next.js 15 (App Router), React 19, TypeScript, and Tailwind — statically exported and deployed on GitHub Pages.</li>
              <li>All recommendation logic is pure and deterministic in <code>data.ts</code>; adding a new client archetype is a one-function change.</li>
              <li>Wrote a small SSR-safe <code>usePersistentState</code> hook so every tool is refresh-safe without a backend, while still rendering cleanly on the server.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Outcome */}
      <section id="impact" className="fora-section fora-impact-section">
        <div className="container">
          <h2 className="fora-section-title">Outcome</h2>

          <div className="impact-stats-row">
            <div className="stat-card">
              <div className="stat-number">5</div>
              <div className="stat-label">behavioral segments</div>
              <div className="stat-context">covering Day 1 through Day 60, including a stalled-advisor recovery state</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">2</div>
              <div className="stat-label">end-to-end tools shipped</div>
              <div className="stat-context">First Client Finder and First Quote Walkthrough, both fully interactive</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">60s</div>
              <div className="stat-label">to first action</div>
              <div className="stat-context">from landing on the hub to having a named person to message — the activation moment</div>
            </div>
          </div>

          <div className="fora-context-main">
            <p>
              The case study ships as a public, shareable demo with a segment switcher so reviewers can experience the personalization themselves — designed as an artifact I can put in front of a Fora PM or recruiter and have them play with in under a minute.
            </p>
          </div>
        </div>
      </section>

      {/* What I Learned */}
      <section id="learnings" className="fora-section">
        <div className="container">
          <h2 className="fora-section-title">What I Learned</h2>

          <div className="fora-context-main">
            <ul className="insight-list">
              <li>
                <strong>Segmentation is a content problem before it's a data problem.</strong> Writing five different versions of the same screen forced me to make real choices about what each user actually needs to hear.
              </li>
              <li>
                <strong>One next step beats ten options.</strong> Removing the long checklist in favor of a single contextual recommendation was the highest-leverage design choice in the whole project.
              </li>
              <li>
                <strong>Friction-removal compounds.</strong> Pre-writing the follow-up message removes a blocker that's invisible until you ask &ldquo;why did you stop?&rdquo;
              </li>
              <li>
                <strong>Build the demo, not the deck.</strong> Shipping an interactive prototype that recruiters can poke at says more in 30 seconds than 12 case-study slides.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Fora;
