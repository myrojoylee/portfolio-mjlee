import React from "react";
import Project from "../components/Project";
import "../styles/Project.css";

export default function Portfolio({ handlePageChange }) {
  return (
    <section className="project-detail">
      <article className="project-detail-text">
        <h1>My Work</h1>
        <p>Click any of the projects below for more details!</p>
      </article>
      <Project handlePageChange={handlePageChange} />
    </section>
  );
}
