import React from 'react';

import './last-records.styles.scss';

const LastRecords = ({ records }) => {
    console.log(records)
    return (
        <div className='last-records'>
            <h3>Last Records</h3>
            {
                records
                ? 
                    <div className='records-header'>
                        <div className='record-block'>
                            <span>Date</span>
                        </div>
                        <div className='record-block'>
                            <span>Product</span>
                        </div>	
                        <div className='record-block'>
                            <span>Quantity</span>
                        </div>
                    </div>
                : null
            }           
            {
                records
                ? records.map((record, idx) => 
                    <div key={record.record || idx} className='records-data'>
                        <span className='data'>{record.date}</span>
                        <span className='data'>{record.product}</span>
                        <span className='data'>{record.quantity || record.dose}</span>
                    </div>
                )
                : null

            }
        </div>
    );
}

export default LastRecords;