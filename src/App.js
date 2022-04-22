import React from "react";
import { Routes, Route } from "react-router-dom";
import MovieList from "./components/MovieList";
import SearchBar from "./components/SearchBar";
import AddMovie from "./components/AddMovie";

class App extends React.Component {
  state = {
    movies: [],

    searchQuery: "",
  };

  async componentDidMount() {
    const baseUrl = "http://localhost:3002/movies";
    const response = await fetch(baseUrl);
    const data = await response.json();
    this.setState({ movies: data });
  }

  // deleteMovie = (movie) => {
  //   const newMovieList = this.state.movies.filter((m) => m.id !== movie.id);
  //   this.setState((state) => ({
  //     movies: newMovieList,
  //   }));
  // };

  //Fetch API
  deleteMovie = async (movie) => {
    const deleteData = `http://localhost:3002/movies/${movie.id}`;
    await fetch(deleteData, {
      method: "DELETE",
    });
    const newMovieList = this.state.movies.filter((m) => m.id !== movie.id);
    this.setState((state) => ({
      movies: newMovieList,
    }));
  };

  searchMovie = (event) => {
    this.setState({ searchQuery: event.target.value });
  };

  render() {
    let filteredMovies = this.state.movies.filter((movie) => {
      return (
        movie.name
          .toLowerCase()
          .indexOf(this.state.searchQuery.toLowerCase()) !== -1
      );
    });
    return (
      <Routes>
        <div className="container">
          <Route
            path="/"
            element={
              <>
                <div className="row">
                  <div className="col-lg-12">
                    <SearchBar searchMovieProp={this.searchMovie} />
                  </div>
                </div>
                <MovieList
                  movies={filteredMovies}
                  deleteMovieProp={this.deleteMovie}
                />
              </>
            }
          />
          <Route path="add" element={<AddMovie />} />
        </div>
      </Routes>
    );
  }
}
export default App;
