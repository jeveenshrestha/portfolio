import React from "react";
import styled from "styled-components";
import Experience from "../components/Experience";
import Education from "../components/Education";

const ExperienceContainer = styled.div`
  display: flex;
  flex-direction: column;
  color: #576051;
  align-items: center;
  gap: 40px;
  padding-top: 100px;

  section {
    width: 80%;
    text-align: justify;
    padding-top: 20px;

    h2 {
      font-family: "Trend Slab W00 One";
      font-size: 20px;
      color: #718466;
    }

    h3 {
      font-family: "Fira Code", monospace;
      font-size: 18px;
      color: #282728;
    }

    article {
      font-family: "Fira Code", monospace;
      font-size: 14px;
      color: #373737;
    }
  }
`;
const PhotoCredit = styled.div`
  color: #545454;
  position: relative;
  top: 57vh;
  left: 20px;
`;

const ExperienceAndEducation = () => {
  return (
    <section className="experienceAndEducation">
      <ExperienceContainer>
        <Experience />
        <Education />
      </ExperienceContainer>
      <PhotoCredit>
        Image by{" "}
        <a href="https://www.freepik.com/free-photo/top-view-desk-assortment-with-copy-space_13523377.htm#page=4&query=monochromatic%20workspace&position=1&from_view=keyword&track=ais_user&uuid=42c72e28-a362-4c4d-b5ad-c56ba07b634f">
          Freepik
        </a>
      </PhotoCredit>
    </section>
  );
};

export default ExperienceAndEducation;
