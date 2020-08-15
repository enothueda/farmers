import React from 'react';

import './inventory-details.styles.scss' ;

const InventoryDetails = ({ shed }) => {
    const { warehouse, inventory } = shed;
    return (
        <div>
            <h3>{warehouse}</h3>
        </div>
    );
}

export default InventoryDetails;