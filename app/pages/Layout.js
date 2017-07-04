import React from "react";
import {Link} from "react-router";

export default class Layout extends React.Component{
	navigate(){
		this.props.history.pushState(null, "/");
	}
	render(){
		return (
			<div className="container">
				<h2>killernews.net</h2>
				{this.props.children}
				<Link to="archives/:article"><button className="btn btn-primary">Archive</button></Link>
				<Link to="settings"><button className="btn btn-success">Setting</button></Link>
				<button className="btn btn-danger" onClick={this.navigate.bind(this)}>Featured</button>
			</div>
		);

	}
}