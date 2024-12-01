import ProjectCard from "./ProjectCard";


const projects = [
  {
    title: "UNImate",
    tags: ["Mobile App", "React Native", "Firebase"],
    description: "A mobile app that helps students in their academic journey. Features: Universities information, forums, chats and a matching system.",
  },
  {
    title: "BO Sneakers",
    tags: ["PHP", "PostgreSQL", "MVC"],
    description: "An e-commerce website that sells sneakers. Features: User authentication, product management, shopping cart and order management.",
  },
  {
    title: "Formula 1 data analysis",
    tags: ["Python", "Machine Learning", "Data Analysis"],
    description: "A data analysis project that uses machine learning to predict the next winning team in Formula 1. Features: Linear regression, Clustering, Data visualization."
  },
  {
    title: "Access Control System",
    tags: ["Java", "Flutter", "UI/UX"],
    description: "A project that uses Java for the backend and Flutter for the frontend, with the objective of learning design patterns and UI/UX principles."
  },
];

const Project = () => {
  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="headline-2 mb-8 reveal-up">Projects</h2>

        <div className="grid gap-x-4 gap-y-5 grid-cols-1 sm:grid-cols-2 justify-items-center">
          {projects.map((project, index) => (
            <ProjectCard key={index} title={project.title} tags={project.tags} description={project.description} classes="reveal-up" />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
