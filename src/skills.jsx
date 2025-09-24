import React from "react";

const skills = [

  { name: "Git",  icon: "🔗" },
  { name: "HTML", icon: "📄" },
  { name: "CSS", icon: "🎨" },
  { name: "JavaScript", icon: "🌊" },
  { name: "React", icon: "⚛️" },
  { name: "C++", icon: "🔷" }
];

export default function SkillsCarousel() {
  return (
    <section id ="skills" >
      <h1 style={{color: "white",textAlign: "center",marginTop: "80px",fontSize: "75px"}}>My Skills</h1>
    <div className="carousel">
      <div className="carousel__container">
        {skills.map((skill, i) => (
          <div className="carousel__item" key={i}>
            <div className="icon">{skill.icon}</div>
            <h3>{skill.name}</h3>
            <p>{skill.desc}</p>
          </div>
        ))}
      </div>
    </div>
    </section>
  );
}
