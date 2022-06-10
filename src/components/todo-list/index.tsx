import {Button, FlatList, Text, TouchableOpacity, View} from 'react-native';
import React, {FC} from 'react';

import {Todo} from '../../app/reducers/todos';
import {TodoListStyles} from './styles';

interface TodoListProps {
  todos: Todo[];
  onToggleTodo: (id: string) => void;
  onRemoveTodo: (id: string) => void;
}

export const TodoList: FC<TodoListProps> = ({
  todos,
  onToggleTodo,
  onRemoveTodo,
}: TodoListProps) => {
  return (
    <FlatList
      data={todos}
      renderItem={({item}) => (
        <View style={TodoListStyles.item}>
          <TouchableOpacity
            onPress={() => {
              onToggleTodo(item.id);
            }}>
            <Text
              style={{
                textDecorationLine: item.checked ? 'line-through' : 'none',
              }}>
              {item.title}
            </Text>
          </TouchableOpacity>
          <Button
            title="Delete"
            color="red"
            onPress={() => {
              onRemoveTodo(item.id);
            }}
          />
        </View>
      )}
      keyExtractor={item => item.id.toString()}
    />
  );
};
