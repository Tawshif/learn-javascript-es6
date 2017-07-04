import React, { Component } from 'react';
import Projects from "./components/Projects";
import './App.css';

class App extends Component {
    constructor(){
        super();
        this.state = {
            projects:[
                {
                    title:"Business Website",
                    category:"Web Design"
                },
                {
                    title:"Social Media App",
                    category:"Mobile Development"
                },
                {
                    title:"Shopping Cart",
                    category:"web development"
                }
            ]
        }
    }
    render() {
    return (
      <div className="App">
        <span>My App</span>
          <Projects projects="{this.state.projects}" />
      </div>
    );
  }
}

export default App;
