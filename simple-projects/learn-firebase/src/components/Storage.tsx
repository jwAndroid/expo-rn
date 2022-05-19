import React, { memo, useCallback, useEffect, useState } from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as MediaLibrary from 'expo-media-library';
import { getDownloadURL, uploadBytes, ref } from 'firebase/storage';

import { storage } from '../api/config';

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

const Storage = () => {
  const [selectedImage, setSelectedImage] = useState({ uri: '' });

  useEffect(() => {
    (async () => {
      await MediaLibrary.requestPermissionsAsync();
    })();
  }, []);

  const getAlbum = useCallback(async () => {
    const assetLists = await MediaLibrary.getAssetsAsync();

    assetLists.assets.map((item) => console.log(item));

    setSelectedImage({ uri: assetLists.assets[1].uri });
    console.log(assetLists.assets[0].uri);
  }, []);

  const onOpenImagePicker = async () => {
    const { granted } = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (granted) {
      const pickerResult = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });

      if (!pickerResult.cancelled) {
        setSelectedImage({ uri: pickerResult.uri });

        const reference = ref(storage, 'image.jpg');

        const img = await fetch(pickerResult.uri);

        const bytes = await img.blob();

        await uploadBytes(reference, bytes).then(
          () => {},
          (compleated) => {
            if (compleated) {
              console.log(`compleated : ${compleated}`);
            }
          }
        );
      }
    }
  };

  const download = useCallback(() => {
    getDownloadURL(ref(storage, 'image.jpg')).then((url) => {
      console.log(url);
    });
  }, []);

  return (
    <View style={styles.container}>
      {!!selectedImage.uri && (
        <Image style={styles.thumbnail} source={selectedImage} />
      )}

      <Pressable style={styles.button} onPress={getAlbum}>
        <Text style={styles.buttonText}>기기에서 사진가져오기</Text>
      </Pressable>

      <Pressable style={styles.button} onPress={onOpenImagePicker}>
        <Text style={styles.buttonText}>앨범가기</Text>
      </Pressable>

      <Pressable style={styles.button} onPress={download}>
        <Text style={styles.buttonText}>다운로드</Text>
      </Pressable>
    </View>
  );
};

export default memo(Storage);
