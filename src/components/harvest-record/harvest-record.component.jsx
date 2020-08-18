import React from 'react';
import { connect } from 'react-redux'

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { createRegisterDocInRanch } from '../../firebase/firebase.utils'
import { selectCurrentSector } from '../../redux/sector/sector.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';

import './harvest-record.styles.scss';

class HarvestRecord extends React.Component {
	constructor() {
		super();
		this.state = {
            record: '',
            date: '',
            startTime: '',
            product: '',
            quantity: ''
		}
	}

	handleSubmit = event => {
        event.preventDefault();
        const { currentSector, currentUser } = this.props;

        if(currentSector) {
            createRegisterDocInRanch('harvest', this.state, currentSector, currentUser.id);
            this.setState({
                record: '',
                date: '',
                startTime: '',
                product: '',
                quantity: ''
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
				<h2>Record your Harvest</h2>
                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                        type='text'
                        name='record'
                        label='Record'
                        placeholder='Id / Tag / Record / Number'
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

const mapStateToProps = state => ({
	currentSector: selectCurrentSector(state),
	currentUser: selectCurrentUser(state)
});

export default connect(mapStateToProps)(HarvestRecord);