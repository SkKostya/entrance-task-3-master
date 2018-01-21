import React, { Component } from "react";

import Button from "./button";
import Title from "./title";


class Header extends Component {
	render () {
		return(
			<header className="header">
				<Title title="header__title" />
				<Button />
			</header>
		)
	}
}

export default Header;