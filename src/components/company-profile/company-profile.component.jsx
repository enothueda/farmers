import React from 'react';
import { connect } from 'react-redux';

import ImageUploader from '../image-uploader/image-uploader.component';
import './company-profile.styles.scss';

const CompanyProfile = ({ currentCompany }) => {
		
	return (
		currentCompany 
		? 
			<div className='company-profile'>
				
				<div className='company-info'>
					<img alt='logo' src={currentCompany.logo} />
					<div className='company-data'>
						<h2>{currentCompany.companyName}</h2>
						<span>{currentCompany.country}</span>
						<span>{currentCompany.location}</span>
						<span>{currentCompany.address}</span>
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
				<span>Please Add a Company or Request access to your Manager</span>
			</div>
)};

const mapStateToProps = state => ({
	currentCompany: state.company.currentCompany
})

export default connect(mapStateToProps)(CompanyProfile);