//2. Conectar Redux Toolkit con RTK Query, manejará el estado global de la aplicación
import { configureStore } from '@reduxjs/toolkit'; //Función para configurar el store
import { apiSlice } from './apiSlice';

import authReducer from '../pages/Login/services/authSlice';

import { Middlewares } from './middlewares';

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: authReducer, 
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware, ...Middlewares),
  devTools: true,
});

export const rootReducer = (state, action) => {
  if(action.type === 'RESET_ALL'){
    state = undefined;
  }
  return store(state, action);
}
