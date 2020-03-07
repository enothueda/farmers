import { CropActionTypes } from './crop.types';

const INITIAL_STATE = {
	currentCrop: {}
}

const cropReducer = (state = INITIAL_STATE, action) => {
	switch(action.type) {
		case CropActionTypes.SET_CURRENT_CROP:
			return {
				...state,
				currentCrop: action.payload
			}
		default:
			return state
	}
}

export default cropReducer;