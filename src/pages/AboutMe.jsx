import React from "react";
import styled from "styled-components";

const Article = styled.div`
  font-family: "Fira Code", monospace;
  font-size: 14px;
  color: #1e1d1d;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 70%;
  padding: 100px;
`;

const Header = styled.h3`
  font-family: "Fira Code", monospace;
  font-size: 28px;
  color: #565451;
`;

const SkillSet = styled.div`
  display: flex;
  flex-direction: column;
  text-align: justify;
  gap: 20px;
  margin-top: 40px;
`;

const FirstRow = styled.div`
  display: flex;
  gap: 20px;
`;

const SecondRow = styled.div`
  display: flex;
  gap: 20px;
`;

const SkillCard = styled.div`
  flex: 0 1 auto;
  border-radius: 5px;
  padding: 10px;
  background: #989796;
  color: #f6f6f6;
  font-family: "Fira Code", monospace;
  font-size: 12px;

  h2 {
    font-size: 14px;
    padding-bottom: 10px;
  }
`;

const CreativeSkillCard = styled(SkillCard)`
  background: #565451;
  color: #eeeeee;
`;

const Languages = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  gap: 10px;
  text-align: center;

  div {
    background: #565451;
    border-radius: 5px;
    padding: 20px 10px 0 10px;
    color: #eeeeee;
  }
`;

const AboutMe = () => {
  return (
    <section id="about" className="about">
      <Article>
        <Header>About Me</Header>
        <article>
          As a 36-year-old individual, I bring a wealth of life experience and a
          diverse range of interests to the table. I have been happily married
          for several years and am the proud father of a 19-month-old boy, whose
          Joy and curiosity continuously inspire me. Having called Oulu my home
          for the past 13 years, I have developed a deep connection to this
          community and have had the privilege of witnessing its growth and
          evolution firsthand. In my free time, I enjoy exploring the natural
          beauty of the region through my passion for photography, capturing
          moments that tell stories and evoke emotions. Beyond photography, I am
          an avid reader who finds solace and inspiration within the pages of a
          good book. Whether delving into fiction to escape into new worlds or
          diving into non-fiction to expand my knowledge and perspective,
          reading remains a cherished pastime that enriches my life. Staying
          active and maintaining a healthy lifestyle are also important to me,
          and I find Joy in engaging in various physical activities. From
          intense workouts that push my limits to the exhilarating freedom of
          roller skating, I relish the opportunity to challenge myself and
          embrace the thrill of movement. As a lifelong learner, I am passionate
          about staying abreast of the latest advancements in technology and
          eagerly immerse myself in learning about new innovations and trends.
          This curiosity extends to my hobbies, where I find fulfillment in
          setting up and tinkering with smart home devices, leveraging platforms
          like Apple HomeKit and Google Home to create a more efficient and
          interconnected living space. In essence, I am a multifaceted
          individual who values ​​connection, exploration, and growth. With a
          heart full of love for my family, a spirit of curiosity, and a drive
          to make the most of every moment, I embrace each day as an opportunity
          to learn, create, and inspire.
        </article>
        <SkillSet>
          <FirstRow>
            <CreativeSkillCard>
              <h2>Creativity and Aesthetic Sensibility</h2>
              My passion for photography reflects my creativity and aesthetic
              sensibility. The ability to Capture Moments and tell stories
              through images demonstrates my eye for detail and ability to
              communicate visually, which can be valuable in various contexts,
              including design and content creation.
            </CreativeSkillCard>
            <SkillCard>
              <h2>Continuous Learning And Adaptability</h2>
              My enthusiasm for learning about new technologies and staying
              updated on industry trends highlights my commitment to continuous
              improvement and adaptability. In a rapidly evolving field like
              technology, this mindset is crucial for staying relevant and
              effectively leveraging emerging tools and methodologies.
            </SkillCard>
          </FirstRow>

          <SecondRow>
            <SkillCard>
              <h2>Physical Fitness and Well-being</h2>
              My engagement in activities like working out and roller skating
              underscores my commitment to physical fitness and well-being. This
              demonstrates discipline, resilience, and a proactive approach to
              main having a healthy lifestyle, qualities that can positively
              impact various aspects of my personal and professional life.
            </SkillCard>
            <Languages>
              <div>English</div>
              <div>Nepali</div>
              <div>Hindi</div>
              <div>Finnish</div>
            </Languages>
          </SecondRow>
        </SkillSet>
      </Article>
    </section>
  );
};

export default AboutMe;
