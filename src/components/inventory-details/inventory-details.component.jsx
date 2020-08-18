import React from 'react';
import { connect } from 'react-redux';

import { selectProducts } from '../../redux/inventory/inventory.selectors';

import './inventory-details.styles.scss' ;

const InventoryDetails = ({ shed, products }) => {
    const { warehouse, inventory } = shed;
    
    return (
        <div>
            <h3>{warehouse}</h3>
            {
                inventory 
                ? products 
                    ? products.filter(product => product.id === Object.keys(inventory).find(key => key === product.id)).map(product => 
                        <div key={product.id}>
                            <span>{product.product} | </span>
                            <span>{product.presentation} | </span>
                            <span>{inventory[(Object.keys(inventory).find(key => key === product.id))]} </span>
                            <span>{product.unit}</span>
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