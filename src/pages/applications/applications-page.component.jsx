import React from 'react';
import { connect } from 'react-redux'

import ActualRanch from '../../components/actual-ranch/actual-ranch.component';
import ActualSector from '../../components/actual-sector/actual-sector.component';
import ApplicationRecord from '../../components/application-record/application-record.component';
import LastRecords from '../../components/last-records/last-records.component';
import MultiSectors from '../../components/multi-sectors-select/multi-sectors.component';
import ProductsRecord from '../../components/products-record/products-record.component';

import { selectApplicationRecords, selectProductsApplication } from '../../redux/records/records.selectors';

const Applications = ({ application , products}) => (
    <div>
        <h1>Applications</h1>
        <ActualRanch />
        <ApplicationRecord />
        <ProductsRecord products={products} />
        <LastRecords records={application}/>
    </div>
);

const mapStateToProps = state => ({
    application: selectApplicationRecords(state),
    products: selectProductsApplication(state)
})

export default connect(mapStateToProps)(Applications);