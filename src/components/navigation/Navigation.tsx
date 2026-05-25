import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useSpotlight, SpotlightKey } from "@/components/home/SpotlightContext";
import './Navigation.less';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const { spotlight, toggleSpotlight, clearSpotlight } = useSpotlight();

  // Determine theme based on current page
  const getPageTheme = () => {
    const path = location.pathname;
    if (path === '/atypica') return 'theme-atypica';
    if (path === '/bloome') return 'theme-bloome';
    if (path === '/fridgefriend') return 'theme-fridgefriend';
    if (path === '/tlink') return 'theme-tlink';
    if (path === '/zebra') return 'theme-zebra';
    if (path === '/solarease') return 'theme-solarease';
    if (path === '/fora') return 'theme-fora';
    if (path === '/for-fun') return 'theme-forfun';
    return 'theme-default';
  };

  const pageTheme = getPageTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    if (!isHomePage) {
      navigate('/');
      // Wait for navigation then scroll
      setTimeout(() => {
        const element = document.getElementById(id);
        element?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      const element = document.getElementById(id);
      element?.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  // Spotlight categories live INSIDE the hero bento (rather than scrolling to
  // a separate section). Clicking the same nav item again clears the spotlight.
  const handleSpotlight = (key: Exclude<SpotlightKey, null>) => {
    if (!isHomePage) {
      navigate('/');
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        toggleSpotlight(key);
      }, 120);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      toggleSpotlight(key);
    }
    setIsMobileMenuOpen(false);
  };

  // Plain sections (Work/For Fun/Contact) still scroll, but also clear any
  // active hero spotlight so the page returns to normal.
  const handleScrollSection = (id: string) => {
    clearSpotlight();
    scrollToSection(id);
  };

  // "All" filter — dismiss any active spotlight so every bento tile is visible
  // again. From other pages this also navigates back to home.
  const handleClearAll = () => {
    if (!isHomePage) {
      navigate('/');
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        clearSpotlight();
      }, 120);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      clearSpotlight();
    }
    setIsMobileMenuOpen(false);
  };

  const navigateToPage = (path: string) => {
    navigate(path);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav className={`navigation ${pageTheme} ${isScrolled ? 'scrolled' : ''} ${isMobileMenuOpen ? 'menu-open' : ''}`}>
        <div className="container">
          <button
            onClick={() => navigateToPage('/')}
            className="logo"
          >
            HX
          </button>

          {/* Desktop Navigation */}
          <div className="nav-links">
            <button
              onClick={handleClearAll}
              className={`nav-link ${isHomePage && spotlight === null ? 'is-active' : ''}`}
            >
              All
            </button>
            <button
              onClick={() => handleSpotlight('about')}
              className={`nav-link ${spotlight === 'about' ? 'is-active' : ''}`}
            >
              About
            </button>
            <button
              onClick={() => handleSpotlight('experience')}
              className={`nav-link ${spotlight === 'experience' ? 'is-active' : ''}`}
            >
              Experience
            </button>
            <button
              onClick={() => handleSpotlight('projects')}
              className={`nav-link ${spotlight === 'projects' ? 'is-active' : ''}`}
            >
              Projects
            </button>
            <button onClick={() => handleScrollSection('for-fun')} className="nav-link">
              For Fun
            </button>
            <button onClick={() => handleScrollSection('contact')} className="nav-link">
              Contact
            </button>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="mobile-menu-button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Overlay */}
      <div
        className={`mobile-overlay ${pageTheme} ${isMobileMenuOpen ? 'open' : ''}`}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      {/* Mobile Sidebar */}
      <div className={`mobile-sidebar ${pageTheme} ${isMobileMenuOpen ? 'open' : ''}`}>
        <button
          className="mobile-sidebar-close"
          onClick={() => setIsMobileMenuOpen(false)}
          aria-label="Close menu"
        >
          <X size={24} />
        </button>
        <div className="mobile-nav-links">
          <button
            onClick={handleClearAll}
            className={`mobile-nav-link ${isHomePage && spotlight === null ? 'is-active' : ''}`}
          >
            All
          </button>
          <button
            onClick={() => handleSpotlight('about')}
            className={`mobile-nav-link ${spotlight === 'about' ? 'is-active' : ''}`}
          >
            About
          </button>
          <button
            onClick={() => handleSpotlight('experience')}
            className={`mobile-nav-link ${spotlight === 'experience' ? 'is-active' : ''}`}
          >
            Experience
          </button>
          <button
            onClick={() => handleSpotlight('projects')}
            className={`mobile-nav-link ${spotlight === 'projects' ? 'is-active' : ''}`}
          >
            Projects
          </button>
          <button onClick={() => handleScrollSection('for-fun')} className="mobile-nav-link">
            For Fun
          </button>
          <button onClick={() => handleScrollSection('contact')} className="mobile-nav-link">
            Contact
          </button>
        </div>
      </div>
    </>
  );
};

export default Navigation;
