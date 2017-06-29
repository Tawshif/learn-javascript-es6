import React from "react";
import Header from "./Header";
import Footer from "./Footer";

export default class Layout extends React.Component{

	constructor(){
		super();
		this.state = {
			name:"anik",
			title: "welcome to title"
		};
	}

	changeTitle(title){
		this.setState({title});
	}


	render(){
		return (
			<div className="container">
				<Header changeTitle={this.changeTitle.bind(this)} title={this.state.title} />
				<Footer />
			</div>
		);
	}

}