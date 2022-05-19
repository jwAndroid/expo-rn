import React, { memo, useCallback, useEffect, useState } from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as MediaLibrary from 'expo-media-library';
import {
  getDownloadURL,
  ref,
  uploadBytes,
  uploadString,
  putFile,
} from 'firebase/storage';

// https://www.makeuseof.com/upload-files-to-firebase-using-reactjs/

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
  const [base64url, setBase64url] = useState('');
  const [downloadFile, setDownloadFile] = useState('');

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
        base64: true,
      });

      console.log(pickerResult);

      if (!pickerResult.cancelled) {
        setSelectedImage({ uri: pickerResult.uri });

        setBase64url(`data:image/jpeg;base64${pickerResult.base64}`);
      }
    }
  };

  const upload = useCallback(
    (base64) => () => {
      if (base64) {
        const reference = ref(storage, 'mountains.jpg');

        const message3 = '5b6p5Y-344GX44G-44GX44Gf77yB44GK44KB44Gn44Go44GG77yB';
        uploadString(reference, message3, base64).then((snapshot) => {
          console.log('Uploaded a base64url string!');
        });
      }
    },
    []
  );

  const download = useCallback(() => {
    getDownloadURL(ref(storage, 'mountains.jpg')).then((url) => {
      setDownloadFile(url);
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

      <Pressable style={styles.button} onPress={upload(selectedImage)}>
        <Text style={styles.buttonText}>업로드</Text>
      </Pressable>

      <Pressable style={styles.button} onPress={download}>
        <Text style={styles.buttonText}>다운로드</Text>
      </Pressable>

      {!!downloadFile && (
        <>
          <Text style={{ marginTop: 50 }}>다운로드 파일</Text>
          <Image style={styles.thumbnail} source={{ uri: downloadFile }} />
        </>
      )}
    </View>
  );
};

export default memo(Storage);
