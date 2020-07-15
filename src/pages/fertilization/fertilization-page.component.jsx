import React from 'react';

import ActualRanch from '../../components/actual-ranch/actual-ranch.component';
import ActualSector from '../../components/actual-sector/actual-sector.component';
import FertilizationRecord from '../../components/fertilization-record/fertilization-record.component';

const Fertilization = () => (
    <div>
        <h1>Fertilization</h1>
        <ActualRanch />
        <ActualSector />

        <FertilizationRecord />
    </div>
);

export default Fertilization