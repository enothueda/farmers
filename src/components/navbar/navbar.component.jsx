import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { auth } from '../../firebase/firebase.utils';
import { selectCurrentRanch } from '../../redux/ranch/ranch.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { toggleNavBarHidden } from '../../redux/user/user.actions';

import './navbar.styles.scss'

const NavBar = ({ currentUser, currentCompany, currentRanch, dispatch }) => {
    //console.log('NavBar company', currentCompany );
    return(
        <div className='navbar' onClick={()=> dispatch(toggleNavBarHidden())}>
            <div className='close-icon'>
                <div className='close-button'>&#10005;</div>
            </div>
            <h1>Farmers</h1>
            <Link className='option' to='/'>Inicio</Link>
            <Link className='option' to='/user'> {currentUser ? currentUser.displayName : 'User'} </Link>
            <Link className='option' to='/company'>
                {
                    currentCompany ? currentCompany.companyName : 'Sin Compañia'
                }
            </Link>           
            <Link className='option' to='/ranchs'>{currentRanch ? currentRanch.name : 'Sin Rancho'}</Link>
            <Link className='option' to='/inspections'>Inspecciones</Link>
            <Link className='option' to='/applications'>Aplicaciones</Link>            
            <Link className='option' to='/harvest'>Harvest</Link>
            <Link className='option' to='/inventory'>Inventory</Link>
            <br />
            {
                currentUser?
                <div className='option' onClick={() => auth.signOut()} >Salir</div>
                :
                <Link className='option' to='/signin'>Ingresar</Link> 
            }
            <br />
            { /*
            <Link className='option' to='/records'>Records</Link>
            <Link className='option' to='/maps'>Maps</Link>    
            <Link className='option' to=''>Production</Link>
            <Link className='option' to=''>Cultural Labor</Link>
            <Link className='option' to=''>Store</Link>
            <Link className='option' to=''>Dashboard</Link>
            <Link className='option' to=''>Support</Link>
           */}
           
            
        </div> 
    )
}

const mapStateToProps = state => ({
    currentUser: selectCurrentUser(state),
    currentCompany: state.company.currentCompany,
    currentRanch: selectCurrentRanch(state)
})

export default connect(mapStateToProps)(NavBar);