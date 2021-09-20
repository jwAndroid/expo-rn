import React, { memo, useCallback } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import axios from 'axios';
// import { SERVER_URL } from './src/apiKey';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
});

const App = () => {
  const onPressPost = useCallback(async () => {
    await axios.post(
      'https://my-json-server.typicode.com/typicode/demo/profile',
      { id: 'jwid' }
    );
  }, []);

  const onPressGet = useCallback(async () => {
    const { data } = await axios.get(
      'https://my-json-server.typicode.com/typicode/demo/profile'
    );

    console.log(data);
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <Pressable>
        <Text onPress={onPressPost}>Axios POST</Text>
      </Pressable>

      <Pressable>
        <Text onPress={onPressGet}>Axios GET</Text>
      </Pressable>
    </View>
  );
};

export default memo(App);
