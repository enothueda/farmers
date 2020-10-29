import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import CustomSelect from '../custom-select/custom-select.component';
import FormInput from '../form-input/form-input.component';
import InputSearchList from '../input-search-list/input-search-list.component';
import CustomButton from '../custom-button/custom-button.component';

import { setDetection } from '../../redux/records/records.actions';
import { selectInputSearch } from '../../redux/records/records.selectors';

import organisms from '../../organisms';
import './detection-record.styles.scss';

const DetectionRecord = ({ setDetection, inputSearch }) => {
    const [record, setRecord] = useState({
        type: '',
        quantity: '',
        incidence:'',
        organism: ''
    })

    useEffect(() => {
        setRecord({...record, organism: inputSearch.organism})
    }, [inputSearch])

    const addRecord = async () => {
        console.log('added', record)
        setDetection(record);
        setRecord({
            type: '',
            quantity: '',
            incidence:'',
            organism: ''
        });
    }

    const handleChange = event => {
        const { name, value } = event.target;
        setRecord({...record, [name]: value })
    }

    const handleSelect = event => {
        const { name, value } = event.target;
        setRecord({...record, [name]: value })
    }

    const options = Object.keys(organisms);

/* This is only for the FormInput hidden and instead of the InputSearchList component
    const setName = (org) => {        
        setRecord({...record, name: org, found: ''})
    }
    
    const searchName = event => {
        const search = event.target.value;
        if(record.type) {
            const foundName = organisms[record.type]
                .filter(name => 
                    search
                    ? name.toLowerCase().includes(search.toLowerCase())
                    : null)
            setRecord({...record, found: foundName, name: search})
        }         
    }
*/
    console.log('input', inputSearch)   

    return (
        <div className='detection-record'>
            <CustomSelect name='type' onChange={handleSelect} value={record.type}>
                <option value=''>select detection</option>
                {
                    options.map((option, idx) => <option key={idx}>{option}</option>)
                }
            </CustomSelect>
            { 
                record.type
                ? <InputSearchList list={organisms[record.type]} inputLabel={record.type} name='organism' />
                : null
            }
            {
                /* Check how to move the name into redux and check reference option for the input search
                <FormInput 
                        type='text'
                        name='name'
                        placeholder='Name'
                        value={record.name}
                        label={record.type}
                        onChange={searchName}
                        autoComplete='off'
                    />
                
                <div className='list-display'>
                {
                    record.found 
                    ? record.found
                        .filter((org, idx) => idx < 10)
                        .map((org, idx) => 
                            <div key={idx} onClick={() => setName(org)}>{org}</div> )
                    : null
                }
                </div>
                */
            }
            <FormInput 
                type='number'
                min='0'
                name='quantity'
                placeholder='Quantity per spot'
                label='Quantity'
                value={record.quantity}
                onChange={handleChange}	
                autoComplete='off'					
            />

            <CustomSelect name='incidence' value={record.incidence} onChange={handleChange}>
                <option value='' >Incidence Level</option>
                <option value='1' >Level 1</option>
                <option value='2' >Level 2</option>
                <option value='3' >Level 3</option>
                <option value='4' >Level 4</option>
                <option value='5' >Level 5</option>
            </CustomSelect>
            <div className='button-div' onClick={() => addRecord()}>Add Detection</div>
        </div>
    )
}

const mapStateToProps = state => ({
    inputSearch: selectInputSearch(state)
})

const mapDispatchToProps = dispatch => ({
    setDetection: record => dispatch(setDetection(record))
})

export default connect(mapStateToProps, mapDispatchToProps)(DetectionRecord);