import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { LinkPreview } from '@flyerhq/react-native-link-preview';

export default function App() {
  return (
    <View style={styles.container}>
      <LinkPreview text="https://docs.expo.dev" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
