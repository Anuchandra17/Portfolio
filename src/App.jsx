import { useState } from "react";
import "./App.css";
import profileImage from "./assets/profile.jpg";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div>
      {/* ================= NAVBAR ================= */}

      <nav className="navbar">
  <div className="logo">Anuchandra</div>

  <button
    className="menu-toggle"
    onClick={() => setMenuOpen(!menuOpen)}
  >
    ☰
  </button>

  <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
    <li><a href="#home" onClick={() => setMenuOpen(false)}>Home</a></li>
    <li><a href="#about" onClick={() => setMenuOpen(false)}>About</a></li>
    <li><a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a></li>
    <li><a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a></li>
    <li><a href="#education" onClick={() => setMenuOpen(false)}>Education</a></li>
    <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></li>
  </ul>
</nav>


      {/* ================= HERO SECTION ================= */}

      <section id="home" className="hero">

        <div className="hero-content">

          {/* HERO TEXT */}

         <div className="hero-text">
  <p className="hero-small-text">Hello, I'm</p>

  <h1>Chakibanda Golla Anuchandra</h1>

  <h2>Python Full Stack Developer</h2>

  <p className="hero-description">
    Computer Science Engineering graduate passionate about
    building reliable and user-friendly web applications.
    I work with Python, Django, Django REST Framework,
    React.js and SQL to develop full-stack solutions.
  </p>

  <div className="hero-buttons">
    <a
      href="#projects"
      className="btn primary-btn"
    >
      View My Projects
    </a>

    <a
      href="#contact"
      className="btn secondary-btn"
    >
      Contact Me
    </a>

    <a
      href="/resume.pdf"
      className="btn resume-btn"
      target="_blank"
      rel="noreferrer"
    >
      Download Resume
    </a>
  </div>
</div>


          {/* PROFILE PHOTO */}

          <div className="hero-image">

            <div className="profile-image-container">

              <img
                src={profileImage}
                alt="Chakibanda Golla Anuchandra"
                className="profile-image"
              />

            </div>

          </div>

        </div>

      </section>


      {/* ================= ABOUT ================= */}
<section id="about" className="about-section">
  <div className="section-container">

    <h2 className="section-title">About Me</h2>

    <div className="about-content">

      <div className="about-text">
        <p>
          I am a Computer Science Engineering graduate with a strong
          interest in software development and modern web technologies.
        </p>

        <p>
          I have knowledge of Python, Django, Django REST Framework,
          SQL, HTML5, CSS3, JavaScript and React.js. I enjoy building
          full-stack applications and learning how frontend and backend
          technologies work together.
        </p>

        <p>
          I have developed projects such as a full-stack JobFinder
          application and a Smart Irrigation System using AI and IoT,
          where I focused on solving practical problems using technology.
        </p>

        <p>
          I am currently looking for an opportunity as a Python Full
          Stack Developer or Software Developer where I can contribute
          to real-world projects and continue developing my technical
          skills.
        </p>
      </div>

      <div className="about-card">
        <h3>Career Objective</h3>

        <p>
          To start my career as a software developer in a growth-oriented
          organization where I can apply my programming and web development
          knowledge, learn new technologies and contribute to successful
          software projects.
        </p>

        <div className="about-strengths">
          <h3>Key Strengths</h3>

          <ul>
            <li>Python & Full-Stack Development</li>
            <li>REST API Development</li>
            <li>React.js & Modern Frontend</li>
            <li>SQL & Database Fundamentals</li>
            <li>Problem Solving</li>
            <li>Continuous Learning</li>
          </ul>
        </div>
      </div>

    </div>

  </div>
</section>


      {/* ================= SKILLS SECTION ================= */}

      <section
        id="skills"
        className="skills-section"
      >

        <div className="section-container">

          <h2 className="section-title">
            My Skills
          </h2>

          <div className="skills-grid">


            {/* PROGRAMMING */}

            <div className="skill-card">
  <h3>💻 Programming</h3>

  <div className="skill-list">
    <span>Python</span>
    <span>C</span>
    <span>JavaScript</span>
  </div>
</div>


            {/* BACKEND */}

            <div className="skill-card">
  <h3>⚙️ Backend</h3>

  <div className="skill-list">
    <span>Django</span>
    <span>Django REST Framework</span>
    <span>REST APIs</span>
  </div>
</div>


            {/* FRONTEND */}

           <div className="skill-card">
  <h3>🎨 Frontend</h3>

  <div className="skill-list">
    <span>HTML5</span>
    <span>CSS3</span>
    <span>JavaScript</span>
    <span>React.js</span>
  </div>
</div>


            {/* DATABASE */}

            <div className="skill-card">
 <h3>🗄️ Database</h3>

  <div className="skill-list">
    <span>SQL</span>
    <span>SQLite</span>
    <span>Database Design</span>
  </div>
</div>


            {/* TOOLS */}

            <div className="skill-card">
  <h3>🛠️ Tools</h3>

  <div className="skill-list">
    <span>Git</span>
    <span>GitHub</span>
    <span>VS Code</span>
    <span>Postman</span>
  </div>
</div>


            {/* OTHER */}

            <div className="skill-card">
  <h3>🚀 Other</h3>

  <div className="skill-list">
    <span>Responsive Design</span>
    <span>Problem Solving</span>
    <span>API Integration</span>
  </div>
