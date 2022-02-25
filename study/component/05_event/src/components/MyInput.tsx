import React, { memo, useCallback } from 'react';
import { StyleSheet, TextInput } from 'react-native';

const styles = StyleSheet.create({
  input: {
    width: '100%',
    borderWidth: 1,
    padding: 10,
    fontSize: 20,
  },
});

const MyInput = () => {
  const onChangeText = useCallback((text: string) => {
    console.log({ text });
  }, []);
  return <TextInput style={styles.input} onChangeText={onChangeText()} />;
};

export default memo(MyInput);
