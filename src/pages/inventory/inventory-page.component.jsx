import React from 'react';
import { connect } from 'react-redux'

import AddWarehouse from '../../components/add-warehouse/add-warehouse.component';
import AddNewProduct from '../../components/add-new-product/add-product.component';
import InventoryManagement from '../../components/inventory-mgmt/inventory-mgmt.component';

import { selectCurrentCompany } from '../../redux/company/company.selectors';
import { setWarehouses,setProducts } from '../../redux/inventory/inventory.actions';
import { getSubCollectionsFromCompany } from '../../firebase/firebase.utils';

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
        return (
            <div className='inventory'>
                <h1>Inventory</h1>
        
                <h3>Warehouse Inventory</h3>
                    <span>Product</span>
                    <span> / Quantity / </span>
                    <span>Measurement Unit (default)</span>
                  
                <h3>Add a Warehouse</h3>
                <AddWarehouse />
        
                <h3>Add a Product</h3>
                <AddNewProduct />           
                
                <h3>Inventory Management</h3>
                <InventoryManagement />
                            
            </div>
        );
    }
} 


const mapStateToProps = state => ({
    company: selectCurrentCompany(state)
});

const mapDispatchToProps = dispatch => ({
    setWarehouses: sheds => dispatch(setWarehouses(sheds)),
    setProducts: products => dispatch(setProducts(products))
})

export default connect(mapStateToProps, mapDispatchToProps)(Inventory);