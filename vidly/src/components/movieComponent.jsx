import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";

class Movies extends Component {
	state = {
		movies: getMovies(),
	};

	render() {
		return (
			<React.Fragment>
				<p>{this.renderMovieCount()}</p>
				<table
					id="movie"
					className="table table-bordered table-hover table-striped"
				>
					<thead className="thead-dark">{this.renderTableHeader()}</thead>
					<tbody>{this.renderMovies()}</tbody>
				</table>
			</React.Fragment>
		);
	}

	renderMovies() {
		return this.state.movies.map((movie) => (
			<tr key={movie["_id"]}>
				<td>{movie["title"]}</td>
				<td>{movie["genre"]["name"]}</td>
				<td>{movie["numberInStock"]}</td>
				<td>{movie["dailyRentalRate"]}</td>
				<td>{this.renderDeleteButton(movie["_id"])}</td>
			</tr>
		));
	}

	renderDeleteButton(_id) {
		return (
			<button onClick={() => this.Delete(_id)} className="btn btn-danger">
				Delete
			</button>
		);
	}

	Delete = (_id) => {
		// console.log("Deleting");
		// deleteMovie(_id);
		// console.log(_id)
		const newMovieArray = this.state.movies.filter(
			(movie) => movie["_id"] !== _id
		);
		// console.log(newMovieArray);
		this.setState({ movies: newMovieArray });
	};

	renderMovieCount = () => {
		if (this.state.movies.length !== 0) {
			return "Showing " + this.state.movies.length + " movies in the database.";
		} else {
			return "There are no movies in the database.";
		}
	};

	renderTableHeader = () => {
		if (this.state.movies.length !== 0) {
			return (
				<tr>
					<th>Title</th>
					<th>Genre</th>
					<th>Stock</th>
					<th>Rate</th>
					<th></th>
				</tr>
			);
		} else {
			return;
		}
	};
}

export default Movies;
