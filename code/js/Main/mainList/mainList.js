import React from "react";

import { Item } from "./item";
import { Floor } from "./item";

const List = () => {
	return (
		<ul className="main__list">
			<ul className="main__dis">
				<Floor floor="7 этаж" />
				<Item name="Ржавый Фред" num="3 – 6 человек" />
				<Item name="Прачечная" num="до 10 человек" />
				<Item name="Жёлтый дом" num="до 10 человек" />
				<Item name="Оранжевый тюльпан" num="до 10 человек" />
			</ul>
			<ul>
				<Floor floor="6 этаж" />
				<Item name="Джокер" num="3 – 6 человек" />
				<Item name="Мариванна" num="3 – 6 человек" />
				<Item name="Тонкий Боб" num="3 – 6 человек" />
				<Item name="Чёрная вдова" num="3 – 6 человек" />
				<Item name="Белорусский ликёр" num="3 – 6 человек" />
			</ul>
		</ul>
	);
};

export default List;