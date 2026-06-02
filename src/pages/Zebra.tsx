import { useState, useEffect } from "react";
import { Lock } from "lucide-react";
import Navigation from "@/components/navigation/Navigation";
import Footer from "@/components/layout/Footer";
import zebraLogo from "@/assets/images/zebra/zebra.jpg";
import clockinImage from "@/assets/images/zebra/clockin.jpg";
import './Zebra.less';

const STORAGE_KEY = 'zebra-auth';
const CORRECT_PASSWORD = 'launch';

const Zebra = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    const storedAuth = localStorage.getItem(STORAGE_KEY);
    if (storedAuth === 'true') {
      setIsAuthenticated(true);
    }
  }, []);

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

  // Show password gate if not authenticated
  if (!isAuthenticated) {
    return (
      <div className="zebra-page">
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
    <div className="zebra-page">
      <Navigation />

      {/* Hero Section */}
      <section className="zebra-hero">
        <div className="container">
          <div className="zebra-hero-content">
            <div className="zebra-hero-text">
              <h1 className="zebra-title">
                Zebra Workcloud Clock App
              </h1>
              <p className="zebra-subtitle">
                Enhanced authentication and security for frontline workforce management.
              </p>

              <div className="zebra-role-line">
                Product Manager Intern · Summer 2025
              </div>

              <div className="zebra-links">
                <a
                  href="https://www.zebra.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="zebra-btn"
                >
                  Visit Zebra
                </a>
              </div>
            </div>
            <img src={zebraLogo} alt="Zebra Technologies" className="zebra-hero-logo" />
          </div>
        </div>
      </section>

      {/* Context & Problem */}
      <section id="context" className="zebra-section">
        <div className="container">
          <h2 className="zebra-section-title">Context & Problem</h2>
          <div className="zebra-context-with-image">
            <div className="zebra-context-text">
              <p>
                Zebra's Workcloud Clock App runs on ET40/45 tablets deployed across warehouses, retail floors, and distribution centers where frontline workers clock in and out on shared devices.
              </p>
              <p>
                The existing methods — manual entry, QR codes, RFID badges — all had the same vulnerability: buddy punching. A worker could clock in for someone else with no way to verify identity. The fix seemed obvious: biometrics. But shared devices created a harder constraint. You can't store per-user biometric data on a device that rotates between dozens of workers per shift. Any solution had to authenticate without storing.
              </p>
            </div>
            <div className="zebra-context-image">
              <img src={clockinImage} alt="Workcloud Clock App in use" />
            </div>
          </div>
        </div>
      </section>

      {/* NFC Integration */}
      <section id="nfc" className="zebra-section">
        <div className="container">
          <h2 className="zebra-section-title">NFC Integration Feasibility</h2>
          <div className="zebra-context-main">
            <p>
              I evaluated NFC as a contactless alternative, assessing chip types across four dimensions: memory capacity, price, compatibility with pre-formatted cards, and security features.
            </p>
            <p>
              MIFARE DESFire EV1 came out ahead. AES encryption, anti-collision support for high-volume clock-in periods, multi-application support, and broad compatibility with existing card infrastructure. The tradeoff was cost and a proprietary protocol, but its wide enterprise adoption made it the defensible choice. I confirmed SDK compatibility with the ET40/45 hardware directly with the device team and product owner, since all software runs tablet-bound.
            </p>
          </div>
        </div>
      </section>

      {/* Identity Guardian */}
      <section id="identity" className="zebra-section">
        <div className="container">
          <h2 className="zebra-section-title">Identity Guardian Integration</h2>
          <div className="zebra-context-main">
            <p>
              The cleaner long-term solution wasn't on anyone's radar when I joined. Zebra's Identity Guardian SDK offered facial biometric authentication that processes and discards data locally within 24 hours, with no cloud upload — which directly addressed the shared-device constraint that made every other biometric approach a non-starter.
            </p>
            <p>
              I built a working proof-of-concept in Android Studio, calling the SDK's authorization and session monitoring APIs and validating the flow with a UI mock in a live demo environment. Getting there required coordinating directly with an SDE on the IG team to resolve a permissions conflict: Identity Guardian locks the device screen by default, which blocked our app from launching. Nothing in the documentation covered this case, so I tracked down the right person and got our app whitelisted.
            </p>
            <p>
              The POC gave the team something concrete to evaluate. It went from an idea nobody had considered to a roadmap item with executive buy-in.
            </p>
          </div>
        </div>
      </section>

      {/* What I Learned */}
      <section id="learnings" className="zebra-section">
        <div className="container">
          <h2 className="zebra-section-title">What I Learned</h2>
          <div className="zebra-context-main">
            <p>
              Enterprise product work moves through people before it moves through code. Getting the NFC evaluation right required pulling hardware specs from the device team. Getting the IG integration unblocked required finding the right engineer on a vendor team and explaining the issue clearly enough that they'd prioritize it.
            </p>
            <p>
              The thing I underestimated was how much written documentation matters in cross-functional work. People walk away from the same technical conversation with different assumptions. I started writing up decisions and blockers after every major sync, and it consistently reduced the back-and-forth in the next one.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Zebra;
