import React from 'react'
import WorkCard from './WorkCard'

const works = [
    {
        title: "Software engineer intern",
        logo: "/images/midokura_logo.jpg",
        company: "Midokura (SONY Group)",
        duration: "April 2024 - Present",
        description: "Intern as a software engineer in charge of developing a VS Code extension addressed to WebAssembly developers."
    }
]

const Work = () => {
  return (
    <section id="work" className="section">
      <div className="container">
        <h2 className="headline-2 mb-8 reveal-up">Work experience</h2>
        <div>
            {works.map((work, index) => (
                <WorkCard key={index} title={work.title} logo={work.logo} company={work.company} duration={work.duration} description={work.description} classes="reveal-up"/>
            ))}
        </div>
      </div>
    </section>
  )
}

export default Work