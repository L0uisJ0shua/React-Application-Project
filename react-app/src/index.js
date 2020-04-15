import React from 'react';
import ReactDOM from 'react-dom';
import "bootstrap/dist/css/bootstrap.css";
import Counter from "./components/counterComponent";

// const element = <h1>Hello World</h1>; // Babel will compile this down to React.createElement



// Note that React server has hot moduling -> like Flask for Python when debug mode = true
//console.log(element)

// first argument is the component we want to render on JSX side and the second argument is the vanilla way of getting the 
// id of the div container that we want to render the React Component in the DOM.
// ReactDOM.render(element, document.getElementById('root'));

ReactDOM.render(<Counter />, document.getElementById('root'));
