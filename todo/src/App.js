import React, { Component } from 'react';
import TodoContainer from './components/TodoContainer';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TodoContainer />
      </div>
    );
  }
}

export default App;
