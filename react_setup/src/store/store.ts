import { combineReducers, configureStore } from "@reduxjs/toolkit";
import sampleSlice from './sampleSlice';
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import { persistReducer, persistStore } from "redux-persist";

const persistConfig = {
    key: "root",
    storage
}

const rootReducer = combineReducers({
    sampleSlice
})

const persistedReducer = persistReducer(persistConfig, rootReducer);


export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        })
})


export const persistor = persistStore(store);


