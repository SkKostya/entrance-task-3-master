import React from "react";

export const Input = (props) => {
	return (
		<div>
			<label className="main1__label" htmlFor="main1__topic">Тема</label>
			<br />
			<input className="main1__topic" id="main1__topic" 
			type="text" placeholder="О чём будете говорить?" />
		</div>
	);
};

export const Input1 = (props) => {
	return (
		<div>
			<label className="main1__label" htmlFor="main1__people">Участники</label>
			<br />
			<input className="main1__topic" id="main1__people" 
			type="text" placeholder="Например, Тор Одинович" />
		</div>
	);
};