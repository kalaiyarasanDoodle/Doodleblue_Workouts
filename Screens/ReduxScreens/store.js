import {configureStore} from '@reduxjs/toolkit';
import TodoReducers from '../ReduxScreens/Slices/TodoSlice';

export const Store = configureStore({
  reducer: {
    kalai: TodoReducers,
  },
});
