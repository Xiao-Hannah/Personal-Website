import { useEffect, useState } from "react";
import Navigation from "@/components/navigation/Navigation";
import Footer from "@/components/layout/Footer";
import solareaseHero from "@/assets/images/solarease/hero2.png";
import solareaseRoi from "@/assets/images/solarease/ROI2.png";
import solareaseContract from "@/assets/images/solarease/contract.png";
import './SolarEase.less';

const SolarEase = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const update = () => {
      const scrolled = window.scrollY;
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(total > 0 ? (scrolled / total) * 100 : 0);
    };
    window.addEventListener('scroll', update, { passive: true });
    return () => window.removeEventListener('scroll', update);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="solarease-page">
      <Navigation />

      {/* Hero Section */}
      <section className="solarease-hero">
        <div className="container">
          <div className="solarease-hero-content">
            <div className="solarease-hero-text">
              <h1 className="solarease-title">SolarEase</h1>
              <p className="solarease-subtitle">
                Helping local communities turn complex solar economics into collective decisions they can actually act on.
              </p>

              <div className="solarease-role-line">
                Product Manager &amp; Full-Stack Developer · Dec 2025 – Mar 2026
              </div>

              <div className="solarease-links">
                <a
                  href="https://gix-solarease.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="solarease-btn"
                >
                  Visit SolarEase
                </a>
              </div>

              <div className="solarease-tech-tags">
                <span>React</span>
                <span>Vite</span>
                <span>Express.js</span>
                <span>Python · CVXPY</span>
                <span>OpenAI / Azure OpenAI</span>
              </div>
            </div>
            <div className="solarease-hero-image-wrap">
              <img src={solareaseHero} alt="SolarEase landing page" className="solarease-hero-image" />
            </div>
          </div>
        </div>
      </section>

      {/* Reading progress bar */}
      <div className="solarease-progress-bar" aria-hidden>
        <div className="solarease-progress-bar__fill" style={{ width: `${progress}%` }} />
      </div>

      {/* The Opportunity */}
      <section id="opportunity" className="solarease-section">
        <div className="container">
          <h2 className="solarease-section-title">The Opportunity</h2>
          <div className="solarease-context-main">
            <p>
              Solar projects are complex to evaluate — 20-year contracts, opaque ROI math, group cost-sharing decisions that require domain expertise most communities don't have access to. The people most likely to benefit from collective solar are often the least equipped to negotiate it.
            </p>
            <p>
              SolarEase was built to close that gap: give non-technical users the tools to understand what they're signing, model the financial tradeoffs, and make a collective decision with confidence.
            </p>
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section id="problem" className="solarease-section">
        <div className="container">
          <h2 className="solarease-section-title">The Problem</h2>
          <div className="problem-blocks">
            <div className="problem-block">
              <h3>Opaque ROI</h3>
              <p>Households and councils can't tell whether a PPA price, payback period, or escalation rate is fair without a domain expert in the room.</p>
            </div>
            <div className="problem-block">
              <h3>Unfair group allocation</h3>
              <p>Joint solar projects stall when participants with different upfront costs and energy profiles can't agree on how to share costs and benefits.</p>
            </div>
            <div className="problem-block">
              <h3>Contract intimidation</h3>
              <p>Long PPAs filled with escalation clauses, performance guarantees, and termination language are inaccessible to non-legal readers.</p>
            </div>
          </div>
        </div>
      </section>

      {/* What I Uncovered */}
      <section id="discovery" className="solarease-section">
        <div className="container">
          <h2 className="solarease-section-title">What I Uncovered</h2>
          <div className="solarease-context-main">
            <p>
              I ran think-aloud usability sessions with stakeholders across different levels of solar literacy to test the AI assistant and ROI flow. A few things came back consistently:
            </p>
            <p>
              Users with low solar literacy bounced off jargon before they ever reached the answer the calculator gave them. They could read a number; they couldn't read what to do next. Group decisions broke down on fairness, not math — participants needed to feel a split was fair, not just be told it was optimal. Returning users dropped off when the AI assistant lost context from their previous session.
            </p>
          </div>
        </div>
      </section>

      {/* What I Did */}
      <section id="approach" className="solarease-section solarease-approach-section">
        <div className="container">
          <h2 className="solarease-section-title">What I Did</h2>

          {/* Product Direction */}
          <div className="approach-subsection">
            <h3 className="approach-subsection-title">Product Direction</h3>
            <div className="approach-prose-items">
              <div className="approach-prose-item">
                <strong>Defined three pillars —</strong> Narrowed the surface area to ROI clarity, fair group allocation, and contract demystification. Every feature had to ladder up to one of those.
              </div>
              <div className="approach-prose-item">
                <strong>Wrote the PRD &amp; sprint roadmap —</strong> Aligned engineering, design, and GIX research on scope, milestones, and success metrics across the build cycle.
              </div>
              <div className="approach-prose-item">
                <strong>Prioritized from usability data —</strong> Used think-aloud findings to re-rank the backlog — adaptive language and contextual recommendations jumped ahead of new features.
              </div>
            </div>
          </div>

          {/* Full-Stack Build */}
          <div className="approach-subsection">
            <h3 className="approach-subsection-title">Full-Stack Build</h3>
            <ul className="approach-list">
              <li>Built the React + Vite frontend with multi-page routing for the ROI Simulator, Negotiation Tool, and Contract Transparency views.</li>
              <li>Stood up the Express.js API and a Python (CVXPY) Nash Bargaining solver to compute fair allocations across community participants. Nash Bargaining made the most sense here because its core property — that no participant would prefer to walk away — maps directly to what community buy-in actually requires. We validated the choice with stakeholders before building.</li>
              <li>Wrote the financial engine in <code>finance.js</code> — multi-year cashflow projections, NPV, IRR, threat-point calculation, and cooperative-surplus math.</li>
              <li>Integrated GPT-4o-mini (with Azure OpenAI fallback) for plain-language explanations and PPA contract parsing with risk-flag extraction.</li>
            </ul>

            <div className="solarease-image-pair">
              <figure className="solarease-image-figure">
                <img src={solareaseRoi} alt="SolarEase ROI Simulator" />
                <figcaption>ROI Simulator — location selector, configurable system parameters, and live capacity / savings / CO₂ output.</figcaption>
              </figure>
              <figure className="solarease-image-figure">
                <img src={solareaseContract} alt="SolarEase contract analysis" />
                <figcaption>Contract analysis — GPT-4o-mini parses PPA language and surfaces risk flags in plain English.</figcaption>
              </figure>
            </div>
          </div>

          {/* AI Agent */}
          <div className="approach-subsection">
            <h3 className="approach-subsection-title">AI Agent &ldquo;Soli&rdquo;</h3>
            <div className="solarease-context-main">
              <p>
                Soli matches response complexity to the user's stated solar literacy — beginners get plain English, experts get the underlying math. Smart recommendations surface the right tool based on where the user is stuck: ROI sim, negotiation, or contract upload. Conversation history and project context carry across sessions so returning users don't have to re-explain themselves.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact */}
      <section id="impact" className="solarease-section solarease-impact-section">
        <div className="container">
          <h2 className="solarease-section-title">Impact</h2>

          <div className="impact-stats-strip">
            <div className="impact-stat">
              <span className="impact-stat__num">76%</span>
              <span className="impact-stat__label">task completion</span>
              <span className="impact-stat__context">across 5 usability participants spanning beginner to expert solar literacy</span>
            </div>
            <div className="impact-stat-divider" aria-hidden />
            <div className="impact-stat">
              <span className="impact-stat__num">4 / 4</span>
              <span className="impact-stat__label">core hypotheses validated</span>
              <span className="impact-stat__context">AI guidance, conversational onboarding, contextual recommendations, persistent state</span>
            </div>
            <div className="impact-stat-divider" aria-hidden />
            <div className="impact-stat">
              <span className="impact-stat__num">Live</span>
              <span className="impact-stat__label">deployed at gix-solarease.com</span>
              <span className="impact-stat__context">full ROI simulator, Nash Bargaining, and contract analysis in production</span>
            </div>
          </div>

          <div className="solarease-context-main">
            <p>
              The product shipped to a public URL with all three pillars working end-to-end. Usability testing confirmed that adaptive AI explanations were the unlock that let non-technical users actually use a financial simulator and walk away with a decision, not just a number.
            </p>
          </div>
        </div>
      </section>

      {/* What I Learned */}
      <section id="learnings" className="solarease-section">
        <div className="container">
          <h2 className="solarease-section-title">What I Learned</h2>
          <div className="solarease-context-main">
            <ul className="insight-list">
              <li>
                <strong>Game theory only matters if users can feel the fairness.</strong> A Nash-optimal split that nobody understands isn't a deal — explanations beat formulas every time.
              </li>
              <li>
                <strong>Decision support &gt; calculation.</strong> Translating technical outputs into a clear next step was a bigger lever than adding more features to the calculator.
              </li>
              <li>
                <strong>Wearing both PM and engineering hats is the fastest feedback loop.</strong> Implementation tradeoffs forced product strategy clarity I wouldn't have gotten from docs alone.
              </li>
              <li>
                <strong>Adaptive language is an accessibility feature.</strong> Matching complexity to literacy turned a domain-expert tool into something a teacher with no solar background could navigate.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SolarEase;
