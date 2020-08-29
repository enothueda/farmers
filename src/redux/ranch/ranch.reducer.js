import { RanchActionTypes } from './ranch.types';

const INITIAL_STATE = {
	currentRanch: null,
	allRanches: [],
	currentSector: null,
	allSectors: null
}

const ranchReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case RanchActionTypes.SET_CURRENT_RANCH:
			return {
				...state,
				currentRanch: action.payload,
				allSectors: null,
				currentSector: null
			}
		case RanchActionTypes.SET_ALL_RANCHES:
			return {
				...state,
				allRanches: [...state.allRanches, action.payload]
			}
		case RanchActionTypes.SET_CURRENT_SECTOR:
			return {
				...state,
				currentSector: action.payload
			}
		case RanchActionTypes.SET_ALL_SECTORS:
			return {
				...state,
				allSectors: action.payload,
				currentSector: null
			}
		case RanchActionTypes.CLEAR_RANCHES:
			return {
				...state,
				allRanches: []
			}
		default:
			return state;
	}
}

export default ranchReducer;