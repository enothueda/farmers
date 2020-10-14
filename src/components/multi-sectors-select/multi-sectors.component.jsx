import React from 'react';
import { connect } from 'react-redux';

import FormInput from '../form-input/form-input.component';

import { removeSelectedSector, setSelectedSector } from '../../redux/ranch/ranch.actions';
import { selectAllSectors, selectSectorsSelected } from '../../redux/ranch/ranch.selectors';

import './multi-sectors.styles.scss';

const MultiSectors = ({ allSectors, removeSector, setSector, sectors }) => {
// check the warning, due to the checked is from uncontrolled input passed from the sectors
    const handleSelect = event => {
        const { value, checked } = event.target;
        if (value && checked ){
            setSector(value)
        } else {
            removeSector(value)
        }        
    }
    console.log('sectors', sectors)

    return (
        <div className='multi-sectors'>
        <h2>Select Sectors</h2>
        {
            allSectors
            ? allSectors.map(sector => 
                <FormInput 
                    type= 'checkbox'
                    key={sector.sectorId}
                    name={sector.sector}
                    label={sector.sector}
                    value={sector.sectorId}
                    onChange={handleSelect}
                    checked={sectors ? sectors.find(search => search === sector.sectorId) : false}
                />)
            : null
        }
        </div>
    )
}

const mapStateToProps = state => ({
    allSectors: selectAllSectors(state),
    sectors: selectSectorsSelected(state)
});

const mapDispatchToProps = dispatch => ({
    removeSector: sector => dispatch(removeSelectedSector(sector)),
    setSector: sector => dispatch(setSelectedSector(sector))
})

export default connect(mapStateToProps, mapDispatchToProps)(MultiSectors);