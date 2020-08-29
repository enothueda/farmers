import React from 'react';
import { connect } from 'react-redux';

import FormInput from '../form-input/form-input.component';
import CustomSelect from '../custom-select/custom-select.component';
import CustomButton from '../custom-button/custom-button.component';

import { selectProducts, selectWarehouses } from '../../redux/inventory/inventory.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { selectCurrentCompany } from '../../redux/company/company.selectors';
import { createInventoryMovement, getSubCollectionsFromCompany } from '../../firebase/firebase.utils';
import { setWarehouses, setProducts } from '../../redux/inventory/inventory.actions';

import './inventory-mgmt.styles.scss';

class InventoryManagement extends React.Component {
    constructor() {
        super();
        this.state = {
            warehouse:'',
            move: '',
            product: '',
            date: '',
            quantity: 0
        }
    }

    handleSubmit = async event => {
        const { currentUser, company, setProducts, setWarehouses } = this.props
        event.preventDefault();
        await createInventoryMovement(company, currentUser, this.state);

        if(company) {
            getSubCollectionsFromCompany('warehouses', company.id)
            .then(response => setWarehouses(response.map(shed => ({id: shed.id, ...shed.data()}))));

            getSubCollectionsFromCompany('products', company.id)
            .then(response => setProducts(response.map(product => ({id: product.id, ...product.data()}))))
        }

        this.setState({
            warehouse:'',
            move: '',
            product: '',
            date: '',
            quantity: 0
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
                    <FormInput
                        type='date'
                        name='date'
                        label='Date'
                        value={this.state.date}
                        onChange={this.handleChange}
                        required
                    />
                    <CustomSelect name='warehouse' onChange={this.handleChange} value={this.state.warehouse}>
                        <option>select warehouse</option>
                        {
                            warehouses
                            ?
                            warehouses.map(wh => <option key={wh.id} value={wh.id}>{wh.warehouse}</option>)
                            :
                            null
                        }
                    </CustomSelect>
                    {
                        this.state.warehouse
                        ? <CustomSelect name='move' onChange={this.handleChange} value={this.state.move}>
                            <option>Move</option>
                            <option>input</option>
                            <option>output</option>
                        </CustomSelect>
                        : null
                    }
                    {
                        this.state.move
                        ? <CustomSelect name='product' onChange={this.handleChange} value={this.state.product}>
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
                        : null
                    }
                    {
                        this.state.product
                        ? <FormInput 
                            type='number'
                            name='quantity'
                            label='Quantity'
                            value={this.state.quantity}
                            onChange={this.handleChange}
                            required
                        />
                        : null
                    }
                    {
                        this.state.quantity
                        ? <CustomButton>Set Movement</CustomButton>
                        : null
                    }                                   
                    
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    products: selectProducts(state),
    warehouses: selectWarehouses(state),
    currentUser: selectCurrentUser(state),
    company: selectCurrentCompany(state)
});

const mapDispatchToProps = dispatch => ({
    setWarehouses: warehouses => dispatch(setWarehouses(warehouses)),
    setProducts: products => dispatch(setProducts(products))
})

export default connect(mapStateToProps, mapDispatchToProps)(InventoryManagement);