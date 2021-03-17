import React, { Component } from 'react';
import MainContainer from './containers/MainContainer.jsx'

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='container'>
        <h1 id='header'>HEADER</h1>
        <MainContainer />
      </div>
    );
  }
}

export default App;