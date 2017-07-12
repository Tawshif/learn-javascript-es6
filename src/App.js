import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Post from './components/Post';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: []
        }
    }

    componentDidMount(){
        axios.get(' http://localhost:8080/data')
        .then(response => {
            console.log(response.data);
            this.setState({ posts: response.data});
        })
        .catch(error => {
            console.log('Error fetching and parsing data', error);
        });
    }

    renderPosts() {
        return this.state.posts.map((post)=>{
            return (
                <Post value={this.props.post} />
                // <li className="list-inline col-4" key={post.id}>
                //     <strong>{post.title}</strong>
                //     <p>{post.body}</p>
                // </li>
            )
        })

    }

    // getPosts() {
    //     return this.state.gifs.map(function(item){
    //         console.log(item);
    //         //
    //         return <li className="item">{ item.id }</li>;
    //     })
    // }

    render() {
        return (
          <div className="container">

              <h2 className="my-4">My App Is running ok</h2>

              <ul className="list-unstyled row">
                  {/*{this.renderPosts()}*/}
                <Post posts={this.state.posts} />
              </ul>

          </div>
        );
    }
}

export default App;
