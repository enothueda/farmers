import { createSelector } from 'reselect';

const selectSector = state => state.sector;

export const selectCurrentSector = createSelector(
	[selectSector],
	sector => sector.currentSector
);

export const selectAllSectors = createSelector(
	[selectSector],
	sector => sector.allSectors
)