import React from 'react';
import Data from './data.json';

class App extends React.Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
    this.state = {
      activeMovie: null,
    };
  }
  showPopup = (movie) => {
    this.setState(
      {
        // Set the state to the current movie name
        activeMovie: movie,
      },
      () => {
        //Show the pop-up
        const popup = document.getElementById('popup');
        if (popup) {
          popup.style.display = 'flex';
        }
      }
    );
  };

  hidePopup = () => {
    this.setState(
      {
        // Clear the state
        activeMovie: null,
      },
      () => {
        //Hide the pop-up
        const popup = document.getElementById('popup');
        if (popup) {
          popup.style.display = 'none';
        }
      }
    );
  };

  render() {
    return (
      <div style={{ textAlign: 'center' }}>
        <h1>Conditional Rendering - Movie List App</h1>

        <div className="container flex jsb aic flex-wrap">
          {Data.map((movie) => (
            <div key={movie.imdbID} className="movie">
              <div className="img-wrapper">
                <img src={movie.Images[0]} alt={movie.Title} />
                <button
                  className="more-info"
                  onClick={() => this.showPopup(movie)}
                >
                  More Info
                </button>
              </div>
              <h2>Movie Title: {movie.Title}</h2>
              <h3>Release Date: {movie.Released}</h3>
            </div>
          ))}
        </div>

        {/* Conditional rendering for the popup -  
        The popup is conditionally rendered based on whether activeMovie is not null. 
        This way, there's only one popup on the page.*/}
        {console.log(this.state.activeMovie)}
        {this.state.activeMovie && (
          <div id="popup" className="popup-overlay">
            <div className="popup-content">
              <button className="close-btn" onClick={this.hidePopup}>
                ✖
              </button>
              <h2>Director: {this.state.activeMovie.Director}</h2>
              <p>Actors: {this.state.activeMovie.Actors}</p>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default App;
