import React, { memo } from 'react';
import { Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import stylesMain, { styles1, testStyles } from './src/components/styles';

const App = () => {
  return (
    <View style={stylesMain.container}>
      <StatusBar style="auto" />

      <Text style={styles1.container}>asdfasedf</Text>
      <Text style={stylesMain.container}>asdfasedf</Text>

      <Text style={[testStyles.text, testStyles.error]}>
        Inline Style - Error
      </Text>

      <Text style={[testStyles.text, { color: 'green' }]}>
        Inline Style - Error22
      </Text>
    </View>
  );
};

export default memo(App);
