import React from 'react';
import { connect } from 'react-redux';

import { toggleNavBarHidden } from '../../redux/user/user.actions';

import './menu-icon.styles.scss';

const MenuIcon = ({ toggleNavBarHidden }) => (
	<div className='menu-icon' onClick={()=> toggleNavBarHidden()}>
        <div className='bar' />
        <div className='bar' />
        <div className='bar' />
    </div>
);

const mapDispatchToProps = dispatch => ({
	toggleNavBarHidden: () => dispatch(toggleNavBarHidden())
})

export default connect(null, mapDispatchToProps)(MenuIcon);