import React from "react";
import { FaGraduationCap, FaBriefcase, FaRocket, FaRobot } from "react-icons/fa";

export default function EducationExperience() {
  return (
    <section id="education" className="edu-section container">
      <h1 className="section-title">Education & Experience</h1>

      <div className="timeline">
        <div className="timeline-item">
          <div className="timeline-badge"><FaGraduationCap /></div>
          <div className="timeline-content">
            <div style={{marginBottom:8}}>
              <span className="tag tag.edu">Education</span>
            </div>
            <h3>B.Sc. Computer Science</h3>
            <div className="meta"><span className="active-dot"/>University of Management and Technology — 2023 - Present</div>
            <p>Completed projects in React, JavaScript, and ML, including an AI-based crop prediction tool and other live web apps.</p>
          </div>
        </div>

        <div className="timeline-item accent-left">
          <div className="timeline-badge"><FaBriefcase /></div>
          <div className="timeline-content">
            <div style={{marginBottom:8}}>
              <span className="tag tag.exp">Experience</span>
            </div>
            <h3>Intern — TechLing</h3>
            <div className="company-meta">TechLing · Startup</div>
            <div className="meta">Jan 2025 – Mar 2025 · 2 Months — Frontend & UX</div>
            <p>Built responsive UI components using React and Material Design, delivering 3 interactive features during a 2-month internship.</p>
            <div className="skill-chips">
              <span className="chip">React</span>
              <span className="chip">HTML/CSS</span>
              <span className="chip">UX/UI</span>
            </div>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-badge"><FaRocket /></div>
          <div className="timeline-content">
            <div style={{marginBottom:8}}>
              <span className="tag tag.cert">Projects</span>
            </div>
            <h3>Web Projects & Launches</h3>
            <div className="meta">Personal and client projects</div>
            <p>Built and deployed multiple production demos — focus on performance, accessibility, and clear UX.</p>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-badge"><FaRobot /></div>
          <div className="timeline-content">
            <div style={{marginBottom:8}}>
              <span className="tag tag.cert">Tooling</span>
            </div>
            <h3>AI‑Assisted Development</h3>
            <div className="meta">Tooling & Prompt Engineering</div>
            <p>Using AI to speed up design iterations, code scaffolding, and automated testing workflows.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
