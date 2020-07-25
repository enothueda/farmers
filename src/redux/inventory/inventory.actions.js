import { InventoryActionTypes } from './inventory.types';

export const setWarehouses = warehouses => ({
    type: InventoryActionTypes.SET_WAREHOUSES,
    payload: warehouses
});

export const setProducts = products => ({
    type: InventoryActionTypes.SET_PRODUCTS,
    payload: products
});