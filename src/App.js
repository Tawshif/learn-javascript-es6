import React, { Component } from 'react';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props)
        this.state = { qty: 0 }

        this.buy = this.buy.bind(this)
    }
    buy(){
        this.setState({qty:this.state.qty + 1});
    }
    render() {
        return (
          <div className="App ui container">
              <h2>My App Is running ok</h2>
              <div className="ui cards">
                  <div className="card">
                      <div className="content">
                          <div className="header">Iphone - $399</div>
                          <div className="description">
                              <strong>Qty:{this.state.qty} items</strong>
                          </div>
                      </div>
                      <button className="ui bottom attached button" onClick={() => this.buy()}>
                           Buy
                      </button>
                  </div>
              </div>

          </div>
        );
    }
}

export default App;
