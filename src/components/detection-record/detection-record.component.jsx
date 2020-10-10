import React, { useState } from 'react';
import { connect } from 'react-redux';

import CustomSelect from '../custom-select/custom-select.component';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { setDetection } from '../../redux/records/records.actions';

import organisms from '../../organisms';
import './detection-record.styles.scss';

const DetectionRecord = ({ setDetection }) => {
    const [record, setRecord] = useState({
        type: '',
        searchOrg: '',
        found: '',
        quantity: '',
        incidence:'',
        name: ''
    })

    const options = Object.keys(organisms);

    const handleSubmit = event => {
        const { type, name, quantity, incidence } = record
        event.preventDefault();
        setDetection({ type, name, quantity, incidence });
        setRecord({
            type: '',
            searchOrg: '',
            found: '',
            quantity: '',
            incidence:'',
            name: ''
        });
    }

    const handleChange = event => {
        const { name, value } = event.target;
        setRecord({...record, [name]: value, found: ''})
    }

    const handleSelect = event => {
        const { name, value } = event.target;
        setRecord({...record, [name]: value, found: ''})
    }

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

    console.log(record)   

    return (
        <div className='detection-record'>
            <form className='detection-form' onSubmit={handleSubmit}>
                <CustomSelect className='inspection-select' name='type' onChange={handleSelect} value={record.type}>
                    <option value=''>select detection</option>
                    {
                        options.map((option, idx) => <option key={idx}>{option}</option>)
                    }
                </CustomSelect>
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

                <CustomSelect className='inspection-level' name='incidence' value={record.incidence} onChange={handleChange}>
                    <option value='' >Incidence Level</option>
                    <option value='1' >Level 1</option>
                    <option value='2' >Level 2</option>
                    <option value='3' >Level 3</option>
                    <option value='4' >Level 4</option>
                    <option value='5' >Level 5</option>
                </CustomSelect>

                <CustomButton type='submit'>Add Record</CustomButton>
            </form>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    setDetection: record => dispatch(setDetection(record))
})

export default connect(null, mapDispatchToProps)(DetectionRecord);