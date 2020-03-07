import React from 'react';
import { connect } from 'react-redux';

import FormInput from '../../components/form-input/form-input.component';
import CustomButton from '../../components/custom-button/custom-button.component';
import CustomSelect from '../../components/custom-select/custom-select.component';
import { setCurrentRanch } from '../../redux/ranch/ranch.actions';
import { selectCurrentCompany } from '../../redux/company/company.selectors';
import { selectCropsInfo } from '../../redux/crops/crops.selectors';

import { createNewRanchDocument } from '../../firebase/firebase.utils';

import './add-ranch.styles.scss';

class AddRanch extends React.Component {
	constructor(props) {
        super(props);

        this.state = {
            name: '',
            ranchId: '',
            code: '',
            crop: '',
            area: '',
            seasonStart: '',
            seasonEnd: '',
            latitude: '',
            longitude: '',
            address: ''
        }
    }
    
    handleSubmit = async event => {
        const { setCurrentRanch, currentCompany } = this.props;
        event.preventDefault();
            
        const ranchRef = await createNewRanchDocument(this.state, currentCompany);
        ranchRef.onSnapshot(snapShot => {
            //here we have to change the keep the current Ranch, and push to the user also
            setCurrentRanch({
                id: snapShot.id,
                ...snapShot.data()
            })
        });

        this.setState({name: '', ranchId: '', code: '', 
            crop: '', area: '', seasonStart: '', seasonEnd: '',
            latitude: '', longitude: '', address: ''
        })
    }

    handleChange = event => {
    	const {name, value} = event.target;

        this.setState({ [name]: value})
    }

    render() {
        const { cropNames } = this.props;

    	return (
    		<div className='add-ranch'>
                <h3>Add Ranch</h3>
                <form onSubmit={this.handleSubmit}>                    
                    <FormInput 
                        type='text'
                        name='name'
                        label='Ranch Name'
                        placeholder='Ranch Name'
                        value={this.state.name}
                        onChange={this.handleChange}
                        required
                    />                            
                    <FormInput 
                        type='text'
                        name='ranchId'
                        label='Ranch ID'
                        placeholder='Ranch ID'
                        value={this.state.ranchId}
                        onChange={this.handleChange}
                        required
                    />
                    <FormInput 
                        type='text'
                        name='code'
                        label='Ranch Code'
                        placeholder='Ranch Code'
                        value={this.state.code}
                        onChange={this.handleChange}
                    />                    
                    <FormInput 
                        type='text'
                        name='area'
                        label='Growing Area'
                        placeholder='Growing Area'
                        value={this.state.area}
                        onChange={this.handleChange}
                        required
                    />
                    <CustomSelect label='Crop' name='crop' onChange={this.handleChange}>
                        <option>select a crop</option>
                        {
                           cropNames.map((crop, idx) => <option key={idx} value={crop.name}>{crop.name}</option>)
                        }
                    </CustomSelect>
                    <p>Season</p>
                    <FormInput 
                        type='date'
                        name='seasonStart'
                        label='Starting Date'
                        placeholder='Starting Date'
                        value={this.state.seasonStart}
                        onChange={this.handleChange}
                        required
                    />
                    <FormInput 
                        type='date'
                        name='seasonEnd'
                        label='Ending Date'
                        placeholder='Ending Date'
                        value={this.state.seasonEnd}
                        onChange={this.handleChange}
                        required
                    />
                    <p>Location (GPS)</p>
                    <FormInput 
                        type='text'
                        name='latitude'
                        label='Latitude'
                        placeholder='Latitude'
                        value={this.state.latitude}
                        onChange={this.handleChange}            
                    />
                    <FormInput 
                        type='text'
                        name='longitude'
                        label='Longitude'
                        placeholder='Longitude'
                        value={this.state.longitude}
                        onChange={this.handleChange}                        
                    />
                    <p>Adress</p>
                    <FormInput 
                        type='text'
                        name='address'
                        label='Addres'
                        placeholder='Street, number or km, city and state'
                        value={this.state.address}
                        onChange={this.handleChange}
                        required
                    />
                    <CustomButton type='submit'>Add Ranch</CustomButton>
                </form>
            </div>
    	)
    }
}

const mapStateToProps = state => ({
    currentCompany: selectCurrentCompany(state),
    cropNames: selectCropsInfo(state)
})

const mapDispatchToProps = dispatch => ({
    setCurrentRanch: ranch => dispatch(setCurrentRanch(ranch))
})

export default connect(mapStateToProps, mapDispatchToProps)(AddRanch);