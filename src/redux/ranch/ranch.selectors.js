import { createSelector } from 'reselect';

const selectRanch = state => state.ranch;

export const selectCurrentRanch = createSelector(
	[selectRanch],
	ranch => ranch.currentRanch
);

export const selectAllRanches = createSelector(
	[selectRanch],
	ranches => ranches.allRanches
);

export const selectCurrentSector = createSelector(
	[selectRanch],
	sector => sector.currentSector
);

export const selectAllSectors = createSelector(
	[selectRanch],
	sector => sector.allSectors
)