import React from 'react';
import { connect } from 'react-redux'

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { createRegisterDocInRanch } from '../../firebase/firebase.utils';
import { addHarvestRecord } from '../../redux/records/records.actions';
import { selectCurrentSector } from '../../redux/ranch/ranch.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';

import './harvest-record.styles.scss';

class HarvestRecord extends React.Component {
	constructor() {
		super();
		this.state = {
            record: '',
            date: '',
            harvestTime: '',
            product: '',
            quantity: ''
		}
	}

	handleSubmit = async event => {
        event.preventDefault();
        const { currentSector, currentUser, harvestRecord } = this.props;

        if(currentSector) {
            await harvestRecord(this.state);
            await createRegisterDocInRanch('harvest', this.state, currentSector, currentSector.sector, currentUser.id);
            this.setState({
                record: '',
                date: '',
                harvestTime: '',
                product: '',
                quantity: ''
            })
        } else {
            console.log('SECTOR IS MISSING')
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
                        value={this.state.record}
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
                        name='harvestTime'
                        label='Harvest Time'
                        placeholder='Hour and Minutes'
                        value={this.state.harvestTime}
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
                        value={this.state.quantity}
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

const mapDispatchToProps = dispatch => ({
    harvestRecord: record => dispatch(addHarvestRecord(record))
})

export default connect(mapStateToProps, mapDispatchToProps)(HarvestRecord);