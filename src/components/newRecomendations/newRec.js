import React from "react";

const NewRec = () => {
	return (
		<div className="main1__recommendations">
			<span className="main1__dtext">Рекомендованные перговорки</span>
			<p className="main1__meet main1__meet_blue">
				<span className="main1__time">16:00 – 16:30</span> &nbsp;&nbsp; 
				<span className="main1__text">Готем &middot; 4 этаж</span> 
				<button className="main1__block main1__block_remove">&#10006;</button>
			</p>
		</div>
	)
}

export default NewRec;