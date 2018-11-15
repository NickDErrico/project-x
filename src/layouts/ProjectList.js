import React, { Component } from "react";
import styled from "styled-components";

const ProjectList = props => {
  const StyledProjectList = styled.div`
    display: flex;
    justify-content: center;
    align-content: center;
    border: 1px solid red;
    height: 100%;
    width: 70vw;
  `;

  return <StyledProjectList>{props.children}</StyledProjectList>;
};

export default ProjectList;
