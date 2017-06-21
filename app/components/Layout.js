import React from "react";
import Header from "./Header";
import Footer from "./Footer";

export default class Layout extends React.Component{

	constructor(){
		super();
		this.state = {name:"anik"};
	}
	render(){
		const title = "welcome to title"
		return (
			<div className="container">
				<Header title={title} />
				<Header title={"Other title"} />
				<Footer />
			</div>
		);
	}
}