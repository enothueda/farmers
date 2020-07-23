import React from 'react';

import FormInput from '../form-input/form-input.component';
import CustomSelect from '../custom-select/custom-select.component';
import CustomButton from '../custom-button/custom-button.component';

import './inventory-mgmt.styles.scss';

class InventoryManagement extends React.Component {
    constructor() {
        super();
        this.state = {
            date: '',
            quantity: ''
        }
    }

    handleSubmit = event => {

    }

    handleChange = event => {

    }

    render() {
        return (
            <div className='inventory-mgmt'>
                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        type='date'
                        name='date'
                        label='Date'
                        value={this.state.date}
                        onChange={this.handleChange}
                        required
                    />
                    <CustomSelect>
                        <option>Products</option>
                    </CustomSelect>
                    <CustomSelect>
                        <option>Move</option>
                    </CustomSelect>
                    <FormInput 
                        type='number'
                        name='quantity'
                        label='Quantity'
                        value={this.state.quantity}
                        onChange={this.handleChange}
                        required
                    />
                    <CustomSelect>
                        <option>Unit</option>
                    </CustomSelect>
                    <CustomButton>Set Movement</CustomButton>
                </form>
            </div>
        )
    }
}

export default InventoryManagement;