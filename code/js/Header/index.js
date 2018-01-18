import React, { Component } from "react";

import Button from "./button";
import Title from "./title";


class Header extends Component {
	render () {
		return(
			<header className="header">
				<Title title="header__title" />
				<Button clName="header__create" btnTxt="Создать встречу" />
			</header>
		)
	}
}

export default Header;