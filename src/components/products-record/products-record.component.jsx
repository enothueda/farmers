import React from 'react';
import { connect } from 'react-redux';

import './products-record.styles.scss';

const ProductsRecord = ({ products }) => {

    return (
        <div className='products-record'>
            <div className='records-header'>
                <div className='record-block'>
                    <span>Producto</span>
                </div>
                <div className='record-block'>
                    <span>Ingrediente</span>
                </div>	
                <div className='record-block'>
                    <span>Dosis</span>
                </div>
                <div className='record-block'>
                    <span>Volumen</span>
                </div>
                <div className='record-block'>
                    <span>Borrar</span>
                </div>
            </div>
            {	products 
                ? products.map((record, index) => 
                    <div key={index} className='record-data'>
                        <span className='data'>{record.product}</span>						
                        <span className='data'>{record.ingredient}</span>
                        <span className='data'>{record.dose}</span>
                        <span className='data'>{record.volume}</span>
                        <div className='remove-button' onClick={() => console.log(record)}>&#10005;</div>				
                    </div>
                )
                : null				
            }
        </div>
    )
};


export default ProductsRecord;