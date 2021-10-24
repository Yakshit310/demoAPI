import React, { Component } from "react";
import "./form.css"

class Form extends Component {
  state = {
    apiKey: ""
  };
  onSubmitHandler = (e) => {
    e.preventDefault();
    this.props.history.push("/response", { state: this.state.apiKey });
  };
  render() {
    return (
        <div>
            <form className="formContainer" onSubmit={this.onSubmitHandler}>
                <textarea name="firstName" onChange={(e) => {this.setState({ apiKey: e.target.value })}} value={this.state.apiKey} maxlength="100" placeholder="Enter text here" rows="10" cols="50" required/>
                <input type="submit" onClick={this.onSubmitHandler}/>
            </form>
        </div>
        
    );
  }
}
export default Form;