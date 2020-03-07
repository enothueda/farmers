import { SectorActionTypes } from './sector.types';

export const setAllSectors = sectors => ({
	type: SectorActionTypes.SET_ALL_SECTORS,
	payload: sectors
})

export const setCurrentSector = sector => ({
	type: SectorActionTypes.SET_CURRENT_SECTOR,
	payload: sector
});