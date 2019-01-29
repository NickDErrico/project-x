import React, { Component } from "react";

class ProjectCodeBase extends Component {
  render() {
    let ancestors = this.props.descendants.children.map(child => {
      return <ProjectCodeBase descendants={child} key={child.id} />;
    });
    return this.props.descendants ? (
      <div className="file">
        <div>{this.props.descendants.name}</div>
        {ancestors}
      </div>
    ) : null;
  }
}

export default ProjectCodeBase;
