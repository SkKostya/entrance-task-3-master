import React, { Component } from "react";

import { MainShadow, MainList, MainSchedule, MainPresent } from "../../components"

class Main extends Component {
	render () {
		return(
			<main className="main">
				<MainShadow />
				<MainList />
				<MainSchedule />
				<MainPresent />
			</main>
		);
	}
}

export default Main;