'use client';
import { combineReducers } from '@reduxjs/toolkit';
// Importa tus reducers aquí
import accountReducer from './accountSlice';

const rootReducer = combineReducers({
  account: accountReducer
  // Añade otros reducers aquí
});

export default rootReducer;
