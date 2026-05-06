import Navigation from "@/components/navigation/Navigation";
import Footer from "@/components/layout/Footer";
import solareaseHero from "@/assets/images/solarease/hero.png";
import solareaseRoi from "@/assets/images/solarease/roi-simulator.png";
import './SolarEase.less';

const SolarEase = () => {
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

      {/* Table of Contents */}
      <section className="solarease-toc">
        <div className="container">
          <nav className="solarease-toc-nav">
            <button onClick={() => scrollToSection('opportunity')}>The Opportunity</button>
            <button onClick={() => scrollToSection('problem')}>The Problem</button>
            <button onClick={() => scrollToSection('discovery')}>What I Uncovered</button>
            <button onClick={() => scrollToSection('approach')}>What I Did</button>
            <button onClick={() => scrollToSection('impact')}>Impact</button>
            <button onClick={() => scrollToSection('learnings')}>What I Learned</button>
          </nav>
        </div>
      </section>

      {/* The Opportunity */}
      <section id="opportunity" className="solarease-section">
        <div className="container">
          <h2 className="solarease-section-title">The Opportunity</h2>

          <div className="solarease-context-main">
            <p>
              Solar adoption is accelerating, but individual households and small communities are still negotiating with corporate energy buyers from a position of disadvantage. They face 20-year power purchase agreements, opaque ROI math, and complex group cost-sharing decisions, often without the tools or expertise to navigate them.
            </p>
            <p>
              SolarEase set out to give local communities the data, financial models, and shared language to evaluate solar projects together — and negotiate fair PPAs on equal footing.
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
              I ran think-aloud usability sessions with 5 participants spanning beginner to expert solar literacy — homeowners, a retired engineer, a marketing manager, a small-business owner, and a teacher — to test the AI assistant and ROI flow.
            </p>

            <ul className="insight-list">
              <li>
                Users with low solar literacy bounced off jargon (NPV, IRR, escalation rate) before they ever reached the answer the calculator gave them.
              </li>
              <li>
                Users wanted <strong>decision support</strong>, not just calculation. They could read a number; they couldn't read what to do next.
              </li>
              <li>
                Group decisions broke down on <em>fairness</em>, not math — participants needed to feel a split was fair, not just be told it was optimal.
              </li>
              <li>
                Returning users dropped off when the AI assistant lost context from their previous session.
              </li>
            </ul>
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

            <div className="approach-blocks">
              <div className="approach-block">
                <h4>Defined three pillars</h4>
                <p>
                  Narrowed the surface area to ROI clarity, fair group allocation, and contract demystification — every feature had to ladder up to one of those.
                </p>
              </div>
              <div className="approach-block">
                <h4>Wrote the PRD &amp; sprint roadmap</h4>
                <p>
                  Aligned engineering, design, and GIX research on scope, milestones, and success metrics across the build cycle.
                </p>
              </div>
              <div className="approach-block">
                <h4>Prioritized from usability data</h4>
                <p>
                  Used think-aloud findings to re-rank the backlog — adaptive language and contextual recommendations jumped ahead of new features.
                </p>
              </div>
            </div>
          </div>

          {/* Full-Stack Build */}
          <div className="approach-subsection">
            <h3 className="approach-subsection-title">Full-Stack Build</h3>

            <ul className="approach-list">
              <li>Built the React + Vite frontend with multi-page routing for the ROI Simulator, Negotiation Tool, and Contract Transparency views.</li>
              <li>Stood up the Express.js API and a Python (CVXPY) Nash Bargaining solver to compute fair allocations across community participants.</li>
              <li>Wrote the financial engine in <code>finance.js</code> — multi-year cashflow projections, NPV, IRR, threat-point calculation, and cooperative-surplus math.</li>
              <li>Integrated GPT-4o-mini (with Azure OpenAI fallback) for plain-language explanations and PPA contract parsing with risk-flag extraction.</li>
            </ul>
          </div>

          {/* AI Agent */}
          <div className="approach-subsection">
            <h3 className="approach-subsection-title">AI Agent &ldquo;Soli&rdquo;</h3>

            <div className="approach-blocks">
              <div className="approach-block">
                <h4>Adaptive language</h4>
                <p>
                  Soli matches response complexity to the user's stated solar literacy, so beginners get plain English and experts get the underlying math.
                </p>
              </div>
              <div className="approach-block">
                <h4>Contextual suggestions</h4>
                <p>
                  Smart recommendations surface the right tool — ROI sim, negotiation, or contract upload — based on where the user is stuck.
                </p>
              </div>
              <div className="approach-block">
                <h4>Persistent state</h4>
                <p>
                  Conversation history and project context carry across sessions so returning users don't have to re-explain themselves.
                </p>
              </div>
            </div>
          </div>

          {/* Screenshot */}
          <div className="solarease-image-container">
            <img src={solareaseRoi} alt="SolarEase ROI Simulator" className="solarease-case-image" />
            <p className="image-caption">
              ROI Simulator — location selector, configurable system parameters, and live capacity / savings / CO₂ output, with a one-click handoff into the full financial dashboard.
            </p>
          </div>
        </div>
      </section>

      {/* Impact */}
      <section id="impact" className="solarease-section solarease-impact-section">
        <div className="container">
          <h2 className="solarease-section-title">Impact</h2>

          <div className="impact-stats-row">
            <div className="stat-card">
              <div className="stat-number">76%</div>
              <div className="stat-label">task completion</div>
              <div className="stat-context">across 5 usability participants spanning beginner to expert solar literacy</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">4 / 4</div>
              <div className="stat-label">core hypotheses validated</div>
              <div className="stat-context">AI guidance, conversational onboarding, contextual recommendations, persistent state</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">Live</div>
              <div className="stat-label">deployed at gix-solarease.com</div>
              <div className="stat-context">full ROI simulator, Nash Bargaining, and contract analysis in production</div>
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
