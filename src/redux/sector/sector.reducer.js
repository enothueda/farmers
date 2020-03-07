import { SectorActionTypes } from './sector.types';

const INITIAL_STATE = {
	currentSector: null,
	allSectors: null
}

const sectorReducer = ( state = INITIAL_STATE, action ) => {
	switch(action.type) {
		case SectorActionTypes.SET_CURRENT_SECTOR:
			return {
				...state,
				currentSector: action.payload
			}
		case SectorActionTypes.SET_ALL_SECTORS:
			return {
				...state,
				allSectors: action.payload,
				currentSector: null
			}
		default:
			return state;
	}
}

export default sectorReducer;