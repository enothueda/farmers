import { UserActionTypes } from './user.types';

const INITIAL_STATE = {
	hidden: true,
	currentUser: null
}

const userReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case UserActionTypes.SET_CURRENT_USER:
			return {
				...state,
				currentUser: action.payload
			}
		case UserActionTypes.TOGGLE_NAVBAR_HIDDEN:
			return {
				...state,
				hidden: !state.hidden
			}
		default:
			return state;
	}
}

export default userReducer;