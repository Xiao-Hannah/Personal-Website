import Navigation from "@/components/navigation/Navigation";
import Footer from "@/components/layout/Footer";
import './TLink.less';

// Import images
import logo from "@/assets/images/tlink/logo.svg";
import loginImg from "@/assets/images/tlink/login.png";
import patientImg from "@/assets/images/tlink/patient.png";
import doctorImg from "@/assets/images/tlink/doctor.png";
import pillReminderImg from "@/assets/images/tlink/pillReminder.png";
import hardware1 from "@/assets/images/tlink/hardware1.jpg";
import hardware2 from "@/assets/images/tlink/hardware2.jpg";
import hardware3 from "@/assets/images/tlink/hardware3.jpg";
import hardware4 from "@/assets/images/tlink/hardware4.jpg";
import tlinkMilestonePdf from "@/assets/files/tlinkMilestone.pdf";

const TLink = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="tlink-page">
      <Navigation />

      {/* Hero Section */}
      <section className="tlink-hero">
        <div className="container">
          <div className="tlink-hero-content">
            <div className="tlink-logo-container">
              <img src={logo} alt="T-Mobile CareLink" className="tlink-logo" />
            </div>
            <h1 className="tlink-title">
              T-Mobile: Hypertension Medication Tracking
            </h1>
            <p className="tlink-tagline">
              An integrated hardware and software solution leveraging T-Mobile's 5G connectivity
              for real-time medication adherence tracking
            </p>

            <div className="tlink-meta-grid">
              <div className="tlink-meta-column">
                <h3>Domain</h3>
                <p>Product Design & Development</p>
                <h3>My Role</h3>
                <p>Product Manager & Developer</p>
                <h3>Duration</h3>
                <p>3 months</p>
              </div>
              <div className="tlink-meta-column">
                <h3>Tech Stack</h3>
                <p>React, Firebase, Flask</p>
                <p>ESP32, MediaPipe</p>
                <p>T-Mobile 5G Network</p>
                <h3>Team</h3>
                <p>Chang Li, Hannah Xiao</p>
                <p>Marjorie Yang, Yishuai Zheng</p>
              </div>
              <div className="tlink-meta-about">
                <h3>Project Overview</h3>
                <p>
                  Hypertension affects over 1 billion people globally, yet 30-40% of patients struggle with medication adherence due to forgetfulness and lack of connected tracking tools.
                </p>
                <p>
                  As Product Manager and Developer, I led CareLink - a smart pill box integrated with dual web portals for patients and doctors. The system uses sensors, gesture-tracking, and T-Mobile 5G to enable real-time medication tracking and verification.
                </p>
              </div>
            </div>

            <div className="tlink-links">
              <a
                href="https://tmobile-carelink.netlify.app/home"
                target="_blank"
                rel="noopener noreferrer"
                className="tlink-btn"
              >
                View Live Demo
              </a>
              <a
                href="https://github.com/Xiao-Hannah/Tmobile-Carelink-Project"
                target="_blank"
                rel="noopener noreferrer"
                className="tlink-btn tlink-btn-secondary"
              >
                View Hardware Code
              </a>
              <a
                href="https://github.com/urnotvicky-li/CareLink-Portal"
                target="_blank"
                rel="noopener noreferrer"
                className="tlink-btn tlink-btn-secondary"
              >
                View Portal Code
              </a>
              <a
                href={tlinkMilestonePdf}
                target="_blank"
                rel="noopener noreferrer"
                className="tlink-btn tlink-btn-secondary"
              >
                View Final Project PDF
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Table of Contents */}
      <section className="tlink-toc">
        <div className="container">
          <nav className="tlink-toc-nav">
            <button onClick={() => scrollToSection('problem')}>Problem</button>
            <button onClick={() => scrollToSection('solution')}>Solution</button>
            <button onClick={() => scrollToSection('hardware')}>Hardware</button>
            <button onClick={() => scrollToSection('technical')}>Technical</button>
            <button onClick={() => scrollToSection('portals')}>Portals</button>
            <button onClick={() => scrollToSection('reflection')}>Reflection</button>
          </nav>
        </div>
      </section>

      {/* Problem Statement */}
      <section id="problem" className="tlink-section tlink-problem-section">
        <div className="container">
          <h2 className="tlink-section-title">Problem Statement</h2>
          <div className="tlink-problem-content">
            <div className="tlink-problem-stats">
              <div className="tlink-stat">
                <div className="tlink-stat-number">1B+</div>
                <div className="tlink-stat-label">People affected by hypertension globally</div>
              </div>
              <div className="tlink-stat">
                <div className="tlink-stat-number">30-40%</div>
                <div className="tlink-stat-label">Poor medication adherence rate</div>
              </div>
            </div>
            <div className="tlink-problem-text">
              <p>
                Poor medication adherence stems from forgetfulness, lack of perceived need, fear of side effects, and low self-efficacy - placing significant burden on caregivers of elderly patients.
              </p>
              <p>
                Patients lack simple, connected tools to track medication, monitor blood pressure, and stay engaged with their care plans.
              </p>
              <div className="tlink-highlight">
                An integrated hardware and software solution leveraging T-Mobile's connectivity can enable real-time tracking, reminders, and data sharing - empowering patients and reducing caregiver burden.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution */}
      <section id="solution" className="tlink-section">
        <div className="container">
          <h2 className="tlink-section-title">Solution</h2>
          <p className="tlink-subtitle">
            A two-part system combining smart hardware with connected software portals
          </p>

          <div className="tlink-solution-grid">
            <div className="tlink-solution-card">
              <div className="tlink-solution-number">01</div>
              <h4>Pill Detection</h4>
              <p>
                Photoresistors embedded under each compartment detect when pills are removed
                by measuring light changes
              </p>
            </div>
            <div className="tlink-solution-card">
              <div className="tlink-solution-number">02</div>
              <h4>Consumption Verification</h4>
              <p>
                Camera with ML-powered gesture detection verifies actual pill ingestion,
                not just removal
              </p>
            </div>
            <div className="tlink-solution-card">
              <div className="tlink-solution-number">03</div>
              <h4>Real-Time Sync</h4>
              <p>
                T-Mobile 5G connectivity enables instant data upload to cloud without
                depending on local Wi-Fi
              </p>
            </div>
            <div className="tlink-solution-card">
              <div className="tlink-solution-number">04</div>
              <h4>Dual Portals</h4>
              <p>
                Separate interfaces for patients and doctors to track adherence,
                monitor health data, and communicate
              </p>
            </div>
          </div>

          {/* User Flow Diagram */}
          <div className="tlink-user-flow">
            <h3>User Flow</h3>
            <div className="tlink-flow-steps">
              <div className="tlink-flow-step">
                <div className="tlink-flow-icon">📅</div>
                <p>Patient fills pill box at beginning of week</p>
              </div>
              <div className="tlink-flow-arrow">→</div>
              <div className="tlink-flow-step">
                <div className="tlink-flow-icon">🔴</div>
                <p>LED notification alerts patient to take medication</p>
              </div>
              <div className="tlink-flow-arrow">→</div>
              <div className="tlink-flow-step">
                <div className="tlink-flow-icon">📦</div>
                <p>Patient opens pill box</p>
              </div>
              <div className="tlink-flow-arrow">→</div>
              <div className="tlink-flow-step">
                <div className="tlink-flow-icon">💊</div>
                <p>Patient takes pill and consumes in front of camera</p>
              </div>
              <div className="tlink-flow-arrow">→</div>
              <div className="tlink-flow-step">
                <div className="tlink-flow-icon">✅</div>
                <p>Data syncs to portals for patient and doctor to review</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hardware Design */}
      <section id="hardware" className="tlink-section tlink-hardware-section">
        <div className="container">
          <h2 className="tlink-section-title">Hardware Design: Smart Pill Box</h2>
          <p className="tlink-subtitle">
            A weekly-use pill box with integrated sensors, camera, and LED indicators
          </p>

          <div className="tlink-hardware-features">
            <div className="tlink-hardware-feature">
              <h4>Compact Design</h4>
              <p>
                Square-shaped form factor suitable for daily use at home or easy to carry on the go
              </p>
            </div>
            <div className="tlink-hardware-feature">
              <h4>7-Day Compartments</h4>
              <p>
                Seven compartments to hold a week's medication, each equipped with a photoresistor
                at the bottom
              </p>
            </div>
            <div className="tlink-hardware-feature">
              <h4>Verification Camera</h4>
              <p>
                Embedded camera with mirror alignment to verify pill consumption through gesture tracking
              </p>
            </div>
            <div className="tlink-hardware-feature">
              <h4>LED Indicators</h4>
              <p>
                Red LED for medication reminders, white LED to notify when all pills are taken
              </p>
            </div>
          </div>

          <div className="tlink-hardware-gallery">
            <img src={hardware1} alt="Pill box front view" />
            <img src={hardware2} alt="Pill box open view" />
            <img src={hardware3} alt="Pill box side view" />
            <img src={hardware4} alt="Pill box internal components" />
          </div>

          <div className="tlink-iteration-note">
            <h4>Design Iterations</h4>
            <p>
              We went through multiple prototyping cycles, experimenting with different materials,
              compartment sizes, and sensor placements. Each iteration was tested for usability,
              durability, and sensor accuracy.
            </p>
          </div>
        </div>
      </section>

      {/* Technical Implementation */}
      <section id="technical" className="tlink-section">
        <div className="container">
          <h2 className="tlink-section-title">Technical Implementation</h2>

          <div className="tlink-technical-grid">
            {/* Photoresistors */}
            <div className="tlink-technical-card">
              <h3>Photoresistor System</h3>
              <div className="tlink-tech-badge">Hardware</div>
              <p className="tlink-tech-description">
                ESP32 microcontroller connected to seven photoresistors (LDRs), each positioned
                under an individual pill slot
              </p>
              <div className="tlink-tech-details">
                <h4>Data Flow</h4>
                <p>ESP32 Sensors → EMA Filtering → Flask Server → Firebase</p>
                <h4>Key Features</h4>
                <ul>
                  <li>Exponential Moving Average (EMA) filtering for stable readings</li>
                  <li>Configurable thresholds per sensor slot</li>
                  <li>Button control (GPIO44) for system on/off</li>
                  <li>WiFi connectivity for cloud communication</li>
                </ul>
              </div>
            </div>

            {/* Camera System */}
            <div className="tlink-technical-card">
              <h3>Gesture Detection Camera</h3>
              <div className="tlink-tech-badge">ML/AI</div>
              <p className="tlink-tech-description">
                ESP32-CAM with MediaPipe for pose detection and gesture analysis
              </p>
              <div className="tlink-tech-details">
                <h4>Data Flow</h4>
                <p>ESP32 Cam → Flask Server → Firebase</p>
                <h4>Key Features</h4>
                <ul>
                  <li>Collects 50 frames (10 FPS) after 3-second delay</li>
                  <li>MediaPipe for pose detection on Flask server</li>
                  <li>Tracks hand-to-nose distance to detect pill consumption gesture</li>
                  <li>Savitzky-Golay low-pass filter for cleaner signals</li>
                </ul>
              </div>
            </div>

            {/* Data Pipeline */}
            <div className="tlink-technical-card tlink-technical-card-wide">
              <h3>Data Pipeline</h3>
              <div className="tlink-tech-badge">Backend</div>
              <p className="tlink-tech-description">
                Integrated Flask server processes data from multiple sensors and sends to Firestore
              </p>
              <div className="tlink-pipeline">
                <div className="tlink-pipeline-step">
                  <h5>Input</h5>
                  <p>Lid button activation</p>
                  <p>Photoresistor readings</p>
                  <p>Camera frames</p>
                </div>
                <div className="tlink-pipeline-arrow">→</div>
                <div className="tlink-pipeline-step">
                  <h5>Processing</h5>
                  <p>EMA filtering</p>
                  <p>MediaPipe analysis</p>
                  <p>Gesture detection</p>
                </div>
                <div className="tlink-pipeline-arrow">→</div>
                <div className="tlink-pipeline-step">
                  <h5>Cloud Storage</h5>
                  <p>Slot status</p>
                  <p>Intake status</p>
                  <p>Confidence level</p>
                  <p>Timestamps</p>
                </div>
                <div className="tlink-pipeline-arrow">→</div>
                <div className="tlink-pipeline-step">
                  <h5>Frontend Display</h5>
                  <p>Medication taken (Y/N)</p>
                  <p>Consistency score</p>
                  <p>BP data visualization</p>
                </div>
              </div>
            </div>
          </div>

          {/* Technical Challenges */}
          <div className="tlink-challenges">
            <h3>Technical Challenges & Solutions</h3>
            <div className="tlink-challenge-grid">
              <div className="tlink-challenge">
                <h4>🔌 Hardware Challenge</h4>
                <p className="tlink-challenge-problem">
                  Incorrect voltage divider wiring on PCB—power bypassed photoresistors
                  and went directly to resistors
                </p>
                <p className="tlink-challenge-solution">
                  <strong>Solution:</strong> Redesigned the schematic for proper voltage division,
                  enabling successful operation with battery power
                </p>
              </div>
              <div className="tlink-challenge">
                <h4>🔄 Software Challenge</h4>
                <p className="tlink-challenge-problem">
                  Integrating real-time data from two devices (pill detection & gesture camera)
                  into one Firebase
                </p>
                <p className="tlink-challenge-solution">
                  <strong>Solution:</strong> Used Flask server to integrate two data streams
                  into unified Firestore database
                </p>
              </div>
              <div className="tlink-challenge">
                <h4>🎨 Frontend Challenge</h4>
                <p className="tlink-challenge-problem">
                  Coordinating shared platform across teams with three separate Firebase backends
                </p>
                <p className="tlink-challenge-solution">
                  <strong>Solution:</strong> Kept individual backends and routed users based
                  on credentials
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portal Designs */}
      <section id="portals" className="tlink-section tlink-portals-section">
        <div className="container">
          <h2 className="tlink-section-title">Portal Designs</h2>
          <p className="tlink-subtitle">
            Separate, tailored experiences for patients and healthcare providers
          </p>
          <p className="tlink-portal-intro">
            My main development work focused on building these web portals, creating the frontend architecture, implementing real-time data synchronization with Firebase, and designing the user interfaces for both patient and doctor experiences.
          </p>

          {/* Login */}
          <div className="tlink-portal-showcase">
            <h3>Authentication</h3>
            <img src={loginImg} alt="Login interface" className="tlink-portal-image tlink-portal-image--auth" />
            <p>
              Secure login system with role-based routing to patient or doctor portals
            </p>
          </div>

          {/* Patient Portal */}
          <div className="tlink-portal-showcase">
            <h3>Patient Portal</h3>
            <img src={patientImg} alt="Patient portal interface" className="tlink-portal-image" />
            <div className="tlink-portal-features">
              <div className="tlink-portal-feature">
                <h4>Medication Schedule</h4>
                <p>
                  View types of medications, frequency, and when they need to be taken with
                  customization options
                </p>
              </div>
              <div className="tlink-portal-feature">
                <h4>Blood Pressure Tracking</h4>
                <p>Recent BP measurements and historical trends visualization</p>
              </div>
              <div className="tlink-portal-feature">
                <h4>Adherence Progress</h4>
                <p>
                  Medication consistency status with missed medications highlighted over BP trend
                </p>
              </div>
              <div className="tlink-portal-feature">
                <h4>Doctor Communications</h4>
                <p>Notifications from caregivers, suggestions, and notes from doctors</p>
              </div>
            </div>
            <div className="tlink-tech-stack-note">
              <p>
                <strong>Built with:</strong> React, React Router, Context API, Firebase authentication,
                responsive design with T-Mobile Magenta branding
              </p>
            </div>
          </div>

          {/* Doctor Portal */}
          <div className="tlink-portal-showcase">
            <h3>Doctor Portal</h3>
            <img src={doctorImg} alt="Doctor portal interface" className="tlink-portal-image" />
            <div className="tlink-portal-features">
              <div className="tlink-portal-feature">
                <h4>Patient Management</h4>
                <p>
                  View and switch between multiple patients with comprehensive health data overview
                </p>
              </div>
              <div className="tlink-portal-feature">
                <h4>Current Conditions</h4>
                <p>Real-time blood pressure measurements and other monitoring data</p>
              </div>
              <div className="tlink-portal-feature">
                <h4>Medication Calendar</h4>
                <p>
                  Visual calendar showing medication intake patterns with adherence highlighting
                </p>
              </div>
              <div className="tlink-portal-feature">
                <h4>Notes & Files</h4>
                <p>Add clinical notes and manage patient documents</p>
              </div>
            </div>
          </div>

          {/* Pill Reminder Feature */}
          <div className="tlink-portal-showcase">
            <h3>Smart Notifications</h3>
            <img src={pillReminderImg} alt="Pill reminder notification" className="tlink-portal-image" />
            <p>
              Time-based medication reminders that sync with the hardware device's LED indicators
            </p>
          </div>
        </div>
      </section>

      {/* Reflection */}
      <section id="reflection" className="tlink-section tlink-reflection-section">
        <div className="container">
          <h2 className="tlink-section-title">Reflection</h2>
          <div className="tlink-reflection-content">
            <p className="tlink-text-block">
              This 3-month capstone project taught me how to integrate hardware and software systems. As Product Manager and Developer, I coordinated hardware prototyping, embedded systems programming, backend development, and frontend design.
            </p>
            <p className="tlink-text-block">
              The biggest technical challenge was achieving real-time synchronization between the physical device and web platform. This required debugging PCB schematics for the voltage divider issue and building a Flask server to integrate dual data streams into Firebase.
            </p>
            <p className="tlink-text-block">
              Every technical decision - from gesture detection algorithms to portal UI - was driven by the needs of elderly patients and healthcare providers. The positive reception during our final presentation validated this user-centered approach.
            </p>
            <div className="tlink-outcomes">
              <h3>Key Outcomes</h3>
              <div className="tlink-outcome-grid">
                <div className="tlink-outcome">
                  <div className="tlink-outcome-icon">✅</div>
                  <p>Successfully integrated ESP32 hardware with cloud-based web portals</p>
                </div>
                <div className="tlink-outcome">
                  <div className="tlink-outcome-icon">✅</div>
                  <p>Achieved real-time medication tracking with 90%+ gesture detection accuracy</p>
                </div>
                <div className="tlink-outcome">
                  <div className="tlink-outcome-icon">✅</div>
                  <p>Deployed functional dual portals with T-Mobile 5G connectivity</p>
                </div>
                <div className="tlink-outcome">
                  <div className="tlink-outcome-icon">✅</div>
                  <p>Demonstrated complete end-to-end user flow from pill box to doctor dashboard</p>
                </div>
              </div>
            </div>
            <p className="tlink-text-block">
              Looking forward, I'm excited to apply these learnings to future projects at the
              intersection of IoT, healthcare, and user experience design.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TLink;
