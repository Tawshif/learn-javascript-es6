import React, { Component } from 'react';

class AddProject extends Component {

    constructor(){
        super();
        this.state = {
            newProject:{}
        }
    }

    static defaultProps = {
        categories: ['Web Design', 'Web Development', 'Mobile Development']
    }

    handleSubmit(e){
        if(this.refs.title.value === ''){
            alert('Title is required');
        } else {
            this.setState({newProject:{
                title: this.refs.title.value,
                category: this.refs.category.value
            }}, function(){
                //console.log(this.state);
                this.props.addProject(this.state.newProject);
            });
        }
        e.preventDefault();
    }

    render(){
        let categoryOptions = this.props.categories.map(category => {
            return <option key={category} value={category}>{category}</option>
        });
        return(
            <div>
                <h2>Add Project</h2>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <div>
                        <label>Title</label>
                        <input type="text" ref='title' />
                    </div>
                    <div>
                        <labe>Category</labe>
                        <select ref="category">
                            {categoryOptions}
                        </select>
                    </div>
                    <br/>
                    <div>
                        <input type="submit" value="Submit"/>
                    </div>
                    <br/>
                </form>
            </div>
        );
    }
}

export default AddProject;