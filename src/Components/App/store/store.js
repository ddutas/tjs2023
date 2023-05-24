import { configureStore, combineReducers } from "@reduxjs/toolkit";
import listesReducer, { fetchAllValues } from './memes';
import currentReducer from './current';

export const store = configureStore({
    reducer:combineReducers({listes: listesReducer, current: currentReducer}),
    devTools: true
})

store.dispatch(fetchAllValues());