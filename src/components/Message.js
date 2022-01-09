import { React, Component } from "react";

class Message extends Component {
    constructor(){
        super()
        this.state ={
            message:"Welcome Emma"
        }
    }
    changeMessage(){
        this.setState({
            message: "Message Changed Successfully"
        })
    }
  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <button onClick={()=> this.changeMessage()}>click here to change message</button>
      </div>
    );
  }
}

export default Message;
