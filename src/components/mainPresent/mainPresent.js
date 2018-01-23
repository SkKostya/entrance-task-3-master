import React from "react";

import { setTime } from "../../util/helpers.js";

var time = setTime();

const Present = () => {
	return (
		<div id="present" className="present">
			<div id="time" className="present__time">{ time }</div>
			<div className="present__line"></div>
		</div>
	);
};

export default Present;