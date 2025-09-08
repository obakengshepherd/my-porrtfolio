import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";

function Project361() {
  const projectProject = [
    { id: 1, title: "Sub-Container 1" },
    { id: 2, title: "Sub-Container 2" },
    { id: 3, title: "Sub-Container 3" },
    { id: 4, title: "Sub-Container 4" },
  ];

  return (
    <div className="homepage">
      <Navbar />

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-center">
          <h1>Software Developer</h1>
          <h3>Web Development | Databases</h3>
        </div>
      </section>

      <main>
        <div className="container projects-section">
          <div className="projects-header">
            <h2>Project361</h2>
          </div>

          {/* Inner Containers */}
          <div className="inner-containers">
            {projectProject.map((project) => (
              <div key={project.id} className="project-box">
                <h3>{project.title}</h3>

                {/* Two Image Placeholders */}
                <div style={{ display: "flex", gap: "1rem", marginBottom: "1rem" }}>
                  <div className="image-placeholder">Img 1</div>
                  <div className="image-placeholder">Img 2</div>
                </div>

                {/* Buttons */}
                <div style={{ display: "flex", gap: "1rem", justifyContent: "center" }}>
                  <button className="btn-orange">Btn 1</button>
                  <button className="btn-orange">Btn 2</button>
                </div>
              </div>
            ))}
          </div>

          {/* Even More Projects Link */}
          <section className="even-more-projects">
            <Link to="/EvenMoreProjects">Even More Projects →</Link>
          </section>
        </div>
      </main>

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
}

export default Project361;
