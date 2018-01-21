import { combineReducers } from "redux";

import NewMeet from "./met-active";

const allReducers = combineReducers ({
	newMeet: NewMeet
});

export default allReducers;