import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { auth } from '../../firebase/firebase.utils';
import { selectCurrentRanch } from '../../redux/ranch/ranch.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';

import './navbar.styles.scss'

const NavBar = ({ currentUser, currentCompany, currentRanch }) => {
    console.log('NavBar company', currentCompany );
    return(
        <div className='navbar'>
            <Link className='option' to='/'>Home</Link>
            <Link className='option' to='/company'>
                {
                    currentCompany ? currentCompany.companyName : 'Add Company'
                }
            </Link>           
            {
                currentUser?
                <div className='option' onClick={() => auth.signOut()} >Sign Out</div>
                :
                <Link className='option' to='/signin'>Sign In</Link> 
            }
            <br />
            
            <Link className='option' to='/user'> {currentUser ? currentUser.displayName : 'User'} </Link>
            <Link className='option' to='/ranchs'>{currentRanch ? currentRanch.name : 'Not Ranch'}</Link>
            <Link className='option' to='/inspections'>Inspections</Link>
            <Link className='option' to='/applications'>Applications</Link>            
            <Link className='option' to='/records'>Records</Link>
              
            { /*
            
            <Link className='option' to='/maps'>Maps</Link>    
            <Link className='option' to=''>Production</Link>
            <Link className='option' to=''>Cultural Labor</Link>
            <Link className='option' to=''>Inventory</Link>
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