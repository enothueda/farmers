import React from 'react';
import { connect } from 'react-redux';

import RanchOptions from '../ranch-options/ranch-options.component';

import { selectAllRanches } from '../../redux/ranch/ranch.selectors';

import './ranch-select.styles.scss';

const RanchSelect = ({ allRanches }) => {  

    return (
    <div className='ranch-select'>
        <h3>Ranch Select</h3>
        <div className='select-header'>
            <div className='header-block'>
                <span>Ranch ID</span>
            </div>
            <div className='header-block'>
                <span>Ranch Name</span>
            </div>
            <div className='header-block'>
                <span>Crop</span>
            </div>
        </div>        
        {
            allRanches 
            ? 
            allRanches.map(ranch => <RanchOptions key={ranch.ranchId} ranch={ranch} />) 
            : 
            <h2>Please Add a Ranch</h2>
        }
        
    </div>

    /*
    <form className='ranch-select'>
        <label>Ranch: </label>
        <select value={this.state.ranch.name} onChange={this.handleRanchChange}>
            <option value=''>---</option>
            {
                this.state.ranch.map(({id, name, sectors, ...otherRanchProps}) => 
                    <option key={id} {...otherRanchProps} value={JSON.stringify(sectors)}>{name}</option>
                )                   
            }    
        </select>                                
    </form>
    */
)}

const mapStateToProps = state => ({
    allRanches: selectAllRanches(state)
})

export default connect(mapStateToProps)(RanchSelect);