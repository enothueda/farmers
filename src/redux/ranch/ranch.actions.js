import { RanchActionTypes } from './ranch.types';

export const setCurrentRanch = ranch => ({
	type: RanchActionTypes.SET_CURRENT_RANCH,
	payload: ranch
});

export const setAllRanches = ranches => ({
	type: RanchActionTypes.SET_ALL_RANCHES,
	payload: ranches
})