import React from "react";

const skillSet = [
  {
    coreSkill: "Thinking",
    skills: ["Analysing", "Exploring"],
    description: `I prefer following established and proven approaches when dealing
        with any obstacles. I appreciate the need for authority and rules
        and can adjust easily to this. I am generally practical and down
        to earth but at times may benefit from keeping an open mind to new
        or novel approaches to problems. I prefer to take decisions based
        on feelings or instinct rather than rely on evidence. As a result,
        I tend to pay attention to different views and opinions rather
        than spending the time analysing data.`,
  },
  {
    coreSkill: "Connecting",
    skills: ["Networking", "Collaborating"],
    description: `I display empathy towards colleagues and find it important to
        listen to their points of view. I am likely to involve others in
        key decisions and plans. I give credit where it is due and
        delegate easily when necessary. I am someone who feels at ease
        when connecting with new people and generally has a well-developed
        network.`,
  },
  {
    coreSkill: "Executing",
    skills: ["Quality", "Result driven"],
    description: `I tend to be systematic, methodical and organised and deliver
        within deadlines. I am reliable and disciplined and driven to
        achieve the goals. I pay attention to details and enjoy delivering
        work that is of a high standard.`,
  },
  {
    coreSkill: "Progressing",
    skills: ["Leadership", "Resilience", "Adaptability"],
    description: `I prefer to work in stable environments and am uncomfortable with
        dealing with unplanned changes. I am a good team player who pays
        attention to everyone's input in a group setting. I generally
        prefer to work in an individual capacity rather than lead teams. I
        may feel demotivated when faced with negative feedback or
        setbacks.`,
  },
];

const ProfessionalSkillSet = () => {
  return (
    <section className="professionalSkillSet">
      <h3>PROFESSIONAL SKILL SET</h3>

      {skillSet.map((skill) => (
        <section className={skill.coreSkill.toLowerCase()}>
          <h2>{skill.coreSkill}</h2>
          <h4>{skill.skills.join(` | `)}</h4>
          <article>{skill.description}</article>
        </section>
      ))}
    </section>
  );
};

export default ProfessionalSkillSet;
