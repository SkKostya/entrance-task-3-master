import React from "react";
import { Link } from "react-router-dom";

const BkgcMeetCre = () => {
	return (
		<div className="bkgc__meetCre">
			<img src="../logo/2018-01-02_20-13-38.png" alt="Встреча создана" className="blockDel__img" />
			<p className="bkgc__header"></p>
			<p class="bkgc__date">
				14 декабря, 15:00-17:00<br />
				<span>Готем &middot; 4 этаж</span>
			</p>
			<Link to="/"><button className="bkgc__good">Хорошо</button></Link>
		</div>
	)
};

export default BkgcMeetCre;