import React, { useRef } from "react";
import { FaLinkedin, FaInstagram, FaGithub, FaTwitter } from "react-icons/fa";

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
    const rotateY = percentX * 50; // left-right tilt
    const rotateX = -percentY * 50; // up-down tilt (negative for natural feel)

    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };

  const handleMouseLeave = () => {
    cardRef.current.style.transform = "rotateX(0) rotateY(0)";
  };

  return (
    <section id="about">
      <div
        className="about-container"
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <div className="Container">
          <div className="about">
            <h1>About Me</h1>
            <p>
              I am a passionate FrontEnd Developer with expertise in React. I
              love creating dynamic and responsive web applications that provide
              excellent user experiences. My skills include HTML, CSS,
              JavaScript, and various React libraries. I am always eager to
              learn new technologies and improve my craft.
            </p>
          </div>

          {/* Social Icons */}
          <div className="social-icons">
            <a
              href="https://www.linkedin.com/in/haider-ali-0a6948305"
              target="_blank"
              rel="noreferrer"
               style={{color: "skyblue", transform: "scale(1.2)"}}
            >
              <FaLinkedin />
            </a>
            <a
              href="https://www.instagram.com/haider_thakur747"
              target="_blank"
              rel="noreferrer"
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
              style={{color: "purple", transform: "scale(1.2)"}}
            >
              <FaGithub />
            </a>
           
          </div>
        </div>
      </div>
    </section>
  );
}
