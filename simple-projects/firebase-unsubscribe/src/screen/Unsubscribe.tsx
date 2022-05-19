import { memo } from 'react';
import { View } from 'react-native';

// import { database } from './src/config';

/* realtime database
 */

const Unsubscribe = () => {
  //   const [data, setData] = useState();

  //   useEffect(() => {
  //     onValue(ref(database, 'users/1/contents'), (snapshot) => {
  //       console.log('litener');
  //       const { content } = snapshot.val();

  //       setData(content);
  //     });
  //   }, []);

  //   const write = useCallback(() => {
  //     console.log('litener');
  //     set(ref(database, 'users/1/contents'), {
  //       content: 'hi',
  //     });
  //   }, []);

  //   const unsubscribe = useCallback(() => {
  //     off(ref(database, 'users/1/contents'));
  //   }, []);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {/* <Text onPress={write}>set</Text>

      <Text onPress={unsubscribe}>unsubscribe</Text> */}

      {/* <Text style={{ fontSize: 20, color: 'blue', marginTop: 30 }}>{data}</Text> */}
    </View>
  );
};

export default memo(Unsubscribe);
