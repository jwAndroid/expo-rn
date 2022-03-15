import { FC, memo } from 'react';
import styled from '@emotion/native';
import { FlatList, GestureResponderEvent } from 'react-native';
import { Todo } from '../../components';

const Container = styled.View(({ theme }) => ({
  flex: 1,
  paddingHorizontal: 10,
  marginVertical: 10,
  backgroundColor: theme.background,
}));

interface ITodoScreen {
  todos: TodoObject[];
  onCheck: (id: number) => (event: GestureResponderEvent) => void | undefined;
  onEdit: (id: number, text: string) => void;
  onDelete: (id: number) => (event: GestureResponderEvent) => void | undefined;
}

const TodoScreen: FC<ITodoScreen> = ({ todos, onCheck, onEdit, onDelete }) => {
  return (
    <Container>
      <FlatList
        data={todos}
        renderItem={({ item }) => (
          <Todo
            todo={item}
            onCheck={onCheck}
            onDelete={onDelete}
            onEdit={onEdit}
            key={item.id}
          />
        )}
      />
    </Container>
  );
};

export default memo(TodoScreen);
