import { CompanyActionTypes	} from './company.types';

export const setCurrentCompany = company => ({
	type: CompanyActionTypes.SET_CURRENT_COMPANY,
	payload: company
});

export const getAllCompaniesFromUser = companies => ({
	type: CompanyActionTypes.GET_ALL_COMPANIES_FROM_USER,
	payload: companies
});

export const clearCompaniesInfo = () => ({
	type: CompanyActionTypes.CLEAR_COMPANIES
})