import React from "react";

import { Input, Input1, Person, NewMet } from "../../components";

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