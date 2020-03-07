import React from 'react';
import { connect } from 'react-redux';

import InspectionDisplay from '../inspection-display/inspection-display.component';
import FormInput from '../form-input/form-input.component';
import Custombutton from '../custom-button/custom-button.component';
import InspectionRecords from '../inspection-records/inspection-records.component';

import { selectInspectionRecords } from '../../redux/inspection/inspection.selectors';
import { selectCurrentSector } from '../../redux/sector/sector.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { setInspection } from '../../redux/inspection/inspection.actions';
import { createInspectionDocumentInRanch } from '../../firebase/firebase.utils';

import './plants-inspection.styles.scss';

class PlantsInspection extends React.Component {
	constructor(){
		super();

		this.state = {
			inspectionDate: '',
			sample: ''
		}
	}

	handleSubmit = event => {
		const { records, setInspection, currentSector, currentUser } = this.props;
		const { inspectionDate, sample } = this.state
		event.preventDefault();
		
		const fullInspection = {
			inspectionDate,
			sample,
			records
		}

		if (currentSector ) {
			createInspectionDocumentInRanch(fullInspection, currentSector, currentUser.id);
			setInspection(fullInspection);
			this.setState({inspectionDate: '', sample: ''})
		} else {
			console.log('SELECT A SECTOR');
		}
		

		
	}

	handleChange = event => {
		const { name, value } = event.target;

		this.setState({ [name]: value });
		
	}

	
	render() {
		const { records, currentSector } = this.props;

		return (
			currentSector ?
			<div className="sampling">
				<h3>Plants Inspection</h3>
				<InspectionDisplay 
		        	group='pests'

		        />
		        <InspectionDisplay 
		        	group='diseases'

		        />
		        <InspectionDisplay 
		        	group='beneficials'
		        />
		        <br/>
				<form onSubmit={this.handleSubmit} >
			        <FormInput
			        	type='date'
			        	name='inspectionDate'
			        	label='Inspection Date'		        	
			        	placeholder='Sampling Date'
			        	value={this.state.inspectionDate}
			        	onChange={this.handleChange}
			        	required
			        />

			        <p>Sample Spot (GPS or reference)</p>
		        
		            <FormInput 
		            	type='number'
		            	name='sample'
		            	label='Sample Spot'
		            	placeholder="Plants per sample"
		            	value={this.state.sample}
		            	onChange={this.handleChange}
		            	min='1'
		            	max='1000'
		            />
		             <Custombutton type='submit'>Add Inspection</Custombutton>
		        </form>			       
		        
		        <div className='inspection'>
		            <h4>Inspection Records</h4>
		            <InspectionRecords records={records} />
		            <p>Insects Added</p>
		            <p>Quantity per point</p>
		            <p>Incidence Level</p>
		        </div>		        
		    	               
		    </div> 
		    :
		    <h4>SELECT A SECTOR</h4>
		)
	}
}

const mapStateToProps = state => ({
	records: selectInspectionRecords(state),
	currentSector: selectCurrentSector(state),
	currentUser: selectCurrentUser(state)
});

const mapDispatchToProps = dispatch => ({
	setInspection: inspection => dispatch(setInspection(inspection))
})

export default connect(mapStateToProps, mapDispatchToProps)(PlantsInspection);