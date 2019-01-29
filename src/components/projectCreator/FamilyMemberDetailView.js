import React, { Component } from "react";

class FMDetailView extends Component {
  render() {
    let component = this.props.components.filter(
      component => component.id === this.props.currentShowingDetail
    )[0];
    let componentParent = this.props.components.filter(
      parent => component.parent_id === parent.id
    )[0];

    return component ? (
      <div
        style={{
          border: `2px solid black`,
          boxShadow: "0px 0px 2px #253B39",
          borderRadius: "5px",
          backgroundColor: `${this.props.color}`
        }}
      >
        <b style={{ display: "block" }}>
          Parent : <button>{componentParent.name}</button>
        </b>
        <b style={{ display: "block" }}>Component : {component.name}</b>
      </div>
    ) : (
      ""
    );
  }
}

export default FMDetailView;
