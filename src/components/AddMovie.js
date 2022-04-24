import React from "react";
import serialize from "form-serialize";

class AddMovie extends React.Component {
  handleFormSubmit = (e) => {
    e.preventDefault();
    const newMovie = serialize(e.target, { hash: true });
    this.props.onAddMovie(newMovie);
  };
  render() {
    return (
      <div className="container">
        <form className="mt-5" onSubmit={this.handleFormSubmit}>
          <input
            className="form-control"
            id="disabledInput"
            type="text"
            placeholder="Fill The Form To Add A Movie.."
            disabled
          />
          <div className="row">
            <div className="mb-3 col-md-10">
              <label className="col-sm-2 col-form-label" htmlFor="inputName">
                Name
              </label>
              <input type="text" className="form-control" name="name" />
            </div>
            <div className="mb-3 col-md-2">
              <label className="col-sm-2 col-form-label" htmlFor="inputRating">
                Rating
              </label>
              <input type="text" className="form-control" name="rating" />
            </div>
          </div>
          <div className="row">
            <div className="mb-3 col-md-12">
              <label className="col-sm-2 col-form-label" htmlFor="inputImage">
                Image URL
              </label>
              <input type="text" className="form-control" name="imageURL" />
            </div>
          </div>
          <div className="row">
            <div className="mb-3 col-md-12">
              <label className="col-sm-2 col-form-label" htmlFor="overviewTextarea">
                Overview
              </label>
              <textarea
                className="form-control"
                name="overview"
                rows="5"
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

export default AddMovie;
