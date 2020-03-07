import React from 'react';
import { connect } from 'react-redux';

import './company-profile.styles.scss';

const CompanyProfile = ({ currentCompany }) => {
		
	return (
		currentCompany 
		? 
			<div className='company-profile'>
				<h2>{currentCompany.companyName}</h2>
				<div className='logo-container'>
					<img alt='logo' />
				</div>
				<div className='company-data'>
					<span>{currentCompany.country}</span>
					<span>{currentCompany.location}</span>
					<span>{currentCompany.address}</span>
				</div>			
			</div> 
		:
			<div className='company-profile'>
				<span>Please Add a Company or Request to be assigned to one</span>
			</div>
)};

const mapStateToProps = state => ({
	currentCompany: state.company.currentCompany
})

export default connect(mapStateToProps)(CompanyProfile);