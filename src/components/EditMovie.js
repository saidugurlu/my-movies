/* import React from "react";
import axios from "axios";

class EditMovie extends React.Component {
  state = {
    name: "",
    rating: "",
    overview: "",
    imageURL: "",
  };


  async componentDidMount() {
    const id= this.props.match.params.id
const response = await axios.get (`http://localhost:3002/movies/${id}`)
const  movie = response.data
this.setState({  
name: movie.name,
rating: movie.rating,
overview: movie.overview,
imageURL: movie.imageURL,

})


  }

  handleFormSubmit = (e) => {
    e.preventDefault();
  };
  render() {
    return (
      <div className="container">
        <form className="mt-5" onSubmit={this.handleFormSubmit}>
          <input
            className="form-control"
            id="disabledInput"
            type="text"
            placeholder="Edit The Form To Update A Movie.."
            disabled
          />
          <div className="row">
            <div className="mb-3 col-md-10">
              <label class="col-sm-2 col-form-label" htmlFor="inputName">
                Name
              </label>
              <input type="text" className="form-control" name="name" value={this.state.name}/>
            </div>
            <div className="mb-3 col-md-2">
              <label class="col-sm-2 col-form-label" htmlFor="inputRating">
                Rating
              </label>
              <input type="text" className="form-control" name="rating" value={this.state.rating} />
            </div>
          </div>
          <div className="row">
            <div className="mb-3 col-md-12">
              <label class="col-sm-2 col-form-label" htmlFor="inputImage">
                Image URL
              </label>
              <input type="text" className="form-control" name="imageURL" value={this.state.imageURL}/>
            </div>
          </div>
          <div className="row">
            <div className="mb-3 col-md-12">
              <label class="col-sm-2 col-form-label" htmlFor="overviewTextarea">
                Overview
              </label>
              <textarea
                className="form-control"
                name="overview"
                rows="5"
                value={this.state.overview}
              ></textarea>
            </div>
          </div>
          <input
            type="submit"
            className="btn btn-danger d-grid gap-2 col-6 mx-auto m-2"
            value="Add Movie"
          />
        </form>
      </div>
    );
  }
}

export default EditMovie;
 */