import React from 'react';
import { connect } from 'react-redux';

import FormInput from '../../components/form-input/form-input.component';
import CustomButton from '../../components/custom-button/custom-button.component';

import { selectCurrentRanch } from '../../redux/ranch/ranch.selectors';
import { setCurrentSector } from '../../redux/sector/sector.actions';
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
        console.log('add sector', event);
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
                <h3>Add Sector</h3>
                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                        type='text'
                        name='sector'
                        label='Sector'
                        placeholder='Name, Code, ID or number'
                        value={this.state.sector}
                        onChange={this.handleChange}
                        required
                    /> 
                    <FormInput 
                        type='number'
                        name='hectares'
                        label='Hectars'
                        placeholder='Hectars or Acres'
                        value={this.state.hectares}
                        onChange={this.handleChange}
                        required
                    /> 
                    <FormInput 
                        type='text'
                        name='variety'
                        label='Variety'
                        placeholder='Variety'
                        value={this.state.variety}
                        onChange={this.handleChange}
                    /> 
                    <FormInput 
                        type='text'
                        name='origin'
                        label='Origin'
                        placeholder='Origin'
                        value={this.state.origin}
                        onChange={this.handleChange}
                    /> 
                    <FormInput 
                        type='text'
                        name='treatment'
                        label='Treatment'
                        placeholder='Treatment'
                        value={this.state.treatment}
                        onChange={this.handleChange}
                    />
                    <FormInput 
                        type='date'
                        name='plantingDate'
                        label='Planting Date'
                        placeholder='Planting Date'
                        value={this.state.plantingDate}
                        onChange={this.handleChange}
                    />
                    <FormInput 
                        type='number'
                        name='density'
                        label='Density'
                        placeholder='Plants per hectare'
                        value={this.state.density}
                        onChange={this.handleChange}
                        required
                    /> 
                    <CustomButton type='submit'>Add Sector</CustomButton>
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