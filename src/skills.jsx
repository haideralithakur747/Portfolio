export default function Skills() {
  return (
    <section id="skills" className="portfolio">
      <h1 className="section-title">Skills</h1>
      <div className="grid-layout">
        <div className="card">
          <h2>Frontend</h2>
          <p>
            Building responsive, accessible interfaces with a focus on clean,
            reusable components and modern UI patterns.
          </p>
          <ul>
            <li>React, JSX</li>
            <li>JavaScript (ES6+)</li>
            <li>HTML5, Semantic Markup</li>
            <li>CSS3, Flexbox, Grid</li>
          </ul>
        </div>

        <div className="card">
          <h2>Styling & UX</h2>
          <p>
            Crafting visually appealing layouts that feel modern, consistent,
            and user-friendly across devices.
          </p>
          <ul>
            <li>Responsive Design</li>
            <li>Animation & Micro‑interactions</li>
            <li>Color & Typography Systems</li>
            <li>Component‑driven design</li>
          </ul>
        </div>

        <div className="card">
          <h2>Tools & Workflow</h2>
          <p>
            Using modern tooling and AI‑assistance to ship faster and maintain
            high code quality.
          </p>
          <ul>
            <li>Git & GitHub</li>
            <li>Vite, npm</li>
            <li>AI‑assisted debugging & refactoring</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

