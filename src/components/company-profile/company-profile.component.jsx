import React from 'react';
import { connect } from 'react-redux';

import ImageUploader from '../image-uploader/image-uploader.component';
import './company-profile.styles.scss';

const CompanyProfile = ({ currentCompany }) => {
		
	return (
		currentCompany 
		? 
			<div className='company-profile'>				
				<h2>{currentCompany.companyName}</h2>
				<div className='company-info'>
					<img alt='logo' src={currentCompany.logo} />
					<div className='company-data'>
						<span>{currentCompany.country}</span>
						<span>{currentCompany.location}</span>
						<span>{currentCompany.address}</span>
						<span>{currentCompany.role}</span>
					</div>
				</div>
				
				<ImageUploader 
					collection='companies'
					docId={currentCompany.id}
					folder='logo'
					route='logo'
				/>		
			</div> 
		:
			<div className='company-profile'>
				<span>Registre una empresa o solicite acceso a una empresa</span>
			</div>
)};

const mapStateToProps = state => ({
	currentCompany: state.company.currentCompany
})

export default connect(mapStateToProps)(CompanyProfile);