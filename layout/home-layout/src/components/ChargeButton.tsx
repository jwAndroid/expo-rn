import React, { memo, useCallback } from 'react';
import { Alert, Pressable, StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  text: {
    position: 'absolute',
    top: 10,
    left: '43%',
    justifyContent: 'center',
    fontSize: 16,
    color: '#fff',
  },
  buttonText: {
    position: 'absolute',
    top: 10,
    left: '82%',
    justifyContent: 'center',
    fontSize: 16,
    color: '#fff',
  },
  button1: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
    marginHorizontal: '15%',
    marginBottom: 10,
    borderRadius: 10,
    backgroundColor: '#912afd',
  },
  button2: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
    marginHorizontal: '15%',
    marginBottom: 10,
    borderRadius: 10,
    backgroundColor: '#fed42e',
  },
  button3: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
    marginHorizontal: '15%',
    borderRadius: 10,
    backgroundColor: '#ff46ec',
  },
});

const ChargeButton = () => {
  const onPress = useCallback(() => {
    Alert.alert(
      'Alert Title',
      'My Alert Msg',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        { text: 'OK', onPress: () => console.log('OK Pressed') },
      ],
      { cancelable: false }
    );
  }, []);

  return (
    <View>
      <Pressable style={styles.button1} onPress={onPress}>
        <Text style={styles.text}>React</Text>
        <Text style={styles.buttonText}>10%</Text>
      </Pressable>

      <Pressable style={styles.button2} onPress={onPress}>
        <Text style={styles.text}>Axios</Text>
        <Text style={styles.buttonText}>60%</Text>
      </Pressable>

      <Pressable style={styles.button3} onPress={onPress}>
        <Text style={styles.text}>Hook</Text>
        <Text style={styles.buttonText}>30%</Text>
      </Pressable>
    </View>
  );
};

export default memo(ChargeButton);
