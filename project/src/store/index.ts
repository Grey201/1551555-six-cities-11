import { configureStore } from '@reduxjs/toolkit';
import { reducer } from './reducer';
import { createAPI } from '../services/api';
import { redirect } from './middlewares/redirect';

export const api = createAPI();

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleweare) =>
    getDefaultMiddleweare({
      thunk: { extraArgument: api },
    }).concat(redirect),
});
