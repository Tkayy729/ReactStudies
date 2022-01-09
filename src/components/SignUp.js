import React, { Component } from "react";
import "./style.css";

class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      email: "",
      password: "",
    };
  }

  setName = (event) => {
    this.setState({
      username: event.target.value
    })
  }
  setEmail = event => {
    this.setState({
      email: event.target.value
    })
  }

  setPassword = event => {
    this.setState({
      password: event.target.value
    })
  }
  handleSubmit = (event)=>{
    event.preventDefault()
    console.log(this.state);
  }

  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Username</label>
            <input type="text" value={this.state.name} placeholder="Username" onChange={this.setName} />
          </div>

          <div>
            <label>Email</label>
            <input type="email" value={this.state.email} placeholder="Email" onChange={this.setEmail} />
          </div>

          <div>
            <label>Password</label>
            <input type="password" value={this.state.password} placeholder="Password"  onChange={this.setPassword}/>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default SignUp;
