import { useState, useEffect } from "react";

export default function Home() {
  const words = ["MernStack Developer", "Full-Stack Developer", "UI-focused Developer"];
  const [i, setI] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[i % words.length];
    let timeout;

    if (!deleting && text.length < current.length) {
      timeout = setTimeout(() => setText(current.slice(0, text.length + 1)), 90);
    } else if (deleting && text.length > 0) {
      timeout = setTimeout(() => setText(current.slice(0, text.length - 1)), 45);
    } else if (!deleting && text.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 900);
    } else if (deleting && text.length === 0) {
      setDeleting(false);
      setI((n) => (n + 1) % words.length);
    }

    return () => clearTimeout(timeout);
  }, [text, deleting, i]);

  return (
    <section id="home">
      <div className="hero container">
        <div className="hero-content">
          <p className="eyebrow">
            <span style={{letterSpacing: '1px', textTransform: 'uppercase', color: 'var(--muted)', fontSize: '0.85rem'}}>Full-Stack Developer</span>
          </p>

          <h1 className="hero-title">Haider Thakur</h1>
          <h2 className="hero-subtitle">{text}<span className="cursor">|</span></h2>

          <p className="hero-desc">CS student at UMT building real-world React apps — from AI crop tools to live web converters.</p>

          <div className="signal-panel" aria-label="Highlights">
            <div className="signal-item">
              <span className="signal-value">6+</span>
              <span className="signal-label">live projects</span>
            </div>
            <div className="signal-item">
              <span className="signal-value">2+</span>
              <span className="signal-label">years coding</span>
            </div>
            <div className="signal-item">
              <span className="signal-value">React · CSS · UI</span>
              <span className="signal-label">core stack</span>
            </div>
          </div>

          <div className="hero-note">
            <span className="hero-note-dot" />
            <span>Clean React builds. Sharp visuals. Fast recruiter scan time.</span>
          </div>

          <div className="hero-cta">
            <a className="btn primary" href="#projects">View Projects</a>
            <a className="btn ghost" href="/Haider_Ali__Resume.pdf" download>Download CV</a>
          </div>

          <a className="scroll-cue" href="#about" aria-label="Scroll to about section">
            <span className="scroll-cue-line" />
            <span>Scroll for more</span>
          </a>
        </div>
      </div>
    </section>
  );
}
