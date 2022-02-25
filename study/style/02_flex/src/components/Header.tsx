import React, { memo } from 'react';
import { Text, View } from 'react-native';
import { styles } from '../styles';

const Header = () => {
  return (
    <View style={[styles.container, styles.header]}>
      <Text style={styles.text}>Header</Text>
    </View>
  );
};

// 프랍스 style={[styles.container, styles.header]} 에
// 에 배열이나 객체가 들어갔다? 안좋음 왜?? 리랜더링 되니까

export default memo(Header);
