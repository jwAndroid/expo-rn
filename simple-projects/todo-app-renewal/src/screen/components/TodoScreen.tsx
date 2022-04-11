import { FC, memo, useCallback, useMemo } from 'react';
import styled from '@emotion/native';
import { FlatList, GestureResponderEvent, ListRenderItem } from 'react-native';

import { Todo } from '../../components';
import { TodoObject } from '../../type';
import { StyledText } from '../../components/text';

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

  const text = useMemo(() => '게시글을 작성해주세요', []);

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

  return todos.length !== 0 ? (
    <Container>
      <FlatList
        data={todos}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
      />
    </Container>
  ) : (
    <Container>
      <StyledText>{text}</StyledText>
    </Container>
  );
};

export default memo(TodoScreen);
