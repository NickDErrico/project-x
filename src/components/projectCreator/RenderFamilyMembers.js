import React, { Component } from "react";
import ReactDOM from "react-dom";
const parents = [];

class FamilyMembers extends Component {
  handleClick = () => {
    this.props.renderFMDetailView(this.props.descendants.id);
  };

  //if child is firstChild of parent create wrapper row around <FamilyMember /> else insert
  // child into sibling wrapper row

  render() {
    let ancestors = this.props.descendants.children.map(child => {
      if (parents.includes(child.parent_id)) {
        return (
          <FamilyMembers
            descendants={child}
            key={child.id}
            renderFMDetailView={this.props.renderFMDetailView}
          />
        );
      } else {
        parents.push(child.parent_id);
        return (
          <div className={`generation ${child.parent_id}`} key={child.id}>
            <FamilyMembers
              descendants={child}
              key={child.id}
              renderFMDetailView={this.props.renderFMDetailView}
            />
          </div>
        );
      }
    });
    const r = Math.floor(Math.random() * 80) + 175;
    const g = Math.floor(Math.random() * 80) + 175;
    const b = Math.floor(Math.random() * 80) + 175;

    return this.props.descendants ? (
      <div
        className="child"
        style={{
          padding: "15px",
          backgroundColor: `RGB(${r}, ${g}, ${b})`,
          border: `2px solid black`,
          borderRadius: "5px",
          margin: "2px 2px",
          boxShadow: "0px 0px 2px #253B39"
        }}
      >
        <button
          onClick={this.handleClick}
          style={{
            justifySelf: "center",
            alignSelf: "flex-start",
            border: "2px solid #253B39",
            borderRadius: "5px",
            backgroundColor: "#F1F2ED",
            color: "#253B39",
            boxShadow: "0px 0px 2px #253B39"
          }}
        >
          <b>{this.props.descendants.name}</b>
        </button>
        {ancestors}
      </div>
    ) : null;
  }
}

export default FamilyMembers;
