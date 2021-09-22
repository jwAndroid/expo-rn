import React, { memo } from 'react';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { getStatusBarHeight } from 'react-native-status-bar-height';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: getStatusBarHeight(),
  },
  inputContainer: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
  },
  buttonContainer: {
    flex: 1,
    width: '100%',
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  exportLoginContainer: {
    flex: 1,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-end',
  },
  exportLoginText: {
    marginBottom: 30,
  },
  subTitleContainer: {
    flex: 0.5,
    width: '100%',
    alignItems: 'center',
  },
  titleText: {
    fontSize: 24,
    color: 'blue',
  },
  subTitle: {},
  textInput: {
    paddingHorizontal: 10,
    height: 60,
    borderRadius: 20,
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 8,
    marginHorizontal: 20,
    fontSize: 18,
    paddingLeft: 20,
  },
  loginButton: {
    width: '90%',
    height: 70,
    backgroundColor: '#0099ff',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    marginHorizontal: 20,
  },
  buttonText: {
    fontSize: 18,
    color: '#000000',
  },
  saramInText: {
    fontSize: 18,
    marginTop: 30,
    color: '#000000',
  },
});

const App = () => {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>아이엠그라운드.</Text>
      </View>

      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} placeholder="email" />
        <TextInput style={styles.textInput} placeholder="password" />
      </View>

      <View style={styles.buttonContainer}>
        <Pressable style={styles.loginButton}>
          <Text style={styles.buttonText}>로그인</Text>
        </Pressable>
        <Text style={styles.saramInText}>사람인 회원가입</Text>
      </View>

      <View style={styles.exportLoginContainer}>
        <Text style={styles.exportLoginText}>네이버</Text>
        <Text style={styles.exportLoginText}>페북</Text>
        <Text style={styles.exportLoginText}>카톡</Text>
        <Text style={styles.exportLoginText}>구글</Text>
      </View>

      <View style={styles.subTitleContainer}>
        <Text>이앱은 사람인 계정으로 이용가능합니다.</Text>
      </View>
    </View>
  );
};

export default memo(App);
