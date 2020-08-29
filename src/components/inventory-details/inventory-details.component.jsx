import React from 'react';
import { connect } from 'react-redux';

import { selectProducts } from '../../redux/inventory/inventory.selectors';

import './inventory-details.styles.scss' ;

const InventoryDetails = ({ shed, products }) => {
    const { warehouse, inventory } = shed;
    
    return (
        <div className='inventory-details'>
            <h3>{warehouse}</h3>
            <div className='records-header'>
                <div className='record-block'>
                    <span>Product</span>
                </div>
                <div className='record-block'>
                    <span>Type</span>
                </div>	
                <div className='record-block'>
                    <span>Quantity</span>
                </div>
                <div className='record-block'>
                    <span>Units</span>
                </div>
            </div>
            {
                inventory 
                ? products 
                    ? products.filter(product => product.id === Object.keys(inventory).find(key => key === product.id)).map(product => 
                        <div key={product.id} className='inventory-data'>
                            <span className='data'>{product.product}</span>
                            <span className='data'>{product.presentation}</span>
                            <span className='data'>{inventory[(Object.keys(inventory).find(key => key === product.id))]} </span>
                            <span className='data'>{product.unit}</span>
                        </div>)
                    : 'No Products'
                : 'No Inventory'
            }
        </div>
    );
}

const mapStateToProps = state => ({
    products: selectProducts(state)
})

export default connect(mapStateToProps)(InventoryDetails);