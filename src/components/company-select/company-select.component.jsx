import React from 'react';
import { connect } from 'react-redux'

import { selectAllCompanies } from '../../redux/company/company.selectors';
import { setCurrentCompany } from '../../redux/company/company.actions';
import { setCurrentRanch } from '../../redux/ranch/ranch.actions';

import './company-select.styles.scss';

const CompanySelect = ({ allCompanies, setCurrentCompany, setCurrentRanch }) => {

	const handleClick = async (company) => {
		await setCurrentCompany(company);
		await setCurrentRanch(null);
	}
	
	return (
		<div className='company-select'>
			<h3>SELECT A COMPANY</h3>
			{
				allCompanies 
				? allCompanies.map(company => 
					<h4 key={company.id} onClick={() => handleClick(company)}>
						{company.companyName}
					</h4>)
				: null 
			}
		</div>
	);
}
const mapStateToProps = state => ({
	allCompanies: selectAllCompanies(state)
});

const mapDispatchToProps = dispatch => ({
	setCurrentCompany: company => dispatch(setCurrentCompany(company)),
	setCurrentRanch: ranch => dispatch(setCurrentRanch(ranch))
})

export default connect(mapStateToProps, mapDispatchToProps)(CompanySelect);

