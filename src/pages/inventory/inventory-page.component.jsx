import React from 'react';

import AddWarehouse from '../../components/add-warehouse/add-warehouse.component';
import AddNewProduct from '../../components/add-new-product/add-product.component';
import InventoryManagement from '../../components/inventory-mgmt/inventory-mgmt.component';

const Inventory = () => (
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

export default Inventory;