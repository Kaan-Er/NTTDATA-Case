import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {persistReducer, persistStore} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import userReducer from './slices/user';
import thunk from 'redux-thunk';

// adding our persist configs
const persistConfig = {
  key: 'root',
  version: 1,
  storage: AsyncStorage,
};

// adding our rootReducer
const rootReducer = combineReducers({
  user: userReducer,
});

// persisting our rootReducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// creating our store and exporting it
export const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
});

export const persistor = persistStore(store);
