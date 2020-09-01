import React, { useState } from 'react';
import { connect } from 'react-redux';

import RanchSelect from '../ranch-select/ranch-select.component';

import { selectCurrentRanch } from '../../redux/ranch/ranch.selectors';

import './actual-ranch.styles.scss';

const ActualRanch = ({ currentRanch }) => {
	const [show, setShow] = useState(false)

	const showOptions = () => {
		setShow(!show)
	}
	
	return (
		<div className='actual-ranch'>
			<h2 className='ranch-title'>Actual Ranch</h2>
			{
				currentRanch 
				? <div className='ranch-display' onClick={() => showOptions()}>
					<span className='ranch-option'>{currentRanch.ranchId} </span>
					<span className='ranch-option'>{currentRanch.name}</span>				
					<span className='ranch-option'>{currentRanch.crop} </span>
				</div>			
				: <div className='note' onClick={() => showOptions()}>SELECT A RANCH</div>
			}
			{
				show &&	<RanchSelect />
			}	
		</div>
	);
}
const mapStateToProps = state => ({
	currentRanch: selectCurrentRanch(state)
});

export default connect(mapStateToProps)(ActualRanch);