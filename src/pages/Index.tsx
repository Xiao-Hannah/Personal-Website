import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Navigation from "@/components/navigation/Navigation";
import ProjectCard from "@/components/cards/ProjectCard";
import Footer from "@/components/layout/Footer";
import { ArrowDown, Mail, ArrowRight, Github, Instagram, Linkedin, FileText } from "lucide-react";
import resume from "@/assets/files/resume.pdf";
import thesis from "@/assets/files/thesis.pdf";
import profileImage from "@/assets/images/profile/profile.jpg";
import './Index.less';

const professionalExperience = [
  {
    title: "Atypica AI (Product Growth)",
    description: "Led growth strategy for an AI consumer insights platform, driving MRR growth and activation rate increase through data-driven product improvements and multi-channel user acquisition.",
    category: "Product Management & Growth Strategy",
    year: "2025",
    link: "/atypica",
  },
  {
    title: "Zebra Workcloud Clock App (Product Management)",
    description: "Strengthened authentication and security for frontline workforce management through NFC feasibility study and biometric platform integration.",
    category: "Product Management & Technical Integration",
    year: "2025",
    link: "/zebra",
  },
  {
    title: "T-Mobile CareLink (Product Management & Development)",
    description: "An integrated hardware and software solution for hypertension medication tracking, leveraging T-Mobile's 5G connectivity for real-time adherence monitoring.",
    category: "Product Management & Full-Stack Development",
    year: "2024",
    link: "/tlink",
  },
];

const projects = [
  {
    title: "Fora Tools",
    description: "A speculative onboarding case study for Fora Travel — a personalized first-60-days hub plus two self-serve tools that turn 'I don't know where to start' into a first booking.",
    category: "Product Design & Onboarding Strategy",
    year: "2026",
    link: "/fora",
  },
  {
    title: "SolarEase",
    description: "A community solar investment platform that uses ROI simulation, Nash Bargaining, and AI-powered contract analysis to help neighborhoods negotiate fair solar deals.",
    category: "Product Management & Full-Stack Development",
    year: "2026",
    link: "/solarease",
  },
  {
    title: "Bloomè",
    description: "An all-in-one platform helping users overcome period poverty through education, product accessibility, and community support.",
    category: "UX Research & Design",
    year: "2024",
    link: "/bloome",
  },
  {
    title: "Fridge Friend",
    description: "A smart kitchen companion that helps reduce food waste through intelligent inventory tracking and recipe suggestions.",
    category: "Product Design",
    year: "2023",
    link: "/fridgefriend",
  },
];

