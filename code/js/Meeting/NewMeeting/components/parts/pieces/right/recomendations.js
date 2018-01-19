import React from "react";

const Meet = () => {
	return (
		<p className="main1__meet">
			<span className="main1__time">16:00 – 16:30</span>
			&nbsp;&nbsp;
			<span className="main1__text">Готем &middot; 4 этаж</span>
		</p>
	);
};

const Recomendations = () => {
	return (
		<div className="main1__recommendations">
			<span className="main1__dtext">Рекомендованные перговорки</span>
			<Meet />
			<Meet />
			<Meet />
		</div>
	);
};

export default Recomendations;