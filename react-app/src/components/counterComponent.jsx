import React, { Component } from "react";

class Counter extends Component {
	// special property that is in React, contains data that this object needs
	// removed to remove local state in the controlled components
	// state = {
	// 	value: this.props.counter.value,
	// 	// tags: ["tag", "tag"],
	// 	// imageUrl:
	// 	// 	"https://picsum.photos/200",
	// };

	styles = {
		fontSize: 10,
		fontWeight: "bold",
	};
	// using styles attribute in React App
	// or we can just pass style = {{ fontSize : 10 }} in the span

	// constructor() {
	//   super();
	//   this.handleIncrement = this.handleIncrement.bind(this); // allows our handleIncrement to refer to a Counter Object always
	// }

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

	// Arrow Function can be used for binding of Event Handler Functions as well
	// handleIncrement = () => {
	// 	this.setState({ value: this.state.value + 1 });
	// 	// using a method inherited from React Component, we can setState of the virtual DOM at then React will bring the DOM
	// 	// to the new state of the Virtual DOM

	// 	//obj.method(); --> referst to the object
	// 	// function(); --> refers to window object which in strict mode is undefined
	// };

	// asynchornous call
	render() {
		// React.createElement('div');
		// console.log("props", this.props); - for debugging

		return (
			<React.Fragment>
				{/* <img src={this.state.imageUrl} alt=""></img> */}
				{/* <span style={this.styles}> Welcome to Counter </span>  */}

				<h4>Counter #{this.props.id}</h4>
				{/* {this.props.children}; to render Children props */}

				<span className={this.getBadgeStatus()}> {this.formatValue()} </span>
				<button
					onClick={() => this.props.onIncrement(this.props.counter)}
					className="btn btn-secondary btn-sm"
				>
					Increment
				</button>
				<button onClick={() => this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-sm m-2">Delete</button>
				{/* {this.state.tags.length === 0 && "Please create a new tag"}
				{this.renderTags()} */}
			</React.Fragment>
			// with reference to props onDelete which is a function handleDelete
		);
		// React.Fragment is child in React that we can use to hide the div and wrap our tags inside so that Babel is able to compile it
		// Whenever you render using a map method, we need to set a keyAttribute to tell React which virtual DOM changed
		// JavaScript is able to evaluate a combined boolean and non-boolean of && conditions therefore, it is able to return it as a string
	}

	getBadgeStatus() {
		let classes = "badge m-2 badge-";
		classes += this.props.counter.value === 0 ? "warning" : "primary";
		return classes;
	}

	formatValue() {
		const { value } = this.props.counter;
		return value === 0 ? "Zero" : value; // Note we can return <h1>Zero</h1> because in JSX, html elements are like objects
	}
}

export default Counter;
