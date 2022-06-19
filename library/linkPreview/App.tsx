import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, BackHandler } from 'react-native';
import { LinkPreview } from '@flyerhq/react-native-link-preview';

export default function App() {
  return (
    <View style={styles.container}>
      <LinkPreview text="https://docs.expo.dev" />

      <Text
        onPress={() => {
          console.log('asd');
        }}
      >
        adasd
      </Text>
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
