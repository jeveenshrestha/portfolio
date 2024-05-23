import React from "react";
import styled from "styled-components";

import Avatar from "../components/Avatar";
import Navigation from "../components/Navigation";
import { ReactComponent as Facebook } from "../images/facebook-f.svg";
import { ReactComponent as Instagram } from "../images/instagram.svg";
import { ReactComponent as Linkedin } from "../images/linkedin-in.svg";
import { ReactComponent as Github } from "../images/github.svg";

const AvatarWrapper = styled.div`
  position: relative;
  top: 100px;
  left: 80px;
`;

const NavBar = styled.div`
  width: 100%;
  position: relative;
  top: -310px;
  left: 70%;
`;

const Intro = styled.span`
  font-family: "Fira Code", monospace;
  color: #000000;
  font-size: 24px;
  position: relative;
  top: 148px;
  text-align: center;
`;

const UnderlinedText = styled.div`
  text-decoration: underline;
`;

const MediaList = styled.ul`
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-top: 20px;
`;

const Home = () => {
  return (
    <section className="home">
      <AvatarWrapper>
        <Avatar />
      </AvatarWrapper>
      <NavBar>
        <Navigation />
      </NavBar>
      <Intro>
        <div>
          A Web Developer specialized in the Frontend Development with over
        </div>
        <UnderlinedText>8 years of experience..</UnderlinedText>
        <MediaList>
          <li>
            <a href="https://www.facebook.com/jeveen.shrestha">
              <Facebook />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/jeveen_photography/">
              <Instagram />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/jeveen-shrestha-529b5165/">
              <Linkedin />
            </a>
          </li>
          <li>
            <a href="https://github.com/jeveenshrestha">
              <Github />
            </a>
          </li>
        </MediaList>
      </Intro>
    </section>
  );
};

export default Home;
