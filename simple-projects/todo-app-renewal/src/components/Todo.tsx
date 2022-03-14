import { FC, memo, useCallback, useEffect, useRef, useState } from 'react';
import { GestureResponderEvent, Platform, TextInput } from 'react-native';
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
  ...Platform.select({
    ios: {
      shadowColor: 'black',
      shadowOffset: {
        width: 10,
        height: 10,
      },
      shadowOpacity: 0.2,
      shadowRadius: 10,
    },
    android: {
      elevation: 20,
    },
  }),
}));

const DayContainer = styled.View({
  flex: 1,
});

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

          <DayContainer>
            <StyledText
              fontSize={16}
              isCompleted={todo.isCompleted}
              onPress={onEditPress}
            >
              {todo.text}
            </StyledText>

            <StyledText fontSize={10} color={theme.color.gray}>
              {todo.updateOn}
            </StyledText>
          </DayContainer>

          <CheckButton
            icon={theme.icon.binActive}
            onPress={onDelete(todo.id)}
            width={20}
            height={20}
          />
        </>
      )}
    </Container>
  );
};

export default memo(Todo);
