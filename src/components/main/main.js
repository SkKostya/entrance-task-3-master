import React, { Component } from "react";

import { Shadow, List, Schedule, Present } from "../../components"

class Main extends Component {
	render () {
		return(
			<main className="main">
				<Shadow />
				<List />
				<Schedule />
				<Present />
			</main>
		);
	}
}

export default Main;