import Project from "../components/Project";
import "../styles/Project.css";

export default function Portfolio() {
  return (
    <section className="project-detail">
      <article className="project-detail-text">
        <h1>Selected Work</h1>
        <p>Click any of the projects below for more details!</p>
      </article>
      <Project />
    </section>
  );
}
