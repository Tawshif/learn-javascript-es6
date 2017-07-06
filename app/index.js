// Import React
import React from "react";
import ReactDOM from "react-dom";

import {Router, Route, IndexRoute, hashHistory} from "react-router";

// Import layouts
import Archives from	"./pages/Archives";
import Featured from	"./pages/Featured";
import Layout from		"./pages/layout";
import Settings from	"./pages/Settings";


const app = document.getElementById('app');
ReactDOM.render(
	<Router history={hashHistory} >
		<Route path="/" component={Layout} >
		<IndexRoute compoennt={Featured}></IndexRoute>
			<Route path="archives" component={Archives}></Route>
			<Route path="settings" component={Settings}></Route>
		</Route>
	</Router>, 

	app);