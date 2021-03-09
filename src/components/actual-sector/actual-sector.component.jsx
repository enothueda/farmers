import React, { useState } from 'react';
import { connect } from 'react-redux';

import SectorSelect from '../sector-select/sector-select.component';

import { selectCurrentSector } from '../../redux/ranch/ranch.selectors';

import './actual-sector.styles.scss';

const ActualSector = ({currentSector}) => {
	const [show, setShow] = useState(false)

	const showOptions = () => {
		setShow(!show)
	}
	
	return (
		<div className='actual-sector'>
			<h3 className='sector-title'>Sector Actual</h3>
			{
				currentSector ?
				(
					<div className='sector-display' onClick={() => showOptions()}>
						<span className='sector-option'>{currentSector.sector}</span>
						<span className='sector-option'>{currentSector.variety}</span>
						<span className='sector-option'>{currentSector.hectares} ha</span>
						<span className='sector-option'>{currentSector.plantingDate}</span>					
					</div>
				) :
				<div className='note' onClick={() => showOptions()}>SELECCIONE SECTOR</div>
			}
			{
				show && <SectorSelect />
			}	
		</div>
	);
}
const mapStateToProps = state => ({
	currentSector: selectCurrentSector(state)
})

export default connect(mapStateToProps)(ActualSector)