import React from 'react';
import { connect } from 'react-redux'

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { createNewDocInCompanySubcollection } from '../../firebase/firebase.utils';
import { selectCurrentCompany } from '../../redux/company/company.selectors';

import './add-warehouse.styles.scss';

class AddWarehouse extends React.Component {
    constructor() {
        super();
        this.state = {
            whId: '',
            warehouse: '',
            location: ''
        }
    }

    handleSubmit = event => {
        const { company } = this.props;
        event.preventDefault()
        createNewDocInCompanySubcollection('warehouses', company.id, this.state);
        this.setState({
            whId: '',
            warehouse: '',
            location: ''
        })

    }

    handleChange = event => {
        const {name, value} = event.target;
    	this.setState({ [name]: value});
    }

    render() {
        return (
            <div className='add-warehouse'>
                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                        type='text'
                        name='whId'
                        label='ID / Code'
                        placeholder='Identifier or Code'
                        value={this.state.whId}
                        onChange={this.handleChange}
                    />
                    <FormInput 
                        type='text'
                        name='warehouse'
                        label='Warehouse'
                        placeholder='Name of Warehouse or shed'
                        value={this.state.warehouse}
                        onChange={this.handleChange}
                        required
                    />
                    <FormInput 
                        type='text'
                        name='location'
                        label='Location'
                        placeholder='Optional Location'
                        value={this.state.location}
                        onChange={this.handleChange}

                    />
                    <CustomButton type='submit'>Set Warehouse</CustomButton>
                </form>
            </div>
        )
    }
};

const mapStateToProps = state => ({
    company: selectCurrentCompany(state)
})

export default connect(mapStateToProps)(AddWarehouse);