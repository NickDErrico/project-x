import React, { Component } from "react";
import styled from "styled-components";

class UserInfo extends Component {
  render() {
    const UserPanel = styled.div`
      display: flex;
      border: 1px solid black;
      height: 100%;
      width: 30%;
    `;

    return <UserPanel>User Panel</UserPanel>;
  }
}

export default UserInfo;
