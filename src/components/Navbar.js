import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const location = useLocation();
  const isHomepage = location.pathname === "/";

  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/" className="nav-link">Home</Link>
      </div>
      <div className="navbar-right">
        {isHomepage ? (
          <>
            <a href="#skills" className="nav-link">Skills</a>
            <a href="#projects" className="nav-link" onClick={(e) => {
              e.preventDefault();
              scrollToProjects();
            }}>Projects</a>
            <a href="#contact" className="nav-link">Contact Me</a>
          </>
        ) : (
          <>
            <a href="#contact" className="nav-link">Contact Me</a>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
