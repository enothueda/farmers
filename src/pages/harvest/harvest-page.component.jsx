import React from 'react';

import ActualRanch from '../../components/actual-ranch/actual-ranch.component';
import ActualSector from '../../components/actual-sector/actual-sector.component';
import HarvestRecord from '../../components/harvest-record/harvest-record.component';

import './harvest-page.styles.scss';

const Harvest = () => (
    <div>
        <h1>Harvest Page</h1>
        <ActualRanch />
        <ActualSector />

        <HarvestRecord />

    </div>

);

export default Harvest;