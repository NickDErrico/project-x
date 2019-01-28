import React, { Component } from "react";
import ReactDOM from "react-dom";
const parents = [];

class FamilyMembers extends Component {
  handleClick(e) {
    e.stopPropagation();
    console.log(e.target);
  }
  render() {
    let ancestors = this.props.descendants.children.map((child, iteration) => {
      console.log(parents);
      if (parents.includes(child.parent_id)) {
        return (
          <FamilyMembers
            descendants={child}
            key={child.id}
            iteration={iteration}
          />
        );
      } else {
        parents.push(child.parent_id);
        return (
          <div
            className={`generation ${child.parent_id}`}
            key={child.id}
            iteration={iteration}
          >
            <FamilyMembers descendants={child} key={child.id} />
          </div>
        );
      }
    });
    const r = Math.floor(Math.random() * 80) + 175;
    const g = Math.floor(Math.random() * 80) + 175;
    const b = Math.floor(Math.random() * 80) + 175;

    //if child has children create new row unless child has a sibling that was already rendered

    // let classname = this.props.descendants.children
    //   ? `child generation ${this.props.descendants.id}`
    //   : `child ${this.props.descendants.id}`;
    return this.props.descendants ? (
      <div
        onClick={e => this.handleClick(e)}
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
