import { UserActionTypes } from './user.types';

export const setCurrentUser = user => ({
	type: UserActionTypes.SET_CURRENT_USER,
	payload: user
});

export const toggleNavBarHidden = () => ({
	type: UserActionTypes.TOGGLE_NAVBAR_HIDDEN
})