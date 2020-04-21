import { createSelector } from 'reselect';

const selectCompany = state => state.company;

export const selectCurrentCompany = createSelector(
	[selectCompany],
	company => company.currentCompany
);

export const selectAllCompanies = createSelector(
	[selectCompany],
	company => company.allCompanies
)