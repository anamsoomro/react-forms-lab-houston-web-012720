import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: ""
    };
  }

  handleOnChange = (event) => {
    let field = event.target.name
    this.setState({
      [field]: event.target.value
    })
  }

  checkAndSubmit = (event) => {
    event.preventDefault()
    let usr = this.state.username 
    let pswd = this.state.password 
    if (usr.length > 0 && pswd.length > 0) {
      // this.props.handleLogin({usr, pswd})
      this.props.handleLogin(usr, pswd) 
    } 
    // Why this no. 
    this.setState({
      username: "",
      password: ""
    })
  }

  render() {
    return (
      <form onSubmit={ this.checkAndSubmit }>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" onChange={this.handleOnChange}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" onChange={this.handleOnChange} />
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form >
    );
  }
}

export default LoginForm;
