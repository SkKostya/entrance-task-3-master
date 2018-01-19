export function Time () {
	var ul = ["Янв", "Фев", "Март", "Апр", "Май", "Июнь", "Июль", "Авг",
			 "Сент", "Окт", "Нояб", "Дек"],
		days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг',
				 'Пятница', 'Суббота'],
		t = new Date(),
		month = t.getMonth(),
		day = days[t.getDay()],
		num = ul[month],
		date = document.getElementById("date"),
		getTime = t.getDate() + " " + num + " " + day;
	return getTime;
};