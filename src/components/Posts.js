import React, {Component} from 'react';
import Post from './Post';
import axios from 'axios';

class Posts extends Component{
    constructor(props) {
        super(props);
        this.state = {
            posts: []
        };
    }

    componentDidMount(){
        axios.get(' http://localhost:8080/data')
            .then(response => {
                this.setState({ posts: response.data});
            })
            .catch(error => {
                console.log('Error fetching and parsing data', error);
            });
    }

    renderPosts() {
        return this.state.posts.map((post)=>{
            // console.log(post);
            if (post.userId == 7){
                return (
                    <Post value={post}/>
                )
            }
        })

    }

    render() {
        return(
            <ul className="list-unstyled row">
                {this.renderPosts()}
            </ul>
        );
    }
}


export default Posts;


