import React from 'react';
import { connect } from 'react-redux'

import CompanyProfile from '../../components/company-profile/company-profile.component';
import AddCompany from '../../components/add-company/add-company.component';
import CompanySelect from '../../components/company-select/company-select.component';
import { selectCurrentUser  } from '../../redux/user/user.selectors';

import './company-page.styles.scss';

const CompanyPage = ({ currentUser }) =>  {

	return (
		<div className='company-page'>
			<h1>Company Profile</h1>
			<CompanyProfile />
			{
				currentUser
				? 
					currentUser.company
					? <CompanySelect />
					: null
				: null
			}
			
			{
				currentUser 
				? <AddCompany /> 
				: <h4>Please Sign In First</h4>
			}
				
		</div>
	)
};

const mapStateToProps = state => ({
	currentUser: selectCurrentUser(state)
})

export default connect(mapStateToProps)(CompanyPage);