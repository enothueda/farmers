import { InspectionActionTypes } from './inspection.types';

export const addRecord = record => ({
	type: InspectionActionTypes.SET_INSPECTION_RECORD,
	payload: record
});

export const setInspection = inspection => ({
	type: InspectionActionTypes.SET_FULL_INSPECTION,
	payload: inspection
})