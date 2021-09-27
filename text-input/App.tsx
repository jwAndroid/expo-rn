import React, { memo, useCallback, useState } from 'react';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 20,
  },
  input: {
    width: '94%',
    height: 40,
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

  const onChangeText = useCallback((text: string) => {
    setTextValue(text.trim());
    console.log(`text: ${text}`);
  }, []);

  const onPressGetText = useCallback(() => {
    console.log(`getText: ${textValue}`);
  }, [textValue]);

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <TextInput
        style={styles.input}
        value={textValue}
        placeholder="입력창"
        onChangeText={onChangeText}
      />

      <Pressable onPress={onPressGetText}>
        <Text>입력값 호출!</Text>
      </Pressable>
    </View>
  );
};

export default memo(App);
