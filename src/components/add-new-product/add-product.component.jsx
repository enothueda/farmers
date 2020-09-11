import React from 'react';
import { connect } from 'react-redux'

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import CustomSelect from '../custom-select/custom-select.component';

import { createNewDocInCompanySubcollection } from '../../firebase/firebase.utils';

import units from './units.js';
import './add-product.styles.scss';
import { selectCurrentCompany } from '../../redux/company/company.selectors';

class AddNewProduct extends React.Component {
    constructor() {
        super();
        this.state = {
            code: '',
            product: '',
            maker: '',
            presentation: '',
            unit: ''
        }
    }

    handleSubmit = async event => {
        const { company } = this.props;
        event.preventDefault();
        console.log(this.state);
        await createNewDocInCompanySubcollection('products', company.id, this.state);
        this.setState({
            code: '',
            product: '',
            maker: '',
            presentation: '',
            unit: ''
        })

    }

    handleChange = event => {
        const {name, value} = event.target;
    	this.setState({ [name]: value});
    }

    render() {
        return (
            <div className='add-new-product'>
                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                        type='text'
                        name='code'
                        label='ID / Code'
                        placeholder='code or identifier'
                        value={this.state.code}
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
                    <CustomSelect label='Unit' name='unit' onChange={this.handleChange} value={this.state.unit}>
                        <option value=''>select unit</option>
                        {
                            units.map((unit, idx) => <option key={idx}>{unit}</option>)
                        }
                    </CustomSelect>            
                    <CustomButton type='submit'>Add Product</CustomButton>
                </form>
            </div>
        )
    }
};

const mapStateToProps = state => ({
    company: selectCurrentCompany(state)
})

export default connect(mapStateToProps)(AddNewProduct);