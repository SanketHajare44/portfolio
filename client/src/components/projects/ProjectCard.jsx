const ProjectCard = ({ project }) => {
    return (
        <article>
            <h2>{project.title}</h2>

            <ul>
                {project.description.map((point, index) => (
                    <li key={index}>{point}</li>
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