import React from 'react';

import FormInput from '../../components/form-input/form-input.component';
import CustomButton from '../../components/custom-button/custom-button.component';

import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

import './sign-up.styles.scss';

class SignUp extends React.Component {
	constructor() {
		super();

		this.state = {
			displayName: '',
			email: '',
			password: '',
			confirmPassword: ''
		}
	}

	handleSubmit = async event => {
        event.preventDefault();

        const { displayName, email, password, confirmPassword} = this.state;

        if(password !== confirmPassword) {
            alert("password don't match");
            return;
        }

        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password);

            await createUserProfileDocument(user, { displayName });

            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            })

        } catch (error) {
            console.error(error);
        }
	}

	handleChange = event => {
        const { name, value } = event.target;

        this.setState({ [name]: value });
	}

	render() {
        const { displayName, email, password, confirmPassword} = this.state;
		return(
			<div className='sign-up'>
                <h2 className='title'>No tengo cuenta</h2> 
                <span>Registro con correo y contraseña</span>
				<form onSubmit={this.handleSubmit} >
					<FormInput 
                        type='text'
                        name='displayName'
                        label='Nombre'
                        placeholder='Nombre'
                        value={displayName}
                        onChange={this.handleChange}
                        required
                    />
                    <FormInput 
                        type='email'
                        name='email'
                        label='Correo'
                        placeholder='Email'
                        value={email}
                        onChange={this.handleChange}
                        required
                    />
                    <FormInput 
                        type='password'
                        name='password'
                        label='Contraseña'
                        placeholder='Password'
                        value={password}
                        onChange={this.handleChange}
                        required
                    />
                    <FormInput 
                        type='password'
                        name='confirmPassword'
                        label='Confirma Contraseña'
                        placeholder='Confirma Password'
                        value={confirmPassword}
                        onChange={this.handleChange}
                        required
                    />
                    <CustomButton type='submit'>Registrar</CustomButton>
                </form>
			</div>
		)
	}
}

export default SignUp;
