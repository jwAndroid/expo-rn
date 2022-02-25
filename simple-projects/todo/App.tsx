import React, { memo, useCallback, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AppLoading from 'expo-app-loading';
import Constants from 'expo-constants';
import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from '@emotion/react';
import styled from '@emotion/native';

import { cacheFonts, cacheImages } from './src/api/cache';
import { theme } from './src/style';
import { Footer, Input, Title, Todo, Todos } from './src/components';
import { checkIcon, deleteIcon, editIcon, uncheckIcon } from './src/icons';

// 순서가 react -> react-native -> expo
// 그리고 import ./src/api/cache 이부분을 먼저 진행하니까

const Container = styled.SafeAreaView(({ theme }) => ({
  flex: 1,
  alignItems: 'center',
  backgroundColor: theme.background,
  paddingTop: Constants.statusBarHeight,
}));

const App = () => {
  const [isReady, setIsReady] = useState(false);
  const [text, setText] = useState('');
  const [todos, setTodos] = useState<Todo[]>([]);
  // Todo 라는 타입(밖 index 쪽) 의 빈배열로써의 state 이다. 빈배열로 시작한다

  const setStore = useCallback(async (todos: Todo[]) => {
    try {
      await AsyncStorage.setItem('todos', JSON.stringify(todos));

      setTodos(todos);
    } catch (e) {
      console.error(e);
    }
  }, []);

  const getStore = useCallback(async () => {
    const todos = JSON.parse((await AsyncStorage.getItem('todos')) || '[]');

    if (todos.length > 0) {
      setTodos(todos);
    } else {
      const id = Date.now();
      const todo = { id, text: '새롭게 작성해주세요!', isCompleted: false };

      setStore([todo]);
    }
  }, [setStore]);

  const startAsync = useCallback(async () => {
    // 앱로딩 - 프리패치
    // 캐싱 소스코드 작성
    const images = cacheImages([checkIcon, deleteIcon, editIcon, uncheckIcon]);
    const fonts = cacheFonts([]);

    await Promise.all([...images, ...fonts]);

    getStore();
  }, [getStore]);

  const onFinish = useCallback(() => {
    setIsReady(true);
  }, []);

  const onError = useCallback((error: Error) => {
    console.error(error);
  }, []);

  const onChangeText = useCallback((text: string) => {
    setText(text);
  }, []);

  const onSubmitEditing = useCallback(() => {
    if (text.length > 0) {
      const id = Date.now();
      const todo = { id, text, isCompleted: false };

      setStore([...todos, todo]);
      setText('');
    }
  }, [text, setStore, todos]);

  const onCheck = useCallback(
    (id: number) => () => {
      const updatedTodos = todos.map((todo) => {
        return todo.id === id
          ? { ...todo, isCompleted: !todo.isCompleted }
          : todo;
      });

      setStore(updatedTodos);
    },
    [setStore, todos]
  );

  const onEdit = useCallback(
    (id: number, text: string) => {
      const updatedTodos = todos.map((todo) => {
        return todo.id === id ? { ...todo, text } : todo;
      });

      setStore(updatedTodos);
    },
    [setStore, todos]
  );

  const onDelete = useCallback(
    (id: number) => () => {
      const updatedTodos = todos.filter((todo) => todo.id !== id);

      setStore(updatedTodos);
    },
    [setStore, todos]
  );

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <StatusBar style="light" />

        {isReady ? (
          <>
            <Title>TODO</Title>

            <Input
              value={text}
              placeholder="입력해주세요."
              onChangeText={onChangeText}
              onSubmitEditing={onSubmitEditing}
            />

            <Todos>
              {todos.map((todo) => (
                <Todo
                  key={todo.id}
                  todo={todo}
                  onCheck={onCheck}
                  onEdit={onEdit}
                  onDelete={onDelete}
                />
              ))}
            </Todos>

            <Footer />
          </>
        ) : (
          <AppLoading
            startAsync={startAsync}
            onFinish={onFinish}
            onError={onError}
          />
        )}
      </Container>
    </ThemeProvider>
  );
};

export default memo(App);

// 앱 로딩은 이 틀 그대로 쓰면된다.
// <StatusBar style="light" /> 가 position 앱솔루트처럼 되어있는데 저번에 스크롤뷰 내릴때 스테이터스바
// 겹치는 이슈가 이런 이유떄문에 있었음 그래서 Container 안쪽 들여다보면 paddingtop 을 스테이터스만큼
// 준것을 확인해볼수 있다. 마진이 아니고 패딩을 주어야함.

// App.tsx 가 최상위 이니까 여기의 Container 의 패딩탑을 주게되면 나머지는 알아서 들어감.

// 이모션 이야기인데 머트리얼ui const a = styled(가져온 컴포넌트) ({ })
