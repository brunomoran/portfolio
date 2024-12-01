import PropTypes from "prop-types";

const ProjectCard = ({ title, tags, description, classes }) => {
  return (
    <div
      className={
        "relative p-4 rounded-2xl bg-zinc-800 hover:bg-zinc-700/50 active:bg-zinc-700/60 ring-1  ring-inset ring-zinc-50/5 transition-colors " +
        classes
      }
    >
      <div className="flex items-center justify-between gap-4">
        <div>
          <h3 className="title-1 mb-3">{title}</h3>
          <p className="text-zinc-400 mb-3">{description}</p>
          <div className="flex flex-wrap items-center gap-2">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="px-3 h-8 text-sm text-zinc-400 bg-zinc-50/5 grid items-center rounded-lg"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  tags: PropTypes.array.isRequired,
  description: PropTypes.string.isRequired,
  classes: PropTypes.string,
};

export default ProjectCard;
