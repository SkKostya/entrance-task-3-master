import React from "react";

import { Input, Input1, MainPerson, MainTitle } from "../../components";
import Leks from "../logo/2018-01-04_17-04-31.png";
import Tomas from "../logo/2018-01-04_17-02-52.png";
import Veyder from "../logo/2018-01-04_17-05-01.png";

const MainLeft = (props) => {
	return (
		<div className="main1__left">
			<MainTitle met={props.someTitle} />
			<form className="main1__margin"><Input /></form>
			<form className="main1__margin"><Input1 /></form>
			<MainPerson perImg={Leks} perName="Лекс Лютер" />
			<MainPerson perImg={Tomas} perName="Томас Андерсон" />
			<MainPerson perImg={Veyder} perName="Дарт Вейдер" />
		</div>
	);
};

export default MainLeft;