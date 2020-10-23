import React from 'react';
import { connect } from 'react-redux';

import ActualRanch from '../../components/actual-ranch/actual-ranch.component';
import ActualSector from '../../components/actual-sector/actual-sector.component';
import HarvestRecord from '../../components/harvest-record/harvest-record.component';
import LastRecords from '../../components/last-records/last-records.component';

import { selectHarvestRecords } from '../../redux/records/records.selectors'

import './harvest-page.styles.scss';

const Harvest = ({ harvest }) => (
    <div>
        <h1>Harvest</h1>
        <ActualRanch />
        <ActualSector />

        <HarvestRecord />
        <LastRecords records={harvest} titlea='Product' titleb='Quantity' />

    </div>

);

const mapStateToProps = state => ({
    harvest: selectHarvestRecords(state)
});

export default connect(mapStateToProps)(Harvest);