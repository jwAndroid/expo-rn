import React, { memo } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  shadow: {
    backgroundColor: '#fff',
    width: 200,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: {
          width: 10,
          height: 10,
        },
        shadowOpacity: 0.5,
        shadowRadius: 10,
      },
      android: {
        elevation: 20,
      },
    }),
  },
});

// ...Platform.select 풀어서 속성값을 쓰겠다는말 그냥쓰면 당연히 안되겠지?
// 이렇게 풀어서 쓸때 쉐도우말고 풀어서 쓴적이 없다고함
// 그리고 ios android 각각 쉐도우 말고 다른걸 해도 상관없긴한데 안나온다고 함

// 그리고 뭔가 중앙으로 보낼때 자식을 건들이는게 아니고 부모를 건들여야하는데 계속 자식을 건들이려고함
// 안드로이드에서 습관버리고 이쪽에만 생각

const ShadowBox = () => {
  return (
    <View style={styles.shadow}>
      <Text>{Platform.OS}</Text>
    </View>
  );
};

export default memo(ShadowBox);
