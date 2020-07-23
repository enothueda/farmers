import React from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import CustomSelect from '../custom-select/custom-select.component';

import units from './units.js';
import './add-product.styles.scss';

class AddNewProduct extends React.Component {
    constructor() {
        super();
        this.state = {
            id: '',
            product: '',
            maker: '',
            presentation: '',
            unit: '',
            quantity: ''
        }
    }

    handleSubmit = event => {

    }

    handleChange = event => {

    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                        type='text'
                        name='id'
                        label='ID / Code'
                        placeholder='code or identifier'
                        value={this.state.id}
                        onChange={this.handleChange}
                    />
                    <FormInput 
                        type='text'
                        name='product'
                        label='Product'
                        placeholder='Name of Product'
                        value={this.state.product}
                        onChange={this.handleChange}
                        required
                    />
                    <FormInput 
                        type='text'
                        name='maker'
                        label=' Manufacturer'
                        placeholder='Maker / TM / (R)'
                        value={this.state.maker}
                        onChange={this.handleChange}
    
                    />
                    <FormInput 
                        type='text'
                        name='presentation'
                        label='Product Type'
                        placeholder='Boxes, Liquid, Sacks, etc'
                        value={this.state.presentation}
                        onChange={this.handleChange}
                        required
                    />
                    <FormInput // change to select option
                        type='text'
                        name='unit'
                        label='Unit of Measurement'
                        placeholder='L, kg, m, piece, etc'
                        value={this.state.unit}
                        onChange={this.handleChange}
                        required
                    />
                    <CustomSelect>
                        <option>---</option>
                        {
                            units.map(unit => <option>{unit}</option>)
                        }
                    </CustomSelect>            
                    <CustomButton type='submit'>Add Product</CustomButton>
                </form>
            </div>
        )
    }
};

export default AddNewProduct;