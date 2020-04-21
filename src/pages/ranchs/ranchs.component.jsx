import React from 'react';
import { connect } from 'react-redux';

import AddRanch from '../../components/add-ranch/add-ranch.component';
import AddSectors from '../../components/add-sectors/add-sectors.component';
import ActualRanch from '../../components/actual-ranch/actual-ranch.component';
import RanchSelect from '../../components/ranch-select/ranch-select.component';

import { selectCurrentCompany } from '../../redux/company/company.selectors';
import { selectCurrentRanch }  from '../../redux/ranch/ranch.selectors';
import { setAllRanches, clearRanchesData } from '../../redux/ranch/ranch.actions';
import { getRanchesfromCompany } from '../../firebase/firebase.utils';

class Ranchs extends React.Component {
   
    render() {
        const { currentCompany, currentRanch, setRanchs, clearRanchesData } = this.props;
        if(currentCompany) {
            clearRanchesData();
            getRanchesfromCompany(currentCompany)
            .then(response => response.map(ranch => setRanchs(ranch.data())))
        }
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
});

const mapDispatchToProps = dispatch => ({
    setRanchs: ranchs => dispatch(setAllRanches(ranchs)),
    clearRanchesData: () => dispatch(clearRanchesData())
})

export default connect(mapStateToProps, mapDispatchToProps)(Ranchs);