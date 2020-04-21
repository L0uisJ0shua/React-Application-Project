import React, { Component } from "react";
import Counter from "./counterComponent";

class Counters extends Component {
	state = {
		counters: [
			{ id: 1, value: 4 },
			{ id: 2, value: 0 },
			{ id: 3, value: 0 },
			{ id: 4, value: 0 },
		],
	};

	handleDelete = (counterId) => {
		const counters = this.state.counters.filter((c) => c.id !== counterId);
		this.setState({ counters });
	};

	handleReset = () => {
		const counters = this.state.counters.map((c) => {
			c.value = 0;
			return c;
		});
		this.setState({ counters });
    };
    
    // Removing Local state on the other counter.jsx
    handleIncrement = counter => {
        const counters = [... this.state.counters];
        const index = counters.indexOf(counter);
        counters[index] = {... counter }
        counters[index].value++;
        this.setState({ counters })
    }

	render() {
		return (
            // Composing Components
            <React.Fragment>
			<div>
				<button
					onClick={this.handleReset}
					className="btn btn-primary btn-sm m-2"
				>
					Reset
				</button>
				{this.state.counters.map((counter) => (
					<Counter
						key={counter.id}
						// value={counter.value}
                        onDelete={this.handleDelete}
                        onIncrement={this.handleIncrement}
						// selected={true}
						// id={counter.id}
						counter={counter}
						// counter carries all the information of counter so that we
						// don't balloon the code here
					/>
					// using props to allow Counter to call handleDelete through event raised
					/* {<h4>Counter #{counter.id}</h4>} */
					// </Counter>
					// <h4>Counter #{counter.id}</h4> is a children prop
				))}
			</div>
            </React.Fragment>
		);
	}
}

export default Counters;
