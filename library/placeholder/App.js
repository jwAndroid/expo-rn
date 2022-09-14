import React from 'react';
import { View } from 'react-native';
import {
  Placeholder,
  PlaceholderMedia,
  PlaceholderLine,
  Fade,
  Shine,
  Progressive,
  ShineOverlay,
} from 'rn-placeholder';

export default function App() {
  return (
    <View style={{ flex: 1, marginTop: 20 }}>
      <Placeholder Animation={ShineOverlay}>
        <PlaceholderLine width={80} />
        <PlaceholderLine width={30} />
        <PlaceholderLine />
      </Placeholder>

      <Placeholder Animation={ShineOverlay}>
        <PlaceholderLine style={{ width: 200, height: 50 }} />
      </Placeholder>

      <Placeholder Animation={Fade}>
        <PlaceholderLine width={30} />
      </Placeholder>
    </View>
  );
}
