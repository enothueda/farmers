import React from 'react';

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
                <h1>Inspeccion de Plantas</h1>
                <ActualRanch />
                <ActualSector />                                                 
                
                <PlantsInspection/>            
            </div>
        )
    }    
}

export default Inspections;