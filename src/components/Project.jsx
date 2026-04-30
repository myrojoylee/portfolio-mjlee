import ProjectCard from "./ProjectCard";
import "../styles/Project.css";
import WhatIsMyWeather from "../assets/wmw_ts.png";
import TicTacToe from "../assets/tic-tac-toe.png";

const projectCards = [
  {
    id: "2",
    front: WhatIsMyWeather,
    back: {
      title: "What Is My Weather?",
      description: "Weather Forecast App",
      technologies: "React, TypeScript",
    },
    link: "https://wmw-v1.netlify.app/",
    repo: "https://github.com/myrojoylee/wmw-v1.5",
  },
  {
    id: "7",
    front: TicTacToe,
    back: {
      title: "Tic Tac Toe",
      description: "Classic tic tac toe game",
      technologies: "HTML, CSS, JavaScript",
    },
    link: "https://myrojoylee.github.io/tic-tac-toe/",
    repo: "https://github.com/myrojoylee/tic-tac-toe",
  },
];

function Project() {
  return (
    <div className="project-card-group">
      {projectCards.map((card) => (
        <ProjectCard key={card.id} card={card} />
      ))}
    </div>
  );
}

export default Project;
