import { memo, useCallback, useEffect, useState } from 'react';
import { KeyboardAvoidingView, Platform } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StatusBar } from 'expo-status-bar';
import { useTheme } from '@emotion/react';
import styled from '@emotion/native';
import moment from 'moment';

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
  paddingTop: 10,
  flexDirection: 'row',
  justifyContent: 'space-between',
});

const Main = () => {
  const theme = useTheme();

  const [value, setValue] = useState('');
  const [isActive, setIsActive] = useState(true);
  const [isTodo, setIsTodo] = useState(true);

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
      const updateOn = moment().format('YY-MM-DD');
      const id = Date.now();
      const todo = {
        id,
        text: '새롭게 작성해 주세요.',
        isCompleted: false,
        updateOn,
      };

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
      const updateOn = moment().format('YY-MM-DD');
      const id = Date.now();
      const todo = {
        id,
        text: '삭제된 게시글이 없습니다.',
        isCompleted: false,
        updateOn,
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

  const onRecovery = useCallback(
    (id: number) => () => {
      const del = binTodos.filter((todo) => todo.id !== id);
      setBinStorage(del);

      const recovery = binTodos.filter((todo) => todo.id === id);
      setTodos([recovery[0], ...todos]);
      setTodoStorage([recovery[0], ...todos]);
    },
    [binTodos, todos, setTodoStorage, setBinStorage]
  );

  const onClear = useCallback(async () => {
    await AsyncStorage.removeItem('bins');

    getBinStorage();
  }, [getBinStorage]);

  const onComplete = useCallback(
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

  const onPressTodo = useCallback(() => {
    setIsTodo(true);

    setIsActive(true);
  }, []);

  const onPressRecycleBin = useCallback(() => {
    setIsTodo(false);

    setIsActive(false);
  }, []);

  const onChangeText = useCallback((value) => {
    setValue(value);
  }, []);

  const onSubmitEditing = useCallback(() => {
    if (value.length > 0) {
      const updateOn = moment().format('YY-MM-DD');
      const id = Date.now();
      const todo = { id, text: value, isCompleted: false, updateOn };

      setTodoStorage([todo, ...todos]);

      setValue('');
    }
  }, [setTodoStorage, todos, value]);

  const onCancel = useCallback(() => {
    setValue('');
  }, []);

  return (
    <SafeAreaContainer>
      <StatusBar style="dark" />

      <TabBarContainer>
        <TabButton
          source={
            isActive
              ? theme.icon.listCheckActive
              : theme.icon.listCheckedInActive
          }
          onPress={onPressTodo}
          isActive={isActive}
        />
        <TabButton
          source={isActive ? theme.icon.binInActive : theme.icon.binActive}
          onPress={onPressRecycleBin}
          isActive={!isActive}
        />
      </TabBarContainer>

      <ScreenContainer>
        {isTodo ? (
          <TodoScreen
            todos={todos}
            onCheck={onComplete}
            onDelete={onDelete}
            onEdit={onEdit}
          />
        ) : (
          <RecycleBin
            todos={binTodos}
            onClear={onClear}
            onRecovery={onRecovery}
          />
        )}
      </ScreenContainer>

      {isTodo ? (
        <KeyboardAvoidingView
          style={{ marginVertical: 10 }}
          behavior={Platform.OS === 'ios' ? 'padding' : undefined}
          keyboardVerticalOffset={10}
        >
          <StyledInput
            value={value}
            onCancel={onCancel}
            placeholder="메모를 입력해 주세요."
            onChangeText={onChangeText}
            onSubmitEditing={onSubmitEditing}
          />
        </KeyboardAvoidingView>
      ) : undefined}
    </SafeAreaContainer>
  );
};

export default memo(Main);
