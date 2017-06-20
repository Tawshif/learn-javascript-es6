import React from "react";
import Header from "./Header"

export default class Layout extends React.Component{

	constructor(){
		super();
		this.name = 'khan';
	}
	
	render(){
		return (
			<div className="container">
				<Header />
				<h1>Does it work ?</h1>
				<h1>It works :)</h1>
				<span>It's {this.name}</span>
			</div>
		);
	}
}