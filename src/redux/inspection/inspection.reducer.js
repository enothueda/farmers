import { InspectionActionTypes } from './inspection.types';

const INITIAL_STATE = {
	records: [],
	inspection: {}
}

const InspectionReducer = (state = INITIAL_STATE, action) => {
	switch(action.type) {
		case InspectionActionTypes.SET_INSPECTION_RECORD:
			return {
				...state,
				records: [...state.records, action.payload]
			}
		case InspectionActionTypes.SET_FULL_INSPECTION:
			return {
				...state,
				inspection: action.payload,
				records: []
			}
		default:
			return state
	}
}

export default InspectionReducer;