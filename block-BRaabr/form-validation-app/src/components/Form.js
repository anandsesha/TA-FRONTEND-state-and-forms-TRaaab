import React from 'react';

class Form extends React.Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      errors: {
        email: '',
        password: '',
      },
    };
  }
  render() {
    return (
      <center>
        <form onSubmit={this.handleSubmit}>
          {/* Email Input */}
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={this.state.email}
            onChange={this.handleInput}
          />
          <br />

          {/* Password Input */}
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.handleInput}
          />
          <br />

          {/* Error Message */}
          {this.state.error && (
            <p style={{ color: 'red' }}>{this.state.error}</p>
          )}

          {/* Submit Button */}
          <button type="submit">Submit</button>
        </form>
      </center>
    );
  }
}

export default Form;
