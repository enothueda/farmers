import React, { useState } from 'react';
import { connect } from 'react-redux';

import FormInput from '../form-input/form-input.component';
import CheckBox from '../checkbox/checkbox.component';

import { removeSelectedSector, setSelectedSector } from '../../redux/ranch/ranch.actions';
import { selectAllSectors, selectSectorsSelected } from '../../redux/ranch/ranch.selectors';

import './multi-sectors.styles.scss';

const MultiSectors = ({ allSectors, removeSector, setSector, sectors }) => {
// check the warning, due to the checked is from uncontrolled input passed from the sectors
    const [selected, setSelected] = useState(false)
    const handleSelect = event => {
        const { name, value, checked } = event.target;
        console.log('state', event.target)
        if (value && checked ){
            setSelected(!selected);
            setSector(value);
        
        } else {
            setSelected(!selected);
            removeSector(value);
        }        
    }
    console.log('sectors', sectors)

    return (
        <div className='multi-sectors'>
        <legend>Select Sectors</legend>
        {
            allSectors
            ? allSectors.map(sector => 
                <CheckBox 
                    key={sector.sectorId}
                    name={sector.sector}
                    label={sector.sector}
                    value={sector.sectorId}
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