import React, { memo } from 'react';
import { Text, View } from 'react-native';

import { styles } from '../styles';

const Content = () => {
  return (
    <View style={[styles.container, styles.contents]}>
      <Text style={styles.text}>Contents</Text>
    </View>
  );
};

export default memo(Content);
