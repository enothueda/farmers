import { createSelector } from 'reselect';

const selectRecords = state => state.records;

export const selectInspectionRecords = createSelector(
	[selectRecords],
	records => records.detections
);
