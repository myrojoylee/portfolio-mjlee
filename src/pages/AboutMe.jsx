import React from "react";
import profilepic from "../assets/profile_pic_lavender_feb_14.png";

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
          Hi, I'm Myro and I am a technical professional with experience in Human Data for LLM pipelines!  I currently work as a Human Data Lead for AI projects at micro1! Before this, I was most recently a Queue Manager at Scale AI and worked in optimizing solutions for Large Language Model (LLM) pipelines in the Coding domain of Generative AI.
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
          When I am not working or coding, I relax with indoor/outdoor walks and jogs as well as spend time with my family. My hobbies include reading, knitting, music, and calligraphy. I am currently reading <a href="https://mlwangbooks.com/blood-over-bright-haven/" target="_blank">Blood over Bright Haven</a> by M.L. Wang.
        </p>
        <p>
          If you'd like to chat, drop me an <a className="detail-contact" href={emailAddress}>e-mail.</a>
        </p>
      </article>
    </div>
  );
}
