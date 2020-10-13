import { RanchActionTypes } from './ranch.types';

export const setCurrentRanch = ranch => ({
	type: RanchActionTypes.SET_CURRENT_RANCH,
	payload: ranch
});

export const setAllRanches = ranches => ({
	type: RanchActionTypes.SET_ALL_RANCHES,
	payload: ranches
});

export const setAllSectors = sectors => ({
	type: RanchActionTypes.SET_ALL_SECTORS,
	payload: sectors
})

export const setCurrentSector = sector => ({
	type: RanchActionTypes.SET_CURRENT_SECTOR,
	payload: sector
});

export const clearRanchesData = () => ({
	type: RanchActionTypes.CLEAR_RANCHES
});

export const setSelectedSector = sector => ({
	type: RanchActionTypes.SET_SELECTED_SECTOR,
	payload: sector
});

export const removeSelectedSector = sector => ({
	type: RanchActionTypes.REMOVE_SELECTED_SECTOR,
	payload: sector
});

export const clearSelectedSectors = () => ({
	type: RanchActionTypes.CLEAR_SELECTED_SECTORS
})