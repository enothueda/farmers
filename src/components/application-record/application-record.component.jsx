import React from 'react';
import { connect } from 'react-redux';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { createRegisterDocInRanch } from '../../firebase/firebase.utils'
import { selectCurrentSector } from '../../redux/ranch/ranch.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';

import './application-record.styles.scss';

class ApplicationRecord extends React.Component {
	constructor() {
		super();
		this.state = {
			date: '',
                startTime: '',
                endTime: '',
                product: '',
                ingredient: '',
                equipment: '',
                dose: '',
                volume: '',
                pest: '',
                interval: '',
                reentry: ''
		}
	}

	handleSubmit = event => {
        event.preventDefault();
        const { currentSector, currentUser } = this.props;
        
        if(currentSector) {
            createRegisterDocInRanch('applications', this.state, currentSector, currentUser.id);
            this.setState({
                date: '',
                startTime: '',
                endTime: '',
                product: '',
                ingredient: '',
                equipment: '',
                dose: '',
                volume: '',
                pest: '',
                interval: '',
                reentry: ''
            })
        } else {
            console.log('SELECT A SECTOR')
        }

	}

	handleChange = event => {
		const {name, value} = event.target;
		this.setState({ [name]: value })
	}

	render() {
		return (
			<div className='application-record'>
				<h2>Record your Application</h2>
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
                        value={this.state.interval}
                        onChange={this.handleChange}
                        required
                    /> 
                    <FormInput 
                        type='number'
                        name='reentry'
                        label='Re-entry Period'
                        placeholder='Safety Time for worker to can entry'
                        value={this.state.reentry}
                        onChange={this.handleChange}
                        required
                    /> 
                    <CustomButton type='submit'>Record Application</CustomButton>
				</form>
			</div>
		)
	}

}

const mapStateToProps = state => ({
	currentSector: selectCurrentSector(state),
	currentUser: selectCurrentUser(state)
});

export default connect(mapStateToProps)(ApplicationRecord);