import React, { Component } from "react";

class FamilyMembers extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    if (this.props.componentCount === nextProps.componentCount) {
      return false;
    } else {
      return true;
    }
  }

  handleClick = () => {
    let color = this.childEle.style.backgroundColor;
    this.props.renderFMDetailView(this.props.descendants.id, color);
  };

  render() {
    console.log(this);
    let ancestors = this.props.descendants.children.map(child => {
      console.log(child.parent_id);
      return (
        <FamilyMembers
          descendants={child}
          key={child.id}
          renderFMDetailView={this.props.renderFMDetailView}
        />
      );
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
        ref={e => {
          this.childEle = e;
        }}
      >
        <button
          onClick={this.handleClick}
          style={{
            border: "2px solid #253B39",
            borderRadius: "5px",
            backgroundColor: "#F1F2ED",
            color: "#253B39",
            boxShadow: "0px 0px 2px #253B39"
          }}
        >
          <b>{this.props.descendants.name}</b>
        </button>
        <div className={`generation ${this.props.descendants.name}`}>
          {ancestors}
        </div>
      </div>
    ) : null;
  }
}

// Insert under {ancestors} ^^
// <button style={{ justifySelf: "center", alignSelf: "flex-end" }}>
//   Add Child
// </button>

export default FamilyMembers;
