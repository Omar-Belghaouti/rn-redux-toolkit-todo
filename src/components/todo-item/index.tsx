import {Alert, Button, TextInput, View} from 'react-native';
import React, {FC, useState} from 'react';

import {TodoItemStyles} from './styles';

interface TodoItemProps {
  onAddTodo: (title: string) => void;
}

export const TodoItem: FC<TodoItemProps> = ({onAddTodo}: TodoItemProps) => {
  const [title, setTitle] = useState('');
  return (
    <View style={TodoItemStyles.container}>
      <TextInput
        style={TodoItemStyles.input}
        placeholder="Enter todo title"
        onChangeText={text => setTitle(text)}
        value={title}
      />
      <Button
        title="Add Todo"
        onPress={() => {
          if (title.trim().length === 0) {
            Alert.alert('Please provide a valid title');
            return;
          }
          onAddTodo(title);
          setTitle('');
        }}
      />
    </View>
  );
};
