import React from "react";
import styled from "styled-components";

const Hero = props => {
  const HeroImage = styled.div`
    background-image: linear-gradient(rgba(0, 0, 0, .5), rgba(0, 0, 0, 0.5)),
      url("${
        props.heroImgSrc
          ? props.heroImgSrc
          : "https://www.popsci.com/sites/popsci.com/files/styles/1000_1x_/public/images/2018/08/oak-tree-2018822_1920.jpg?itok=b3r2FhB5&fc=50,50"
      }");
    height: 83.8vh;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
  `;

  const HeroText = styled.div`
    text-align: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
  `;

  return (
    <HeroImage>
      <HeroText>{props.children}</HeroText>
    </HeroImage>
  );
};

export default Hero;
