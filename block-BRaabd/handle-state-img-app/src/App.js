import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imgPath: '',
    };
  }
  handleImage = () => {
    this.setState({
      imgPath: this.state.imgPath,
    });
  };
  render() {
    return (
      <center>
        <h1>Handling State</h1>
        <button onClick={this.handleImage('./basketball.jpeg')}>
          Basketball
        </button>
        <button onClick={this.handleImage}>PubG</button>
        <button onClick={this.handleImage}>Tiger</button>
        <button onClick={this.handleImage}>Phone</button>
        <button onClick={this.handleImage}>Laptop</button>
        <button onClick={this.handleImage}>Cricket</button>

        <img src={this.state.imgPath} alt="" />
      </center>
    );
  }
}

export default App;
