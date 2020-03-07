import { createSelector } from 'reselect';

const selectInspection = state => state.inspection;

export const selectInspectionRecords = createSelector(
	[selectInspection],
	inspection => inspection.records
);
