import React from 'react';

import AddWarehouse from '../../components/add-warehouse/add-warehouse.component';
import AddNewProduct from '../../components/add-new-product/add-product.component';
import InventoryManagement from '../../components/inventory-mgmt/inventory-mgmt.component';

const Inventory = () => (
    <div className='inventory'>
        <h1>Inventory</h1>

        <h3>Warehouse Inventory</h3>
            <div>Product</div>
            <div>Quantity</div>
            <div>Measurement Unit (default)</div>
          
        <h3>Add a Warehouse</h3>
        <AddWarehouse />

        <h3>Add a Product</h3>
        <AddNewProduct />
            <div>ID o code</div>
        
        <h3>Inventory Management</h3>
        <InventoryManagement />
            <div>Date</div>
            <div>Product (list)</div>
            <div>Movement (In/out)</div>
            <div>Quantity</div>
            <div>Measurement Unit (default)</div>

        
    </div>
);

export default Inventory;