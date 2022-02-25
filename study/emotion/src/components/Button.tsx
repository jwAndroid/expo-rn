import React, { FC, memo, ReactNode } from 'react';
import styled from '@emotion/native';

interface IContainer {
  isActive: boolean;
}

const Container = styled.Pressable<IContainer>(({ isActive, theme }) => ({
  backgroundColor: isActive ? theme.text : theme.backgroundColor,
  borderRadius: 8,
  paddingVertical: 16,
  paddingHorizontal: 40,
  marginVertical: 10,
}));

const StyledText = styled.Text({
  fontSize: 20,
  color: '#fff',
});

interface IButton {
  children: ReactNode;
  isActive: boolean;
}

const Button: FC<IButton> = ({ children, isActive }) => {
  return (
    <Container isActive={isActive}>
      <StyledText>{children}</StyledText>
    </Container>
  );
};
/*
버튼이니까 styled.Pressable
<Container> 를 먼저 작성해주고
위에서 const Container = styled.Pressable({}); 이렇게 작성해준다.

!!이부분 무조건 복습 최대한 많이할것!!
첫째로 Container 라는 얘한테 props 를 넘기겠지?
(isActive={isActive} 이렇게 이름 : 값 똑같이 적어주는걸 선호함.) 이렇게 props를 받아야하는데
당연히 위 Container 에 받아야하겠지?
그래서 똑같이 IContainer 인터페이스를 만들어주고
여기서 중요한게 styled.Pressable<IContainer>(({ isActive }) 이부분인데 이부분에서 값을 받아서 정의해주는것
그리고 속성에 그대로 동적으로 쓸수가 있음. 이모션은 이렇게 쓰고 이부분은 외울정도로 반복할것
이렇게하면 css를 동적으로 ? props 를 넣어서 쓸수가 있어짐
App.tsx 가보면 Button isActive={false} 이렇게 값을 넣어주는걸 확인할수 있음
뭔가 어디서 받아서 변경? 될수가 있겠지

export 로 따로 빼서 관리해주는게 있기는한데 잘 안쓴다고 보면됨. 최소단위로 만들어놓아야함

이외
나노아이디
*/

export default memo(Button);
