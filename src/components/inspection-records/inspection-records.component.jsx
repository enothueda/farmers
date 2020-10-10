import React from 'react';
import { connect } from 'react-redux';

import { removeDetection } from '../../redux/records/records.actions';

import './inspection-records.styles.scss';

const InspectionRecords = ({ detections, removeDetection }) => {

	const deleteDetection = record => {
		removeDetection(record);
	}

	return (
		<div className='inspection-records'>
			<div className='records-header'>
				<div className='record-block'>
					<span>Group</span>
				</div>
				<div className='record-block'>
					<span>Name</span>
				</div>	
				<div className='record-block'>
					<span>Quantity</span>
				</div>
				<div className='record-block'>
					<span>Level</span>
				</div>
				<div className='record-block'>
					<span>Remove</span>
				</div>
			</div>
			{	detections 
				? detections.map((record, index) => 
					<div key={index} className='record-data'>
						<span className='data'>{record.type.toUpperCase()}</span>						
						<span className='data'>{record.name}</span>
						<span className='data'>{record.quantity}</span>
						<span className='data'>{record.incidence}</span>
						<div className='remove-button' onClick={() => deleteDetection(record)}>&#10005;</div>				
					</div>
				)
				: null				
			}
		</div>
	);
}

const mapDispatchToProps = dispatch => ({
	removeDetection: detection => dispatch(removeDetection(detection))
})

export default connect(null, mapDispatchToProps)(InspectionRecords);