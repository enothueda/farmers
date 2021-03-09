import React from 'react';
import { connect } from 'react-redux';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { setCurrentCompany } from '../../redux/company/company.actions';
import { selectCurrentUser } from '../../redux/user/user.selectors';

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
		const { setCurrentCompany, currentUser } = this.props
		event.preventDefault();

		const companyRef = await createCompanyProfileDocument(this.state, currentUser);
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
				<form onSubmit={this.handleSubmit}>
					<FormInput 
						type='text'
						name='companyName'
						label='Nombre'
						placeholder='Nombre de Empresa'
						value={this.state.companyName}
						onChange={this.handleChange}
						required
					/>
                    
                    <FormInput 
                        type='text'
                        name='location'
                        label='Ubicación'
                        placeholder='Ubicación de la empresa'
                        value={this.state.location}
                        onChange={this.handleChange}                        
                    />
                    <FormInput 
                        type='text'
                        name='country'
                        label='Pais'
                        placeholder='Pais de registro'
                        value={this.state.country}
                        onChange={this.handleChange}
                        required
                    />
					<FormInput 
                        type='text'
                        name='address'
                        label='Dirección'
                        placeholder='Dirección'
                        value={this.state.address}
                        onChange={this.handleChange}                        
                    />
                    <CustomButton type='submit'>Crear Empresa</CustomButton>
					
				</form>
			</div>
		)
	}
}

const mapStateToProps = state => ({
	currentUser: selectCurrentUser(state)
})

const mapDispatchTopProps = dispatch => ({
	setCurrentCompany: company => dispatch(setCurrentCompany(company))
})

export default connect(mapStateToProps, mapDispatchTopProps)(AddCompany);