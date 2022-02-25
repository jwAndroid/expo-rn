import React, { memo } from 'react';
import { StyleSheet, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import { Contents, Footer, Header } from './src/components';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const App = () => {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <Header />
      <Contents />
      <Footer />
    </View>
  );
};

/*
    <View style={styles.container}>
    <StatusBar style="auto" />

    <Header />
  </View>

    <View style={styles.container}>
      <StatusBar style="auto" />

      <Header />
    </View>

    이렇게 부모없이 두덩이 쓰면은 안된다.

    가능하게 하려면

    <>
    <View style={styles.container}>
      <StatusBar style="auto" />

      <Header />
    </View>

    <View style={styles.container}>
      <StatusBar style="auto" />

      <Header />
    </View>
    </>

    이렇게 닫아주면 된다.
*/

export default memo(App);
