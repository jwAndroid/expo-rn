import React, { memo, useState } from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'pink',
  },
  instruction: {
    color: '#303030',
    fontSize: 18,
    marginHorizontal: 15,
    marginTop: 30,
  },
  button: {
    padding: 20,
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 40,
    marginTop: 10,
    backgroundColor: '#303030',
  },
  buttonText: {
    fontSize: 16,
    color: '#fff',
  },
  thumbnail: {
    width: 300,
    height: 300,
    resizeMode: 'contain',
    borderRadius: 8,
  },
});

const App = () => {
  const [selectedImage, setSelectedImage] = useState({ uri: '' });

  const onOpenImagePicker = async () => {
    const { granted } = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (granted) {
      const pickerResult = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });

      console.log(pickerResult);

      if (!pickerResult.cancelled) {
        setSelectedImage({ uri: pickerResult.uri });
      }
    } else {
      console.log('Permission to access camera roll is required!');
    }
  };

  return (
    <View style={styles.container}>
      {!!selectedImage.uri && (
        <Image style={styles.thumbnail} source={selectedImage} />
      )}

      <Text style={styles.instruction}>사진을 골라보세요!</Text>

      <Pressable style={styles.button} onPress={onOpenImagePicker}>
        <Text style={styles.buttonText}>앨범가기</Text>
      </Pressable>
    </View>
  );
};

export default memo(App);
