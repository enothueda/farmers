import React from 'react';

import './inspection-records.styles.scss';

const InspectionRecords = ({records}) => (
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
		{
			records.map((record, index) => 
				<div key={index} className='record-data'>
					<span className='data'>{Object.keys(record)[2].toUpperCase()}</span>
					<div className='data'>
						<span className='pest'>{record.pests}</span>
						<span className='disease'>{record.diseases}</span>
						<span className='beneficials'>{record.beneficials}</span>
					</div>
					<span className='data'>{record.quantity}</span>
					<span className='data'>{record.incidence}</span>
					<div className='remove-button' >&#10005;</div>				
				</div>
			)
		}
	</div>
);

export default InspectionRecords;