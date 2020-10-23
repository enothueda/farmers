import React from 'react';

import './last-records.styles.scss';

const LastRecords = ({ records, titlea, titleb }) => {
    console.log(records)
    return (
        <div className='last-records'>
            <h3>Last Records</h3>            
            <div className='records-header'>
                <div className='record-block'>
                    <span>Date</span>
                </div>
                <div className='record-block'>
                    <span>{titlea}</span>
                </div>	
                <div className='record-block'>
                    <span>{titleb}</span>
                </div>
            </div>
            {
                records
                ? records.map((record, idx) => 
                    <div key={record.record || idx} className='records-data'>
                        <span className='data'>{record.date}</span>
                        <span className='data'>{record.product || record.application }</span>
                        <span className='data'>{record.quantity || record.equipment}</span>
                    </div>
                )
                : null
            }
        </div>
    );
}

export default LastRecords;