import { FC, memo, useCallback } from 'react';
import styled from '@emotion/native';
import { FlatList, GestureResponderEvent, ListRenderItem } from 'react-native';

import { Todo } from '../../components';
import { TodoObject } from '../../type';

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
  const keyExtractor = useCallback((item: TodoObject) => `${item.id}`, []);

  const renderItem = useCallback<ListRenderItem<TodoObject>>(
    ({ item }) => {
      return (
        <Todo
          todo={item}
          onCheck={onCheck}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      );
    },
    [onCheck, onDelete, onEdit]
  );

  return (
    <Container>
      <FlatList
        data={todos}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
      />
    </Container>
  );
};

export default memo(TodoScreen);
