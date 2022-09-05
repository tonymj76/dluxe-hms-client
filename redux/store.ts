import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {API} from "redux/services";
import {setupListeners} from "@reduxjs/toolkit/query";
import authReducer from "redux/Auth/authSlice"
import storage from 'redux-persist/lib/storage';
import {createWrapper} from 'next-redux-wrapper';

import {
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist'

const reducers = combineReducers({
    [API.reducerPath]: API.reducer,
    auth: authReducer,
})

const persistConfig = {
    key: 'root',
    storage,
    version: 1,
    whitelist: ['auth'], //Things u want to persist
    blacklist: [API.reducerPath], //Things u don't
}

const persistedReducer = persistReducer(persistConfig, reducers)

const store = () => configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => (
        getDefaultMiddleware(
            {
                serializableCheck: {
                    ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
                },
            }
        ).concat(API.middleware)
    )
})


export const storeFn = store()
setupListeners(storeFn.dispatch)
export type AppStore = ReturnType<typeof store>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = typeof storeFn.dispatch;
export const wrapper = createWrapper<AppStore>(store);
