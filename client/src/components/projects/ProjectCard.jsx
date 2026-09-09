const FormattedText = ({ text }) => {
    if (!text) return null;

    const parts = text.split(/(\*\*.*?\*\*)/g);

    return (
        <>
            {parts.map((part, index) => {
                if (
                    part.startsWith("**") &&
                    part.endsWith("**") &&
                    part.length > 4
                ) {
                    return (
                        <strong
                            key={index}
                            className="font-semibold"
                        >
                            {part.slice(2, -2)}
                        </strong>
                    );
                }

                return <span key={index}>{part}</span>;
            })}
        </>
    );
};


const ProjectCard = ({ project }) => {
    return (
        <article>
            <h2>{project.title}</h2>

            <ul>
                {project.description.map((point, index) => (
                    <li key={index}>
                        <FormattedText text={point} />
                    </li>
                ))}
            </ul>

            <div>
                {project.technologies.map((technology) => (
                    <span key={technology}>
                        {technology}
                    </span>
                ))}
            </div>
        </article>
    );
};

export default ProjectCard;