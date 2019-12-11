import React from 'react';

const Ranchs = () => {
    return(
        <div>
            <h1>Ranch Setup</h1>
            <form>
                <div>
                    <h3>Add Ranch</h3>
                    <p>Name</p>
                    <p>Ranch ID</p>
                    <p>Ranch Code</p>
                    <p>Crop</p>
                    <p>Growing Area</p>
                    <p>Location (GPS)</p>
                    <p>Adress</p>
                    <p>Sectors</p>
                    <ul>
                        <li>Sector Name</li>
                        <li>Acreage (has)</li>
                        <li>Variety</li>
                        <li>Treatment</li>
                        <li>Planting Date</li>
                    </ul>
                    <button>Add Ranch</button>
                </div>
                <div>
                    <h3>Ranchs Added</h3>
                    <p>Ranch</p>
                    <p>Sectors</p>
                    <p>Settings</p>
                </div>

            </form>

        </div>
    )
}

export default Ranchs;