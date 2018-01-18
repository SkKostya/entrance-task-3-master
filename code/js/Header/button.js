import React from "react";

const Button = (props) => {
	return (
		<button className={props.clName}>{props.btnTxt}</button>
	);
};

export default Button;