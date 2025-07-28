type SkillcardsProps = {
    tech: string;
    percentage: number; // use number for easier math
    image: string;
    description: string;
    stroke: string;
};

const Skillcard = ({ tech, percentage, image, description, stroke }: SkillcardsProps) => {
    const radius = 70;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (percentage / 100) * circumference;

    return (
        <div className="skill-card">
            <div className="skill-level-container">{percentage}%</div>
            <svg width="100" height="100" className="skill-wheel">
                <circle
                    cx="80"
                    cy="80"
                    r={radius}
                    stroke={stroke}
                    strokeWidth="10"
                    fill="none"
                    strokeDasharray={circumference}
                    strokeDashoffset={offset}
                    className="skill-wheel"
                    style={{
                        transform: "rotate(-90deg)",
                        transformOrigin: "50% 53%",
                        transition: "stroke-dashoffset 0.5s ease"
                    }}
                />
            </svg>
            <img src={image} className="skill-img" alt={tech} />
            <h1 className="skill-name">{tech}</h1>
            <p className="skill-info">{description}</p>
        </div>
    );
};

export default Skillcard;
