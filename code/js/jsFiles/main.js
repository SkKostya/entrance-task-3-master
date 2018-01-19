export function anim () {
	var t = new Date(),
		y = (22 - t.getHours())*3600 + t.getMinutes()*60,
		animation = y + "s";
	return animation;
};

export function setTimePosition () {
	var t = new Date(),
		n = t.getHours() - 7,
		m = t.getMinutes();
	var x;
	var timePosition;

	if (t.getHours() >= 9){
		x = n * 65 + m * 0.99;
	}
	else if (t.getHours() == 8){
		x = m * 1.0833;
	}
	else if (t.getHours() == 7 && m > 29){
		x = (m - 29) * 1.0833;
	}
	else if (t.getHours() < 7 || t.getHours() == 23 && m > 20){
		x = 0;
	}

	return timePosition = (x + 235) + "px";
};

export function setTime () {
	var	h = new Date(),
		time = document.getElementById( "time" ),
		clock = h.getHours() + ":" + h.getMinutes();
	setInterval (clock, 30000);
	return clock;
}