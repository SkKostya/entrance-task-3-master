import React from "react";

export const Item = (props) => {
	return (
		<li className="main__item">
			{props.name}<br /><span className="main__num">{props.num}</span>
		</li>
	);
};



export const Floor = (props) => {
	return (
		<li className="main__item main__item_floor">{props.floor}</li>
	);
};