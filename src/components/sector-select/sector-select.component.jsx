import React from 'react';
import { connect } from 'react-redux';

import SectorOptions from '../sector-options/sector-options.component';
import { selectAllSectors } from '../../redux/ranch/ranch.selectors';

import './sector-select.styles.scss';

const SectorSelect = ({ allSectors }) => {
    //console.log('Sector Map', allSectors);
   
    return(
        <div className='sector-select'>
            <h3>Sector Select</h3>
            <div className='select-header'>
                <div className='header-block'>
                    <span>Sector</span>
                </div>
                <div className='header-block'>
                    <span>Variedad</span>
                </div>
                <div className='header-block'>
                    <span>Hectareas</span>
                </div>
                <div className='header-block'>
                    <span>Plantacion</span>
                </div>               
            </div>            
            {
               allSectors 
               ? allSectors.map(sector => <SectorOptions key={sector.sector} sector={sector} />) 
               : <h3>SELECT A RANCH</h3>
            }           
        </div>

        /*
        <form>
            <label>Sector: </label>
            <select>
                    <option value="sector1">Sector1</option>
                    <option value="sector2">Sector2</option>
                    <option value="sector3">Sector3</option>
            </select>
        </form>
        */
    )
}

const mapStateToProps = state => ({
    allSectors: selectAllSectors(state)
})

export default connect(mapStateToProps)(SectorSelect);