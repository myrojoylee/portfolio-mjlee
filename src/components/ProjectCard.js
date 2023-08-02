import React, { useState } from "react";
import "../styles/Project.css";

function ProjectCard({ card: { back, front, link, repo } }) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [frontStyle, setFrontStyle] = useState({ display: "block" });

  const handleChildClick = (e) => {
    // e.preventDefault();
    e.stopPropagation();
  };

  const handleFlip = (bool) => {
    if (bool) {
      setTimeout(() => {
        setFrontStyle({ display: "none" });
      }, 700);
    } else {
      setFrontStyle({ display: "block" });
    }
    setIsFlipped(bool);
  };

  return (
    <div className="main-card">
      <div
        onClick={() => handleFlip(!isFlipped)}
        className={isFlipped ? "is-flipped game-card" : "game-card"}
      >
        <div className="card-face card-back">
          <p>Title: {back.title}</p>
          <p>Details: {back.description}</p>
          <p>Technologies: {back.technologies}</p>
          <div className="project-link-group">
            <a onClick={handleChildClick} target="_blank" href={link}>
              <span className="project-link">Link to deployed app</span>
            </a>
            <a onClick={handleChildClick} target="_blank" href={repo}>
              <span className="project-link">Link to GitHub repo</span>
            </a>
          </div>
        </div>

        <div className="card-face card-front" style={frontStyle}>
          <img src={front} alt="" className="project-card-img" />
          <p className="click-me">Click for details</p>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
