import { RecordsActionTypes } from './records.types';
import { removePestDetection } from './records.utils'

const INITIAL_STATE = {
	detections: [],
	inspection: {},
	harvest: [],
	fertilization: [],
	application: []
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
		case RecordsActionTypes.ADD_APPLICATION_RECORD:
				return {
					...state,
					application: [...state.application, action.payload]
				}
		default:
			return state;
	}
}

export default recordsReducer;