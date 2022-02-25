import React, { memo, useCallback, useEffect, useRef, useState } from 'react';
import styled from '@emotion/native';
import { TextInput } from 'react-native';

const StyledText = styled.Text({
  fontSize: 25,
  margin: 10,
});

const StyledTextInput = styled.TextInput({
  borderWidth: 1,
  borderColor: '#757575',
  padding: 10,
  marginVertical: 10,
  width: 200,
  fontSize: 20,
});

const Form = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const nameRef = useRef<TextInput>(null);
  // 앱을 켰을때 네임쪽에 포커스가 잡히고싶다면?

  const emailRef = useRef<TextInput>(null);
  // useRef 는 초기값이 항상 null 이다.
  // 목표가 이메일에서 엔터치면 밑으로 커서 포커스 이동시켜주는건데
  // 이럴때 useRef 를 쓴다.
  // 인풋 컴포넌트에 setFocus() 이런 함수가 없으니까
  // useRef에서 가져오는것 가져와서
  // emailRef.current?.focus(); 를 해주면 된다
  // 그리고 이메일 인풋쪽에서 ref={emailRef} 를 걸어줬으니까
  // 당연히 다른쪽에서 엔터치면 이메일쪽으로 포커스가 이동하는것

  // .blur(); 는 포커스인에 반대말 커서가 빠짐
  // current 는 그냥 리액트가 정한 문법이라고 생각하면됨.

  // useEffect 는 컴포넌트가 생성될때 or 사라질때 or 값이 변경될때 때 실행된다.
  useEffect(() => {
    nameRef.current?.focus();
    console.log('`Create component');

    console.log(name);
    /* 여기서 setState(name) 을 했다면?
    name 업데이트 밑에 [name] 이 바뀌니까 리랜더링 -> 다시 useEffect() 실행 또 setName()
    -> 무한 디도스
    */

    // 앱이 사라질때 밑의 함수가 실행한다.
    return () => {
      console.log('`Remove component`');
    };
  }, [name]);

  const onChangeName = useCallback((name: string) => {
    setName(name);
  }, []);

  const onChangeEmail = useCallback((email: string) => {
    setEmail(email);
  }, []);

  const onSubmitName = useCallback(() => {
    emailRef.current?.focus();
  }, []);

  const onSubmitEmail = useCallback(() => {
    console.log({ name, email });
  }, [name, email]);
  // useCallback 도 마찬가지로 디펜던시의 값이 변경되면 함수를 다시 만드는거임 호출이 아니고
  // 그리고 셋중에 하나라도 변경되면 다시 만든다.
  // 변경되지않으면 캐시되어져서 남아있음. 새로 안만들고

  // ref
  // 1. 기존에 제공하는 프랍스 기능이외것들을 쓸때 useRef() 를쓴다.
  // 2. state가 업데이트 되었을때 리랜더링 되는데 리랜더링 시키지 않고싶을때 useRef() 를 쓴다.

  return (
    <>
      <StyledText>Name: {name}</StyledText>
      <StyledText>Email: {email}</StyledText>

      <StyledTextInput
        ref={nameRef}
        autoCapitalize="none"
        autoCorrect={false}
        placeholder="Name"
        value={name}
        returnKeyType="next"
        onChangeText={onChangeName}
        onSubmitEditing={onSubmitName}
      />

      <StyledTextInput
        ref={emailRef}
        autoCapitalize="none"
        autoCorrect={false}
        placeholder="Email"
        value={email}
        returnKeyType="done"
        onChangeText={onChangeEmail}
        onSubmitEditing={onSubmitEmail}
      />
    </>
  );
};

export default memo(Form);
