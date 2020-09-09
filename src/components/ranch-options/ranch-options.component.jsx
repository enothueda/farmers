import React from 'react';
import { connect } from 'react-redux';

import { setCurrentRanch } from '../../redux/ranch/ranch.actions';
import { setCurrentCrop } from '../../redux/crops/crops.actions';
import { selectCropsInfo } from '../../redux/crops/crops.selectors';
import { setAllSectors} from '../../redux/ranch/ranch.actions';
import { getSectorsFromRanch } from '../../firebase/firebase.utils';

import './ranch-options.styles.scss';

const RanchOptions = ({ranch, setCurrentRanch, cropsInfo, setCurrentCrop, setAllSectors}) => {
	const currentCrop = cropsInfo.find(crop => ranch.crop === crop.name);

	return(
		<div className='ranch-options' 
			onClick={() => {
				setCurrentRanch(ranch);
				setCurrentCrop(currentCrop);
				getSectorsFromRanch(ranch)
				.then(response => response.map(doc => doc.data()))
				.then(docData => setAllSectors(docData))
				.catch(error => console.log(error.message));
			}}
		>
			<span className='option'> {ranch.ranchId} </span>
			<span className='option'> {ranch.name} </span>
			<span className='option'> {ranch.crop} </span>	
		</div>
	)
};

const mapStateTopProps = state => ({
	cropsInfo: selectCropsInfo(state)
})

const mapDispatchToProps = dispatch => ({
    setCurrentRanch: ranch => dispatch(setCurrentRanch(ranch)),
    setCurrentCrop: crop => dispatch(setCurrentCrop(crop)),
    setAllSectors: sectors => dispatch(setAllSectors(sectors))
})

export default connect(mapStateTopProps, mapDispatchToProps)(RanchOptions);