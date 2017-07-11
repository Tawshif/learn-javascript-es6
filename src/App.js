import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            gifs: []
        }
    }

    componentDidMount(){
        axios.get('http://api.giphy.com/v1/gifs/trending?api_key=dc6zaTOxFJmzC')
        .then(response => {
            let data = response.data.data;
            console.log(data);
            this.setState({ gifs: data });
        })
        .catch(error => {
            console.log('Error fetching and parsing data', error);
        });
    }

    // getGifs() {
    //     return this.state.gifs.map(function(item){
    //         console.log(item);
    //         //
    //         return <li className="item">{ item.id }</li>;
    //     })
    // }

    totalPrice(){
        // this.state.total = this.state.qty * this.state.price;

        this.setState({total: this.state.qty * this.state.price});
        console.log(this.state.qty , this.state.price);
    }

    buy(){
        this.setState({qty:this.state.qty + 1}, this.totalPrice);

    }
    remove() {
        if (this.state.qty > 0) {
            this.setState({qty: this.state.qty - 1}, this.totalPrice);
        }
    }
    render() {
        return (
          <div className="App ui container">

              <h2>My App Is running ok</h2>
              <ul className="ui relaxed divided list">
                  <div className="ui link cards">
                  {
                      this.state.gifs.map((item)=>{
                          return <div className="ui card" key={item.id}>
                              <a href={item.embed_url}>
                                  <div className="image">
                                      <img src={item.images.downsized.url} />
                                  </div>
                              </a>
                                <div className="content">
                                    <h5 className="header">{item.id}</h5>
                                </div>
                          </div>
                      })}
                  </div>
              </ul>







{/*
              <div className="ui cards">
                  <div className="card">
                      <div className="content">
                          <div className="header">IPhone 6s - ${this.state.price}</div>
                          <div className="description">
                              <strong>Quantity : {this.state.qty} items</strong>
                          </div>
                      </div>
                      <div className="content">
                          <div className="description">
                              Total Price : {this.state.total}
                          </div>
                      </div>
                      <div className="extra content">
                          <div className="ui two buttons">
                              <div className="ui basic green button" onClick={() => this.buy()}>Buy</div>
                              <div className="ui basic red button" onClick={()=> this.remove()}>Remove</div>
                          </div>
                      </div>
                  </div>
              </div>
*/}

          </div>
        );
    }
}

export default App;
