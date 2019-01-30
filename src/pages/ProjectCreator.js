import React, { Component } from "react";
import { createFamilyTree } from "../createFamilyTree";
import FamilyMembers from "../components/projectCreator/RenderFamilyMembers";
import FMDetailView from "../components/projectCreator/FamilyMemberDetailView";
import ProjectCodeBase from "../components/projectCreator/ProjectCodeBase";

class ProjectCreator extends Component {
  state = {
    components: [
      { id: 1, name: "App", parent_id: null, project_id: 1 },
      { id: 2, name: "Auth", parent_id: 1, project_id: 1 },
      { id: 3, name: "UserDash", parent_id: 1, project_id: 1 },
      { id: 4, name: "Login", parent_id: 2, project_id: 1 },
      { id: 5, name: "Signup", parent_id: 2, project_id: 1 },
      { id: 6, name: "test1", parent_id: 3, project_id: 1 },
      { id: 7, name: "test2", parent_id: 3, project_id: 1 },
      { id: 8, name: "test3", parent_id: 4, project_id: 1 },
      { id: 9, name: "test4", parent_id: 5, project_id: 1 },
      { id: 10, name: "test5", parent_id: 5, project_id: 1 },
      { id: 11, name: "test6", parent_id: 5, project_id: 1 },
      { id: 12, name: "test7", parent_id: 6, project_id: 1 },
      { id: 13, name: "test8", parent_id: 5, project_id: 1 },
      { id: 14, name: "test9", parent_id: 3, project_id: 1 },
      { id: 15, name: "test10", parent_id: 5, project_id: 1 },
      { id: 16, name: "test11", parent_id: 9, project_id: 1 },
      { id: 17, name: "test12", parent_id: 16, project_id: 1 },
      { id: 18, name: "test13", parent_id: 12, project_id: 1 },
      { id: 19, name: "test14", parent_id: 18, project_id: 1 }
    ],
    timestamp: "no timestamp yet",
    familyTree: null,
    detailView: false,
    currentShowingDetail: null,
    color: ""
  };

  componentDidMount() {
    this.setState({ familyTree: createFamilyTree(this.state.components) });
  }

  renderFMDetailView = (id, color) => {
    this.setState(prevState => ({
      detailView:
        prevState.currentShowingDetail === id || this.state.detailView === false
          ? !this.state.detailView
          : this.state.detailView,
      currentShowingDetail: id,
      color: color
    }));
  };

  // grid-template-columns needs to be based on the spaceAllocated / number of components in row
  // grid-template-row needs to be based on the depth of changedData(number of iterations?)

  render() {
    // const ComponentGrid = styled.div`
    //   display: grid;
    //   grid-gap: 50px 50px;
    //   justify-items: center;
    //   width: 100%;
    // `;

    return (
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          justifyContent: "center"
        }}
      >
        {this.state.detailView ? (
          <FMDetailView
            components={this.state.components}
            currentShowingDetail={this.state.currentShowingDetail}
            color={this.state.color}
          />
        ) : null}
        {this.state.familyTree ? (
          <FamilyMembers
            descendants={this.state.familyTree}
            renderFMDetailView={this.renderFMDetailView}
          />
        ) : null}
        {this.state.familyTree ? (
          <ProjectCodeBase descendants={this.state.familyTree} />
        ) : null}
      </div>
    );
  }
}

export default ProjectCreator;
