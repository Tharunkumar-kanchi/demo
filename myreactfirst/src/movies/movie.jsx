import React from "react";
import "../styles/style.css";

class Movie extends React.Component {
  render() {
    return (
      <div className="movie-card">
        <img src={this.props.link} alt="my awsome" />
        <label>
          {this.props.likes} {this.props.moviename} {this.props.hero}
        </label>
      </div>
    );
  }
}

export default Movie;
