import React, { Component } from "react";
import ProjectItem from './ProjectItem';

class Projects extends Component{

    render(){
        let projectItems;
        if(this.props.projects){
            projectItems = this.props.projects.map(project => {
                return (
                    <ProjectItem project={project} key={project.title} />
                );
            });
        }
        return (
            <div className="Projects">
                <h3>Latet Projects</h3><br/>
                {projectItems}
            </div>
        );
    }
}

export default Projects;