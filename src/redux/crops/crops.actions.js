import { CropsActionTypes } from './crops.types';

export const setCropsInfo = crops => ({
	type: CropsActionTypes.SET_CROPS_INFO,
	payload: crops
})