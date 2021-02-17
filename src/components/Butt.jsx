import React, { Component } from "react";

class Butt extends Component {
  // constructor(props) {
  //   super(props);
  // }

  handleClick = () => {
    if (window.confirm("Are you sure you wish to update this item?")) {
      this.props.updateData(this.props.id);
    }
  };

  render() {
    //const show = this.props.name === "Glenna Reichert";
    const show = this.props.status === "pending";
    if (show) {
      return (
        <div className="pos">
          <button className="button" onClick={this.handleClick}>
            Update
          </button>
        </div>
      );
    } else {
      return <div></div>;
    }
  }
}

export default Butt;
