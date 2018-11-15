import React from "react";
import Hero from "../layouts/Hero";
import styled from "styled-components";

const Login = props => {
  const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: rgba(127, 127, 127, 0.75);
    padding: 2.5em;
    border-radius: 10px;
  `;

  const FormInput = styled.input`
    color: #69aa86;
    font-size: 2em;
    margin: 0.25em;
    padding: 0.25em 1em;
    border: 2px solid #69aa86;
    border-radius: 5px;
  `;

  const FormButton = styled.button`
    color: #69aa86;
    font-size: 2em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid #69aa86;
    border-radius: 5px;

    &:focus {
      outline: none;
    }

    &:active {
      background-color: #69aa86;
      color: #f1f2ed;
    }
  `;

  return (
    <Hero
      url={
        "https://www.popsci.com/sites/popsci.com/files/styles/1000_1x_/public/images/2018/08/oak-tree-2018822_1920.jpg?itok=b3r2FhB5&fc=50,50"
      }
    >
      <FormContainer method="post" action="">
        <FormInput type="text" placeholder="Username" />
        <FormInput type="text" placeholder="Password" />
        <FormButton type="submit">Login</FormButton>
      </FormContainer>
    </Hero>
  );
};

export default Login;
