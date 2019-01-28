import React, { Component } from "react";

class FMDetailView extends Component {
  render() {
    let component = this.props.components.filter(
      component => component.id === this.props.currentShowingDetail
    )[0];
    return component ? (
      <div style={{ alignSelf: "stretch", border: "1px solid black" }}>
        <b style={{ display: "block" }}>
          Parent : <button>{component.name}</button>
        </b>
        <b style={{ display: "block" }}>Component : {component.name}</b>
      </div>
    ) : (
      ""
    );
  }
}

export default FMDetailView;
