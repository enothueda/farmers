import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; //default to Local Storage

import userReducer from './user/user.reducer';
import companyReducer from './company/company.reducer';
import ranchReducer from './ranch/ranch.reducer';
import recordsReducer from './records/records.reducer';
import cropsReducer from './crops/crops.reducer';
import inventoryReducer from './inventory/inventory.reducer';

const persistConfig = {
	key: 'root',
	storage,
	whitelist: ['company', 'ranch', 'crops', 'crop']
}

const rootReducer = combineReducers({
	user: userReducer,
	company: companyReducer,
	ranch: ranchReducer,
	records: recordsReducer,
	crops: cropsReducer,
	inventory: inventoryReducer
});

export default persistReducer(persistConfig, rootReducer);