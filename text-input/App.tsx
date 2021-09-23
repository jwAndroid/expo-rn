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
  const [value, setValue] = useState('Placeholder');

  const onPress = useCallback(() => {
    setValue('');
  }, [setValue]);

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <TextInput
        style={styles.input}
        onChangeText={(text) => setValue(text)}
        value={value}
        multiline={true}
        numberOfLines={2}
        scrollEnabled={false}
        clearButtonMode="always"
      />

      <Pressable onPress={onPress} style={styles.clear}>
        <Text>지우기</Text>
      </Pressable>
    </View>
  );
};

export default memo(App);
