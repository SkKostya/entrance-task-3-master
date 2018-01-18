import React, { Component } from "react";

import Shadow from "./mainShadow";
import List from "./mainList/mainList";
import Schedule from "./Table/mainSchedule";
import Present from "./mainPresent";

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