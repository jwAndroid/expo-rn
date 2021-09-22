import React, { memo } from 'react';
import { Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import styles from './src/styles';

const App = () => {
  return (
    <View style={styles.containerMain}>
      <StatusBar style="dark" />

      <View style={styles.container1}>
        <View style={styles.container1Item1}>
          <Text style={styles.text}>좌</Text>
        </View>
        <View style={styles.container1Item2}>
          <Text style={styles.text}>우</Text>
        </View>
      </View>

      <View style={styles.container2}>
        <Text style={styles.text}>중앙</Text>
      </View>

      <View style={styles.container3}>
        <View style={styles.container3Item1}>
          <Text style={styles.text}>두</Text>
        </View>
        <View style={styles.container3Item2}>
          <Text style={styles.text}>개</Text>
        </View>
      </View>

      <View style={styles.container4}>
        <View style={styles.container4Item1}>
          <Text style={styles.text}>한</Text>
        </View>
        <View style={styles.container4Item2}>
          <Text style={styles.text}>바</Text>
        </View>
        <View style={styles.container4Item3}>
          <Text style={styles.text}>퀴</Text>
        </View>
        <View style={styles.container4Item4}>
          <Text style={styles.text}>돌</Text>
        </View>
        <View style={styles.container4Item5}>
          <Text style={styles.text}>아</Text>
        </View>
      </View>
    </View>
  );
};

export default memo(App);
