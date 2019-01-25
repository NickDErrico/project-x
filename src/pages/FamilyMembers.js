import React, { Component } from "react";

class FamilyMembers extends Component {
  render() {
    const styled = {
      backgroundColor: "#7e6158",
      color: "#f1f2ed",
      height: "200px",
      borderRadius: "5px"
    };

    console.log(this.props);
    let ancestors = this.props.descendants.children.map(child => (
      <FamilyMembers descendants={child} key={child.id} />
    ));
    let r = Math.floor(Math.random() * 80) + 175;
    let g = Math.floor(Math.random() * 80) + 175;
    let b = Math.floor(Math.random() * 80) + 175;
    return this.props.descendants ? (
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
        <b>{this.props.descendants.name}</b>
        {ancestors}
      </div>
    ) : null;
  }
}

export default FamilyMembers;
