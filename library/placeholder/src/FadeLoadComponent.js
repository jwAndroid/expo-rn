import React, { memo } from 'react';
import { View } from 'react-native';
import { FadeLoading } from 'react-native-fade-loading';

function FadeLoadComponent() {
  return (
    <View>
      <FadeLoading
        style={{ borderRadius: 10, marginTop: 20 }}
        primaryColor="gray"
        secondaryColor="lightgray"
        duration={3000}
        animated="fade"
      >
        <View style={{ width: '100%', height: 50, marginTop: 10 }} />
      </FadeLoading>

      <FadeLoading
        style={{ borderRadius: 10, marginTop: 20 }}
        primaryColor="gray"
        secondaryColor="lightgray"
        duration={3000}
      >
        <View style={{ width: '100%', height: 50, marginTop: 10 }} />
      </FadeLoading>
    </View>
  );
}

export default memo(FadeLoadComponent);
