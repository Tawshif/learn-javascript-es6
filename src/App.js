import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router';
import './css/style.css';
import StorePicker from "./Components/StorePicker";
import Header from "./Components/Header";
import Order from "./Components/Order";
import Inventory from "./Components/Inventory";

class App extends Component {

    /*
     * Routes
     */

    render() {
        return (
            <div>
                <div className="catch-of-the-day">
                    <div className="menu">
                        <Header tagline="Freash Sea Food Market" num="500" />
                    </div>
                    <Order/>
                    <Inventory/>
                </div>
                <StorePicker/>
            </div>
        );
    }

    render(
        <Router>
            <Route path="/" component={} />
        </Router>
    );

}

export default App;
