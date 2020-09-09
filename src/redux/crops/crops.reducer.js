import { CropsActionTypes } from './crops.types';

const INITIAL_STATE = {
	cropsInfo: [],
	currentCrop: {}
}

const cropsReducer = (state = INITIAL_STATE, action) => {
	switch(action.type) {
		case CropsActionTypes.SET_CROPS_INFO:
			return {
				...state,
				cropsInfo: action.payload
			}
		case CropsActionTypes.SET_CURRENT_CROP:
			return {
				...state,
				currentCrop: action.payload
			}
		default:
			return state
	}
}

export default cropsReducer;