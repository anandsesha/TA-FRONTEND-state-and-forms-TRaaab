import React from 'react';
import Data from './data.json';
import Answer from './Answer';
class App extends React.Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
    this.state = {
      window: 'closed',
    };
  }
  toggleWindow = () => {
    this.setState({
      window: this.state.window === 'closed' ? 'open' : 'closed',
    });
  };
  render() {
    return (
      <center>
        <h1>React State - FAQ page</h1>
        {Data.map((obj, i) => (
          <div key={obj.Q} className="faq-item">
            <div className="faq-question">
              <h5>{obj.Q}</h5>
              <button onClick={this.toggleWindow}>⬇️</button>
            </div>
            <>
              <Answer currentState={this.state.window} index={i} />
            </>
          </div>
        ))}
      </center>
    );
  }
}

export default App;
