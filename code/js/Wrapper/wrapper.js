import React, { Component } from "react";

import Header from "../Header/index";
import Main from "../Main/index";

import Meeting from "../Meeting/index";

class Wrapper extends Component {
	render () {
		return (
			<div className="wrapper">
				<Meeting />
			</div>
		);
	}
}

export default Wrapper;