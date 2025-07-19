import React from "react";
import WorkCard from "./WorkCard";

const works = [
  {
    title: "Full Stack Software engineer",
    logo: "images/1631320917570.jpg",
    company: "app2U",
    duration: "March 2025 - Present",
    description:
      "Currently working as a software engineer, focusing on developing scalable backend and frontend solutions for various clients.",
  },
  {
    title: "Software engineer intern",
    logo: "/images/midokura_logo.jpg",
    company: "Midokura (SONY Group)",
    duration: "April 2024 - January 2025",
    description:
      "Intern as a software engineer in charge of developing a VS Code extension addressed to WebAssembly developers.",
  },
];

const Work = () => {
  return (
    <section id="work" className="section">
      <div className="container">
        <h2 className="headline-2 mb-8 reveal-up">Work experience</h2>
        <div>
          {works.map((work, index) => (
            <WorkCard
              key={index}
              title={work.title}
              logo={work.logo}
              company={work.company}
              duration={work.duration}
              description={work.description}
              classes="reveal-up"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
