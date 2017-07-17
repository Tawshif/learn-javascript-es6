import React, {Component} from 'react';


class Post extends Component{

    renderPost(){

    }

    render(){
        console.log(this.props.value);
        return(
            <li className="list-inline col-sm-6 col-md-4" key={this.props.value.id}>
                <p className="lead">{this.props.value.userId}</p>
                <h6>{this.props.value.title}</h6>
                <p>{this.props.value.body}</p>
            </li>
        )
    }
}

export default Post;