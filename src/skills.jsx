export default function Skills() {
  return (
    <section id="skills" className="portfolio">
      <h1 className="section-title">Skills</h1>
      <p className="vibe">I build fast, accessible, and visually polished interfaces using React and modern CSS.</p>
      <div className="grid-layout">
        <div className="card">
          <h2>Frontend</h2>
          <ul>
            <li>React, JSX</li>
            <li>JavaScript (ES6+)</li>
            <li>HTML5, Semantic Markup</li>
            <li>CSS3, Flexbox, Grid</li>
          </ul>
        </div>

        <div className="card">
          <h2>Styling & UX</h2>
          <ul>
            <li>Responsive Design</li>
            <li>CSS Animations</li>
            <li>CSS Grid & Flexbox</li>
            <li>Component-driven UI</li>
          </ul>
        </div>

        <div className="card">
          <h2>Tools & Workflow</h2>
          <ul>
            <li>Git & GitHub</li>
            <li>Vite, npm</li>
            <li>VS Code, ESLint</li>
            <li>Chrome DevTools, Postman</li>
            <li>Figma (basic)</li>
          </ul>
        </div>
      </div>
    </section>
  );
}


