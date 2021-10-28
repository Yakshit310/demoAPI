import React, { Component } from "react";
import "./response.css"

class Response extends Component {
  render() {
    return (
      <div className="RESflexContainer1">
        <div className="RESflexContainer2">
            <p className="RESbox1">{this.props.location.state.state}</p>
            <button className="RESbox2" onClick={() => {navigator.clipboard.writeText(this.props.location.state.state)}}>
              COPY
            </button>
        </div>
      </div>
    );
  }
}
export default Response;
