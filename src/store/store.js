import {configureStore} from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import {persistReducer, persistStore} from "redux-persist";
import {reducers} from "../reducers/reducers.js";

const persistConfig = {
    key: 'root',
    version: 1,
    storage,
    blacklist: [],
};
const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
    reducer: persistedReducer,
})

export const persistor = persistStore(store)
