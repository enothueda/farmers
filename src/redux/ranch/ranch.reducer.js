import { RanchActionTypes } from './ranch.types';

const INITIAL_STATE = {
	currentRanch: null,
	allRanches: null
}

const ranchReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case RanchActionTypes.SET_CURRENT_RANCH:
			return {
				...state,
				currentRanch: action.payload
			}
		case RanchActionTypes.SET_ALL_RANCHES:
			return {
				...state,
				allRanches: action.payload
			}
		default:
			return state;
	}
}

export default ranchReducer;