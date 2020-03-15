import React from 'react';
import { connect } from 'react-redux';

import AddRanch from '../../components/add-ranch/add-ranch.component';
import AddSectors from '../../components/add-sectors/add-sectors.component';
import ActualRanch from '../../components/actual-ranch/actual-ranch.component';
import RanchSelect from '../../components/ranch-select/ranch-select.component';
import { selectCurrentCompany } from '../../redux/company/company.selectors';
import { selectCurrentRanch }  from '../../redux/ranch/ranch.selectors';

class Ranchs extends React.Component {
   
    render() {
        const { currentCompany, currentRanch } = this.props;
        return(
            <div>
                <h1>Ranch Setup</h1>                
                <div>
                    <ActualRanch />                   
                    
                    <RanchSelect />
                    <br />
                    <span> Ranch | </span>
                    <span> Sectors | </span>
                    <span> Settings </span>            
                </div>
                {
                    currentCompany ?
                    <AddRanch /> :
                    <h4>Please Add or Select a Company</h4>
                }
                {
                    currentRanch ?
                    <AddSectors /> :
                    ''
                }
                                 
            </div>
        )
    }
}   
    
const mapStateToProps = state => ({
    currentCompany: selectCurrentCompany(state),
    currentRanch: selectCurrentRanch(state)
})

export default connect(mapStateToProps)(Ranchs);