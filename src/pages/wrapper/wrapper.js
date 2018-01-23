import React, { Component } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

import { Header, Main } from "../../components";

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