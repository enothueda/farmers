import { RecordsActionTypes } from './records.types';
import { removePestDetection } from './records.utils'

const INITIAL_STATE = {
	detections: [],
	inspection: {},
	harvest: [],
	fertilization: [],
	products: [],
	application: [],
	input: {}
}

const recordsReducer = (state = INITIAL_STATE, action) => {
	switch(action.type) {
		case RecordsActionTypes.SET_PEST_DETECTION:
			return {
				...state,
				detections: [...state.detections, action.payload]
			}
		case RecordsActionTypes.SET_FULL_INSPECTION:
			return {
				...state,
				inspection: action.payload,
				detections: []
			}
		case RecordsActionTypes.REMOVE_DETECTION:
			return {
				...state,
				detections: removePestDetection(state.detections, action.payload)
			}
		case RecordsActionTypes.ADD_HARVEST_RECORD:
			return {
				...state,
				harvest: [...state.harvest, action.payload]
			}
		case RecordsActionTypes.ADD_FERTILIZATION_RECORD:
			return {
				...state,
				fertilization: [...state.fertilization, action.payload]
			}
		case RecordsActionTypes.SET_PRODUCT_APPLICATION:
			return {
				...state,
				products: [...state.products, action.payload]
			}
		case RecordsActionTypes.CLEAR_PRODUCT_APPLICATION:
			return {
				...state,
				products: []
			}
		case RecordsActionTypes.ADD_APPLICATION_RECORD:
			return {
				...state,
				application: [...state.application, action.payload]
			}
		case RecordsActionTypes.SET_INPUT_SEARCH:
			return {
				...state,
				input: {...state.input, ...action.payload}
			}
		case RecordsActionTypes.CLEAR_INPUT_SEARCH:
			return {
				...state,
				input: {}
			}
		default:
			return state;
	}
}

export default recordsReducer;