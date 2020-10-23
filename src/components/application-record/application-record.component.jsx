import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import InputSearchList from '../input-search-list/input-search-list.component';
import ApplicationProduct from '../application-product/application-product.component';
import MultiSector from '../multi-sectors-select/multi-sectors.component';

import { createRegisterDocInRanch } from '../../firebase/firebase.utils';
import { addApplicationRecord, clearProductsApplication, clearInputSearch, setInputSearch } from '../../redux/records/records.actions';
import { clearSelectedSectors } from '../../redux/ranch/ranch.actions';
import { selectCurrentRanch, selectSectorsSelected } from '../../redux/ranch/ranch.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { selectProductsApplication, selectInputSearch } from '../../redux/records/records.selectors';

import organisms from '../../organisms';
import agroproducts from '../../agroproducts';

import './application-record.styles.scss';

const ApplicationRecord = ({ ranch, sectors, currentUser, addApplication, clearSectors, products, clearProducts, input, setInput, clearInput }) => {

    const [application, setApplication] = useState({
        date: '',
        startTime: '',
        endTime: '',
        method: '',
        equipment: '',
        reason: ''
    })

    useEffect(() => {
        setApplication({
            ...application,
            method: input.method || '',
            equipment: input.equipment || '',
            reason: input.reason || ''
        })
        console.log('inputs', input)
    }, [input])

	const handleSubmit = async event => {
        event.preventDefault();
        
        if(sectors.length) {
            await addApplication({...application, products});
            await createRegisterDocInRanch('applications', {...application, products}, ranch, sectors, currentUser.id);
            await setInput({
                method: '',
                equipment: '',
                reason: ''
            })
            await clearSectors();
            await clearProducts();
            await clearInput();
            setApplication({
                date: '',
                startTime: '',
                endTime: '',
                method: '',
                equipment: '',
                reason: '',
                product: ''
            })
        } else {
            console.log('SECTOR IS MISSING')
        }

	}

	const handleChange = event => {
		const {name, value} = event.target;
        setApplication({ ...application, [name]: value })
    }
    
    let options = []
    Object.values(organisms).forEach(list => list.forEach(element => options.push(element)))
    console.log(options)

    const applicationOptions = ['Foliar', 'Riego', 'Drench', 'Granular']
    const equipmentOptions = ['Bomba de Motor', 'Bomba Manual', 'Bomba de Inyeccion', 'Nebulizadora', 'Parihuela' ]
    
    return (
        <div className='application-record'>
            <h2>Record your Application</h2>
            <form onSubmit={handleSubmit}>
                <MultiSector />
                <h3>Application Info</h3>
                <FormInput 
                    type='date'
                    name='date'
                    label='Date'
                    value={application.date}
                    onChange={handleChange}
                    required
                />
                <FormInput 
                    type='time'
                    name='startTime'
                    label='Start Time'
                    value={application.startTime}
                    onChange={handleChange}
                    required
                /> 
                <FormInput 
                    type='time'
                    name='endTime'
                    label='End Time'
                    value={application.endTime}
                    onChange={handleChange}
                    required
                />
                <InputSearchList 
                    list={applicationOptions} 
                    inputLabel='Application' 
                    name='method' 
                    reference='Foliar, Irrigation, Drench, other'
                />
                <InputSearchList 
                    list={equipmentOptions} 
                    inputLabel='Equipment' 
                    name='equipment' 
                    reference='Pump, Sprinkles, etc'
                />                
                <InputSearchList 
                    list={options} 
                    inputLabel='Pest or Disease' 
                    name='reason' 
                    reference='Reason of the application'
                />                
                <ApplicationProduct />
                {/*
                    <FormInput 
                        type='text'
                        name='method'
                        label='Aplication Method'
                        placeholder='Foliar, Irrigation, Granular'
                        value={application.method}
                        onChange={handleChange}
                        required
                    />
                    <FormInput 
                        type='text'
                        name='equipment'
                        label='Equipment'
                        placeholder='Equipment or Machinery'
                        value={application.equipment}
                        onChange={handleChange}
                        required
                    />
                    <FormInput 
                        type='text'
                        name='pest'
                        label='Pest'
                        placeholder='Pest or Disease'
                        value={application.pest}
                        onChange={handleChange}
                        required
                    />
                    <FormInput 
                        type='text'
                        name='product'
                        label='Product'
                        placeholder='Commercial Name'
                        value={application.product}
                        onChange={handleChange}
                        required
                    /> 
                    <FormInput 
                        type='text'
                        name='ingredient'
                        label='Ingredient'
                        placeholder='Active Ingredient'
                        value={application.ingredient}
                        onChange={handleChange}
                        required
                    />                    
                    <FormInput 
                        type='number'
                        name='dose'
                        label='Dose'
                        step='any'
                        placeholder='Dose per hectar'
                        value={application.dose}
                        onChange={handleChange}
                        required
                    /> 
                    <FormInput 
                        type='number'
                        name='volume'
                        label='Water Volume'
                        step='any'
                        placeholder='Water Volume per hectar'
                        value={application.volume}
                        onChange={handleChange}
                        required
                    />                     
                    <FormInput 
                        type='number'
                        name='interval'
                        label='Interval'
                        placeholder='Safety Interval'
                        value={application.interval}
                        onChange={handleChange}
                        required
                    /> 
                    <FormInput 
                        type='number'
                        name='reentry'
                        label='Re-entry Period'
                        placeholder='Safety Time for worker to can entry'
                        value={application.reentry}
                        onChange={handleChange}
                        required
                    /> 
                    */
                }
                <br />
                <CustomButton type='submit'>Record Application</CustomButton>
            </form>
        </div>
    )

}

const mapStateToProps = state => ({
	ranch: selectCurrentRanch(state),
    currentUser: selectCurrentUser(state),
    sectors: selectSectorsSelected(state),
    products: selectProductsApplication(state),
    input: selectInputSearch(state)  
});

const mapDispatchToProps = dispatch => ({
    addApplication: record => dispatch(addApplicationRecord(record)),
    setInput: input => dispatch(setInputSearch(input)),
    clearSectors: () => dispatch(clearSelectedSectors()),
    clearProducts: () => dispatch(clearProductsApplication()),
    clearInput: () => dispatch(clearInputSearch())
})

export default connect(mapStateToProps, mapDispatchToProps)(ApplicationRecord);