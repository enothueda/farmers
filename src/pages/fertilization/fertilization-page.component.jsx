import React from 'react';
import { connect } from 'react-redux';

import ActualRanch from '../../components/actual-ranch/actual-ranch.component';
import ActualSector from '../../components/actual-sector/actual-sector.component';
import FertilizationRecord from '../../components/fertilization-record/fertilization-record.component';
import LastRecords from '../../components/last-records/last-records.component';

import { selectFertilizationRecords } from '../../redux/records/records.selectors'

const Fertilization = ({ fertilization }) => (
    <div>
        <h1>Fertilization</h1>
        <ActualRanch />
        <ActualSector />

        <FertilizationRecord />
        <LastRecords records={fertilization}/>
    </div>
);


const mapStateToProps = state => ({
    fertilization: selectFertilizationRecords(state)
})

export default connect(mapStateToProps)(Fertilization)