import React, { memo } from 'react';
import {
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { getStatusBarHeight } from 'react-native-status-bar-height';

// npm i react-native-keyboard-aware-scroll-view --save

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    marginTop: getStatusBarHeight(),
  },
  container: {
    flex: 1,
  },
  titleContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '30%',
    marginTop: getStatusBarHeight(),
    backgroundColor: '#101010',
  },
  inputContainer: {
    height: '30%',
    justifyContent: 'center',
    backgroundColor: '#101010',
  },
  buttonContainer: {
    height: '30%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#808080',
  },
  exportLoginContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-end',
    backgroundColor: '#505050',
  },
  exportLoginText: {
    marginBottom: 30,
  },
  subTitleContainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  titleText: {
    fontSize: 24,
    color: 'blue',
  },
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
    height: 50,
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
    <SafeAreaView style={styles.safe}>
      <ScrollView style={styles.container}>
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
      </ScrollView>
    </SafeAreaView>
  );
};

export default memo(App);
