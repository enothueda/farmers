import { CropActionTypes } from './crop.types';

export const setCurrentCrop = cropData => ({
	type: CropActionTypes.SET_CURRENT_CROP,
	payload: cropData
})