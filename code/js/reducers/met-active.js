export default function (state=null, action) {
	switch (action.type) {
		case "NEW_MEET":
			return action.payload;
			break;
		default:
			return state;
	}
}