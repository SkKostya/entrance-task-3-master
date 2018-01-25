import React from "react";

const Input1 = (props) => {
	return (
		<div>
			<label className="main1__label" htmlFor="main1__people">Участники</label>
			<br />
			<input className="main1__topic" id="main1__people" 
			type="text" placeholder="Например, Тор Одинович" />
		</div>
	);
};

export default Input1;