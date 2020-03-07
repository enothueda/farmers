import React from 'react';
import { connect } from 'react-redux';

import { selectCurrentSector } from '../../redux/sector/sector.selectors';

import './actual-sector.styles.scss';

const ActualSector = ({currentSector}) => (
	<div className='actual-sector'>
		<h3 className='sector-title'>Actual Sector</h3>
		{
			currentSector ?
			(
				<div className='sector-display'>
					<span className='sector-option'>{currentSector.sector}</span>
					<span className='sector-option'>{currentSector.variety}</span>
					<span className='sector-option'>{currentSector.hectares} ha</span>
					<span className='sector-option'>{currentSector.plantingDate}</span>					
				</div>
			) :
			<span className='note'>SELECT A SECTOR</span>
		}		
	</div>
);

const mapStateToProps = state => ({
	currentSector: selectCurrentSector(state)
})

export default connect(mapStateToProps)(ActualSector)