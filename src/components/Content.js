import React, { Component } from "react";
import "./form.css";
import axios from "axios";


class Content extends Component {

  state = {
    content: "",
  };
  
  constructor(props){
    super(props);

    axios.get("http://172.105.39.53/"+this.props.match.params.id)
      .then((response)=>{
        this.setState({content : response.data.content});
      })
      .catch((error)=>{
        console.log(error);
      })
  }

  render() {
    return (
        <div>
            <div className="formContainer">
                <textarea className="FORMbox1" rows="18" cols="50" maxLength="1000" defaultValue={this.state.content}></textarea>
            </div>
        </div>
    );
  }
}
export default Content;