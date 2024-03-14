import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      step: 5,
      max: 15,
    };
  }
  handleIncrement = () => {
    let { count, step, max } = this.state;
    this.setState({
      count: count + step > max ? count : count + step, // i.e  if 15 is the max set, and if count + step is excceding 15 then return 15 only, else return the sum (which will be lower than 15)
    });
  };
  handleDecrement = () => {
    this.setState({
      count: this.state.count - this.state.step,
    });
  };
  handleReset = () => {
    this.setState({
      count: 0,
    });
  };

  render() {
    return (
      <center>
        <h1>{this.state.count}</h1>

        <div className="options-wrapper flex">
          <div>
            <h3>Steps</h3>
            <ul className="options flex">
              {[5, 10, 15].map((step) => (
                <li key={step}>
                  <button
                    key={step}
                    onClick={() => {
                      this.setState({ step: step });
                    }}
                    className={this.state.step === step ? 'active--button' : ''}
                  >
                    {step}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3>Max Value</h3>
            <ul className="options flex">
              {[15, 100, 200].map((max) => (
                <li key={max}>
                  <button
                    key={max}
                    onClick={() => {
                      this.setState({ max: max });
                    }}
                    className={this.state.max === max ? 'active--button' : ''}
                  >
                    {max}
                  </button>
                </li>
              ))}
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
