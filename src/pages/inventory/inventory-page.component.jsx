import React from 'react';

const Inventory = () => (
    <div className='inventory'>
        <h1>Inventory</h1>

        <h3>Add a Warehouse</h3>
            <div>Name</div>
            <div>Location</div>
            <div>ID</div>

        <h3>Add a Product</h3>
            <div>ID o code</div>
            <div>Product Name</div>
            <div>Presentation</div>
            <div>Measurement Unit (L, kg, m, piece)</div>
            <div>Quantity</div>
        
        <h3>Handle Products in or out</h3>
            <div>Date</div>
            <div>Product</div>
            <div>Movement (In/out)</div>
            <div>Quantity</div>
            <div>Measurement Unit (default)</div>

        <h3>Report Product and Remainders</h3>
            <div>Product</div>
            <div>Quantity</div>
            <div>Unit of Measurement</div>
    </div>
);

export default Inventory;