import React from 'react';

import UserProfile from '../../components/user-profile/user-profile.component';
import UserSettings from '../../components/user-settings/user-settings.component';

import './user-page.styles.scss';

const UserPage = () => (
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
    </div>
);

export default UserPage;
