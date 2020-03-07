import { CropsActionTypes } from './crops.types';

const INITIAL_STATE = {
	cropsInfo: []
}

const cropsReducer = (state = INITIAL_STATE, action) => {
	switch(action.type) {
		case CropsActionTypes.SET_CROPS_INFO:
			return {
				...state,
				cropsInfo: action.payload
			}
		default:
			return state
	}
}

export default cropsReducer;