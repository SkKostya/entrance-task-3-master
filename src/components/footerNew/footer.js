import React from "react";
import { Link } from "react-router-dom";

const FooterNew = () => {
	return (
		<div className="footer1">
			<Link to="/"><button className="footer1__cancle footer1__cancle_btnrem">Отмена</button></Link>
			<Link to="/editing"><button className="footer1__creature">Создать встречу</button></Link>
		</div>
	);
};

export default FooterNew;