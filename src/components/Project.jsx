import React from "react";
import ProjectCard from "./ProjectCard.jsx";
import "../styles/Project.css";
// import PandaKnits from "../assets/panda-knits.png";
// import PandaBytesBlog from "../assets/panda-bytes-blog.png";
// import LordOfThePies from "../assets/lord-of-the-pies.png";
// import EndWorldThirst from "../assets/end-world-thirst.png";
// import NoteWorthyEditor from "../assets/note-worthy-editor.png";
// import WhatIsMyWeather from "../assets/wmw.png";
import WhatIsMyWeather from "../assets/wmw_ts.png";
import TicTacToe from "../assets/tic-tac-toe.png";

const projectCards = [
  // {
  //   id: "1",
  //   front: PandaKnits,
  //   back: {
  //     title: "Panda Knits",
  //     description: "E commerce site",
  //     technologies: "MongoDB, Express, React, NodeJS",
  //   },
  //   link: "https://panda-knits-847b929e7885.herokuapp.com/",
  //   repo: "https://github.com/myrojoylee/panda-knits",
  // },
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
  // {
  //   id: "3",
  //   front: PandaBytesBlog,
  //   back: {
  //     title: "Panda Bytes Blog",
  //     description: "Tech blog",
  //     technologies: "NodeJS, Express, HandlebarsJS, MySQL, Sequelize",
  //   },
  //   link: "https://panda-bytes-blog-2c69ca0b6d05.herokuapp.com/",
  //   repo: "https://github.com/myrojoylee/panda-bytes-blog",
  // },
  // {
  //   id: "4",
  //   front: LordOfThePies,
  //   back: {
  //     title: "Lord of the Pies",
  //     description: "Dessert Recipe Site",
  //     technologies: "NodeJS, Express, HandlebarsJS, MySQL, Sequelize",
  //   },
  //   link: "https://lord-of-the-pies-f3c957a9b4a8.herokuapp.com/",
  //   repo: "https://github.com/myrojoylee/Lord-of-the-Pies",
  // },
  // {
  //   id: "5",
  //   front: EndWorldThirst,
  //   back: {
  //     title: "End World Thirst",
  //     description: "Brewery locator app",
  //     technologies: "HTML, CSS, JavaScript, APIs",
  //   },
  //   link: "https://myrojoylee.github.io/end-world-thirst/",
  //   repo: "https://github.com/myrojoylee/end-world-thirst",
  // },
  // {
  //   id: "6",
  //   front: NoteWorthyEditor,
  //   back: {
  //     title: "NoteWorthy Editor",
  //     description: "Text Editor PWA",
  //     technologies: "NodeJS, Express, JavaScript",
  //   },
  //   link: "https://note-worthy-editor-994ec6cf6337.herokuapp.com/",
  //   repo: "https://github.com/myrojoylee/note-worthy-editor",
  // },
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
