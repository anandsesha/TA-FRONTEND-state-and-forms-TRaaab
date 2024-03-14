import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }
  handleIncrement = () => {
    this.setState({
      counter: this.state.counter + 1,
    });
  };
  handleDecrement = () => {
    this.setState({
      counter: this.state.counter - 1,
    });
  };
  handleReset = () => {
    this.setState({
      counter: 0,
    });
  };
  render() {
    return (
      <center>
        <h1>{this.state.counter}</h1>

        <div className="options-wrapper flex">
          <div>
            <h3>Steps</h3>
            <ul className="options flex">
              <li>
                <button>5</button>
              </li>
              <li>
                <button>10</button>
              </li>
              <li>
                <button>15</button>
              </li>
            </ul>
          </div>

          <div>
            <h3>Max Value</h3>
            <ul className="options flex">
              <li>
                <button>12</button>
              </li>
              <li>
                <button>100</button>
              </li>
              <li>
                <button>200</button>
              </li>
            </ul>
          </div>
        </div>

        <ul className="buttons-list flex">
          <li>
            <button onClick={this.handleIncrement}>Increment</button>
          </li>
          <li>
            <button onClick={this.handleDecrement}>Decrement</button>
          </li>
          <li>
            <button onClick={this.handleReset}>Reset</button>
          </li>
        </ul>
      </center>
    );
  }
}

export default App;
