import SkillCard from "./SkillCard";

const skillItem = [
  {
    imgSrc: "/images/cplusplus.svg",
    label: "C++",
    desc: "Programming"
  },
  {
    imgSrc: "/images/python-5.svg",
    label: "Python",
    desc: "Programming"
  },
  {
    imgSrc: "/images/java-4.svg",
    label: "Java",
    desc: "Programming"
  },
  {
    imgSrc: "/images/javascript.svg",
    label: "JavaScript",
    desc: "Interaction"
  },
  {
    imgSrc: "/images/typescript.svg",
    label: "TypeScript",
    desc: "Programming"
  },  
  {
    imgSrc: "/images/react.svg",
    label: "React",
    desc: "Framework"
  },
  {
    imgSrc: "/images/tailwindcss.svg",
    label: "Tailwind CSS",
    desc: "Framework"
  },
  {
    imgSrc: "/images/flutter.svg",
    label: "Flutter",
    desc: "Framework"
  },
  {
    imgSrc: "/images/mongodb.svg",
    label: "MongoDB",
    desc: "Database"
  },
  {
    imgSrc: "/images/postgresql.svg",
    label: "PostgreSQL",
    desc: "Database"
  },
  {
    imgSrc: "/images/docker-4.svg",
    label: "Docker",
    desc: "Containerization"
  },
  {
    imgSrc: "/images/git-icon.svg",
    label: "Git",
    desc: "Version control"
  },
];

const Skill = () => {
  return (
    <section className="section">
        <div className="container">
            <h2 className="headline-2 reveal-up">
                Essential tools and technologies
            </h2>

            <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch] reveal-up">
                I have experience working with the following tools and technologies:
            </p>

            <div className="grid gap-3 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {
                    skillItem.map((item, index) => (
                        <SkillCard key={index} imgSrc={item.imgSrc} label={item.label} desc={item.desc} classes="reveal-up"/>
                    ))
                }
            </div>
        </div>
    </section>
  )
};

export default Skill;
