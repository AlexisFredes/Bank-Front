import { Middleware } from '@reduxjs/toolkit';
import { RootState } from './index';

const localStorageMiddleware: Middleware<unknown, RootState> =
  (store) => (next) => (action) => {
    const result = next(action);
    const state = store.getState();
    localStorage.setItem('reduxState', JSON.stringify(state));
    return result;
  };

export default localStorageMiddleware;
