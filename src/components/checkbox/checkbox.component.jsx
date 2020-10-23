import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import FormInput from '../form-input/form-input.component';

import { removeSelectedSector, setSelectedSector } from '../../redux/ranch/ranch.actions';
import { selectSectorsSelected } from '../../redux/ranch/ranch.selectors';

import './checkbox.styles.scss';

const CheckBox = ({ setSector, removeSector, name, label, value, sectors }) => {

    const [selected, setSelected] = useState(false);

    const handleSelect = event => {
        const { value, checked } = event.target;
        if(checked) {
            setSelected(!selected);
            setSector(value);
            console.log('checked', checked)
        } else {
            setSelected(!selected);
            removeSector(value);
            console.log('unchecked', checked)
        }

    }

    return (
        <FormInput
            type= 'checkbox'
            name={name}
            label={label}
            value={value}
            onChange={handleSelect}
            checked={selected}
        />

    )

};

const mapStateToProps = state => ({
    sectors: selectSectorsSelected(state)
});

const mapDispatchToProps = dispatch => ({
    removeSector: sector => dispatch(removeSelectedSector(sector)),
    setSector: sector => dispatch(setSelectedSector(sector))
})

export default connect(mapStateToProps, mapDispatchToProps)(CheckBox);