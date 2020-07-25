import { InventoryActionTypes } from './inventory.types';

const INITIAL_STATE = {
    warehouses: '',
    products: ''
}

const inventoryReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case InventoryActionTypes.SET_WAREHOUSES:
            return {
                ...state,
                warehouses: action.payload
            }
        case InventoryActionTypes.SET_PRODUCTS:
            return {
                ...state,
                products: action.payload
            }
        default:
            return state;
    }
};

export default inventoryReducer;