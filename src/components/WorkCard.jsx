import PropTypes from "prop-types"

const WorkCard = ( {title, logo, company, duration, description } ) => {
  return (
    <div className="grid grid-cols-3 relative p-4 rounded-2xl bg-zinc-800 hover:bg-zinc-700/50 active:bg-zinc-700/60 ring-1  ring-inset ring-zinc-50/5 transition-colors">
        <div className="col-span-1 flex items-center justify-center">
            <img src={logo} alt={company} className="w-36 h-36" />
        </div>

        <div className="col-span-2">
            <h3 className="title-1 mb-2">{title}</h3>
            <p className="text-zinc-400 mb-2">{company}</p>
            <p className="text-zinc-400 mb-2">{duration}</p>
            <p className="text-zinc-400">{description}</p>
        </div>
    </div>
  )
}

WorkCard.propTypes = {
    title: PropTypes.string.isRequired,
    logo: PropTypes.string.isRequired,
    company: PropTypes.string.isRequired,
    duration: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
}

export default WorkCard