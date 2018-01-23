import React, { Component } from "react";

import { Button, Title } from "../../components";


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