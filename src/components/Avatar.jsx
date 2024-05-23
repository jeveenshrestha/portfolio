import React from "react";
import styled from "styled-components";

import avatar from "../images/Avatar.png";

const CroppedAvatar = styled.img`
  width: 250px;
  clip-path: circle(35% at center);
`;

const Brand = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 630px;
`;

const MyNameAndPosition = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  h1 {
    font-family: "Sloop Script";
    font-size: 74.5px;
    font-style: normal;
    font-variant: normal;
    font-weight: 400;
    color: #131313;
    height: 65px;
  }

  h3 {
    font-family: "Trend Slab W00 One";
    font-size: 21px;
    font-weight: 400;
    color: #131313;
    align-self: flex-end;
  }
`;

const Avatar = () => {
  return (
    <Brand>
      <CroppedAvatar
        src={avatar}
        alt="Me posing right side wise, in a camping site in Norway"
      />
      <MyNameAndPosition>
        <h1>Jeveen Shrestha</h1>
        <h3>WEB DEVELOPER</h3>
      </MyNameAndPosition>
    </Brand>
  );
};

export default Avatar;
