import React from 'react';
import { connect } from 'react-redux';

import FormInput from '../../components/form-input/form-input.component';
import CustomButton from '../../components/custom-button/custom-button.component';
import CustomSelect from '../../components/custom-select/custom-select.component';
import { setCurrentRanch } from '../../redux/ranch/ranch.actions';
import { selectCurrentCompany } from '../../redux/company/company.selectors';
import { selectCropsInfo } from '../../redux/crops/crops.selectors';

import { createNewRanchDocument } from '../../firebase/firebase.utils';

import crops from '../../crops'

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
                <form onSubmit={this.handleSubmit}>                    
                    <FormInput 
                        type='text'
                        name='name'
                        label='Nombre'
                        placeholder='Nombre de Rancho'
                        value={this.state.name}
                        onChange={this.handleChange}
                        required
                    />                            
                    <FormInput 
                        type='text'
                        name='ranchId'
                        label='ID'
                        placeholder='Numero o Codigo'
                        value={this.state.ranchId}
                        onChange={this.handleChange}
                        required
                    />
                    <FormInput 
                        type='text'
                        name='code'
                        label='Codigo'
                        placeholder='Codigo de Rancho'
                        value={this.state.code}
                        onChange={this.handleChange}
                    />                    
                    <FormInput 
                        type='text'
                        name='area'
                        label='Zona'
                        placeholder='Zona de Producción'
                        value={this.state.area}
                        onChange={this.handleChange}
                        required
                    />
                    <CustomSelect label='Cultivo' name='crop' onChange={this.handleChange}>
                        <option>Seleccione Cultivo</option>
                        {
                           crops.map((crop, idx) => <option key={idx} value={crop}>{crop}</option>)
                        }
                    </CustomSelect>
                    <p>Temporada</p>
                    <FormInput 
                        type='date'
                        name='seasonStart'
                        label='Inicio'
                        placeholder='Starting Date'
                        value={this.state.seasonStart}
                        onChange={this.handleChange}
                        required
                    />
                    <FormInput 
                        type='date'
                        name='seasonEnd'
                        label='Cierre'
                        placeholder='Ending Date'
                        value={this.state.seasonEnd}
                        onChange={this.handleChange}
                        required
                    />
                    {/* REVIEW IF THE NEXT SECTIONS MAKE SENSE*/}
                    <p>Ubicación (GPS)</p>
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
                    <p>Direccion</p>
                    <FormInput 
                        type='text'
                        name='address'
                        label='Direccion'
                        placeholder='Street, number or km, city and state'
                        value={this.state.address}
                        onChange={this.handleChange}
                        required
                    />
                    <CustomButton type='submit'>Registrar Rancho</CustomButton>
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