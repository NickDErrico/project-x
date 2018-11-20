import React, { Component } from "react";
import styled from "styled-components";

class UserInfo extends Component {
  state = {
    user: {
      name: "Nick",
      userName: "Soft Serve",
      email: "n@n.com",
      password: "test"
    }
  };

  render() {
    const UserPanel = styled.div`
      display: flex;
      border: 1px solid black;
      height: 100%;
      width: 30%;
    `;

    const UserData = styled.div`
      margin: 10em auto;
      width: 80%;
    `;

    const UserImg = styled.div`
      margin: 0 auto;
      height: 200px;
      width: 200px;
      background-color: grey;
    `;

    return (
      <UserPanel>
        <UserData>
          <UserImg />
          <h2>User name</h2>
          <h3>Name</h3>
          <h3>Email</h3>
          <p>Bio</p>
        </UserData>
      </UserPanel>
    );
  }
}

export default UserInfo;
