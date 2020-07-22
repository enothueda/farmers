import React from 'react';
import { connect } from 'react-redux';

import { setCurrentSector } from '../../redux/sector/sector.actions';

import './sector-options.styles.scss';

const SectorOptions = ({ sector, setCurrentSector }) => (
	<div className='sector-options' onClick={() => setCurrentSector(sector)} >
		<span className='option'>{sector.sector}</span>
		<span className='option'>{sector.variety}</span>
		<span className='option'>{sector.hectares}</span>
		<span className='option'>{sector.plantingDate}</span>		
	</div>
);

const mapDispatchToProps = dispatch => ({
	setCurrentSector: sector => dispatch(setCurrentSector(sector))
})

export default connect(null, mapDispatchToProps)(SectorOptions);