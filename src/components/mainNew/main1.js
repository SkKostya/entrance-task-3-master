import React from "react";

import { MainLeft, MainRight } from "../../components";

const Main1 = () => {
	return (
		<div className="main1">
			<MainLeft someTitle="Новая встреча" />
			<MainRight />
		</div>
	);
};

export default Main1;