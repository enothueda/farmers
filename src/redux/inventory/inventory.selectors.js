import { createSelector } from 'reselect';

const selectInventory = state => state.inventory;

export const selectWarehouses = createSelector(
    [selectInventory],
    inventory => inventory.warehouses
)

export const selectProducts = createSelector(
    [selectInventory],
    inventory => inventory.products
)