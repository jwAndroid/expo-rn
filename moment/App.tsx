import { StatusBar } from 'expo-status-bar';
import { styled } from '@emotion/native/types/base';

const Container = styled.View({
  flex: 1,
});

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}
