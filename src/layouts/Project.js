import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Project = props => {
  const ProjectCard = styled.div`
    width: 20vw;
    height: 20vh;
    box-shadow: 0 0 5px black;
    background-color: #7e6158;
    margin-top: 5em;
    color: #f1f2ed;
  `;

  return (
    <ProjectCard>
      <h2>Project Name</h2>
      <p>
        <i>--Project Description</i>
      </p>
      <Link to={"/project/edit/3"}>Edit</Link>
    </ProjectCard>
  );
};

export default Project;
