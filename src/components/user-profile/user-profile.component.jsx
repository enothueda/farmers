import React from 'react';
import { connect } from 'react-redux';

import ImageUploader from '../image-uploader/image-uploader.component';

import './user-profile.styles.scss';

const UserProfile = ({currentUser, currentCompany}) => {
	return (
		currentUser ?
			<div className='user-profile'>
		    	<h1>Perfil de Usuario</h1>
		    	<div className='user-info'>
		    		<img className='profile-photo' src={currentUser.photoURL} alt='user'/>
		    		<div className='profile-data'>
		    			<p className='user-data'>{currentUser.displayName}</p>
		    			<p className='user-data'>{currentUser.email}</p>
		    			<p className='user-data'>{currentUser.phoneNumber}</p>
		    			<p className='user-data'>
		    				{	currentCompany ? currentCompany.companyName : 'Company'	}
		    			</p>
		    		</div>    		
		    	</div>
		    	<ImageUploader 
					collection='users'
					docId={currentUser.id}
					folder='profile'
					route='photoURL'
				/>	
		    </div>
		:
			<div className='user-profile'> Loadig user ... </div>

)};

const mapStateToProps = state => ({
	currentUser: state.user.currentUser,
	currentCompany: state.company.currentCompany
})

export default connect(mapStateToProps)(UserProfile);
