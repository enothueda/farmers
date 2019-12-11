import React from 'react';

import RANCHS_DATA from '../../pages/ranchs/ranchs';

class RanchSelect extends React.Component {
    constructor() {
        super();

        this.state = {
            ranch: RANCHS_DATA,
            sectors: []
           
        }
    }

    handleRanchChange = (event) => {

        if(event.target.value !== '') {
            const sectores = JSON.parse(event.target.value);
            
            this.setState({sectors: sectores});

            console.log('sectors:', sectores);
                        
        }
        
        
    }

    render() {
        return(
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
        )
    }
}

export default RanchSelect;