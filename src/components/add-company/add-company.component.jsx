import React from 'react';
import { connect } from 'react-redux';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { setCurrentCompany } from '../../redux/company/company.actions';

import { createCompanyProfileDocument } from '../../firebase/firebase.utils';

import './add-company.styles.scss';

class AddCompany extends React.Component {
	constructor() {
		super();

		this.state = {
			companyName: '',
			country: '',
			location: '',
			address: '',
			logo: ''
		}
	}

	handleSubmit = async event => {
		const { setCurrentCompany } = this.props
		event.preventDefault();

		const companyRef = await createCompanyProfileDocument(this.state);
		companyRef.onSnapshot(snapShot => {
			setCurrentCompany({
				id: snapShot.id,
				...snapShot.data()
			})
		})
    }

    handleChange = event => {
    	const {name, value} = event.target;

    	this.setState({ [name]: value});
    }


	render() {
		return (
			<div className='add-company'>
				<h2>Add your Company</h2>
				<form onSubmit={this.handleSubmit}>
					<FormInput 
						type='text'
						name='companyName'
						label='Company Name'
						placeholder='Company Name'
						value={this.state.companyName}
						onChange={this.handleChange}
						required
					/>
                    <FormInput 
                        type='text'
                        name='country'
                        label='Country'
                        placeholder='Country'
                        value={this.state.country}
                        onChange={this.handleChange}
                        required
                    />
                    <FormInput 
                        type='text'
                        name='location'
                        label='Location'
                        placeholder='Location'
                        value={this.state.location}
                        onChange={this.handleChange}                        
                    />
                    <FormInput 
                        type='text'
                        name='address'
                        label='Address'
                        placeholder='Address'
                        value={this.state.address}
                        onChange={this.handleChange}                        
                    />
                    <CustomButton type='submit'>Create Company</CustomButton>
					
				</form>
			</div>
		)
	}
}


const mapDispatchTopProps = dispatch => ({
	setCurrentCompany: company => dispatch(setCurrentCompany(company))
})

export default connect(null, mapDispatchTopProps)(AddCompany);