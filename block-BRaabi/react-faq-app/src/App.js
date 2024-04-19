import React from 'react';
import Data from './data.json';
// import Answer from './Answer';
class App extends React.Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
    this.state = {
      // window: 'closed',
      activeIndex: null,
    };
  }
  // toggleWindow = (i) => {
  //   this.setState({
  //     activeIndex: i,
  //     window: this.state.window === 'closed' ? 'open' : 'closed',
  //   });
  // };
  render() {
    return (
      <center>
        <h1>React State - FAQ page</h1>
        {Data.map((obj, i) => (
          <div key={obj.Q} className="faq-item">
            <div className="faq-question">
              <h5>{obj.Q}</h5>

              <button
                onClick={() =>
                  this.setState({
                    activeIndex: this.state.activeIndex === i ? null : i,
                  })
                }
              >
                {this.state.activeIndex === i ? '⬆️' : '⬇️'}
              </button>
            </div>
            {i === this.state.activeIndex ? (
              <div className="answer--open">{obj.A}</div>
            ) : (
              ''
            )}
          </div>
        ))}
      </center>
    );
  }
}

export default App;
