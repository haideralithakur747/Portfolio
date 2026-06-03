import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function About() {
  return (
    <section id="about" className="about-section container">
      <div className="section-heading-wrap">
        <h1 className="section-title">About Me</h1>
      </div>

      <div className="about-grid">
        <div className="about-photo">
          <img src="/picture.png" alt="Haider Thakur" />
        </div>

        <div className="about-copy">
          <p className="about-lead">
            I&apos;m a CS student at UMT Lahore building real-world frontend projects with React and JavaScript.
          </p>

          <p>
            I completed a short internship at TechLing, where I built responsive UI components and worked on feature delivery with modern CSS and React.
          </p>

          <p>
            I&apos;ve shipped live projects independently, including an AI crop prediction tool and several interactive web apps. I care about clean code, readable interfaces, and layouts that work well on every device.
          </p>

          <div className="about-links">
            <a href="https://www.linkedin.com/in/haider-ali-0a6948305" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <FaLinkedin /> LinkedIn
            </a>
            <a href="https://github.com/haideralithakur747" target="_blank" rel="noreferrer" aria-label="GitHub">
              <FaGithub /> GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}