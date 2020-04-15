import React, { Component } from "react";

class Counter extends Component {
	// special property that is in React, contains data that this object needs
	state = {
		count: 0,
		tags: [],
		// imageUrl:
		// 	"https://picsum.photos/200",
	};

	styles = {
		fontSize: 10,
		fontWeight: "bold",
	};
	// using styles attribute in React App
	// or we can just pass style = {{ fontSize : 10 }} in the span

  // return null if we do not want to display anything
  renderTags() {
    if (this.state.tags.length === 0) return <p>There are no tags!</p>;

    return (
			<ul>
				{this.state.tags.map((tag) => (
					<li key={tag}>{tag}</li>
				))}
			</ul>
		);
  }


	render() {
		// React.createElement('div');

		return (
			<React.Fragment>
				{/* <img src={this.state.imageUrl} alt=""></img> */}
				{/* <span style={this.styles}> Welcome to Counter </span>  */}

				<span className={this.getBadgeStatus()}> {this.formatCount()} </span>
				<button className="btn btn-secondary btn-sm">Increment</button>
        { this.state.tags.length === 0 && 'Please create a new tag'}
				{this.renderTags()}
			</React.Fragment>
		);
		// React.Fragment is child in React that we can use to hide the div and wrap our tags inside so that Babel is able to compile it
    // Whenever you render using a map method, we need to set a keyAttribute to tell React which virtual DOM changed
    // JavaScript is able to evaluate a combined boolean and non-boolean of && conditions therefore, it is able to return it as a string
	}

	getBadgeStatus() {
		let classes = "badge m-2 badge-";
		classes += this.state.count === 0 ? "warning" : "primary";
		return classes;
	}

	formatCount() {
		const { count } = this.state;
		return count === 0 ? "Zero" : count; // Note we can return <h1>Zero</h1> because in JSX, html elements are like objects
	}
}

export default Counter;
