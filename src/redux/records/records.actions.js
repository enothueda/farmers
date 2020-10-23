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
});

export const addHarvestRecord = record => ({
	type: RecordsActionTypes.ADD_HARVEST_RECORD,
	payload: record
});

export const addFertilizationRecord = record => ({
	type: RecordsActionTypes.ADD_FERTILIZATION_RECORD,
	payload: record
});

export const setProductApplication = product => ({
	type: RecordsActionTypes.SET_PRODUCT_APPLICATION,
	payload: product
});

export const clearProductsApplication = () => ({
	type: RecordsActionTypes.CLEAR_PRODUCT_APPLICATION
});

export const addApplicationRecord = record => ({
	type: RecordsActionTypes.ADD_APPLICATION_RECORD,
	payload: record
});

export const setInputSearch = input => ({
	type: RecordsActionTypes.SET_INPUT_SEARCH,
	payload: input
});

export const clearInputSearch = () => ({
	type: RecordsActionTypes.CLEAR_INPUT_SEARCH
});

