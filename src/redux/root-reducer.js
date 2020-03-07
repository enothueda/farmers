import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; //default to Local Storage

import userReducer from './user/user.reducer';
import companyReducer from './company/company.reducer';
import ranchReducer from './ranch/ranch.reducer';
import sectorReducer from './sector/sector.reducer';
import inspectionReducer from './inspection/inspection.reducer';
import cropsReducer from './crops/crops.reducer';
import cropReducer from './crop/crop.reducer';

const persistConfig = {
	key: 'root',
	storage,
	whitelist: ['company', 'ranch', 'sector', 'crops', 'crop']
}

const rootReducer = combineReducers({
	user: userReducer,
	company: companyReducer,
	ranch: ranchReducer,
	sector: sectorReducer,
	inspection: inspectionReducer,
	crops: cropsReducer,
	crop: cropReducer
});

export default persistReducer(persistConfig, rootReducer);