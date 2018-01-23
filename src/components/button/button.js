import React, { Component } from "react";
import { Link } from "react-router-dom";

class Button extends Component {
	render () {
		return (
			<div>
				<Link to="/newmeet"><button className="header__create">Создать встречу</button></Link>
				{this.props.children}
			</div>
		);
	}
}

export default Button;