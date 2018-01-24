import React from "react";
import { Link } from "react-router-dom";

const DeleteMeeting = () => {
	return (
		<div className="blockDel">
			<div className="blockDel__windowDel">
				<img src="../logo/2018-01-07_20-05-33.png" alt="" className="blockDel__img" />
				<p className="blockDel__text">
					Встреча будет<br/>удалена безвозвратно
				</p>
				<Link to="/newmeet"><button className="blockDel__btn">Отмена</button></Link>
				<Link to="/newmeet"><button className="blockDel__btn">Удалить</button></Link>
			</div>
		</div>
	)
}

export default DeleteMeeting;