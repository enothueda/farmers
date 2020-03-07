import React from 'react';

import CompanyProfile from '../../components/company-profile/company-profile.component';
import AddCompany from '../../components/add-company/add-company.component';

import './company-page.styles.scss';

const CompanyPage = () => (
	<div className='company-page'>
		<h1>Company Profile</h1>
		<CompanyProfile />
		<AddCompany />		
	</div>
);

export default CompanyPage;