</div>

          </div>

        </div>

      </section>


      {/* ================= PROJECTS SECTION ================= */}

      <section
        id="projects"
        className="projects-section"
      >

        <div className="section-container">

          <h2 className="section-title">
            My Projects
          </h2>

          <div className="projects-grid">


            {/* PROJECT 1 */}

            <div className="project-card">

              <div className="project-number">
                01
              </div>

              <h3>
                JobFinder - Full Stack Job Portal
              </h3>

              <p>
                A full-stack job portal application that allows
                users to browse, search and filter job listings
                and apply for suitable job opportunities.
              </p>

              <p className="project-tech">
                <strong>
                  Technologies:
                </strong>{" "}
                Python, Django, Django REST Framework,
                React.js, SQL
              </p>

              <div className="project-buttons">
  <a
    href="https://github.com/Anuchandra17/JobFinder"
    target="_blank"
    rel="noreferrer"
    className="project-btn github-btn"
  >
    GitHub
  </a>

  <a
    href="#"
    className="project-btn demo-btn"
  >
    Live Demo
  </a>
</div>

            </div>


            {/* PROJECT 2 */}

            <div className="project-card">

              <div className="project-number">
                02
              </div>

              <h3>
                Smart Irrigation System using AI and IoT
              </h3>

              <p>
                An intelligent irrigation system that monitors
                soil moisture and uses data analysis to help
                predict watering requirements and improve
                water efficiency.
              </p>

              <p className="project-tech">
                <strong>
                  Technologies:
                </strong>{" "}
                Python, Artificial Intelligence,
                Machine Learning, IoT, Cloud
              </p>

             <div className="project-buttons">
  <a
    href="https://github.com/"
    target="_blank"
    rel="noreferrer"
    className="project-btn github-btn"
  >
    GitHub
  </a>

  <a
    href="#"
    className="project-btn demo-btn"
  >
    Live Demo
  </a>
</div>

            </div>


            {/* PROJECT 3 */}

            <div className="project-card">

              <div className="project-number">
                03
              </div>

              <h3>
                Personal Developer Portfolio
              </h3>

              <p>
                A responsive personal portfolio website
                developed to showcase my technical skills,
                projects, education and contact information.
              </p>

              <p className="project-tech">
                <strong>
                  Technologies:
                </strong>{" "}
                HTML5, CSS3, JavaScript,
                React.js, Vite
              </p>

              <a
                href="#"
                className="project-link"
              >
                View Project →
              </a>

            </div>

          </div>

        </div>

      </section>


      {/* ================= EDUCATION SECTION ================= */}

      <section
        id="education"
        className="education-section"
      >

        <div className="section-container">

          <h2 className="section-title">
            Education
          </h2>

          <div className="education-card">

            <div className="education-year">
              B.E.
            </div>

            <div className="education-details">

              <h3>
                Bachelor of Engineering
              </h3>

              <h4>
                Computer Science Engineering
              </h4>

              <p>
                Specialization: Computer Science – Data Science
              </p>

              <p>
                AMC Engineering College
              </p>
              <p>
                CGPA:7.2
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* ================= CONTACT SECTION ================= */}

      {/* ================= CONTACT ================= */}
<section id="contact" className="contact-section">
  <div className="section-container">

    <h2 className="section-title">Contact Me</h2>

    <div className="contact-content">

      {/* Contact Information */}
      <div className="contact-info">

        <h3>Let's Connect</h3>

        <p>
          I am currently looking for opportunities as a
          Python Full Stack Developer / Software Developer.
        </p>

        {/* Email */}
        <div className="contact-item">
          <strong>Email</strong>
          <p>
            <a href="mailto:anuyadav9949@gmail.com">
              anuyadav9949@gmail.com
            </a>
          </p>
        </div>
        {/* Phone */}
<div className="contact-item">
  <strong>Phone</strong>
  <p>
    <a href="tel:+917899990724">
      +91 7899990724
    </a>
  </p>
</div>

        {/* LinkedIn */}
        <div className="contact-item">
          <strong>LinkedIn</strong>
          <p>
            <a
              href="linkedin.com/in/c-g-anuchandra"
              target="_blank"
              rel="noreferrer"
            >
              Visit my LinkedIn
            </a>
          </p>
        </div>

        {/* GitHub */}
        <div className="contact-item">
          <strong>GitHub</strong>
          <p>
            <a
              href="https://github.com/Anuchandra17"
              target="_blank"
              rel="noreferrer"
            >
              Visit my GitHub
            </a>
          </p>
        </div>

        {/* Location */}
        <div className="contact-item">
          <strong>Location</strong>
          <p>India</p>
        </div>

      </div>

      {/* Contact Form */}
      <div className="contact-form">

        <form>

          <div className="form-group">
            <label>Name</label>

            <input
              type="text"
              placeholder="Enter your name"
            />
          </div>

          <div className="form-group">
            <label>Email</label>

            <input
              type="email"
              placeholder="Enter your email"
            />
          </div>

          <div className="form-group">
            <label>Message</label>

            <textarea
              rows="6"
              placeholder="Enter your message"
            ></textarea>
          </div>

          <button
            type="submit"
            className="btn primary-btn"
          >
            Send Message
          </button>

        </form>

      </div>

    </div>

  </div>
</section>


      {/* ================= FOOTER ================= */}

      <footer className="footer">

        <p>
          © 2026 Chakibanda Golla Anuchandra.
          All rights reserved.
        </p>

        <p>
          Python Full Stack Developer
        </p>

      </footer>

    </div>
  );
}

export default App;