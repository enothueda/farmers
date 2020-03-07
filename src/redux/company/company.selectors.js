import { createSelector } from 'reselect';

const selectCompany = state => state.company;

export const selectCurrentCompany = createSelector(
	[selectCompany],
	company => company.currentCompany
)