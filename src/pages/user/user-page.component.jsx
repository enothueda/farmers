import React from 'react';
import { connect } from 'react-redux'

import UserProfile from '../../components/user-profile/user-profile.component';
import UserSettings from '../../components/user-settings/user-settings.component';
import AssignPermissions from '../../components/assign-permissions/assign-permissions.component';

import './user-page.styles.scss';
import { selectCurrentCompany } from '../../redux/company/company.selectors';

const UserPage = ({ company }) => (
    <div className='user-page'>
	    <UserProfile />
	    <UserSettings />
	    <div className='company-settings'>
	    	<h2>Company Settings</h2>
	    	<p>Company Name</p>
	    	<p>Logo</p>
	    	<p>Legal Name</p>
	    	<p>Address</p>
	    	<p>Starting Date (bck)</p>
	    	<span>User Type </span>
		</div>
		{	company 
			? company.role === 'admin' || company.role === 'manager' ? <AssignPermissions /> : null
			: null
		}
		
		
    </div>
);

const mapStateToProps = state => ({
	company: selectCurrentCompany(state)
})

export default connect(mapStateToProps)(UserPage);
