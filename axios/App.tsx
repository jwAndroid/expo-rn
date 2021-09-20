import React, { memo, useCallback, useEffect } from 'react';
import {
  Alert,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import * as ImagePicker from 'expo-image-picker';

import axios from 'axios';
import { SERVER_URL } from './src/apiKey';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 24,
    backgroundColor: 'cornflowerblue',
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 8,
    color: '#fff',
  },
});

const App = () => {
  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const { status } =
          await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
          Alert.alert(
            'Photo Permission',
            'Please turn on the camera permission.'
          );
        }
      }
    })();
  }, []);

  // 이부분 다시
  const uploadImage = useCallback(async (imageUri: string) => {
    // const blob = new Blob([imageUri], { type: 'text/plain' });
    // const getFiles = new File([blob], 'foo.txt', { type: 'text/plain' });
    // console.log(`imageUri: ${imageUri}`);
    // console.log('POST RESPONSE: $ ' + JSON.stringify(getFiles));

    try {
      const formData = new FormData();
      formData.append('file', imageUri);
      // formData.append(
      //   'file',
      //   new Blob([JSON.stringify(imageUri)], { type: 'multipart/form-data' })
      // );

      const { data } = await axios.post(SERVER_URL, {
        data: formData,
        headers: { 'content-type': 'multipart/form-data' },
      });
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  }, []);

  const onPress = useCallback(async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.cancelled && uploadImage) {
      uploadImage(result.uri);
    }
  }, [uploadImage]);

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <Pressable onPress={onPress}>
        <Text style={styles.text}>GO ALBUM</Text>
      </Pressable>
    </View>
  );
};

export default memo(App);
