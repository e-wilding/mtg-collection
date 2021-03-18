import React, { Component } from 'react';
import MainContainer from './containers/MainContainer.jsx'

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='container'>
        <MainContainer />
      </div>
    );
  }
}

export default App;