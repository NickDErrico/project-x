import React, { Component } from "react";
import styled from "styled-components";

import UserInfo from "../components/profile/UserInfo";
import ProjectList from "../layouts/ProjectList";

class Profile extends Component {
  render() {
    const ProfileContainer = styled.div`
      display: flex;
      height: 86vh;
    `;

    return (
      <ProfileContainer>
        <UserInfo>User Panel</UserInfo>
        <ProjectList>Project List</ProjectList>
      </ProfileContainer>
    );
  }
}

export default Profile;
