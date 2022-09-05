import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import PropTypes from "prop-types";

export class RegisterPage extends Component {
  state = {
    username: "",
    email: "",
    password: "",
    password2: "",
  };

  static propTypes = {
    register: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool,
  };

  onSubmit = (e) => {
    e.preventDefault();
    const { username, email, password, password2 } = this.state;
    if (password !== password2) {
      this.props.createMessage({ passwordNotMatch: "Passwords do not match" });
    } else {
      const newUser = {
        username,
        password,
        email,
      };
      this.props.register(newUser);
    }
  };

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  render() {
    if (this.props.isAuthenticated) {
      return <Redirect to="/dashboard" />;
    }
    const { username, email, password, password2 } = this.state;
    return (
      <main id="register">
        <div>
          <h2>Register</h2>
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
              <label>Email</label>
              <input
                type="email"
                name="email"
                onChange={this.onChange}
                value={email}
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
              <label>Confirm Password</label>
              <input
                type="password"
                name="password2"
                onChange={this.onChange}
                value={password2}
              />
            </div>
            <div>
              <button type="submit" className="btn btn-primary">
                Register
              </button>
            </div>
            <p>
              Already have an account? <Link to="/login">Login</Link>
            </p>
          </form>
        </div>
      </main>
    );
  }
}

export default RegisterPage;
