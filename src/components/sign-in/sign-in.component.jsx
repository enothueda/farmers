import React from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { auth, SignInWithGoogle } from '../../firebase/firebase.utils';

import './sign-in.styles.scss';

class SignIn extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			email: '',
			password: ''
		}
	}

	handleSubmit = async event => {
		event.preventDefault();

		const { email, password } = this.state;
		try {
			await auth.signInWithEmailAndPassword(email, password);
			this.setState({ email: '', password: '' });
		} catch (error) {
			console.log(error)
		}
		
	}

	handleChange = event => {
		const { value, name } = event.target;

		this.setState({ [name]: value });

	}

	render() {
		return(
			<div className='sign-in'>
				<h2>Ingresa</h2>
				<span>Ingresa con tus datos</span>
				<form onSubmit={this.handleSubmit} >
					<FormInput 
                        type='email'
                        name='email'
                        label='Correo'
                        placeholder='Email'
                        value={this.state.email}
                        onChange={this.handleChange}
                        required
                    />
                    <FormInput 
                        type='password'
                        name='password'
                        label='Contraseña'
                        placeholder='Password'
                        value={this.state.password}
                        onChange={this.handleChange}
                        required
                    />
                    <CustomButton type='submit'>Ingresar</CustomButton>
                    <CustomButton onClick={SignInWithGoogle} >Ingresa con Google</CustomButton>
				</form>
			</div>
		);
	}
}

export default SignIn;