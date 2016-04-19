// state argument is not application state
// only the state this reducer is responsible for
// if state is set to undefined, return null
export default function(state = null, action) {
	switch(action.type) {
		case 'BOOK_SELECTED':
			return action.payload;
	}

	return state;
}