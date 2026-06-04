type SkillcardsProps = {
  tech: string;
  image: string;
  description: string;
  stroke: string;
};

const Skillcard = ({ tech, image, description }: SkillcardsProps) => {
  return (
    <div className="skill-card">
      <img src={image} className="skill-img" alt={tech} />
      <h1 className="skill-name">{tech}</h1>
      <p className="skill-info">{description}</p>
    </div>
  );
};

export default Skillcard;
