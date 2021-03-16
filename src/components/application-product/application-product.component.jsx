import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import InputSearchList from '../input-search-list/input-search-list.component';

import { setProductApplication, setInputSearch } from '../../redux/records/records.actions';
import { selectInputSearch } from '../../redux/records/records.selectors';

import agroproducts from '../../agroproducts';

import './application-product.styles.scss';

const ApplicationProduct = ({ setProducts, input, setInput }) => {
    const [application, setApplication] = useState({
        product: '',
        ingredient: '',
        dose: '',
        volume: '',
        interval: '',
        reentry: ''
    });

    useEffect(() => {
        setApplication({
            product: input.product || '',
            ingredient: input.ingredient || ''
        })
    }, [input])

    const handleChange = event => {
		const {name, value} = event.target;
        setApplication({ ...application, [name]: value })
    }

    const addProduct = () => {
        setProducts(application);
        setInput({
            product: '',
            ingredient: ''})
        setApplication({
            product: '',
            ingredient: '',
            dose: '',
            volume: '',
            interval: '',
            reentry: ''
        })
    }

    const productsList = agroproducts.map(product => product.product);
    const ingredientsList = agroproducts.map(product => product.ingredient);

    return (
        <div className='application-product'>
            <h3>Producto aplicado</h3>
            <InputSearchList 
                list={productsList} 
                inputLabel='Producto' 
                name='product' 
                reference='Nombre Comercial'
            />
            <InputSearchList 
                list={ingredientsList} 
                inputLabel='Ingrediente' 
                name='ingredient' 
                reference='Ingrediente Activo'
            />
            
            {/*
                <FormInput 
                    type='text'
                    name='product'
                    label='Product'
                    placeholder='Commercial Name'
                    value={application.product}
                    onChange={handleChange}
                /> 
                <FormInput 
                    type='text'
                    name='ingredient'
                    label='Ingredient'
                    placeholder='Active Ingredient'
                    value={application.ingredient}
                    onChange={handleChange}
                />                    
                */
            }
            <FormInput 
                type='number'
                name='dose'
                label='Dosis'
                step='any'
                placeholder='Dosis per hectar'
                value={application.dose}
                onChange={handleChange}
            /> 
            <FormInput 
                type='number'
                name='volume'
                label='Volumen de Agua'
                step='any'
                placeholder='Agua por hectarea'
                value={application.volume}
                onChange={handleChange}
            />                     
            <FormInput 
                type='number'
                name='interval'
                label='Intervalo'
                placeholder='Intervalo de Seguridad'
                value={application.interval}
                onChange={handleChange}
            /> 
            <FormInput 
                type='number'
                name='reentry'
                label='Periodo de Re-entrada'
                placeholder='Tiempo de seguridad'
                value={application.reentry}
                onChange={handleChange}
            /> 
            <div className='button-div' onClick={() => addProduct()}>Agregar Producto</div>
            {/*<CustomButton onClick={() => addProduct()}>Set Product</CustomButton>*/}
        </div>
    )
}

const mapStateToProps = state => ({
    input: selectInputSearch(state)
})

const mapDispatchToProps = dispatch => ({
    setProducts: products => dispatch(setProductApplication(products)),
    setInput: input => dispatch(setInputSearch(input))
})

export default connect(mapStateToProps, mapDispatchToProps)(ApplicationProduct);