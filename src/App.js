import React, { Component } from 'react';
import Projects from "./components/Projects";
import AddProject from "./components/AddProject";
import './App.css';

class App extends Component {
    constructor(){
        super();
        this.state = {
            projects:[]
        }
    }

    componentWillMount(){
        this.setState({projects:[
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
        ]});
    }

    handleAddProject(project){
        let projects = this.state.projects;
        projects.push(project);
        this.setState({projects:projects});
    }
    render() {
        return (
          <div className="App">
              <AddProject addProject={this.handleAddProject.bind(this)} />
              <hr />
              <span>My App</span>
              <Projects projects={this.state.projects} />
          </div>
        );
    }
}

export default App;
