import React from "react";
import profilepic from "../assets/profile_pic_lavender.png";

export default function AboutMe() {

  const emailAddress = "mailto:myro.joy.olida.092282@gmail.com";

  return (
    <div className="detail">
      <article className="detail-heading">
        <h1 className="self">About Me</h1>
        <img className="profile-pic" src={profilepic} alt="" />
      </article>
      <article className="detail-text">
        <p>
          Hi, I'm Myro and I am currently a Queue Manager at Scale AI and am responsible for optimizing solutions for Large Language Model (LLM) pipelines.
        </p>
        <p>
          I earned my certificate in fullstack web development from The
          University of Pennsylvania through the College of Liberal &
          Professional Studies in collaboration with edX. I am most proficient in JavaScript, have experience with Python, and am able to apply concepts I've learned to any language as needed.
        </p>
        <p>
          My first taste of coding came in college with a course in C++ and
          MatLab. A Psychology degree and a restaurant management experience
          later, I am back in tech to flex my problem-solving muscles.
        </p>
        <p>
          When I am not working or coding, I relax with my daily jogs on the treadmill as well as spend time with my family. My hobbies include reading, knitting, music, and calligraphy. I am currently reading <a href="https://www.penguinbookshop.com/book/9780143119685">A Discovery of Witches</a> from the All Souls Series by Deborah Harkness.
        </p>
        <p>
          If you'd like to chat, drop me an <a className="detail-contact" href={emailAddress}>e-mail.</a>
        </p>
      </article>
    </div>
  );
}
