import {combineReducers} from '@reduxjs/toolkit';
import {todosReducer} from './todos';

export const combinedReducers = combineReducers({
  todos: todosReducer,
});
