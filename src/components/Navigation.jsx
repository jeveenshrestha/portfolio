import React from "react";
import styled from "styled-components";

const List = styled.ul`
  display: flex;
  color: #eeeeee;
  gap: 20px;
  font-size: 16px;
  font-family: "Fira Code", monospace;

  li {
    list-style: none;
  }

  a {
    text-decoration: none;
    color: inherit;

    &:hover {
      font-size: 14px;
      color: #d0d0d0;
    }
  }
`;

const Navigation = () => {
  return (
    <List>
      <li>
        <a href="#home">Home</a>
      </li>
      <li>
        <a href="#about">About me</a>
      </li>
      <li>
        <a href="#experienceAndEducation">Experience</a>
      </li>
      <li>
        <a href="#contact">Contact</a>
      </li>
    </List>
  );
};

export default Navigation;
