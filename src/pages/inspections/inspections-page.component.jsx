import React from 'react';

import RanchSelect from '../../components/ranch-select/ranch-select.component';
import SectorSelect from '../../components/sector-select/sector-select.component';
import ActualRanch from '../../components/actual-ranch/actual-ranch.component';
import ActualSector from '../../components/actual-sector/actual-sector.component';
import PlantsInspection from '../../components/plants-inspection/plants-inspection.component';

class Inspections extends React.Component {

    componentDidMount() {
        //console.log('Inspection Page Mounted')
    }

    render(){
        return (
            <div className="inspections">
                <h1>Plant Health Inspection</h1>
                <ActualRanch />
                <ActualSector />                                                 
                
                <PlantsInspection/>            
            </div>
        )
    }    
}

export default Inspections;