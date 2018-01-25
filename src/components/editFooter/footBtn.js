import React from "react";
import { Link } from "react-router-dom";

const FooterBtn = () => {
	return (
		<div className="footer1">
			<Link to="/"><button className="footer1__cancle footer1__cancle_center">Отмена</button></Link>
			<Link to="/remove"><button className="footer1__cancle footer1__cancle_center">Удалить встречу</button></Link>
			<Link to="/meetingcreated"><button className="footer1__cancle footer1__cancle_center">Сохранить</button></Link>
		</div>

	)
}

export default FooterBtn;