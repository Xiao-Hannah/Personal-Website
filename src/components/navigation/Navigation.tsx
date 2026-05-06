import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import './Navigation.less';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const isHomePage = location.pathname === '/';

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
            <button onClick={() => scrollToSection('about')} className="nav-link">
              About
            </button>
            <button onClick={() => scrollToSection('experience')} className="nav-link">
              Experience
            </button>
            <button onClick={() => scrollToSection('work')} className="nav-link">
              Projects
            </button>
            <button onClick={() => scrollToSection('for-fun')} className="nav-link">
              For Fun
            </button>
            <button onClick={() => scrollToSection('contact')} className="nav-link">
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
          <button onClick={() => scrollToSection('about')} className="mobile-nav-link">
            About
          </button>
          <button onClick={() => scrollToSection('experience')} className="mobile-nav-link">
            Experience
          </button>
          <button onClick={() => scrollToSection('work')} className="mobile-nav-link">
            Work
          </button>
          <button onClick={() => scrollToSection('for-fun')} className="mobile-nav-link">
            For Fun
          </button>
          <button onClick={() => scrollToSection('contact')} className="mobile-nav-link">
            Contact
          </button>
        </div>
      </div>
    </>
  );
};

export default Navigation;
