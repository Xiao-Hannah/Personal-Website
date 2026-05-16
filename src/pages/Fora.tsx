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

      {/* Immersive Hero Section */}
      <section className="fora-hero-immersive">
        {/* Layered Beach Atmosphere */}
        <div className="fora-hero-sky"></div>
        <div className="fora-hero-sun"></div>
        <div className="fora-hero-ocean"></div>
        <div className="fora-hero-ocean-shimmer"></div>
        <div className="fora-hero-sand"></div>
        <div className="fora-hero-grain"></div>
        <div className="fora-hero-vignette"></div>

        <div className="container">
          <div className="fora-hero-content-immersive">
            {/* Left: Emotional Headline */}
            <div className="fora-hero-left">
              <div className="fora-hero-travel-label">
                <span className="fora-hero-day">Day 12</span>
                <span className="fora-hero-divider">·</span>
                <span className="fora-hero-location">Somewhere between a saved hotel and an unsent message</span>
              </div>

              <h1 className="fora-hero-statement">
                Most advisors don't churn because they lack clients.
              </h1>

              <p className="fora-hero-whisper">
                They churn in the quiet moment before sending the first message.
              </p>

              <div className="fora-hero-meta">
                <p className="fora-hero-description">
                  Fora Tools reimagines the first 60 days for new travel advisors — turning hesitation into the first booking.
                </p>
                <p className="fora-meta-quiet">
                  Self-initiated case study · Product Design · Onboarding Strategy · 2026
                </p>
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
            </div>

            {/* Right: Floating Travel Artifacts */}
            <div className="fora-hero-right">
              {/* Postcard-like card */}
              <div className="fora-artifact fora-artifact-postcard">
                <div className="fora-artifact-stamp">TULUM</div>
                <div className="fora-artifact-content">
                  <p className="fora-artifact-text">
                    "I've been looking at this resort for three days. I think Sarah would love it."
                  </p>
                  <div className="fora-artifact-footer">
                    <span className="fora-artifact-time">11:42 PM</span>
                    <span className="fora-artifact-status">Draft</span>
                  </div>
                </div>
              </div>

              {/* Message draft card */}
              <div className="fora-artifact fora-artifact-message">
                <div className="fora-artifact-header">
                  <div className="fora-artifact-to">To: Sarah</div>
                  <div className="fora-artifact-dot"></div>
                </div>
                <p className="fora-artifact-message-text">
                  Hey! I know you mentioned wanting to plan something for your anniversary. I've been
                </p>
                <div className="fora-artifact-cursor"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Table of Contents */}
      <section className="fora-toc">
        <div className="container">
          <nav className="fora-toc-nav">
            <button onClick={() => scrollToSection('story')}>The Story</button>
            <button onClick={() => scrollToSection('problem')}>The Problem</button>
            <button onClick={() => scrollToSection('journey')}>The Journey</button>
            <button onClick={() => scrollToSection('approach')}>What I Built</button>
            <button onClick={() => scrollToSection('impact')}>Outcome</button>
            <button onClick={() => scrollToSection('ending')}>Reflection</button>
          </nav>
        </div>
      </section>

      {/* Emotional Story Section: Day 12 */}
      <section id="story" className="fora-story-section">
        <div className="fora-story-atmosphere"></div>
        <div className="container">
          <div className="fora-story-content">
            <p className="fora-story-opener">You are on Day 12.</p>

            <div className="fora-story-beats">
              <p className="fora-story-beat">You've opened the portal six times this week.</p>
              <p className="fora-story-beat">You bookmarked hotels in Tulum.</p>
              <p className="fora-story-beat">You drafted a message to a college friend.</p>
              <p className="fora-story-beat">You never pressed send.</p>
            </div>

            <p className="fora-story-insight">
              Fora is one of the fastest-growing travel agencies in the U.S., onboarding thousands of new advisors a year. Like most marketplace platforms, growth depends on a critical activation moment: <strong>the first booking</strong>. Advisors who reach it stay and earn; advisors who don't, churn quietly.
            </p>
          </div>
        </div>
      </section>

      {/* The Problem - Reframed */}
      <section id="problem" className="fora-section">
        <div className="container">
          <h2 className="fora-section-title">The problem wasn't complexity. It was hesitation.</h2>

          <div className="problem-blocks-emotional">
            <div className="problem-block-emotional">
              <h3>"Who would I even message?"</h3>
              <p>New advisors often don't recognize the potential clients already in their network.</p>
            </div>
            <div className="problem-block-emotional">
              <h3>"What if they say no?"</h3>
              <p>The first outreach feels personal because it goes to someone they actually know.</p>
            </div>
            <div className="problem-block-emotional">
              <h3>"What if I look inexperienced?"</h3>
              <p>Pricing, supplier selection, and quote-building create confidence gaps before the first send.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Advisor Emotional States Journey */}
      <section id="journey" className="fora-section fora-journey-section">
        <div className="container">
          <h2 className="fora-section-title">The emotional journey of activation</h2>

          <div className="fora-context-main">
            <p>
              I mapped the new-advisor journey into five emotional states, then built a system that recognizes where each advisor is and recommends the next best action.
            </p>
          </div>

          <div className="journey-states">
            <div className="journey-state">
              <div className="journey-state-label">Not Started</div>
              <div className="journey-state-quote">"I don't know where to begin."</div>
            </div>
            <div className="journey-state">
              <div className="journey-state-label">Client Found</div>
              <div className="journey-state-quote">"Maybe I could actually do this."</div>
            </div>
            <div className="journey-state">
              <div className="journey-state-label">Quote Started</div>
              <div className="journey-state-quote">"I don't want to mess this up."</div>
            </div>
            <div className="journey-state">
              <div className="journey-state-label">Almost There</div>
              <div className="journey-state-quote">"Why haven't they replied yet?"</div>
            </div>
            <div className="journey-state">
              <div className="journey-state-label">Stalled</div>
              <div className="journey-state-quote">"Maybe I'm not cut out for this."</div>
            </div>
          </div>

          <div className="fora-context-main" style={{ marginTop: '3rem' }}>
            <p>
              The activation system maps behavior and velocity signals to these states, then recommends the next best action. The hardest moment isn't sending a quote — it's writing the <strong>first message</strong> to a person you actually know.
            </p>

            <ul className="insight-list">
              <li>
                Network breadth matters: showing one close tie, one weak tie, and one broadcast option helps advisors see their network as bigger than it feels.
              </li>
              <li>
                Naming a recipient is itself a commitment device — typing "Sam" into a card is a tiny first booking-action.
              </li>
              <li>
                The biggest blocker after sending isn't "will they reply" — it's <strong>"what do I say if they do"</strong>. Pre-writing the follow-up changes the math.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* What I Built - Reframed as Journey Companions */}
      <section id="approach" className="fora-section fora-approach-section">
        <div className="container">
          <h2 className="fora-section-title">What I Built</h2>

          {/* The Hub */}
          <div className="approach-subsection">
            <div className="tool-header">
              <h3 className="tool-title">Your First 60 Days Hub</h3>
              <p className="tool-positioning">A segment-aware home base that tells each advisor exactly what to do next.</p>
            </div>

            <div className="approach-blocks">
              <div className="approach-block">
                <h4>Five behavioral segments</h4>
                <p>
                  Headline, recommended next step, milestones, metrics, and resource cards all swap based on where the advisor is in their journey.
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
                Hub with a demo segment switcher — every block re-renders to match the selected stage.
              </p>
            </div>
          </div>

          {/* First Client Finder */}
          <div className="approach-subsection">
            <div className="tool-header">
              <h3 className="tool-title">First Client Finder</h3>
              <p className="tool-positioning">Helping advisors realize they already know their first client.</p>
            </div>

            <ul className="approach-list">
              <li>5-question quiz capturing background, network, and travel specialty.</li>
              <li>Returns 3 distinct archetypes — one <strong>close tie</strong>, one <strong>weak tie</strong>, one <strong>broadcast</strong> — so advisors see breadth.</li>
              <li>Live recipient-name fill on each card, with a personalized rationale and a pre-written reply template.</li>
              <li>Copy / mark-as-sent actions feed into a refresh-safe outreach log — no login, no backend, no PII.</li>
            </ul>

            <div className="fora-image-container">
              <img src={foraClientFinder} alt="First Client Finder intro screen" className="fora-case-image" />
              <p className="image-caption">
                First Client Finder intro — a worked example sets expectations before the quiz starts.
              </p>
            </div>
          </div>

          {/* Quote Walkthrough */}
          <div className="approach-subsection">
            <div className="tool-header">
              <h3 className="tool-title">Quote Walkthrough</h3>
              <p className="tool-positioning">Reducing the fear of sending by turning a 50-step quote process into a guided path.</p>
            </div>

            <ul className="approach-list">
              <li>Five-step linear flow: choose a property → review earnings → build the quote → review &amp; send → done.</li>
              <li>An optional client-brief input personalizes the rest of the walkthrough — small commitment, big payoff.</li>
              <li>Sidekick drawer is available at every step to draft copy, compare properties, or explain commission math.</li>
              <li>Step state persists across refresh so the advisor can leave mid-flow and pick back up.</li>
            </ul>

            <div className="fora-image-container">
              <img src={foraQuote} alt="First Quote Walkthrough start screen" className="fora-case-image" />
              <p className="image-caption">
                Quote Walkthrough — collapses a multi-tab portal task into a guided 5-minute path.
              </p>
            </div>
          </div>

          {/* Engineering */}
          <div className="approach-subsection">
            <h3 className="approach-subsection-title">Engineering</h3>

            <ul className="approach-list">
              <li>Built end-to-end with Next.js 15 (App Router), React 19, TypeScript, and Tailwind — statically exported and deployed on GitHub Pages.</li>
              <li>All recommendation logic is pure and deterministic in <code>data.ts</code>; adding a new client archetype is a one-function change.</li>
              <li>Wrote a small SSR-safe <code>usePersistentState</code> hook so every tool is refresh-safe without a backend.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Outcome - Clear Metrics */}
      <section id="impact" className="fora-section fora-impact-section">
        <div className="container">
          <h2 className="fora-section-title">Outcome</h2>

          <div className="fora-context-main">
            <div className="metric-north-star">
              <div className="metric-label-star">North Star</div>
              <div className="metric-value-star">60-Day First Booking Rate</div>
            </div>
          </div>

          <div className="metrics-grid">
            <div className="metric-group">
              <h4 className="metric-group-title">Supporting metrics</h4>
              <ul className="metric-list">
                <li>First Client Finder used by Day 7</li>
                <li>Quote sent by Day 25</li>
                <li>Time between outreach → quote started → quote sent → booking confirmed</li>
                <li>Stalled-to-reactivated conversion</li>
              </ul>
            </div>

            <div className="metric-group">
              <h4 className="metric-group-title">Guardrails</h4>
              <ul className="metric-list">
                <li>Nudge unsubscribe rate</li>
                <li>Human support escalation</li>
                <li>Qualitative advisor feedback</li>
              </ul>
            </div>
          </div>

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
              <div className="stat-context">from landing on the hub to having a named person to message</div>
            </div>
          </div>
        </div>
      </section>

      {/* Emotional Ending */}
      <section id="ending" className="fora-ending-section">
        <div className="fora-ending-atmosphere"></div>
        <div className="fora-ending-grain"></div>
        <div className="container">
          <div className="fora-ending-content">
            <p className="fora-ending-response">
              "Amy replied:
            </p>
            <p className="fora-ending-response-quote">
              'This sounds amazing. Can we book it?'"
            </p>

            <p className="fora-ending-final">
              The goal wasn't to teach advisors how to use a platform.<br />
              It was to help them believe they could begin.
            </p>
          </div>
        </div>
      </section>

      {/* What I Learned */}
      <section className="fora-section">
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
                <strong>Friction-removal compounds.</strong> Pre-writing the follow-up message removes a blocker that's invisible until you ask "why did you stop?"
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
