import React from "react";
import profilepic from "../assets/profile_pic_lavender.png";

export default function AboutMe() {
  return (
    <div className="detail">
      <article className="detail-heading">
        <h1 className="self">About Me</h1>
        <img className="profile-pic" src={profilepic} alt="" />
      </article>
      <article className="detail-text">
        <p>
          Hi, I'm Myro and I am a fullstack developer! I love making things look
          amazing and functional on the web. I also love solving problems and
          helping others solve theirs.
        </p>
        <p>
          My first taste of coding came in college with a course in C++ and
          MatLab. A Psychology degree and a restaurant management experience
          later, I am back in tech to flex my problem-solving muscles.
        </p>
        <p>
          I recently earned my certificate in fullstack web development from The
          University of Pennsylvania through the College of Liberal &
          Professional Studies in collaboration with edX.
        </p>
        <p>
          After many debugging sessions later, I am loving it more than ever! I
          look forward to transforming your ideas into sustainable solutions.
        </p>
      </article>
    </div>
  );
}
