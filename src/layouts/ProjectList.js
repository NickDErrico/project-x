import React from "react";
import styled from "styled-components";
import Project from "../layouts/Project";

const ProjectList = props => {
  const StyledProjectList = styled.div`
    display: flex;
    justify-content: center;
    align-content: center;
    border: 1px solid red;
    height: 100%;
    width: 70vw;
  `;

  return (
    <StyledProjectList>
      <Project />
    </StyledProjectList>
  );
};

export default ProjectList;
