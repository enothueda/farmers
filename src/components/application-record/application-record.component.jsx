import React from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import './application-record.styles.scss';

class ApplicationRecord extends React.Component {
	constructor() {
		super();
		this.state = {
			date: ''

		}
	}

	handleSubmit = event => {

	}

	handleChange = event => {
		const {name, value} = event.target;
		this.setState({ [name]: value })
	}

	render() {
		return (
			<div className='application-record'>
				<h1>Register your application</h1>
				<form onSubmit={this.handleSubmit}>
					<FormInput 
                        type='date'
                        name='date'
                        label='Date'
                        placeholder='Name, Code, ID or number'
                        value={this.state.date}
                        onChange={this.handleChange}
                        required
                    />
                    <FormInput 
                        type='time'
                        name='startTime'
                        label='Start Time'
                        placeholder='Hour and Minutes'
                        value={this.state.startTime}
                        onChange={this.handleChange}
                        required
                    /> 
                    <FormInput 
                        type='time'
                        name='endTime'
                        label='End Time'
                        placeholder='Hour and Minutes'
                        value={this.state.endTime}
                        onChange={this.handleChange}
                        required
                    /> 
                    <FormInput 
                        type='text'
                        name='product'
                        label='Product'
                        placeholder='Commercial Name'
                        value={this.state.product}
                        onChange={this.handleChange}
                        required
                    /> 
                    <FormInput 
                        type='text'
                        name='ingredient'
                        label='Ingredient'
                        placeholder='Active Ingredient'
                        value={this.state.ingredient}
                        onChange={this.handleChange}
                        required
                    />
                    <FormInput 
                        type='text'
                        name='equipment'
                        label='Equipment'
                        placeholder='Equipment or Machinery'
                        value={this.state.equipment}
                        onChange={this.handleChange}
                        required
                    />
                    <FormInput 
                        type='number'
                        name='dose'
                        label='Dose'
                        placeholder='Dose per hectar'
                        value={this.state.dose}
                        onChange={this.handleChange}
                        required
                    /> 
                    <FormInput 
                        type='number'
                        name='volume'
                        label='Water Volume'
                        placeholder='Water Volume per hectar'
                        value={this.state.volume}
                        onChange={this.handleChange}
                        required
                    /> 
                    <FormInput 
                        type='text'
                        name='pest'
                        label='Pest'
                        placeholder='Pest or Disease'
                        value={this.state.pest}
                        onChange={this.handleChange}
                        required
                    />
                    <FormInput 
                        type='number'
                        name='interval'
                        label='Interval'
                        placeholder='Safety Interval'
                        value={this.state.dose}
                        onChange={this.handleChange}
                        required
                    /> 
                    <CustomButton type='submit'>Record Application</CustomButton>
				</form>
			</div>
		)
	}

}

export default ApplicationRecord;