import { createSelector } from 'reselect';

const selectRecords = state => state.records;

export const selectInspectionRecords = createSelector(
	[selectRecords],
	records => records.detections
);

export const selectHarvestRecords = createSelector(
	[selectRecords],
	records => records.harvest
);

export const selectFertilizationRecords = createSelector(
	[selectRecords],
	records => records.fertilization
);

export const selectApplicationRecords = createSelector(
	[selectRecords],
	records => records.application
)