const Index = () => {
  const [heroVisible, setHeroVisible] = useState(false);
  const [showSidebar, setShowSidebar] = useState(true);
  const contactRef = useRef<HTMLElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    setHeroVisible(true);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowSidebar(!entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (contactRef.current) {
      observer.observe(contactRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Sticky stacking scale effect for Selected Work cards
  useEffect(() => {
    const CARD_GAP = 24;    // must match CSS top increments (px)
    const BASE_TOP = 190;   // must match CSS top of first card (px)

    const cards = Array.from(
      document.querySelectorAll<HTMLElement>('.work-section .projects-list .project-card')
    );
    if (cards.length === 0) return;

    const updateStack = () => {
      cards.forEach((card, i) => {
        if (i === cards.length - 1) return;

        let coveredBy = 0;
        for (let j = i + 1; j < cards.length; j++) {
          const stickyTopJ = BASE_TOP + j * CARD_GAP;
          if (cards[j].getBoundingClientRect().top <= stickyTopJ + 1) coveredBy++;
        }

        const scale = coveredBy > 0 ? Math.max(0.92, 1 - coveredBy * 0.03) : 1;
        card.style.transform = scale < 1 ? `scale(${scale})` : '';
        card.dataset.depth = coveredBy > 0 ? String(coveredBy) : '';
      });
    };

    window.addEventListener('scroll', updateStack, { passive: true });
    updateStack();
    return () => window.removeEventListener('scroll', updateStack);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="index-page">
      <Navigation />

      {/* Floating Social Sidebar - Left */}
      <div className={`floating-sidebar floating-sidebar-left ${showSidebar ? 'visible' : ''}`}>
        <a
          href="https://github.com/Xiao-Hannah"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <Github />
        </a>
        <a
          href="https://www.linkedin.com/in/hannah-x/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <Linkedin />
        </a>
        <a
          href="https://instagram.com/hanx0628"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <Instagram />
        </a>
        <a
          href={resume}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Resume"
        >
          <FileText />
        </a>
        <div className="sidebar-line" />
      </div>

      {/* Floating Email - Right */}
      <div className={`floating-sidebar floating-sidebar-right ${showSidebar ? 'visible' : ''}`}>
        <a href="mailto:hx2313@uw.edu" className="email-link">
          hx2313@uw.edu
        </a>
        <div className="sidebar-line" />
      </div>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className={`hero-content ${heroVisible ? 'visible' : ''}`}>
            <div className="hero-text-column">
              <p className="hero-label">Product Manager</p>
              <h1 className="hero-title">Hi, I'm Hannah.</h1>
              <p className="hero-subtitle">
                I make impact by turning <span className="highlight">fuzzy user insights</span> into <span className="highlight">clear product decisions</span>.
              </p>
            </div>
            <div className="hero-image-column">
              <img src={profileImage} alt="Hannah" className="hero-profile-photo" />
            </div>
          </div>
        </div>

        <button
          className="scroll-indicator"
          onClick={() => scrollToSection("about")}
          aria-label="Scroll to about section"
        >
          <span>Scroll</span>
          <ArrowDown className="icon" />
        </button>
      </section>

      {/* About Section */}
      <section id="about" className="about-section">
        <div className="container">
          <div className="about-grid">
            <div className="about-main">
              <span className="section-number">01</span>
              <h2>About</h2>

              <div className="about-text">
                <p>
                  I'm a former archaeologist turned product manager, which means I've always thought about technology the way I think about artifacts: as evidence of what people actually need.
                </p>
                <p>
                  Across growth, B2B, and B2C products, I've turned early questions into clear directions through research, experimentation, and a lot of prototyping.
                </p>
              </div>

              <div className="about-meta-section">
                <p className="about-meta-label">What I Work On</p>
                <div className="about-tag-list">
                  <span className="about-tag">Growth</span>
                  <span className="about-tag">AI Products</span>
                  <span className="about-tag">Product Strategy</span>
                  <span className="about-tag">Product Optimization</span>
                </div>
              </div>

              <div className="about-meta-section">
                <p className="about-meta-label">Where I've Worked</p>
                <div className="about-tag-list">
                  <span className="about-tag">Enterprise</span>
                  <span className="about-tag">Startup</span>
                </div>
              </div>
            </div>

            <div className="about-sidebar">
              <div className="about-block">
                <h3>Currently</h3>
                <p className="about-place">Seattle, WA</p>
                <p>Building products and testing new ideas.</p>
              </div>

              <div className="about-block">
                <h3>Previously</h3>
                <div className="about-school">
                  <p className="about-place">University of Washington</p>
                  <p>M.S. in Technology Innovation<br />Built 0→1 products across software and hardware.</p>
                </div>
                <div className="about-school">
                  <p className="about-place">Columbia University (Barnard College)</p>
                  <p>B.A. in Anthropology and Economics<br />Became fascinated by human behavior, systems, and the stories hidden in data and artifacts.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Experience Section */}
      <section id="experience" className="experience-section">
        <div className="container">
          <div className="section-header">
            <span className="section-number">02</span>
            <h2>Professional Experience</h2>
            <p className="section-description">
              Building products that bridge technology and human needs in professional settings.
            </p>
          </div>

          <div className="experience-list">
            {professionalExperience.map((experience, index) => (
              <ProjectCard key={experience.title} {...experience} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Work Section */}
      <section id="work" className="work-section">
        <div className="container">
          <div className="section-header">
            <span className="section-number">03</span>
            <h2>Selected Work</h2>
            <p className="section-description">
              Projects where research meets creativity, solving real problems for real people.
            </p>
          </div>

          <div className="projects-list">
            {projects.map((project, index) => (
              <ProjectCard key={project.title} {...project} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* For Fun Section */}
      <section id="for-fun" className="for-fun-section">
        <div className="container">
          <div className="section-header">
            <span className="section-number">04</span>
            <h2>For Fun</h2>
            <p className="section-description">
              Beyond design—exploring the world, capturing moments, and embracing new experiences.
            </p>
          </div>

          <div className="for-fun-topics">
            <div className="for-fun-topic">
              <a href={thesis} target="_blank" rel="noopener noreferrer">
                <h3>Archaeological Project</h3>
                <p>From Sherds to Society: An analysis of Kwahe'e Black-on-white and Social Interaction in the Taos District</p>
              </a>
            </div>
            <div className="for-fun-topic">
              <h3>Photography</h3>
              <p>Photos are my way to connect with people all around world</p>
            </div>
            <div className="for-fun-topic">
              <h3>Travelling</h3>
              <p>Where's my next adventure</p>
            </div>
            <div className="for-fun-topic">
              <h3>Trying New Things</h3>
              <p>Venturing out of my comfort zone</p>
            </div>
          </div>

          <button
            onClick={() => navigate('/for-fun')}
            className="for-fun-link"
          >
            View My Adventures
            <ArrowRight className="icon" />
          </button>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section" ref={contactRef}>
        <div className="container">
          <span className="section-number">05</span>
          <h2>Let's Connect</h2>
          <p className="contact-description">
            Always open to discussing new projects, collaborations, or opportunities.
          </p>

          <a href="mailto:hx2313@uw.edu" className="contact-email">
            <Mail className="icon" />
            <span>hx2313@uw.edu</span>
          </a>

          <div className="contact-links">
            <a
              href="https://www.linkedin.com/in/hannah-x/"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/Xiao-Hannah"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              GitHub
            </a>
            <a
              href="https://instagram.com/hanx0628"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              Instagram
            </a>
            <a
              href={resume}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              Resume
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
