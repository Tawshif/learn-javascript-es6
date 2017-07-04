import React from "react";

export default class Archives extends React.Component{

	render(){
		console.log(this.props);
		return (
			<div className="container">
				<h1>Archives ({this.props.params.article})</h1>
			</div>
		);
	}
}