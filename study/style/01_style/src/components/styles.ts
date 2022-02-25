import { StyleSheet } from 'react-native';

export const styles1 = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#303030',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 24,
  },
});

export const styles2 = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#303030',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 24,
  },
});

export const styles3 = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#303030',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 24,
  },
});

export const testStyles = StyleSheet.create({
  text: {
    padding: 10,
    fontSize: 25,
    fontWeight: '600',
    color: 'black',
  },
  error: { color: 'red' },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default styles;

/*
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
이런식으로 쓰면 똑같이 얘를 메인으로 보내겠다는것인데
(여기서 네비게이션 관련 알려줬었음.)
*/

// 원래는 뭐든 export 를 붙여주면 사용하고 싶은곳에서 import 해서 쓰면되지만,
// export default styles; 를 해주게되면 styles1 이 아닌 styles가 메인으로 export 된다.
// 어차피 메인으로 나가게되면 이름을 바꿔도 상관없다 어차피 메인으로 나가니까 똑같겠지??
