import React from "react";

export const Person = (props) => {
	return (
		<p className="main1__person">
			<img src={props.perImg} alt="" className="main1__img" />
			&nbsp; <span>{props.perName}</span> &nbsp;
			<button className="main1__block main1__block_delete">
				&#10006;
			</button>
		</p>
	);
};