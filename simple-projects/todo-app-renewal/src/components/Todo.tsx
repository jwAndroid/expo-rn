import { FC, memo, useCallback, useEffect, useRef, useState } from 'react';
import { GestureResponderEvent, TextInput } from 'react-native';
import styled from '@emotion/native';
import { useTheme } from '@emotion/react';

import { CheckButton } from './button';
import { StyledText } from './text';

interface IContainer {
  isCompleted: boolean;
}

const Container = styled.View<IContainer>(({ theme, isCompleted }) => ({
  width: '100%',
  flexDirection: 'row',
  alignItems: 'center',
  backgroundColor: theme.itemBackground,
  borderRadius: 10,
  padding: 5,
  marginVertical: 5,
  opacity: isCompleted ? 0.3 : 1,
}));

const EditInput = styled.TextInput(({ theme }) => ({
  flex: 1,
  fontSize: 20,
  textAlignVertical: 'center',
  margin: 10,
  color: theme.text,
}));

interface ITodo {
  todo: TodoObject;
  onCheck: (id: number) => (event: GestureResponderEvent) => void;
  onEdit: (id: number, text: string) => void;
  onDelete: (id: number) => (event: GestureResponderEvent) => void;
}

const Todo: FC<ITodo> = ({ todo, onEdit, onCheck, onDelete }) => {
  const theme = useTheme();

  const [isEdit, setIsEdit] = useState(false);
  const [update, setUpdate] = useState(todo.text);

  const inputRef = useRef<TextInput>(null);

  useEffect(() => {
    if (isEdit) {
      inputRef.current?.focus();
    }
  }, [isEdit]);

  const onChangeText = useCallback((text: string) => {
    setUpdate(text);
  }, []);

  const onSubmitEditing = useCallback(() => {
    if (update.length > 0) {
      onEdit(todo.id, update);
    } else {
      setUpdate(todo.text);
    }

    setIsEdit(false);
  }, [onEdit, todo.id, update, todo.text]);

  const onBlur = useCallback(() => {
    setUpdate(todo.text);
    setIsEdit(false);
  }, [todo.text]);

  const onEditPress = useCallback(() => {
    if (!todo.isCompleted) {
      setIsEdit(true);

      inputRef.current?.focus();
    }
  }, [todo.isCompleted]);

  return (
    <Container isCompleted={todo.isCompleted}>
      {isEdit ? (
        <EditInput
          ref={inputRef}
          value={update}
          autoCapitalize="none"
          autoCorrect={false}
          returnKeyType="done"
          placeholderTextColor={theme.text}
          onChangeText={onChangeText}
          onSubmitEditing={onSubmitEditing}
          onBlur={onBlur}
        />
      ) : (
        <>
          <CheckButton
            icon={todo.isCompleted ? theme.icon.checked : theme.icon.box}
            onPress={onCheck(todo.id)}
          />

          <StyledText isCompleted={todo.isCompleted} onPress={onEditPress}>
            {todo.text}
          </StyledText>

          <CheckButton icon={theme.icon.delete} onPress={onDelete(todo.id)} />
        </>
      )}
    </Container>
  );
};

export default memo(Todo);
