export default function ProjectCard({ title, description, link, image }) {
  return (
    <div>
      <div className="border">
        <h2 className="text">{title}</h2>
        <img src={image} alt={title} className="project-image" />
        <p className="project-desc">{description}</p>
      </div>
    </div>
  );
}
