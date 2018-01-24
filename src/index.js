import "babel-polyfill";
import React from 'react';
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
 
import { Wrapper, Meeting, MeetingCreated, Editing, RemoveMeet } from "./pages";

ReactDOM.render(
	<BrowserRouter>
		<div className="wrapper">
			<Route path="/" component={Wrapper} />
			<Route path="/newmeet" component={Meeting} />
			<Route path="/meetingcreated" component={MeetingCreated} />
			<Route path="/editing" component={Editing} />
			<Route path="/newmeet/remove" component={RemoveMeet} />
  		</div>
  	</BrowserRouter>,
  document.getElementById('fieldToShow')
);