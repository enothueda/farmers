import { createSelector } from 'reselect';

const selectCrop = state => state.crop;

export const selectCurrentCrop = createSelector(
	[selectCrop],
	crop => crop.currentCrop
);