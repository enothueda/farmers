import React from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import './add-warehouse.styles.scss';

class AddWarehouse extends React.Component {
    constructor() {
        super();
        this.state = {
            id: '',
            warehouse: '',
            location: ''
        }
    }

    handleSubmit = event => {

    }

    handleChange = event => {

    }

    render() {
        return (
            <div className='add-warehouse'>
                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                        type='text'
                        name='id'
                        label='ID / Code'
                        placeholder='Identifier or Code'
                        value={this.state.id}
                        onChange={this.handleChange}
                    />
                    <FormInput 
                        type='text'
                        name='warehouse'
                        label='Warehouse'
                        placeholder='Name of Warehouse or shed'
                        value={this.state.warehouse}
                        onChange={this.handleChange}
                        required
                    />
                    <FormInput 
                        type='text'
                        name='location'
                        label='Location'
                        placeholder='Optional Location'
                        value={this.state.location}
                        onChange={this.handleChange}

                    />
                    <CustomButton type='submit'>Set Warehouse</CustomButton>
                </form>
            </div>
        )
    }
};

export default AddWarehouse;