import React from "react";
import styled from "styled-components";

import avatar from "../images/Avatar.png";

const CroppedAvatar = styled.img`
  position: relative;
  top: -40px;
  width: 200px;
  clip-path: circle(35% at center);
`;

const Avatar = () => {
  return (
    <CroppedAvatar
      src={avatar}
      alt="Me posing right side wise, in a camping site in Norway"
    />
  );
};

export default Avatar;
