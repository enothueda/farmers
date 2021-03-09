import React from 'react';
import { connect } from 'react-redux'

import CompanyProfile from '../../components/company-profile/company-profile.component';
import AddCompany from '../../components/add-company/add-company.component';
import CompanySelect from '../../components/company-select/company-select.component';
import WithForm from '../../components/with-form/with-form.component';

import { selectCurrentUser  } from '../../redux/user/user.selectors';

import './company-page.styles.scss';

const CompanyPage = ({ currentUser }) =>  {

	const AddCompanyWithForm = WithForm(AddCompany)

	return (
		<div className='company-page'>
			<h1>Empresa</h1>			
			{
				currentUser
				? 
					currentUser.company
					? <CompanySelect />
					: null
				: null
			}
			<CompanyProfile />
			{
				currentUser 
				? <AddCompanyWithForm title='Registrar empresa' /> 
				: <h4>Inicie sesion o Registrese para tener acceso</h4>
			}
				
		</div>
	)
};

const mapStateToProps = state => ({
	currentUser: selectCurrentUser(state)
})

export default connect(mapStateToProps)(CompanyPage);