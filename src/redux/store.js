/* eslint-disable import/no-anonymous-default-export */
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import contactsReducer from './reducer';
import { contactApi } from './operations';
import { setupListeners } from '@reduxjs/toolkit/dist/query';

export const store = configureStore({
  reducer: {
    [contactApi.reducerPath]: contactApi.reducer,
    contacts: contactsReducer,
  },
  devTools: process.env.NODE_ENV === 'development',
  middleware: [...getDefaultMiddleware(), contactApi.middleware],
});

setupListeners(store.dispatch);
