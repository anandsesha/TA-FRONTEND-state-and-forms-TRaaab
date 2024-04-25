import React from 'react';

class App extends React.Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
    this.state = {
      inputText: '',
    };
  }
  handleChange = (event) => {
    console.log(event);
    this.setState(
      {
        inputText: event.target.value,
      },
      () => {
        console.log(this.state.inputText);
      }
    );
  };
  render() {
    return (
      <center>
        <h1>React INPUT - Font App</h1>
        <label htmlFor="input">Enter the text here:</label>
        <input
          type="text"
          id="input"
          value={this.state.inputText}
          onChange={this.handleChange}
        />

        <div className="container flex jsb aic flex-wrap">
          {[
            'Arial',
            'Courier New',
            'Times New Roman',
            'Impact',
            'Comic Sans MS',
            'Verdana',
            'Lucida Console',
            'Tahoma',
            'Georgia',
            'Trebuchet MS',
          ].map((font, i) => (
            <div className="box">
              <h5 className="font-type">{font}</h5>
              <h2 style={{ fontFamily: font }}>{this.state.inputText}</h2>
            </div>
          ))}
        </div>
      </center>
    );
  }
}

export default App;
