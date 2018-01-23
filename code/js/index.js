import "babel-polyfill";
import React from 'react';
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
 
import Wrapper from "./Wrapper/wrapper";
import Meeting from "./Meeting/index";

ReactDOM.render(
	<BrowserRouter>
		<div className="wrapper">
			<Route path="/" component={Wrapper} />
			<Route path="/newmeet" component={Meeting} />
  		</div>
  	</BrowserRouter>,
  document.getElementById('fieldToShow')
);