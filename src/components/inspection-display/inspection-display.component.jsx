import React from 'react';
import { connect } from 'react-redux';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import CustomSelect from '../custom-select/custom-select.component';
import { selectCurrentCrop } from '../../redux/crop/crop.selectors';
import { setDetection } from '../../redux/records/records.actions';

import './inspection-display.styles.scss';

class InspectionDisplay extends React.Component {
	constructor(props) {
		super(props);
		this.state = {			
			
			data: {
				incidence: '',
				quantity: ''
			}
		}
	}

	handleSubmit = event => {
		const { setDetection } = this.props;		
		event.preventDefault();
		// To add a ternary with currentSector ? addRecord... : select a sector
		console.log(this.state)
		setDetection(this.state.data);
		// this is try to clean all data from select, has to check the value with ternary
		this.setState({
			data: {
				incidence: '',
				quantity: ''
			}
		});

	}

	handleChange = event => {
		const { name, value } = event.target;
		this.setState(prevState => ({
			data: {
				...prevState.data,
				[name]: value
			}
		}));

	}

	render() {
		const { group, currentCrop } = this.props;
		const { diseases, pests, beneficials } = currentCrop;
		//console.log('state render', this.state);
		//console.log('current pest', currentCrop)
		return (
			<div className='inspection-display'>				
				<form className='inspection-form' onSubmit={this.handleSubmit} >
					<span className='inspection-title'> {group.toUpperCase()} </span>
					<CustomSelect className='inspection-group' name={group} onChange={this.handleChange}>
						<option>Select {group}</option>
						{	
							group === 'pests' ?
							pests.map((entity, idx) => <option key={idx} value={entity}>{entity}</option>) :
								group === 'diseases' ?
								diseases.map((entity, idx) => <option key={idx} value={entity}>{entity}</option>) :
								beneficials.map((entity, idx) => <option key={idx} value={entity}>{entity}</option>)
						}
					</CustomSelect>

					<FormInput 
						type='number'
						min='0'
						name='quantity'
						placeholder='Quantity per spot'
						label='Quantity'
						value={this.state.data.quantity}
						onChange={this.handleChange}						
					/>

					<CustomSelect className='inspection-level' name='incidence' value={this.state.data.incidence} onChange={this.handleChange}>
						<option value='' >Incidence Level</option>
						<option value='1' >Level 1</option>
						<option value='2' >Level 2</option>
						<option value='3' >Level 3</option>
						<option value='4' >Level 4</option>
						<option value='5' >Level 5</option>
					</CustomSelect>

					<CustomButton type='submit'>Add Record</CustomButton>

				</form>
			</div>
		)
	}	
}

const mapStateToProps = state => ({
	currentCrop: selectCurrentCrop(state)
});

const mapDispatchToProps = dispatch => ({
	setDetection: detection => dispatch(setDetection(detection))
})

export default connect(mapStateToProps, mapDispatchToProps)(InspectionDisplay);