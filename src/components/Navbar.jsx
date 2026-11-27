import { useEffect, useState } from "react";
import { Download, Menu, X } from "lucide-react";

const NAV_ITEMS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "experience", label: "Experience" },
  { id: "achievements", label: "Achievements" },
  { id: "contact", label: "Contact" },
];

export default function Navbar({ personal, resume }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeId, setActiveId] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 12);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sectionIds = NAV_ITEMS.map((item) => item.id);
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (sections.length === 0 || typeof IntersectionObserver === "undefined") {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible.length > 0) {
          setActiveId(visible[0].target.id);
        }
      },
      { rootMargin: "-25% 0px -55% 0px", threshold: [0.1, 0.35, 0.6] }
    );

    sections.forEach((sec) => observer.observe(sec));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isMenuOpen) return;
    const onKeyDown = (e) => {
      if (e.key === "Escape") setIsMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isMenuOpen]);

  const handleNavClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={`navbar ${isScrolled ? "navbar--scrolled" : ""}`}>
      <div className="container navbar__inner">
        <a
          href="#home"
          className="navbar__brand"
          aria-label={`${personal.name} — Back to top`}
          onClick={handleNavClick}
        >
          <span className="navbar__monogram" aria-hidden="true">
            {personal.initials}
          </span>
          <span>{personal.name}</span>
        </a>

        <nav className="navbar__links" aria-label="Primary Navigation">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`navbar__link ${
                activeId === item.id ? "navbar__link--active" : ""
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="navbar__actions">
          <a
            href={resume.filePath}
            download={resume.downloadFileName}
            className="btn btn--primary btn--sm"
          >
            <Download size={15} aria-hidden="true" />
            <span>Resume</span>
          </a>

          <button
            type="button"
            className="navbar__toggle"
            aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setIsMenuOpen((prev) => !prev)}
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      <nav
        id="mobile-navigation"
        className={`mobile-menu ${isMenuOpen ? "is-open" : ""}`}
        aria-label="Mobile Navigation"
      >
        {NAV_ITEMS.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            onClick={handleNavClick}
            className={`mobile-menu__link ${
              activeId === item.id ? "mobile-menu__link--active" : ""
            }`}
          >
            {item.label}
          </a>
        ))}

        <div className="mobile-menu__cta">
          <a
            href={resume.filePath}
            download={resume.downloadFileName}
            className="btn btn--primary"
            style={{ width: "100%" }}
            onClick={handleNavClick}
          >
            <Download size={16} aria-hidden="true" />
            <span>{resume.label}</span>
          </a>
        </div>
      </nav>
    </header>
  );
}
