import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Pressable,
} from 'react-native';
import { color } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';

import { theme } from './colors';

export default function App() {
  const [working, setWorking] = useState(true);
  const [text, setText] = useState('');

  const work = () => setWorking(true);
  const travel = () => setWorking(false);
  const onSubmitEditing = () => console.log(text);

  const onChangeText = (payload) => setText(payload);

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <View style={styles.header}>
        <TouchableOpacity onPress={work}>
          <Text
            style={{ ...styles.btnText, color: working ? 'white' : theme.grey }}
          >
            Work
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={travel}>
          <Text
            style={{
              ...styles.btnText,
              color: !working ? 'white' : theme.grey,
            }}
          >
            Travel
          </Text>
        </TouchableOpacity>
      </View>

      <TextInput
        style={styles.textInput}
        onChangeText={onChangeText}
        value={text}
        returnKeyType="done"
        onSubmitEditing={onSubmitEditing}
        placeholderTextColor="#c0c0c0"
        placeholder={working ? 'Add a To Do' : 'Whare do you wanna go? '}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: theme.bg,
  },
  header: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginTop: 100,
  },
  btnText: {
    fontSize: 50,
    fontWeight: '700',
  },
  textInput: {
    fontSize: 18,
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 30,
    marginTop: 20,
    backgroundColor: theme.grey,
  },
});
