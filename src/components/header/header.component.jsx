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
			<Link className='option' to="/" >Inicio</Link>
			<Link className='option' to="/" >Servicios</Link>
			<Link className='option' to="/" >Contacto</Link>
			{
                currentUser?
                <div className='option' onClick={() => auth.signOut()} >Salir</div>
                :
                <Link className='option' to='/signin'>Ingresar</Link> 
            }
		</div>		
	</div>
);

const mapStateToProps = state => ({
    currentUser: selectCurrentUser(state)
})

export default connect(mapStateToProps)(Header);