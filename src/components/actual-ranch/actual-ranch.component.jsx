import React from 'react';
import { connect } from 'react-redux';

import { selectCurrentRanch } from '../../redux/ranch/ranch.selectors';

import './actual-ranch.styles.scss';

const ActualRanch = ({ currentRanch }) => (
	<div className='actual-ranch'>
		<h2 className='ranch-title'>Actual Ranch</h2>
		{
			currentRanch 
			? 
			(<div className='ranch-display'>
				<span className='ranch-option'>{currentRanch.ranchId} </span>
				<span className='ranch-option'>{currentRanch.name}</span>				
				<span className='ranch-option'>{currentRanch.crop} </span>
			</div>
			)
			:
			<span className='note'>SELECT A RANCH</span>
		}		
	</div>
);

const mapStateToProps = state => ({
	currentRanch: selectCurrentRanch(state)
});

export default connect(mapStateToProps)(ActualRanch);