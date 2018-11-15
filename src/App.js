import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import styled from "styled-components";

import Navbar from "./layouts/Navbar";
import Footer from "./layouts/Footer";
import Home from "./pages/Home";
import Help from "./pages/Help";
import Login from "./pages/Login";
import Profile from "./pages/Profile";

// Light shades(cararra) : #F1F2ED
// light accents(camouflage green) : #75816F
// main brand(aqua forest) : #69AA86
// dark accent(russett) : #7E6158
// dark shades(outer space) : #253B39

// Aqua Forest	#69AA86	Primary
// Outer Space	#253B39	Info
// Fruit Salad	#55AE60	Success
// Hokey Pokey	#D29D28	Warning
// Pomegranate	#F44336	Danger

class App extends Component {
  render() {
    const StyledBody = styled.div`
      display: flex;
      flex-direction: column;
      min-height: 100vh;
    `;

    const StyledContent = styled.div`
      flex: 1 0 auto;
      padding: var(-space) var(-space) 0;
      width: 100%;

      &:after {
        content: "\00a0";
        display: block;
        margin-top: var(-space);
        height: 0;
        visibility: hidden;
      }
    `;

    return (
      <Router>
        <StyledBody className="App">
          <StyledContent>
            <Navbar />
            <Route exact path="/" component={Home} />
            <Route path="/help" component={Help} />
            <Route path="/login" component={Login} />
            <Route path="/profile" component={Profile} />
          </StyledContent>
          <Footer />
        </StyledBody>
      </Router>
    );
  }
}

export default App;
