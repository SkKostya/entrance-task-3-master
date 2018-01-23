import React from "react";

const DateTxt = () => {
	return (
		<div>
			<button className="main1__block">&#10006;</button>
			<p className="main1__datetxt">
				<span className="main1__dtext">Дата</span>
				<span className="main1__dtext">Начало</span>
				<span className="main1__dtext">Конец</span>
			</p>
			<input type="date" className="main1__date" />
			<input type="time" className="main1__date" />
			<input type="time" className="main1__date" />
		</div>
	);
};

export default DateTxt;