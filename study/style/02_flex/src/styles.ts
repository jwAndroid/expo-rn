import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    height: 80,
    backgroundColor: 'red',
  },
  contents: {
    flex: 1,
    backgroundColor: 'green',
  },
  footer: {
    height: 80,
    backgroundColor: 'blue',
  },
  text: {
    fontSize: 25,
  },
});

// 주축 : justifyContent
// 보조축 : alignItems
// 웹은 기본이 가로축이 주축이다 .
// 앱은 기본이 세로축이 주축이다.
// 그리고 display : flex 는 리액트 네이티브에서 기본적으로 들어가 있기때문에 생략해도 된다.

// 앱에서는 기본값이 세로가 주축이기 때문에 justifyContent 로 세로를 제어하고 가로는 ? alignItems 으로 제어
// 플렉스 다이렉션 방향으로 생각해야한다.

// display : flex (부모에 있을때 생략이 가능함. 기본적으로 들어가니까 자식에 flex 를 쓸수가있음)
// flex : 1 이라는게 리액트 네이티브는 기본적으로 display : flex 가 들어가있어서 아무곳에서나 쓸수있음
// 그리고 1 의 뜻은 비율을 뜻함 예를들어서 자식a(flex : 2) 자식b(flex : 1) 이렇게 있으면(뒤에 부모가 깔려있음)
// 2:1로 세로로 나눠진다
