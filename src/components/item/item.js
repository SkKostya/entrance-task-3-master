import React from "react";

const Item = (props) => {
	return (
		<li className="main__item">
			{props.name}<br /><span className="main__num">{props.num}</span>
		</li>
	);
};

export default Item;