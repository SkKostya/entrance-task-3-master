import React from "react";

import NewMet from "./pieces/left/mainTitle";
import { Input, Input1 } from "./pieces/left/input";
import { Person } from "./pieces/left/mainPerson";

const MainLeft = () => {
	return (
		<div className="main1__left">
			<NewMet met="Новая встреча" />
			<form className="main1__margin"><Input /></form>
			<form className="main1__margin"><Input1 /></form>
			<Person perImg="" perName="Лекс Лютер" />
			<Person perImg="" perName="Томас Андерсон" />
			<Person perImg="" perName="Дарт Вейдер" />
		</div>
	);
};

export default MainLeft;