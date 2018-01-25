import React from "react";
import { Link } from "react-router-dom";

import Delete from "../logo/2018-01-07_20-05-33.png";

const DeleteMeeting = () => {
	return (
		<div className="blockDel">
			<div className="blockDel__windowDel">
				<img src={Delete} alt="Delete Meeting" className="blockDel__img" />
				<p className="blockDel__text">
					Встреча будет<br/>удалена безвозвратно
				</p>
				<Link to="/newmeet"><button className="blockDel__btn blockDel__btn_remove">Отмена</button></Link>
				<Link to="/newmeet"><button className="blockDel__btn">Удалить</button></Link>
			</div>
		</div>
	)
}

export default DeleteMeeting;