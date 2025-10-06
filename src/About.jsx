import React, { useRef } from "react";
import { FaLinkedin, FaInstagram, FaGithub, FaTwitter, FaFileDownload } from "react-icons/fa";

export default function About() {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();

    // mouse position inside card
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // normalize -0.5 to 0.5
    const percentX = (x / rect.width) - 0.75;
    const percentY = (y / rect.height) - 0.75;

    // multiply for rotation intensity
    const rotateY = percentX * 50;
    const rotateX = -percentY * 50;

    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };

  const handleMouseLeave = () => {
    cardRef.current.style.transform = "rotateX(0) rotateY(0)";
  };

 

  return (
    <section id="about">
      <div   >
      <div
       
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <div className="Container">
          <div className="about">
            <h1>About Me</h1>
            <p>
              I'm a <strong>Frontend Developer</strong> specializing in modern web technologies 
              with a strong focus on <strong>React ecosystem</strong>. I build fast, responsive, 
              and accessible web applications that deliver exceptional user experiences.
            </p>
            
            <p>
              My expertise includes <strong>React,  JavaScript</strong>, 
              and modern CSS. I'm passionate about clean code, performance optimization, 
              and staying up-to-date with the latest web technologies.
            </p>
            
            <p>
              When I'm not coding, you'll find me exploring new frameworks, 
              contributing to open-source projects, or learning about UI/UX best practices 
              to create more intuitive digital experiences.
            </p>

          
          </div>

          {/* Social Icons */}
          <div className="social-icons">
            <a
              href="https://www.linkedin.com/in/haider-ali-0a6948305"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              style={{color: "skyblue", transform: "scale(1.2)"}}
            >
              <FaLinkedin />
            </a>
            <a
              href="https://www.instagram.com/haider_thakur747"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              style={{
                background: "linear-gradient(45deg, #feda75, #fa7e1e, #d62976, #962fbf, #4f5bd5)",
                transform: "scale(1.2)"
              }}
            >
              <FaInstagram />
            </a>
            <a
              href="https://github.com/haideralithakur747"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              style={{color: "purple", transform: "scale(1.2)"}}
            >
              <FaGithub />
            </a>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}