import React, { memo, useCallback, useState } from 'react';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 20,
  },
  input: {
    width: '100%',
    height: 100,
    color: '#000000',
    textAlignVertical: 'top',
    borderColor: 'gray',
    borderWidth: 1,
  },
  clear: {
    marginTop: 20,
  },
});

const App = () => {
  const [textValue, setTextValue] = useState('');
  const [sm, setSm] = useState('');

  const onChangeText = useCallback((text: string) => {
    setTextValue(text);
  }, []);

  const onPressGetText = useCallback(() => {
    console.log('?????');
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <TextInput
        keyboardType="numbers-and-punctuation"
        style={styles.input}
        value={textValue}
        placeholder="입력창"
        onChangeText={onChangeText}
        multiline
      />

      <Pressable onPress={onPressGetText}>
        <Text>입력값 호출!</Text>
      </Pressable>
    </View>
  );
};

export default memo(App);
