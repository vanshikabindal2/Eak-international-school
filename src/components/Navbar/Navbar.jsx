
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

import logo from "../../assets/logo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Academics", path: "/academics" },
    { name: "Admissions", path: "/admissions" },
    { name: "Facilities", path: "/facilities" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="school-header">
      <nav className="navbar">
        {/* Logo */}
        <Link to="/" className="navbar-logo" onClick={closeMenu}>
          <img
            src={logo}
            alt="EAK International School Logo"
            className="school-logo"
          />

          <div className="logo-text">
            <h2>EAK International</h2>
            <p>School of Excellence</p>
          </div>
        </Link>

        {/* Navigation Links */}
        <div className={`nav-links ${menuOpen ? "active" : ""}`}>
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === "/"}
              onClick={closeMenu}
              className={({ isActive }) =>
                isActive ? "nav-link active-link" : "nav-link"
              }
            >
              {item.name}
            </NavLink>
          ))}

          <Link
            to="/admissions"
            className="admission-btn"
            onClick={closeMenu}
          >
            Apply Now
            <span> ↗</span>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className={`menu-toggle ${menuOpen ? "opened" : ""}`}
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
