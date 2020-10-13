import React from 'react';
import { connect } from 'react-redux'

import ActualRanch from '../../components/actual-ranch/actual-ranch.component';
import ActualSector from '../../components/actual-sector/actual-sector.component';
import ApplicationRecord from '../../components/application-record/application-record.component';
import LastRecords from '../../components/last-records/last-records.component';
import MultiSectors from '../../components/multi-sectors-select/multi-sectors.component';

import { selectApplicationRecords } from '../../redux/records/records.selectors';

const Applications = ({ application }) => (
    <div>
        <h1>Applications</h1>
        <ActualRanch />
        <MultiSectors />
        <ApplicationRecord />
        <LastRecords records={application}/>
    </div>
);

const mapStateToProps = state => ({
    application: selectApplicationRecords(state)
})

export default connect(mapStateToProps)(Applications);