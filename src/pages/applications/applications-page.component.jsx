import React from 'react';

import ActualRanch from '../../components/actual-ranch/actual-ranch.component';
import ActualSector from '../../components/actual-sector/actual-sector.component';

import ApplicationRecord from '../../components/application-record/application-record.component';

const Applications = () => (
    <div>
        <h1>Applications Page</h1>
        <ActualRanch />
        <ActualSector />  

        <ApplicationRecord />
    </div>
);

export default Applications;