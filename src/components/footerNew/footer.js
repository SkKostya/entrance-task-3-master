import React from "react";
import { Link } from "react-router-dom";

export function Footer () {
	return (
		<div className="footer1">
			<Link to="/"><button className="footer1__cancle">Отмена</button></Link>
			<Link to="/editing"><button className="footer1__creature">Создать встречу</button></Link>
		</div>
	);
};