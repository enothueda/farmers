import React from 'react';
import { connect } from 'react-redux';

import FormInput from '../form-input/form-input.component';
import CustomSelect from '../custom-select/custom-select.component';
import CustomButton from '../custom-button/custom-button.component';

import { selectProducts, selectWarehouses } from '../../redux/inventory/inventory.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { selectCurrentCompany } from '../../redux/company/company.selectors';
import { createInventoryMovement } from '../../firebase/firebase.utils';

import './inventory-mgmt.styles.scss';

class InventoryManagement extends React.Component {
    constructor() {
        super();
        this.state = {
            warehouse:'',
            move: '',
            product: '',
            date: '',
            quantity: ''
        }
    }

    handleSubmit = event => {
        const { currentUser, currentCompany } = this.props
        event.preventDefault();
        createInventoryMovement(currentCompany, currentUser, this.state);

        this.setState({
            warehouse:'',
            move: '',
            product: '',
            date: '',
            quantity: ''
        })
    }

    handleChange = event => {
        const { name, value } = event.target;
        this.setState({ [name]: value})
    }

    render() {
        const { products, warehouses } = this.props;
        return (
            <div className='inventory-mgmt'>
                <form onSubmit={this.handleSubmit}>
                    <CustomSelect name='warehouse' onChange={this.handleChange} >
                        <option>select warehouse</option>
                        {
                            warehouses
                            ?
                            warehouses.map(wh => <option key={wh.id} value={wh.id}>{wh.warehouse}</option>)
                            :
                            null
                        }
                    </CustomSelect>

                    <CustomSelect name='move' onChange={this.handleChange}>
                        <option>Move</option>
                        <option>Input</option>
                        <option>Output</option>
                    </CustomSelect>
                    
                    <CustomSelect name='product' onChange={this.handleChange}>
                        <option>select product</option>
                        {
                            products
                            ?
                            products.map(product => 
                                <option key={product.id} value={product.id}>
                                    {product.product} in {product.unit}
                                </option>)
                            :
                            null
                        }
                    </CustomSelect>
                    <FormInput
                        type='date'
                        name='date'
                        label='Date'
                        value={this.state.date}
                        onChange={this.handleChange}
                        required
                    />
                    <FormInput 
                        type='number'
                        name='quantity'
                        label='Quantity'
                        value={this.state.quantity}
                        onChange={this.handleChange}
                        required
                    />                    
                    <CustomButton>Set Movement</CustomButton>
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    products: selectProducts(state),
    warehouses: selectWarehouses(state),
    currentUser: selectCurrentUser(state),
    currentCompany: selectCurrentCompany(state)
})

export default connect(mapStateToProps)(InventoryManagement);