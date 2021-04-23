import React, { Component } from 'react';
import { Link } from "react-router-dom";
export default class SignIn extends Component {
  render() {
    return (
      <section id="signin">
        <div className = "registrationForm">
            <form>
                <h1>Registration Form</h1>
    
                <div class = "textBox">
                    <label for="username" id="usernameLabel">Username:</label><br/>
                    <input type="text" id="username" name="username" /> <br/>
                    <label for="password" id="passwordLabel">Password:</label> <br/>
                    <input type="password" id="password" name="password" /> <br/>
                <Link to="/">
                  <button type="button" class = "button" onclick="checkForm()">Sign In</button>
                </Link>
                </div>
            </form>
        </div>
      </section>
    );
  }
}