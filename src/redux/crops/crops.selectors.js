import { createSelector } from 'reselect';

const selectCrops = state => state.crops;

export const selectCropsInfo = createSelector(
	[selectCrops],
	crops => crops.cropsInfo
);

export const selectCurrentCrop = createSelector(
	[selectCrops],
	crops => crops.currentCrop
);
