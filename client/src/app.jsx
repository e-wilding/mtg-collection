import React from 'react'
import ReactDOM from 'react-dom'

ReactDOM.render(
  React.createElement('div', null, `Hello React`),
  document.getElementById('app')
)


// import React, { Component } from 'react';
// import { render } from 'react-dom';

// class App extends Component {
//   constructor(props) {
//     super(props);
//   }

//   render() {
//     return (
//       <div className = "container">
//         <h1>MTG CARD COLLECTOR</h1>
//       </div>
//     );
//   }
// }

// render(<App />, document.querySelector('#root'));