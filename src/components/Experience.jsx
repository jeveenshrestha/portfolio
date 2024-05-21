import React from "react";

const experience = [
  {
    title: "Software Development Engineer",
    company: "Keysight Technology | Oulu, Finland",
    duration: "March 2022 - Feb 2024",
    responsibility: `Developed and maintained a web-based service, Nemo Cloud, for remote
    control and management of measurement fleets using ReactJS,
    TypeScript, Git, and Docker. Worked in constant collaboration with
    UX/UI designer, Project and Product managers, Q/A teams, and other
    products teams.`,
  },
  {
    title: "Software Development Engineer",
    company: "Ouman Oy | Oulu, Finland",
    duration: "Jan 2016 - Feb 2022",
    responsibility: `Ouman Oy l Linnunrata 14, Kempele Developed and maintained Web
    Interfaces for building automation system and floor heating system
    using AngularJS and ReactJS. I too was responsible for UX/UI
    designing, testing, and bug fixing. Many times worked in constant
    collaboration with project and product managers, and clients.`,
  },
  {
    title: "Web Development Intern",
    company: "Ouman Oy | Oulu, Finland",
    duration: "Mar 2015 - Dec 2015",
    responsibility: `Ouman Oy l Linnunrata 14, Kempele Learned about one of the Home
    Automation Devices, make a UX design and developed an AngularJS
    application. Tested and fixed bug, and documented.`,
  },
];

const Experience = () => {
  return (
    <section className="experience">
      <h3>EXPERIENCE</h3>
      {experience.map((work) => (
        <section>
          <h2>{work.title}</h2>
          <h4>{work.company}</h4>
          <h5>{work.duration}</h5>
          <article>{work.responsibility}</article>
        </section>
      ))}
    </section>
  );
};

export default Experience;
