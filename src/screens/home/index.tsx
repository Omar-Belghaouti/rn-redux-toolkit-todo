import {} from './functions';

import React, {FC} from 'react';
import {
  addTodo,
  removeTodo,
  selectTodos,
  toggleTodo,
} from '../../app/reducers/todos';
import {useAppDispatch, useAppSelector} from '../../app/hooks';

import {HomeStyles} from './styles';
import {TodoItem} from '../../components/todo-item';
import {TodoList} from '../../components/todo-list';
import {View} from 'react-native';

interface HomeScreenProps {}

export const HomeScreen: FC<HomeScreenProps> = ({}: HomeScreenProps) => {
  const todos = useAppSelector(selectTodos);
  const dispatch = useAppDispatch();
  return (
    <View style={HomeStyles.container}>
      <TodoItem onAddTodo={title => dispatch(addTodo(title))} />
      <TodoList
        todos={todos.todos}
        onToggleTodo={id => dispatch(toggleTodo(id))}
        onRemoveTodo={id => dispatch(removeTodo(id))}
      />
    </View>
  );
};
