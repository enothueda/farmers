import { RanchActionTypes } from './ranch.types';
import { addSector, removeSector } from './ranch.utils';

const INITIAL_STATE = {
	currentRanch: null,
	allRanches: [],
	currentSector: null,
	allSectors: null,
	selectedSectors: []
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
		case RanchActionTypes.SET_SELECTED_SECTOR:
			return {
				...state,
				selectedSectors: addSector(state.selectedSectors, action.payload)
			}
		case RanchActionTypes.REMOVE_SELECTED_SECTOR:
			return {
				...state,
				selectedSectors: removeSector(state.selectedSectors, action.payload)
			}
		case RanchActionTypes.CLEAR_SELECTED_SECTORS:
			return {
				...state,
				selectedSectors: []
			}
		default:
			return state;
	}
}

export default ranchReducer;