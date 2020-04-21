import { CompanyActionTypes	 } from './company.types';

const INITIAL_STATE = {
	currentCompany: null,
	allCompanies: []
}

const companyReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case CompanyActionTypes.SET_CURRENT_COMPANY:
			return {
				...state,
				currentCompany: action.payload
			}
		case CompanyActionTypes.GET_ALL_COMPANIES_FROM_USER:
			return {
				...state,
				allCompanies: [...state.allCompanies, action.payload]
			}
		case CompanyActionTypes.CLEAR_COMPANIES:
			return {
				...state,
				allCompanies: []
			}
		default:
			return state;
	}
}

export default companyReducer;