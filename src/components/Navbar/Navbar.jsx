import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import { getImageUrl } from "../../util";

const navLinks = [
  { to: "/#about", label: "About" },
  { to: "/#experience", label: "Experience" },
  { to: "/#skills", label: "Skills" },
  { to: "/#profile", label: "Profile" },
  { to: "/#projects", label: "Projects" },
  { to: "/slider", label: "Showcase" },
];

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}>
      <Link className={styles.title} to="/" onClick={closeMenu}>
        Portfolio
      </Link>
      <button
        type="button"
        className={styles.menuBtn}
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <img
          src={
            menuOpen
              ? getImageUrl("nav/closeIcon.png")
              : getImageUrl("nav/menuIcon.png")
          }
          alt=""
        />
      </button>
      <ul
        className={`${styles.menuItems} ${menuOpen ? styles.menuOpen : ""}`}
        onClick={closeMenu}
      >
        {navLinks.map(({ to, label }) => (
          <li key={label}>
            {to.startsWith("/#") ? (
              <a href={to}>{label}</a>
            ) : (
              <Link to={to}>{label}</Link>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};
