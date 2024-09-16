import React from 'react';
import '../../src/form.css';

class Form extends React.Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
      errors: {
        email: '',
        password: '',
        confirmPassword: '',
      },
    };
  }
  validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };
  handleInput = ({ target }) => {
    console.log(target); //the targeted element - username,emaail... etc.
    let { name, value } = target;
    let errors = this.state.errors;

    switch (name) {
      case 'email':
        errors.email = this.validateEmail(value) ? '' : 'Email is invalid!';
        break;
      case 'password':
        errors.password =
          value.length < 6 ? 'Password cannot be less than 6 characters!' : '';
        break;
      case 'confirmPassword':
        errors.confirmPassword =
          value !== this.state.password ? 'Passwords dont match' : '';
        break;

      default:
        break;
    }

    this.setState({ errors, [name]: value });
  };
  render() {
    let { email, password, confirmPassword } = this.state.errors;
    return (
      <center>
        <form onSubmit={this.handleSubmit}>
          {/* Username Input */}
          <label>username</label>
          <input
            type="text"
            name="username"
            placeholder="Enter Username"
            value={this.state.username}
            onChange={this.handleInput}
          />
          <br />
          {/* Email Input */}
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={this.state.email}
            onChange={this.handleInput}
            className={email && 'error'}
          />
          <span>{email}</span>
          <br />

          {/* Password Input */}
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.handleInput}
            className={password && 'error'}
          />
          <span>{password}</span>
          <br />

          {/* Confirm Password Input */}
          <label>Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            value={this.state.confirmPassword}
            onChange={this.handleInput}
            // className={confirmPassword && 'error'}
          />
          <span>{confirmPassword}</span>
          <br />

          {/* Submit Button */}
          <button type="submit">Submit</button>
        </form>
      </center>
    );
  }
}

export default Form;
