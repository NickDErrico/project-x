import React from "react";
import styled from "styled-components";

const About = props => {
  const StyledAbout = styled.div`
    height: 86vh;
    background-color: #f1f2ed;
    padding: 10em;
  `;

  const StyledContainer = styled.div`
    display: flex;
    margin: 2em;
    height: 30%;
    justify-content: space-between;
  `;

  const StyledTop = styled.div`
    height: 30%;
    width: 100%;
    border: 1px solid black;
  `;

  const StyledMiddle = styled.div`
    height: 30%;
    width: 40%;
    border: 1px solid red;
  `;

  const StyledBottom = styled.div`
    height: 30%;
    width: 30%;
    border: 1px solid blue;
  `;

  return (
    <StyledAbout>
      <StyledContainer>
        <StyledTop>About Content will go here</StyledTop>
      </StyledContainer>
      <StyledContainer>
        <StyledMiddle>Test</StyledMiddle>
        <StyledMiddle>Test</StyledMiddle>
      </StyledContainer>
      <StyledContainer>
        <StyledBottom>Test</StyledBottom>
        <StyledBottom>Test</StyledBottom>
        <StyledBottom>Test</StyledBottom>
      </StyledContainer>
    </StyledAbout>
  );
};

export default About;
