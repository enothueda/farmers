import React from 'react';
import { connect } from 'react-redux'

import AddWarehouse from '../../components/add-warehouse/add-warehouse.component';
import AddNewProduct from '../../components/add-new-product/add-product.component';
import InventoryManagement from '../../components/inventory-mgmt/inventory-mgmt.component';
import InventoryDetails from '../../components/inventory-details/inventory-details.component';
import WithForm from '../../components/with-form/with-form.component';

import { selectCurrentCompany } from '../../redux/company/company.selectors';
import { setWarehouses,setProducts } from '../../redux/inventory/inventory.actions';
import { getSubCollectionsFromCompany } from '../../firebase/firebase.utils';
import { selectWarehouses } from '../../redux/inventory/inventory.selectors';

const ProductWithForm = WithForm(AddNewProduct);
const WarehouseWithForm = WithForm(AddWarehouse)

class Inventory extends React.Component {

    componentDidMount() {
        const { company, setWarehouses, setProducts } = this.props;
        if(company) {
            getSubCollectionsFromCompany('warehouses', company.id)
            .then(response => setWarehouses(response.map(shed => ({id: shed.id, ...shed.data()}))));

            getSubCollectionsFromCompany('products', company.id)
            .then(response => setProducts(response.map(product => ({id: product.id, ...product.data()}))))
        }
    }

    render() {       
        const { warehouses }  = this.props
        return (
            <div className='inventory'>
                <h1>Inventory</h1>

                <h2>Warehouse Inventory</h2>
                {
                    warehouses
                    ? warehouses.map(shed => <InventoryDetails key={shed.id} shed={shed}/>)
                    : null
                }
                    <span>Product</span>
                    <span> / Quantity / </span>
                    <span>Measurement Unit (default)</span>                    
                    
                    <h3>Inventory Management</h3>
                    <InventoryManagement />

                    <ProductWithForm  title='Add a Product' />

                    <WarehouseWithForm title='Add a Warehouse'/>
            </div>
        );
    }
} 


const mapStateToProps = state => ({
    company: selectCurrentCompany(state),
    warehouses: selectWarehouses(state)
});

const mapDispatchToProps = dispatch => ({
    setWarehouses: sheds => dispatch(setWarehouses(sheds)),
    setProducts: products => dispatch(setProducts(products))
})

export default connect(mapStateToProps, mapDispatchToProps)(Inventory);