import React, { memo } from 'react';
import { Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import ReactLogoButton from './src/ReactLogoButton';
import styles from './src/styles';

const App = () => {
  return (
    <View style={styles.containerMain}>
      <StatusBar style="auto" />

      <View style={styles.titleLayout}>
        <Text style={styles.textTitle}>React Native</Text>
      </View>

      <View style={styles.mainLayout}>
        <View style={styles.mainLayout1}>
          <ReactLogoButton />
          <ReactLogoButton />
        </View>

        <View style={styles.mainLayout2}>
          <ReactLogoButton />
          <ReactLogoButton />
        </View>

        <View style={styles.mainLayout3}>
          <ReactLogoButton />
          <ReactLogoButton />
        </View>
      </View>
    </View>
  );
};

export default memo(App);
