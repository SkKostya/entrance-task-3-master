import React, { Component } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

import Header from "../Header/index";
import Main from "../Main/index";

class Wrapper extends Component {
	render () {
		return (
			<div>
				<Header />
				<Main />
			</div>
		);
	}
}

export default Wrapper;