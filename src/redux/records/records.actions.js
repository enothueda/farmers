import { RecordsActionTypes } from './records.types';

export const setDetection = detection => ({
	type: RecordsActionTypes.SET_PEST_DETECTION,
	payload: detection
});

export const setInspection = inspection => ({
	type: RecordsActionTypes.SET_FULL_INSPECTION,
	payload: inspection
});

export const removeDetection = detection => ({
	type: RecordsActionTypes.REMOVE_DETECTION,
	payload: detection
})
