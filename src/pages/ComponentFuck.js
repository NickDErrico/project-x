import React, { Component } from "react";

class ComponentFuck extends Component {
  render() {
    const styled = {
      backgroundColor: "#7e6158",
      color: "#f1f2ed",
      height: "200px",
      borderRadius: "5px"
    };

    console.log(this.props);
    let ancestors = this.props.componentFamily.children.map(child => (
      <ComponentFuck componentFamily={child} key={child.id} />
    ));
    let r = Math.floor(Math.random() * 80) + 175;
    let g = Math.floor(Math.random() * 80) + 175;
    let b = Math.floor(Math.random() * 80) + 175;
    return this.props.componentFamily ? (
      <div
        className="child"
        style={{
          padding: "15px",
          backgroundColor: `RGB(${r}, ${g}, ${b})`,
          border: `2px solid black`,
          borderRadius: "5px",
          margin: "2px 2px"
        }}
      >
        <b>{this.props.componentFamily.name}</b>
        {ancestors}
      </div>
    ) : null;
  }
}

export default ComponentFuck;
