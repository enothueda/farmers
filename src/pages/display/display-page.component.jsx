import React from 'react';
import Inspections from '../inspections/inspections-page.component';
import Ranchs from '../ranchs/ranchs.component';

const DisplayPage = () => {
    return(
        <div className='display-page'>
            <Ranchs/>
            <Inspections />
        </div> 
    )
    
}

export default DisplayPage;