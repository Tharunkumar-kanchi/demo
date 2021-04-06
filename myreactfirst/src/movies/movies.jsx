import React from "react";
import Movie from "./movie.jsx";
//import "./styles/style.css";
import moviesList from "./list_of_movies.jsx";

class Movies extends React.Component {
  state = { ...moviesList };
  getMovie = (movie) => {
    return (
      <Movie
        link={movie.link}
        moviename={movie.moviename}
        likes={movie.likes}
        hero={movie.hero}
      />
    );
  };

  render() {
    return (
      <div className="movie_section">
        {Object.keys(this.state).map((x) => {
          return this.getMovie(this.state[x]);
        })}

        {/* {this.getMovie(this.state.uppena)}
                {this.getMovie(this.state.jathirathnalu)}
                {this.getMovie(this.state.krack)} */}
      </div>
    );
  }
}
export default Movies;
