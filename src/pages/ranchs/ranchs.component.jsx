import React from 'react';

import AddRanch from '../../components/add-ranch/add-ranch.component';
import AddSectors from '../../components/add-sectors/add-sectors.component';
import ActualRanch from '../../components/actual-ranch/actual-ranch.component';
import RanchSelect from '../../components/ranch-select/ranch-select.component';

class Ranchs extends React.Component {
   
    render() {
        return(
            <div>
                <h1>Ranch Setup</h1>                
                <div>
                    <ActualRanch />                   
                    
                    <RanchSelect />
                    <br />
                    <span> Ranch | </span>
                    <span> Sectors | </span>
                    <span> Settings </span>            
                </div>
                <AddRanch />
                <AddSectors />                 
            </div>
        )
    }
}   
    


export default Ranchs;