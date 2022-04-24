import React from "react";
import MovieList from "./components/MovieList";
import SearchBar from "./components/SearchBar";
import AddMovie from "./components/AddMovie";
import axios from "axios";
//import EditMovie from "./components/EditMovie";


class App extends React.Component {
  state = {
    movies: [],

    searchQuery: "",
  };

  async componentDidMount() {
    const response = await axios.get("http://localhost:3002/movies");
    this.setState({ movies: response.data });
  }

  /*  getMovies() {
  
} */

  // deleteMovie = (movie) => {
  //   const newMovieList = this.state.movies.filter((m) => m.id !== movie.id);
  //   this.setState((state) => ({
  //     movies: newMovieList,
  //   }));
  // };

  // DELETE MOVIE
  deleteMovie = async (movie) => {
    axios.delete(`http://localhost:3002/movies/${movie.id}`);
    const newMovieList = this.state.movies.filter((m) => m.id !== movie.id);
    this.setState((state) => ({
      movies: newMovieList,
    }));
  };

  // SEARCH MOVIE
  searchMovie = (event) => {
    this.setState({ searchQuery: event.target.value });
  };

  // ADD MOVIE
  addMovie = async (movie) => {
    await axios.post(`http://localhost:3002/movies/`, movie);
    this.setState((state) => ({
      movies: state.movies.concat([movie]),
    }));

    //this.getMovies();
  };

  render() {
    let filteredMovies = this.state.movies
      .filter((movie) => {
        return (
          movie.name
            .toLowerCase()
            .indexOf(this.state.searchQuery.toLowerCase()) !== -1
        );
      })
      .sort((a, b) => {
        return a.id < b.id ? 1 : a.id > b.id ? -1 : 0;
      });
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <SearchBar searchMovieProp={this.searchMovie} />
          </div>
        </div>
        <MovieList movies={filteredMovies} deleteMovieProp={this.deleteMovie} />

        <AddMovie
          onAddMovie={(movie) => {
            this.addMovie(movie);
          }}
        />

       
      </div>
    );
  }
}
export default App;
