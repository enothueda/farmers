import { CropsActionTypes } from './crops.types';

export const setCropsInfo = crops => ({
	type: CropsActionTypes.SET_CROPS_INFO,
	payload: crops
});

export const setCurrentCrop = cropData => ({
	type: CropsActionTypes.SET_CURRENT_CROP,
	payload: cropData
});
