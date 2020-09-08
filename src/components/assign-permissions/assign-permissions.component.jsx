import React, { useState } from 'react';
import { connect } from 'react-redux'

import FormInput from '../../components/form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import CustomSelect from '../custom-select/custom-select.component';

import { selectCurrentCompany } from '../../redux/company/company.selectors';
import { setPermissionsToUser } from '../../firebase/firebase.utils';

import './assign-permissions.styles.scss';

const AssignPermissions = ({ company }) => {
    const [permissions, setPermissions] = useState({
        email: '',
        role:''
    })

    const [msg, setMsg] = useState('');

    const roles = [
        'admin',
        'manager',
        'supervisor',
        'inspector'
    ]

    const handleSubmit = async event => {
        event.preventDefault();
        const confirmation = await setPermissionsToUser(company.id, permissions);
        console.log(confirmation)
        
        setPermissions({ email: '', role:'' })
        setMsg(confirmation)
        setTimeout(() => setMsg('') , 1500)
    }

    const handleChange = event => {
        const {name, value} = event.target;
        setPermissions({...permissions, [name]: value })
    }

    return (
        <div className='assign-permissions'>
            <h2>Give Permissions</h2>
            <form onSubmit={handleSubmit}>
                <CustomSelect label='' name='role' onChange={handleChange}>
                    <option>select a profile</option>
                    {
                        roles.map((role, idx) => <option key={idx}>{role}</option>)
                    }
                </CustomSelect>
                <FormInput 
                    type='email'
                    name='email'
                    placeholder='email of invitee'
                    value={permissions.email}
                    onChange={handleChange}
                    required
                />
                <CustomButton type='submit'>Give Permissions</CustomButton>
                { msg && <div>{msg}</div>}
            </form>
        </div>
    )
}

const mapStateToProps = state => ({
    company: selectCurrentCompany(state)
})

export default connect(mapStateToProps)(AssignPermissions);