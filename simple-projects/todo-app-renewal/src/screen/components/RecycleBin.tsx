import { FC, memo, useEffect, useState } from 'react';
import styled from '@emotion/native';

import { Bin } from '../../components';

const Container = styled.View(({ theme }) => ({
  flex: 1,
  paddingHorizontal: 10,
  marginVertical: 10,
  backgroundColor: theme.background,
}));

interface IRecycleBin {
  todos: TodoObject[];
}

const RecycleBin: FC<IRecycleBin> = ({ todos }) => {
  const [dataList, setDataList] = useState<TodoObject[]>([]);

  useEffect(() => {
    setDataList(todos);
  }, [todos, dataList]);

  return (
    <Container>
      {dataList.map(
        (todo) => (
          <Bin key={todo.id} todo={todo} />
        ),
        []
      )}
    </Container>
  );
};

export default memo(RecycleBin);
