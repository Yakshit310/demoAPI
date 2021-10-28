import React, { Component } from "react";
import "./form.css";
import axios from "axios";

class Form extends Component {
  state = {
    content: ""
  };
  onSubmitHandler = (e) => {
    e.preventDefault();
    
    axios.post("http://172.105.39.53/paste",{
      "content" : this.state.content
    })
    .then((response)=>{
      const url = response.data.url;
      this.props.history.push("/response", { state: url });
    })
    .catch((error)=>{
      console.log(error);
    })
  };
  render() {
    return (
        <div>
            <form className="formContainer" onSubmit={this.onSubmitHandler}>
                <textarea className="FORMbox1" onChange={(e) => {this.setState({ content: e.target.value })}} value={this.state.content} maxLength="100" placeholder="Enter text here" rows="10" cols="50" required/>
                <input className="FORMbox2" type="submit" onClick={this.onSubmitHandler}/>
            </form>
        </div>
        
    );
  }
}
export default Form;