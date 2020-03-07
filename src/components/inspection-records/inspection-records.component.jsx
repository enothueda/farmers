import React from 'react';

import './inspection-records.styles.scss';

const InspectionRecords = ({records}) => (
	<div className='inspection-records'>
		{
			records.map((record, index) => 
				<div key={index} className='record-data'>
					<span className='data'>{Object.keys(record)[0]}</span>
					<span className='data'>{record.pests}</span>
					<span className='data'>{record.diseases}</span>
					<span className='data'>{record.beneficials}</span>
					<span className='data'>{record.quantity}</span>
					<span className='data'>{record.incidence}</span>					
				</div>
			)
		}
	</div>
);

export default InspectionRecords;