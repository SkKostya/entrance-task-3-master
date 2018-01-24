import React from "react";

import { MainLeft, EditRight } from "../../components";

const MainEdit = () => {
	return (
		<div className="main1">
			<MainLeft someTitle="Редактирование встречи" />
			<EditRight />
		</div>
	)
}

export default MainEdit;