import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeButton: 'basketball',
    };
  }
  //   handleImage = () => {};
  render() {
    let labels = ['Basketball', 'PubG', 'Tiger', 'Phone', 'Laptop', 'Cricket'];
    return (
      <center>
        <h1>Handling State</h1>

        <div>
          {labels.map((label, i) => (
            <button
              className={this.state.activeButton == label ? 'active' : ''}
              key={i}
              onClick={() => {
                this.setState({
                  activeButton: label,
                });
              }}
            >
              {label}
            </button>
          ))}
        </div>

        <img
          src={`${this.state.activeButton.toLowerCase()}.jpg`}
          alt={this.state.activeButton}
        />

        {/* <button onClick={this.handleImage('./basketball.jpeg')}>
          Basketball
        </button>
        <button onClick={this.handleImage}>PubG</button>
        <button onClick={this.handleImage}>Tiger</button>
        <button onClick={this.handleImage}>Phone</button>
        <button onClick={this.handleImage}>Laptop</button>
        <button onClick={this.handleImage}>Cricket</button>

        <img src={this.state.imgPath} alt="" /> */}
      </center>
    );
  }
}

export default App;
