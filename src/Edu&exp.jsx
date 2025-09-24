

export default function Portfolio() {
  return (
    <div className="portfolio">
      <h1 className="section-title">Education & Experience</h1>

      <div className="grid-layout">
       
        <div className="card">
          <h2>Bachelor of Science in Computer Science</h2>
          <h3>University of Management and Technology</h3>
          <p>2023 - Present</p>
        </div>

        <div className="card">
          <h2>JavaScript Programming Course</h2>
          <h3>Coursera Online Learning Platform</h3>
          <p>Gained strong skills in ES6, DOM, and web interactivity</p>
        </div>

        <div className="card">
          <h2>Intern — TechLing</h2>
          <p><i>Duration: 10 weeks</i></p>
          <ul>
            <li>Learned HTML, CSS, JavaScript, React, UX/UI</li>
            <li>Gained awareness of market trends and professional workflows</li>
            <li>Contributed to mini-projects applying modern design principles</li>
          </ul>
        </div>

        
        <div className="card">
          <h2>Web Development Projects</h2>
          <p>
            Built responsive websites using HTML, CSS, JavaScript, React with
            focus on UI/UX design.
          </p>
        </div>

        <div className="card">
          <h2>AI-Assisted Development</h2>
          <p>
            Leveraged Prompt Engineering to optimize coding workflows, debug
            efficiently, and accelerate learning in frontend development.
          </p>
        </div>

        {/* Skills as a 6th card */}
        <div className="card">
          <h2>Skills</h2>
          <ul>
            <li><b>Web Development:</b> HTML, CSS, JavaScript, React, PHP(Basic), MySQL(Basic)</li>
            <li><b>Design Tools:</b> UI/UX principles</li>
            <li>
              <b>AI & Prompt Engineering:</b>
              <ul>
                <li>Structured prompts for React, CSS, and JavaScript coding tasks</li>
                <li>AI-assisted content creation, report writing, and debugging</li>
                <li>Applied role-based prompting for real-world problem-solving</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
