import React from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import './harvest-record.styles.scss';

class HarvestRecord extends React.Component {
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
                        type='text'
                        name='record'
                        label='Record'
                        placeholder='Id, Tag, Record, Number'
                        value={this.state.ingredient}
                        onChange={this.handleChange}
                        required
                    />
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
                        label='Harvest Time'
                        placeholder='Hour and Minutes'
                        value={this.state.startTime}
                        onChange={this.handleChange}
                        required
                    />                    
                    <FormInput 
                        type='text'
                        name='product'
                        label='Product'
                        placeholder='Product Type / Package / Label'
                        value={this.state.product}
                        onChange={this.handleChange}
                        required
                    /> 
                    
                    <FormInput 
                        type='number'
                        name='quantity'
                        label='Quantity'
                        placeholder='Boxes / Units '
                        value={this.state.volume}
                        onChange={this.handleChange}
                        required
                    /> 
                    <CustomButton type='submit'>Add Harvest</CustomButton>
				</form>
			</div>
		)
	}

};

export default HarvestRecord;