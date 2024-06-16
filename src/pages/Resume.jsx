import React from "react";
import "../styles/Resume.css";

export default function Resume() {
  return (
    <>
      <div className="resume resume-detail">
        <article className="resume-section">
          <h3 className="resume-section-heading">PROFESSIONAL SUMMARY</h3>
          <p>Passionate fullstack developer with excellent management and leadership skills. A versatile and outstanding communicator who quickly adapts to different learning environments to collaborate across teams. A proactive, independent problem-solver who can manage multiple projects.</p>
        </article>
        <article className="resume-section">
          <h3 className="resume-section-heading">TECHNICAL SKILLS</h3>
          <div className="resume-skills-list">
            <p><span className="resume-skills-category">Web Technologies</span>: React, JavaScript, Python, TypeScript, NodeJS, Express, HTML</p>
            <p><span className="resume-skills-category">CSS Frameworks</span>: Bootstrap, Tailwind, Bulma</p>
            <p><span className="resume-skills-category">Database Technologies</span>: MySQL, NoSQL, Mongoose, GraphQL, Sequelize</p>
            <p><span className="resume-skills-category">Operating Systems</span>: Mac OS, Windows</p>
            <p><span className="resume-skills-category">Tools</span>: Visual Studio Code, Chrome DevTools, Insomnia, MySQL Workbench, Jest, Apollo Sandbox, MongoDB Compass, GitHub Pages, Heroku, Netlify</p>

          </div>
        </article>
        <article className="resume-section">

          <h3 className="resume-section-heading">RELEVANT EXPERIENCE</h3>
          <div>
            <div className="resume-experience-heading">
              <p><span className="resume-subheading">Scale AI</span>, remote</p>
              <p className="resume-subheading">Queue Manager</p>
            </div>
            <p>5/2024 - present</p>
            <ul>
              <li>Manage communications to foster productive collaboration among team members</li>
              <li>Identify and address issues to improve performance, engagement, and throughput</li>
              <li>Collaborate with project management to create training courses, best practices manuals, and material for onboarding new team members for a smooth transition to align with project guidelines</li>
              <li>Audit submissions in the pipeline to ensure high-quality deliverables</li>
            </ul>
          </div>
          <div>
            <div className="resume-experience-heading">
              <p><span className="resume-subheading">Scale AI</span>, remote</p>
              <p className="resume-subheading">Team Lead</p>
            </div>
            <div>
              <p>2/2024 - 5/2024</p>
            </div>
            <ul>
              <li>Led and managed a contributor squad to ensure compliance with quality standards and project guidelines</li>
              <li>Performed daily audits to identify areas of improvement to maintain high-quality work</li>
              <li>Provided support to resolve project-related issues through effective communication</li>
            </ul>
          </div>
          <div>
            <div className="resume-experience-heading">
              <p><span className="resume-subheading">Remotasks</span>, remote</p>
              <p className="resume-subheading">Independent Contractor</p>
            </div>
            <p>12/2023 - 2/2024</p>
            <ul>
              <li>Aided in training a LLM (Large Language Model) by providing high-quality responses to coding prompts</li>
              <li>Reviewed submitted responses to ensure correctness according to project specifications</li>
              <li>Provided help to fellow taskers/reviewers in community Slack channels</li>
            </ul>
          </div>
          <div>
            <div className="resume-experience-heading">
              <p><span className="resume-subheading">Private Tutor</span>, State College, PA, remote</p>
            </div>
            <p>8/2007 - 12/2023</p>
            <ul>
              <li>Experience in working with students at the elementary, secondary, collegiate, and post-collegiate level</li>
              <li>Facilitated learning with personalized lesson plans for goal-driven and self-directed growth</li>
              <li>Assisted students in Math, Chemistry, English, and HTML/CSS/JavaScript</li>
            </ul>
          </div>
          <div>
            <div className="resume-experience-heading">
              <p><span className="resume-subheading">Maki Yaki Restaurant</span>, State College, PA</p>
              <p className="resume-subheading">Co-owner, Manager</p>
            </div>
            <p>8/2015 - 10/2022</p>
            <ul>
              <li>Overhauled daily operations in order to remain as a competitive dining establishment</li>
              <li>Collaborated with online ordering platforms to provide quality delivery options</li>
              <li>Certified in food handling procedures to ensure safety for customers</li>
            </ul>
          </div>
        </article>
        <article className="resume-section">
          <h3 className="resume-section-heading">EDUCATION</h3>
          <div className="resume-education">
            <div>
              <p className="resume-subheading">The University of Pennsylvania</p>
              <p className="resume-subheading">College of Liberal & Professional Studies</p>
              <p className="resume-education-detail">Certificate in Full Stack Web Development</p>
            </div>
            <div>
              <p className="resume-subheading">The Pennsylvania State University</p>
              <p className="resume-subheading">Schreyer Honors College</p>
              <p className="resume-education-detail">Bachelor of Science, Psychology</p>
              <p className="resume-education-detail">Minor, Chemistry</p>
            </div>
          </div>
        </article>
      </div>
    </>
  )
}