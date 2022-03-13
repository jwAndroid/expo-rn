import { FC, memo, useEffect, useState } from 'react';
import styled from '@emotion/native';
import { GestureResponderEvent } from 'react-native';
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
  const [dataList, setDataList] = useState<TodoObject[]>([]);

  useEffect(() => {
    setDataList(todos);
  }, [todos]);

  return (
    <Container>
      {dataList.map(
        (todo) => (
          <Todo
            key={todo.id}
            todo={todo}
            onCheck={onCheck}
            onEdit={onEdit}
            onDelete={onDelete}
          />
        ),
        []
      )}
    </Container>
  );
};

export default memo(TodoScreen);
