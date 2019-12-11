import React from 'react';

import RanchSelect from '../../components/ranch-select/ranch-select.component';
import SectorSelect from '../../components/ranch-select/sector-select.component';

const Inspections = () => {
    return (
        <div className="inspections">
            <h1>Plant Health Inspection</h1>
            <RanchSelect />
                <label>Sector: </label>
            <SectorSelect />
                <select>
                    <option value="sector1">Sector1</option>
                    <option value="sector2">Sector2</option>
                    <option value="sector3">Sector3</option>
                </select>
                <div className="ranch-and-sector-info">
                    <div className="ranch-info">
                        <p>Crop: "Berries"</p>
                        <p>Growing Area: "California"</p>
                        <p>Ranch Code: "Ranch01"</p>
                        <p>Ranch ID: "0123"</p>
                    </div>
                    <div className="sector-info">
                        <p>Acreage (has): "1.5"</p>
                        <p>Variety: "public"</p>
                        <p>Density (pl/ha): "5000"</p>
                        <p>Sampling Date</p>
                    </div>
                </div>
                <div className="sampling">
                    <p>Sample Spot</p>
                    <form>
                        <input type="number" placeholder="Plants por spot"/>
                    </form>
                    <div>
                        <p>Pest Insects</p>
                        <p>add (+)</p>
                        <p>Insects Added</p>
                        <p>Quantity per point</p>
                        <p>Incidence Level</p>
                    </div>
                    <div>
                        <p>Diseases</p>
                        <p>add (+)</p>
                        <p>Diseases Added</p>
                        <p>Quatity per point</p>
                        <p>Incidence Level</p>
                    </div>
                    <div>
                        <p>Beneficials</p>
                        <p>add (+)</p>
                        <p>Diseases Added</p>
                        <p>Quatity per point</p>
                        <p>Incidence Level</p>
                    </div>                
                </div>
                <div>Summary</div>
                <button>Add Inspection</button>                   
            
        </div>
    )
    
}

export default Inspections;