import {StyleSheet} from 'react-native';

export const TodoItemStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 5,
  },
  input: {
    padding: 5,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#23e',
    width: '70%',
    height: '100%',
  },
});
