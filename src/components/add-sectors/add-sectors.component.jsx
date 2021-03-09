import React from 'react';
import { connect } from 'react-redux';

import FormInput from '../../components/form-input/form-input.component';
import CustomButton from '../../components/custom-button/custom-button.component';

import { selectCurrentRanch } from '../../redux/ranch/ranch.selectors';
import { setCurrentSector } from '../../redux/ranch/ranch.actions';
import { addSectorDocumentInRanch } from '../../firebase/firebase.utils';

import './add-sectors.styles.scss';

class AddSectors extends React.Component {
	constructor() {
		super();

		this.state = {
			sector: '',
			hectares: '',
			variety: '',
			origin: '',
			treatment: '',
			plantingDate: '',
			density: ''
		}
	}

	handleSubmit = async event => {
        const { setCurrentSector, currentRanch } = this.props;
        event.preventDefault();
        //console.log('add sector', event);
        // add the addSectorInRanchDocument
        const sectorRef = await addSectorDocumentInRanch(this.state, currentRanch);
        sectorRef.onSnapshot(snapShot => 
            setCurrentSector({
                id: snapShot.id,
                ...snapShot.data()
            })
        );

        this.setState({sector: '', hectares: '', variety: '', origin: '', treatment: '', 
            plantingDate: '', density: ''});
    }

    handleChange = event => {
    	const { name, value } = event.target;

        this.setState({ [name]: value });
    }

	render() {
		return (
			<div className='add-sectors'>
                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                        type='text'
                        name='sector'
                        label='Sector'
                        placeholder='Nombre, Numero o codigo de sector'
                        value={this.state.sector}
                        onChange={this.handleChange}
                        required
                    /> 
                    <FormInput 
                        type='number'
                        name='hectares'
                        step='any'
                        label='Superficie'
                        placeholder='Hectareas '
                        value={this.state.hectares}
                        onChange={this.handleChange}
                        required
                    /> 
                    <FormInput 
                        type='text'
                        name='variety'
                        label='Variedad'
                        placeholder='Variedad'
                        value={this.state.variety}
                        onChange={this.handleChange}
                    /> 
                    <FormInput 
                        type='text'
                        name='origin'
                        label='Origen'
                        placeholder='Origen o Tratamiento'
                        value={this.state.origin}
                        onChange={this.handleChange}
                    /> 
                    <FormInput 
                        type='text'
                        name='treatment'
                        label='Tratamiento'
                        placeholder='Tratamiento'
                        value={this.state.treatment}
                        onChange={this.handleChange}
                    />
                    <FormInput 
                        type='date'
                        name='plantingDate'
                        label='Plantación o Poda'
                        placeholder='Planting Date'
                        value={this.state.plantingDate}
                        onChange={this.handleChange}
                    />
                    <FormInput 
                        type='number'
                        name='density'
                        label='Densidad'
                        placeholder='Plantas por hectarea'
                        value={this.state.density}
                        onChange={this.handleChange}
                    /> 
                    <CustomButton type='submit'>REgistrar Sector</CustomButton>
                </form>
            </div>
		);
	}
}

const mapStateToProps = state => ({
    currentRanch: selectCurrentRanch(state)
});

const mapDispatchToProps = dispatch => ({
   setCurrentSector: sector => dispatch(setCurrentSector(sector))
});

export default connect(mapStateToProps, mapDispatchToProps)(AddSectors);