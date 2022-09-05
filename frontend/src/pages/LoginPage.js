import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";

import PropTypes from "prop-types";

export class LoginPage extends Component {
  state = {
    username: "",
    password: "",
  };

  static propTypes = {
    login: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool,
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.login(this.state.username, this.state.password);
  };

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  render() {
    if (this.props.isAuthenticated) {
      return <Redirect to="/dashboard" />;
    }
    const { username, password } = this.state;
    return (
      <main id="login">
        <div>
          <h2>Login</h2>
          <form onSubmit={this.onSubmit}>
            <div>
              <label>Username</label>
              <input
                type="text"
                name="username"
                onChange={this.onChange}
                value={username}
              />
            </div>

            <div>
              <label>Password</label>
              <input
                type="password"
                name="password"
                onChange={this.onChange}
                value={password}
              />
            </div>

            <div>
              <button type="submit">Login</button>
            </div>
            <p>
              Don't have an account? <Link to="/register">Register</Link>
            </p>
          </form>
        </div>
      </main>
    );
  }
}

export default LoginPage;
