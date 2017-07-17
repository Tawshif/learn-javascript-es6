import React, { Component } from 'react';
import './App.css';
import Posts from './components/Posts';
import Filter from './components/Filter';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: []
        }
    }

    render() {
        return (
          <div className="container">
              <h2 className="my-4">My App Is running ok</h2>
              <Filter />
              <Posts />
          </div>
        );
    }
}

export default App;
