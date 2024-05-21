import React from "react";
import styled from "styled-components";

import { ReactComponent as Envelop } from "../images/envelope.svg";
import { ReactComponent as Mobile } from "../images/mobile.svg";
import Avatar from "./Avatar";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ContactsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 280px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  position: relative;
  top: -80px;
`;
const EmailWrapper = styled.div`
  display: flex;
  align-items: center;
`;
const PhoneNumberWrapper = styled.div`
  display: flex;
  align-items: center;
`;
const Email = styled.div`
  margin-left: 5px;
`;
const PhoneNumber = styled.div`
  margin-left: 5px;
`;
const Contacts = () => {
  return (
    <Wrapper>
      <Avatar />
      <ContactsWrapper>
        <h1>Jeveen Shrestha</h1>
        <h3>Software Development Engineer</h3>
        <p>Oulu, Finland</p>
        <EmailWrapper>
          <Envelop />
          <Email>jeveen2012shrestha@gmail.com</Email>
        </EmailWrapper>
        <PhoneNumberWrapper>
          <Mobile />
          <PhoneNumber>+358400414879</PhoneNumber>
        </PhoneNumberWrapper>
      </ContactsWrapper>
    </Wrapper>
  );
};

export default Contacts;
