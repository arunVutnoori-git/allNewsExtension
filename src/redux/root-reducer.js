import { combineReducers } from "redux";

import headerReducer from "./header/header.reducer"
import homeReducer from "./home/homepage.reducer"

import { persistReducer } from "redux-persist"
import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['header','home']
}

const rootReducer = combineReducers({
    header: headerReducer,
    home: homeReducer,
})

export default persistReducer(persistConfig,rootReducer)