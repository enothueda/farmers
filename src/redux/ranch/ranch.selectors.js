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