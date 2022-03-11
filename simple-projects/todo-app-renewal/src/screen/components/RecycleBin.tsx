import { FC, memo, useEffect, useState } from 'react';
import { GestureResponderEvent } from 'react-native';

import styled from '@emotion/native';
import { Todo, Todos } from '../../components';

const Container = styled.View(({ theme }) => ({
  flex: 1,
  backgroundColor: theme.background,
}));

interface IRecycleBin {
  todos: TodoObject[];
  onCheck: (id: number) => (event: GestureResponderEvent) => void | undefined;
  onEdit: (id: number, text: string) => void;
  onDelete: (id: number) => (event: GestureResponderEvent) => void | undefined;
}

const RecycleBin: FC<IRecycleBin> = ({ todos, onCheck, onEdit, onDelete }) => {
  const [dataList, setDataList] = useState<TodoObject[]>([]);

  useEffect(() => {
    setDataList(todos);
  }, [todos, dataList]);

  return (
    <Container>
      <Todos>
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
      </Todos>
    </Container>
  );
};

export default memo(RecycleBin);
