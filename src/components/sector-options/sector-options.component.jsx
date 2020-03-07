import React from 'react';
import { connect } from 'react-redux';

import CustomButton from '../custom-button/custom-button.component';
import { setCurrentSector } from '../../redux/sector/sector.actions';

import './sector-options.styles.scss';

const SectorOptions = ({ sector, setCurrentSector }) => (
	<div className='sector-options'>
		<span className='option'>{sector.sector}</span>
		<span className='option'>{sector.variety}</span>
		<span className='option'>{sector.hectares}</span>
		<span className='option'>{sector.plantingDate}</span>
		<CustomButton onClick={()=> setCurrentSector(sector)} className='option'>select sector</CustomButton>
	</div>
);

const mapDispatchToProps = dispatch => ({
	setCurrentSector: sector => dispatch(setCurrentSector(sector))
})

export default connect(null, mapDispatchToProps)(SectorOptions);