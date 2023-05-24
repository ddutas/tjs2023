import { configureStore, combineReducers } from "@reduxjs/toolkit";
import listesReducer, { fetchAllValues } from './memes';

export const store = configureStore({
    reducer:combineReducers({listes: listesReducer}),
    devTools: true
})

store.dispatch(fetchAllValues());