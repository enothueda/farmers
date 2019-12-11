import React from 'react';
import { Link } from 'react-router-dom';

import './navbar.styles.scss'

const NavBar = () => {
    return(
        <div className='navbar'>
            <Link className='option' to='/user'>User</Link>
            <Link className='option' to='/ranchs'>Ranch</Link>
            <Link className='option' to='/maps'>Maps</Link>
            <Link className='option' to='/records'>Records</Link>
            <Link className='option' to='/inspections'>Inspections</Link>
            <Link className='option' to='/applications'>Applications</Link>
            {
            /*    
            
            <Link className='option' to=''>Production</Link>
            <Link className='option' to=''>Inventory</Link>
            <Link className='option' to=''>Store</Link>
            <Link className='option' to=''>Dashboard</Link>
            <Link className='option' to=''>Support</Link>
            */
            }
            
        </div> 
    )
}

export default NavBar;