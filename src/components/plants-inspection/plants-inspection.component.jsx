import React from 'react';
import { connect } from 'react-redux';

import InspectionDisplay from '../inspection-display/inspection-display.component';
import FormInput from '../form-input/form-input.component';
import Custombutton from '../custom-button/custom-button.component';
import InspectionRecords from '../inspection-records/inspection-records.component';
import DetectionRecord from '../detection-record/detection-record.component';

import { selectInspectionRecords } from '../../redux/records/records.selectors';
import { selectCurrentSector } from '../../redux/ranch/ranch.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { setInspection, clearInputSearch } from '../../redux/records/records.actions';
import { createInspectionDocumentInRanch, createRegisterDocInRanch } from '../../firebase/firebase.utils';

import './plants-inspection.styles.scss';

class PlantsInspection extends React.Component {
	constructor(){
		super();

		this.state = {
			inspectionDate: '',
			sample: ''
		}
	}

	handleSubmit = async event => {
		const { detections, setInspection, currentSector, currentUser, clearInput } = this.props;
		const { inspectionDate, sample } = this.state
		event.preventDefault();
		
		const fullInspection = {
			inspectionDate,
			sample,
			detections
		}
		console.log('inspection')

		if (currentSector) {
			await createRegisterDocInRanch('inspections', fullInspection, currentSector, currentSector.sector, currentUser.id);
			await setInspection(fullInspection);
			await clearInput()
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
		const { detections, currentSector } = this.props;

		return (
			currentSector ?
			<div className="sampling">
				<h3>Inspeccion de Plagas y Enfermedades</h3>
				{
				/*  REVIEW IF INSPECTION DISPLAY NEEDS TO BE DELETED AT ALL
					THEN, DELETE THIS
					<InspectionDisplay group='pests' />
					<InspectionDisplay group='diseases' />
					<InspectionDisplay group='beneficials' />
					<br/>
				*/
				}
				<form onSubmit={this.handleSubmit} >
					<FormInput
						type='date'
						name='inspectionDate'
						label='Fecha de Inspección'		        	
						placeholder='Sampling Date'
						value={this.state.inspectionDate}
						onChange={this.handleChange}
						required
					/>
					
					{
						/*	<p>Sample Spot (GPS or reference)</p> */
					}
		        
					<FormInput 
						type='number'
						name='sample'
						label='Plantas por Muestra'
						placeholder="Plantas "
						value={this.state.sample}
						onChange={this.handleChange}
						min='1'
						max='1000'
					/>	
					<h4>Agregar Detección</h4>
					<DetectionRecord />
					<br/>				
		            <Custombutton type='submit'>Registrar Inspeccion</Custombutton>
		        </form>			       
		        
		        <div className='inspection'>
		            <h4>Registro de Inspecciones</h4>
		            <InspectionRecords detections={detections} />
		            
		        </div>		        
		    	               
		    </div> 
		    :
		    <h4>SELECT A SECTOR</h4>
		)
	}
}

const mapStateToProps = state => ({
	detections: selectInspectionRecords(state),
	currentSector: selectCurrentSector(state),
	currentUser: selectCurrentUser(state)
});

const mapDispatchToProps = dispatch => ({
	setInspection: inspection => dispatch(setInspection(inspection)),
	clearInput: () => dispatch(clearInputSearch())
})

export default connect(mapStateToProps, mapDispatchToProps)(PlantsInspection);