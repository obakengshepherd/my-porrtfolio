import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Homepage.css";
import profilePic from "../assets/profile.jpeg"; // replace with your image
import resumePDF from "../assets/resume.pdf";   // replace with your resume file
import { 
  FaPython, FaJsSquare, FaDatabase, FaReact, FaServer, FaTools, 
  FaGithub, FaDocker, FaCloud, FaBrain, FaLinkedin,
  FaPhone, FaEnvelope, FaWindows, FaMicrosoft 
} from "react-icons/fa";

import { 
  SiDjango, SiDotnet, SiExpress, 
  SiApollographql, SiMongodb, SiPostgresql, 
  SiPostman, SiEslint, SiSwagger,
  SiJest, SiNpm, SiHeroku,  // Removed SiMicrosoftazure
  SiVercel, SiStripe, SiOpenai,
  SiTypescript, SiCypress, SiYarn
} from "react-icons/si";
import pythonImg from '../assets/Python.jpeg';
import csharpImg from '../assets/Csharp.jpeg';  // Updated path
import javascriptImg from '../assets/JavaScript.png';
import antiSleep from '../assets/anti-sleep.jpeg';


const Homepage = () => {
  const [activeTab, setActiveTab] = useState("Languages");

  const skillsData = {
    Languages: [
      { icon: <FaPython />, name: "  Python 3.10+" },
      { icon: <FaMicrosoft />, name: "  C#" },
      { icon: <FaJsSquare />, name: "  JavaScript (ES6+)" },
      { icon: <SiTypescript />, name: "  TypeScript" },
      { icon: <FaDatabase />, name: "  SQL" },
      { icon: <FaDatabase />, name: "  NoSQL (PostgreSQL, MySQL, MongoDB)" },
    ],
    Frameworks: [
      { icon: <SiDjango />, name: "  Django / Django REST Framework" },
      { icon: <SiDotnet />, name: "  ASP.NET Core 8 / Entity Framework Core" },
      { icon: <SiExpress />, name: "  Express.js" },
      { icon: <FaReact />, name: "  React" },
      { icon: <SiApollographql />, name: "  Apollo Server" },
      { icon: <FaServer />, name: "  REST APIs, GraphQL, WebSockets" },
      { icon: <FaServer />, name: "  Authentication & Authorization (JWT, OAuth2, Identity Core)" },
      { icon: <SiMongodb />, name: "  Mongoose" },
    ],
    Tools: [
      { icon: <FaWindows />, name: "  Windows Development Environment" },
      { icon: <FaMicrosoft />, name: "  Microsoft Development Tools" },
      { icon: <FaGithub />, name: "  Git / GitHub" },
      { icon: <SiPostman />, name: "  Postman / GraphQL Playground" },
      { icon: <SiMongodb />, name: "  MongoDB Compass" },
      { icon: <SiEslint />, name: "  ESLint / Prettier" },
      { icon: <SiSwagger />, name: "  Swagger (drf-yasg, Swashbuckle.AspNetCore)" },
      { icon: <SiJest />, name: "  Unit Testing (unittest, pytest, MSTest, NUnit, Moq, Jest, Supertest, Cypress)" },
      { icon: <SiNpm />, name: "  pip / NuGet / npm / Yarn" },
      { icon: <FaTools />, name: "  python-dotenv" },
      { icon: <FaTools />, name: "  Draw.io / Lucidchart" },
      { icon: <FaTools />, name: "  OBS Studio / Loom" },
      { icon: <SiCypress />, name: "  Cypress" },
      { icon: <SiYarn />, name: "  Yarn Package Manager" },
    ],
    Platforms: [
      { icon: <FaWindows />, name: "  Azure (App Service)" },
      { icon: <SiHeroku />, name: "  Heroku / Render" },
      { icon: <SiVercel />, name: "  Vercel / Netlify" },
      { icon: <SiMongodb />, name: "  MongoDB Atlas" },
      { icon: <FaDatabase />, name: "  SQLite" },
      { icon: <SiPostgresql />, name: "  PostgreSQL / SQL Server" },
      { icon: <FaDocker />, name: "  Docker" },
      { icon: <FaGithub />, name: "  GitHub Pages" },
      { icon: <SiStripe />, name: "  Stripe" },
      { icon: <SiOpenai />, name: "  OpenAI API" },
    ],
    "Soft Skills": [
      { icon: <FaCloud />, name: "  Cloud-Native Solutions" },
      { icon: <FaBrain />, name: "  Collaboration" },
      { icon: <FaBrain />, name: "  Problem-Solving" },
      { icon: <FaBrain />, name: "  Continuous Learning" },
    ],
  };

  return (
    <div className="homepage">

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-left">
          <img src={profilePic} alt="Profile" className="profile-img" />
        </div>

        <div className="hero-center">
          <h1>Software Developer</h1>
          <h3>Web Developent | Databases</h3>
          <div className="hero-buttons">
            <a href="#projects" className="btn-orange">My Work</a>
            <a href={resumePDF} download className="btn-orange">Resume</a>
          </div>
        </div>

        <div className="hero-right">
          <p>📍 Pretoria, Gauteng, South Africa</p>
          <p>✉️ obakengtsaagane@gmail.com</p>
          <p>📞 067 630 8354</p>
          <div className="social-icons">
            <a href="https://github.com/obakengshepherd" target="_blank" rel="noreferrer">
              <FaGithub />
            </a>
            <a href="https://linkedin.com/in/obakeng-tsaagane-307544244" target="_blank" rel="noreferrer">
              <FaLinkedin />
            </a>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="container">
        <h2>My Skills</h2>
        
        {/* Tab Headings */}
        <div className="skills-tabs">
          {Object.keys(skillsData).map((category) => (
            <h3
              key={category}
              className={`tab ${activeTab === category ? "active" : ""}`}
              onClick={() => setActiveTab(category)}
            >
              {category}
            </h3>
          ))}
        </div>

        {/* Active Tab Content */}
        <ul className="skills-list">
          {skillsData[activeTab].map((skill, index) => (
            <li key={index}>
              <span className="skill-icon">{skill.icon}</span>
              {skill.name}
            </li>
          ))}
        </ul>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects-section">
      <div className="container projects-section">
        <div className="projects-header">
          <Link to="/projects">
            <h2>Projects</h2>
          </Link>
        </div>
        
        <div className="inner-containers">
          <div className="project-box">
            <h3>Python Project</h3>
            <img src={pythonImg} alt="Python Projects" className="project-image" />
            <Link to="/python" className="btn-orange">
              View Project
            </Link>
          </div>
          
          <div className="project-box">
            <h3>C# Project</h3>
            <img src={csharpImg} alt="C# Projects" className="project-image" />
            <Link to="/csharp" className="btn-orange">
              View Project
            </Link>
          </div>
          
          <div className="project-box">
            <h3>JavaScript Project</h3>
            <img src={javascriptImg} alt="JavaScript Projects" className="project-image" />
            <Link to="/javascript" className="btn-orange">
              View Project
            </Link>
          </div>

          <div className="project-box">
            <h3>Project 361</h3>
            <img src={antiSleep} alt="Project 361" className="project-image" />
            <Link to="/project361" className="btn-orange">
              View Project
            </Link>
          </div>

        </div>
      </div>
      </section>

      {/* Contact Me Section */}
      <section id="contact" className="contact-container">
        <h2>Contact Me</h2>
        <div className="contact-items">
          <div><FaPhone aria-hidden="true" /> <span>067 630 8354</span></div>
          <div><FaEnvelope aria-hidden="true" /> <span>obakengtsaagane@gmail.com</span></div>
          <div>
            <a 
              href="https://linkedin.com/in/obakeng-tsaagane-307544244" 
              target="_blank" 
              rel="noreferrer"
              aria-label="LinkedIn Profile"
              style={{
          color: "white",
          textDecoration: "none",
        }}
        onMouseOver={(e) => (e.target.style.color = "#f97316")}
        onMouseOut={(e) => (e.target.style.color = "white")}
            >
              <FaLinkedin aria-hidden="true" /> <span>LinkedIn</span>
            </a>
          </div>
          <div>
            <a 
              href="https://github.com/obakengshepherd" 
              target="_blank" 
              rel="noreferrer"
              aria-label="GitHub Profile"
              style={{
          color: "white",
          textDecoration: "none",
        }}
        onMouseOver={(e) => (e.target.style.color = "#f97316")}
        onMouseOut={(e) => (e.target.style.color = "white")}
            >
              <FaGithub aria-hidden="true" /> <span>GitHub</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Homepage;
