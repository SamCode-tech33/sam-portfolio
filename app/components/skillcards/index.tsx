type SkillcardsProps = {
    tech: string,
    percentage: string,
    image: string,
    description: string,
}

const Skillcard = ({ tech, percentage, image, description }: SkillcardsProps) => {
    return (
        <div className="skill-card">
            <img src={image} className="skill-img" alt="" />
            <div className="skill-level">{percentage}</div>
            <h1 className="skill-name">{tech}</h1>
            <p className="skill-info">{description}</p>
        </div>
    )
}

export default Skillcard;