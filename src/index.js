import "babel-polyfill";
import React from 'react';
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
 
import { Wrapper, NewMeeting, MeetingCreated, Editing, RemoveMeet } from "./pages";

ReactDOM.render(
	<BrowserRouter>
		<div className="wrapper">
			<Route exact path="/" component={Wrapper} />
			<Route path="/newmeet" component={NewMeeting} />
			<Route path="/meetingcreated" component={MeetingCreated} />
			<Route path="/editing" component={Editing} />
			<Route path="/remove" component={RemoveMeet} />
  		</div>
	</BrowserRouter>,
	document.getElementById('fieldToShow')
);