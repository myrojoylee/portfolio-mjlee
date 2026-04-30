import "../styles/Resume.css";

export default function Resume() {
  return (
    <>
      <div className="resume resume-detail">
        <article className="resume-section">
          <h3 className="resume-section-heading">PROFESSIONAL SUMMARY</h3>
          <p>Technically-skilled Data Operations Manager specializing in LLM pipeline optimization for AI projects. Leverages hands-on expertise in JavaScript and Python to accurately audit complex coding tasks, debug contributor submissions, and ensure the highest standards of data quality and integrity for Fortune 500 companies. A proactive leader who bridges the gap between technical execution and project management.</p>
        </article>
        <article className="resume-section">
          <h3 className="resume-section-heading">TECHNICAL & PROFESSIONAL SKILLS</h3>
          <div className="resume-skills-list">
            <p><span className="resume-skills-category">Data Analysis & Process Optimization:</span>: KPI & Metric Analysis, Data Workflow Management, Pipeline Optimization, Operational Dashboard Analysis (Redash)</p>
            <p><span className="resume-skills-category">Human Data for LLM Training</span>: Data Contributor Management, RLHF Pipeline Operations</p>
            <p><span className="resume-skills-category">Project & Team Management</span>: MTeam Leadership & Mentoring, Contributor Funnel Management, Cross-functional Collaboration, Process Improvement</p>
            <p><span className="resume-skills-category">Tools & Technologies:</span>: JavaScript, React, Python, Node.js, HTML, CSS</p>

          </div>
        </article>
        <article className="resume-section">

          <h3 className="resume-section-heading">PROFESSIONAL EXPERIENCE</h3>
          <div>
            <div className="resume-experience-heading">
              <p><span className="resume-subheading">micro1</span>, remote</p>
              <p className="resume-subheading">Human Data Lead</p>
            </div>
            <p>12/2025 - present</p>
            <ul>
              <li>Manage data funnels for multiple AI projects, owning data quality and expert management.</li>
              <li>Establish and monitor KPIs to identify bottlenecks in data pipelines.</li>
              <li>Mentor human data managers to improve their performance and productivity.</li>
              <li>Collaborate with project team to develop onboarding processes and align data operations with evolving project requirements.</li>
            </ul>
          </div>
          <div>
            <div className="resume-experience-heading">
              <p><span className="resume-subheading">micro1</span>, remote</p>
              <p className="resume-subheading">Human Data Manager</p>
            </div>
            <p>11/2025 - 12/2025</p>
            <ul>
              <li>Managed human data funnels for AI projects.</li>
              <li>Monitored KPIs like Task AHT (Average Handling Time) and Tasking Velocity to improve pipeline efficiency.</li>
              <li>Enforced rigorous data quality by reviewing submissions and providing targeted feedback.</li>
              <li>Supported project leads to develop onboarding processes for experts.</li>
            </ul>
          </div>
          <div>
            <div className="resume-experience-heading">
              <p><span className="resume-subheading">Scale AI</span>, remote</p>
              <p className="resume-subheading">Queue Manager, Generative AI, Coding</p>
            </div>
            <p>5/2024 - 7/2025</p>
            <ul>
              <li>Managed human contributor funnels for RLHF projects, optimizing data workflows for 200+ contributors to ensure on-time delivery for Fortune 500 clients.</li>
              <li>Analyzed operational dashboards to monitor KPIs including average contributor rating (1-5 scale) and Task Rejection Rate (&lt;10%), identifying bottlenecks in the attempt or review layers to improve pipeline efficiency.</li>
              <li>Enforced rigorous data quality by auditing coding submissions and providing targeted feedback through frequent realignment meetings.</li>
              <li>Collaborated with project management teams to develop onboarding processes and align data operations with evolving project requirements.</li>
            </ul>
          </div>
          <div>
            <div className="resume-experience-heading">
              <p><span className="resume-subheading">Scale AI</span>, remote</p>
              <p className="resume-subheading">Team Lead, Generative AI, Coding</p>
            </div>
            <div>
              <p>2/2024 - 5/2024</p>
            </div>
            <ul>
              <li>Led and mentored a squad of 30 contributors, conducting weekly audits and check-ins to maintain engagement and uphold project quality standards.</li>
              <li>Leveraged performance data to identify coaching opportunities and recognize high-quality contributors, directly impacting team quality metrics.</li>
              <li>Performed daily quality analysis audits to identify areas for improvement, resolving project-related issues through effective communication.</li>
            </ul>
          </div>
          <div>
            <div className="resume-experience-heading">
              <p><span className="resume-subheading">Remotasks</span>, remote</p>
              <p className="resume-subheading">Independent Contractor</p>
            </div>
            <p>12/2023 - 2/2024</p>
            <ul>
              <li>Generated high-quality human data by responding to complex coding prompts for LLM training datasets.</li>
              <li>Reviewed submitted responses to ensure correctness according to project specifications.</li>
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