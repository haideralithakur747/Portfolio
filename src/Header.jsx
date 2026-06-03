import { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import "./App.css";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="container header-inner">
        <a href="#home" className="brand">Haider Thakur</a>

        <button
          className="menu-toggle"
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen((s) => !s)}
        >
          ☰
        </button>

        <nav className={`main-nav ${open ? "open" : ""}`}>
          <a href="#home" onClick={() => setOpen(false)}>Home</a>
          <a href="#about" onClick={() => setOpen(false)}>About</a>
          <a href="#skills" onClick={() => setOpen(false)}>Skills</a>
          <a href="#projects" onClick={() => setOpen(false)}>Projects</a>
          <a className="contact-pill" href="#contact" onClick={() => setOpen(false)}>Contact</a>
        </nav>

        <div className="header-icons">
          <a href="https://github.com/haideralithakur747" target="_blank" rel="noreferrer" aria-label="GitHub"><FaGithub /></a>
          <a href="https://www.linkedin.com/in/haider-ali-0a6948305" target="_blank" rel="noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
        </div>
      </div>
    </header>
  );
}
