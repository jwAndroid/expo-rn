import { memo, useCallback, useEffect, useState } from 'react';
import { KeyboardAvoidingView, Platform } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StatusBar } from 'expo-status-bar';
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

const image1 = {
  uri: 'https://cdn-icons-png.flaticon.com/512/1891/1891667.png',
};

const image2 = {
  uri: 'https://imgc.1300k.com/aaaaaib/goods/215025/99/215025995432.jpg?3',
};

const arr: Array<TodoObject> = new Array<TodoObject>();

const Main = () => {
  const [isTodo, setIsTodo] = useState(true);
  const [value, setValue] = useState('');
  const [todos, setTodos] = useState<TodoObject[]>([]);

  const setStorage = useCallback(async (todos: TodoObject[]) => {
    await AsyncStorage.setItem('todos', JSON.stringify(todos));

    setTodos(todos);
  }, []);

  const getStorage = useCallback(async () => {
    const todos = JSON.parse((await AsyncStorage.getItem('todos')) || '[]');

    if (todos.length > 0) {
      setTodos(todos);
    } else {
      const id = Date.now();
      const todo = { id, text: '새롭게 작성해 주세요.', isCompleted: false };

      setStorage([todo]);
    }
  }, [setStorage]);

  const setBinStorage = useCallback(async (bins: TodoObject[]) => {
    await AsyncStorage.setItem('binTodos', JSON.stringify(bins));
  }, []);

  useEffect(() => {
    getStorage();
  }, [getStorage]);

  const onCheck = useCallback(
    (id: number) => () => {
      const updatedTodos = todos.map((todo) => {
        return todo.id === id
          ? { ...todo, isCompleted: !todo.isCompleted }
          : todo;
      }, []);

      setStorage(updatedTodos);
    },
    [setStorage, todos]
  );

  const onEdit = useCallback(
    (id: number, text: string) => {
      const updatedTodos = todos.map((todo) => {
        return todo.id === id ? { ...todo, text } : todo;
      }, []);

      setStorage(updatedTodos);
    },
    [setStorage, todos]
  );

  // const onDelete = useCallback(
  //   (id: number) => () => {
  //     const updatedTodos = todos.filter((todo) => todo.id !== id);

  //     setStorage(updatedTodos);
  //   },
  //   [setStorage, todos]
  // );

  const onDelete2 = useCallback(
    (id: number) => () => {
      const binListdata = todos.filter((todo) => todo.id === id);

      arr.push(binListdata[0]);
      console.log(arr);

      setBinStorage(arr);
      const updatedTodos = todos.filter((todo) => todo.id !== id);
      setStorage(updatedTodos);
    },
    [setStorage, setBinStorage, todos]
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

      setStorage([todo, ...todos]);

      setValue('');
    }
  }, [setStorage, todos, value]);

  return (
    <SafeAreaContainer>
      <StatusBar style="dark" />

      <TabBarContainer>
        <TabButton source={image1} onPress={onPressTodo} />
        <TabButton source={image2} onPress={onPressRecycleBin} />
      </TabBarContainer>

      <ScreenContainer>
        {isTodo ? (
          <TodoScreen
            todos={todos}
            onCheck={onCheck}
            onDelete={onDelete2}
            onEdit={onEdit}
          />
        ) : (
          <RecycleBin />
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
