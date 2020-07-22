import React from 'react';
import { connect } from 'react-redux';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { createRegisterDocInRanch } from '../../firebase/firebase.utils'
import { selectCurrentSector } from '../../redux/sector/sector.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';

import './fertilization-record.styles.scss';


class FertilizationRecord extends React.Component {
	constructor() {
		super();
		this.state = {
            date: '',
            startTime: '',
            endTime: '',
            product: '',
            ingredient: '',
            dose: '',
            volume: '',
            method: ''
		}
	}

	handleSubmit = event => {
        event.preventDefault();
        const { currentSector, currentUser } = this.props;
        
        if(currentSector) {
            createRegisterDocInRanch('fertilization', this.state, currentSector, currentUser.id);
            this.setState({
                date: '',
                startTime: '',
                endTime: '',
                product: '',
                ingredient: '',
                dose: '',
                volume: '',
                method: ''
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
				<h2>Record your Fertilization</h2>
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
                        label='Fertilizante'
                        placeholder='Active Ingredient'
                        value={this.state.ingredient}
                        onChange={this.handleChange}
                        required
                    />
                    <FormInput 
                        type='number'
                        name='dose'
                        label='Dose'
                        placeholder='Dose/Quantity per hectar'
                        value={this.state.dose}
                        onChange={this.handleChange}
                        required
                    /> 
                    <FormInput 
                        type='number'
                        name='volume'
                        label='Volume'
                        placeholder='Quantity per hectar'
                        value={this.state.volume}
                        onChange={this.handleChange}
                        required
                    /> 
                    <FormInput 
                        type='text'
                        name='method'
                        label='Aplication Method'
                        placeholder='Foliar, Irrigation, Granular'
                        value={this.state.pest}
                        onChange={this.handleChange}
                        required
                    />                    
                    <CustomButton type='submit'>Record Fertilization</CustomButton>
				</form>
			</div>
		)
	}

};

const mapStateToProps = state => ({
	currentSector: selectCurrentSector(state),
	currentUser: selectCurrentUser(state)
});

export default connect(mapStateToProps)(FertilizationRecord);