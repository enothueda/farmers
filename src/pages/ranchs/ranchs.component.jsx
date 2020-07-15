import React from 'react';
import { connect } from 'react-redux';

import AddRanch from '../../components/add-ranch/add-ranch.component';
import AddSectors from '../../components/add-sectors/add-sectors.component';
import ActualRanch from '../../components/actual-ranch/actual-ranch.component';
import RanchSelect from '../../components/ranch-select/ranch-select.component';
import ActualSector from '../../components/actual-sector/actual-sector.component';
import SectorSelect from '../../components/sector-select/sector-select.component';

import { selectCurrentCompany } from '../../redux/company/company.selectors';
import { selectCurrentRanch }  from '../../redux/ranch/ranch.selectors';
import { setAllRanches, clearRanchesData } from '../../redux/ranch/ranch.actions';
import { getRanchesfromCompany } from '../../firebase/firebase.utils';

class Ranchs extends React.Component {
    componentDidMount() {
        const { currentCompany, setRanchs, clearRanchesData } = this.props;
        if(currentCompany) {
            clearRanchesData();
            getRanchesfromCompany(currentCompany)
            .then(response => response.map(ranch => setRanchs(ranch.data())))
        }
    }
   
    render() {
        const { currentCompany, currentRanch } = this.props;
        return(
            <div>
                <h1>Ranch Setup</h1>                
                <div>
                    <ActualRanch />                    
                    <RanchSelect />

                    <ActualSector />
                    <SectorSelect />        
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