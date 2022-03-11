import { memo, useCallback, useEffect, useState } from 'react';
import { KeyboardAvoidingView, Platform } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StatusBar } from 'expo-status-bar';
import { useTheme } from '@emotion/react';
import styled from '@emotion/native';

import { RecycleBin, TodoScreen } from './components';
import { TabButton } from '../components/button';
import { StyledInput } from '../components/input';
import { SafeAreaContainer } from '../components/layout';

const ScreenContainer = styled.View(({ theme }) => ({
  flex: 1,
  backgroundColor: theme.background,
}));

const TabBarContainer = styled.View({
  width: '100%',
  flexDirection: 'row',
  justifyContent: 'space-between',
});

const Main = () => {
  const theme = useTheme();

  const [isTodo, setIsTodo] = useState(true);
  const [value, setValue] = useState('');

  const [todos, setTodos] = useState<TodoObject[]>([]);
  const [binTodos, setbinTodos] = useState<TodoObject[]>([]);

  const setTodoStorage = useCallback(async (todos: TodoObject[]) => {
    await AsyncStorage.setItem('todos', JSON.stringify(todos));

    setTodos(todos);
  }, []);

  const getTodoStorage = useCallback(async () => {
    const todos = JSON.parse((await AsyncStorage.getItem('todos')) || '[]');

    if (todos.length > 0) {
      setTodos(todos);
    } else {
      const id = Date.now();
      const todo = { id, text: '새롭게 작성해 주세요.', isCompleted: false };

      setTodoStorage([todo]);
    }
  }, [setTodoStorage]);

  const setBinStorage = useCallback(async (todos: TodoObject[]) => {
    await AsyncStorage.setItem('bins', JSON.stringify(todos));

    setbinTodos(todos);
  }, []);

  const getBinStorage = useCallback(async () => {
    const todos = JSON.parse((await AsyncStorage.getItem('bins')) || '[]');

    if (todos.length > 0) {
      setbinTodos(todos);
    } else {
      const id = Date.now();
      const todo = {
        id,
        text: '삭제된 게시글이 없습니다.',
        isCompleted: false,
      };

      setbinTodos([todo]);
    }
  }, [setbinTodos]);

  useEffect(() => {
    getTodoStorage();
  }, [getTodoStorage]);

  useEffect(() => {
    getBinStorage();
  }, [getBinStorage]);

  const onCheck = useCallback(
    (id: number) => () => {
      const updatedTodos = todos.map((todo) => {
        return todo.id === id
          ? { ...todo, isCompleted: !todo.isCompleted }
          : todo;
      }, []);

      setTodoStorage(updatedTodos);
    },
    [setTodoStorage, todos]
  );

  const onEdit = useCallback(
    (id: number, text: string) => {
      const updatedTodos = todos.map((todo) => {
        return todo.id === id ? { ...todo, text } : todo;
      }, []);

      setTodoStorage(updatedTodos);
    },
    [setTodoStorage, todos]
  );

  const onDelete = useCallback(
    (id: number) => () => {
      const bin = todos.filter((todo) => todo.id === id);
      setbinTodos([bin[0], ...binTodos]);

      setBinStorage([bin[0], ...binTodos]);

      const del = todos.filter((todo) => todo.id !== id);
      setTodoStorage(del);
    },
    [todos, binTodos, setTodoStorage, setBinStorage]
  );

  const onCheck2 = useCallback(
    (id: number) => () => {
      console.log(id);
    },
    []
  );

  const onEdit2 = useCallback((id: number, text: string) => {
    console.log(id, text);
  }, []);

  const onDelete2 = useCallback(
    (id: number) => () => {
      console.log(id);
    },
    []
  );

  const onPressTodo = useCallback(() => {
    setIsTodo(true);
  }, []);

  const onPressRecycleBin = useCallback(() => {
    setIsTodo(false);
  }, []);

  const onChangeText = useCallback((value) => {
    setValue(value);
  }, []);

  const onSubmitEditing = useCallback(() => {
    if (todos.length > 0) {
      const id = Date.now();
      const todo = { id, text: value, isCompleted: false };

      setTodoStorage([todo, ...todos]);

      setValue('');
    }
  }, [setTodoStorage, todos, value]);

  return (
    <SafeAreaContainer>
      <StatusBar style="dark" />

      <TabBarContainer>
        <TabButton source={theme.icon.check} onPress={onPressTodo} />
        <TabButton source={theme.icon.delete} onPress={onPressRecycleBin} />
      </TabBarContainer>

      <ScreenContainer>
        {isTodo ? (
          <TodoScreen
            todos={todos}
            onCheck={onCheck}
            onDelete={onDelete}
            onEdit={onEdit}
          />
        ) : (
          <RecycleBin
            todos={binTodos}
            onCheck={onCheck2}
            onDelete={onDelete2}
            onEdit={onEdit2}
          />
        )}
      </ScreenContainer>

      {isTodo ? (
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        >
          <StyledInput
            value={value}
            placeholder="..."
            onChangeText={onChangeText}
            onSubmitEditing={onSubmitEditing}
          />
        </KeyboardAvoidingView>
      ) : undefined}
    </SafeAreaContainer>
  );
};

export default memo(Main);
