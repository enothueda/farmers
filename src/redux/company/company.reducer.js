import { CompanyActionTypes	 } from './company.types';

const INITIAL_STATE = {
	currentCompany: null
}

const companyReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case CompanyActionTypes.SET_CURRENT_COMPANY:
			return {
				...state,
				currentCompany: action.payload
			}
		default:
			return state;
	}
}

export default companyReducer;