import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { auth } from '../../firebase/firebase.utils';
import { selectCurrentUser } from '../../redux/user/user.selectors';

import './header.styles.scss';

const Header = ({ currentUser }) => (
	<div className='header'>
		<div className='logo'>
			
		</div>
		<div className='menu'>
			<Link className='option' to="/" >Home</Link>
			<Link className='option' to="/" >Services</Link>
			<Link className='option' to="/" >Contact</Link>
			{
                currentUser?
                <div className='option' onClick={() => auth.signOut()} >Sign Out</div>
                :
                <Link className='option' to='/signin'>Sign In</Link> 
            }
		</div>		
	</div>
);

const mapStateToProps = state => ({
    currentUser: selectCurrentUser(state)
})

export default connect(mapStateToProps)(Header);