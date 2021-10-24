import React, { Component } from "react";
import "./response.css"

class Response extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="flexContainer1">
        <div className="flexContainer2">
            <p className="box1">{this.props.location.state.state}</p>
            <p className="box2">KEY</p>
        </div>
      </div>
    );
  }
}
export default Response;
