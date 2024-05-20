import React from 'react';
import './App.css';

class App extends React.Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
    this.state = {
      text: '',
    };
  }
  handleInput = ({ target }) => {
    console.log(target); //the targeted element - text,date etc.
    let { name, value } = target;
    console.log(name, value);

    this.setState({ [name]: value });
  };
  render() {
    return (
      <center>
        <form action="">
          {/* <!-- Text --> */}
          <label htmlFor="">Text Input</label>
          <input
            type="text"
            name="text"
            id=""
            value={this.state.text}
            onChange={this.handleInput}
          />
          {/* <!-- Date --> */}
          <label htmlFor="">Date Input</label>
          <input type="date" name="date" id="" />
          {/* <!-- File --> */}
          <label htmlFor="">File Input</label>
          <input type="file" name="file" id="" />
          {/* <!-- Read Only --> */}
          <label htmlFor="">Read-Only Input</label>
          <input
            type="text"
            name="file"
            id=""
            readOnly
            placeholder="This text is read only"
          />
          {/* <!-- Disabled Input --> */}
          <label htmlFor="">Disabled Input</label>
          <input type="text" name="file" id="" disabled />
          {/* <!-- Textarea --> */}
          <label htmlFor="">Textarea</label>
          <textarea name="textarea" id="" rows="8" cols="8"></textarea>
          {/* <!-- Textarea Disabled--> */}
          <label htmlFor="">Textarea</label>
          <textarea name="textarea" id="" rows="8" cols="8" disabled></textarea>
        </form>
      </center>
    );
  }
}

export default App;
