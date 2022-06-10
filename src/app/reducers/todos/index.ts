import {PayloadAction, createSlice} from '@reduxjs/toolkit';

import type {RootState} from '../../store';
import uuid4 from 'uuid4';

export interface Todo {
  id: string;
  title: string;
  checked: boolean;
}

interface TodosState {
  todos: Todo[];
}

const initialState: TodosState = {
  todos: [],
};

export const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      const newTodo: Todo = {
        id: uuid4(),
        title: action.payload,
        checked: false,
      };
      state.todos.push(newTodo);
    },
    removeTodo: (state, action: PayloadAction<string>) => {
      state.todos = state.todos.filter(({id}) => id !== action.payload);
    },
    toggleTodo: (state, action: PayloadAction<string>) => {
      state.todos = state.todos.map(todo => {
        if (todo.id === action.payload) {
          todo.checked = !todo.checked;
        }
        return todo;
      });
    },
  },
});

export const {addTodo, removeTodo, toggleTodo} = todosSlice.actions;
export const selectTodos = (state: RootState) => state.todos;
export const todosReducer = todosSlice.reducer;
