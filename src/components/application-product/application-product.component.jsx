import React, { useState } from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import './application-product.styles.scss';

const ApplicationProduct = () => {
    const [application, setApplication] = useState({
        product: '',
        ingredient: '',
        equipment: '',
        dose: '',
        volume: '',
        pest: '',
        interval: '',
        reentry: ''
    });

    const handleChange = event => {
		const {name, value} = event.target;
        setApplication({ ...application, [name]: value })
    }

    const addProduct = () => {
        console.log(application)
    }

    return(
        <div>
        <h3>Add product application</h3>
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
            <CustomButton onClick={() => addProduct()}>Set Product</CustomButton>
        </div>
    )
}

export default ApplicationProduct;