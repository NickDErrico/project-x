import React, { Component } from "react";
import styled from "styled-components";
import Hero from "../layouts/Hero";
import About from "../components/home/About";

class Home extends Component {
  render() {
    return (
      <div>
        <Hero
          heroImgSrc={
            "https://www.rd.com/wp-content/uploads/2016/07/Sept_2016_438Days_Opener_Arnulf_Husmo_Getty_Images-1024x823.jpg"
          }
        >
          <h1>
            The tool for creating and visualizing component based applications
          </h1>
        </Hero>
        <About />
      </div>
    );
  }
}

export default Home;
