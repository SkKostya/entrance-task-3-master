import React from "react";

const Input = (props) => {
	return (
		<div>
			<label className="main1__label" htmlFor="main1__topic">Тема</label>
			<br />
			<input className="main1__topic" id="main1__topic" 
			type="text" placeholder="О чём будете говорить?" />
		</div>
	);
};

export default Input;