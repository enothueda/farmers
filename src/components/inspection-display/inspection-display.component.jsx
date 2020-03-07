import React from 'react';
import { connect } from 'react-redux';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import CustomSelect from '../custom-select/custom-select.component';
import { selectCurrentCrop } from '../../redux/crop/crop.selectors';
import { addRecord } from '../../redux/inspection/inspection.actions';

import './inspection-display.styles.scss';

class InspectionDisplay extends React.Component {
	constructor(props) {
		super(props);
		this.state = {			
			incidence: '',
			data: {}
		}
	}

	handleSubmit = event => {
		const { addRecord } = this.props
		event.preventDefault();
		// To add a ternary with currentSector ? addRecord... : select a sector
		addRecord(this.state.data);

		this.setState({ quantity:'', incidence: '' })
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
		console.log('state render', this.state);
		console.log('current pest', currentCrop)
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
						onChange={this.handleChange}						
					/>

					<CustomSelect className='inspection-level' name='incidence' onChange={this.handleChange}>
						<option>Incidence Level</option>
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
	addRecord: record => dispatch(addRecord(record))
})

export default connect(mapStateToProps, mapDispatchToProps)(InspectionDisplay);