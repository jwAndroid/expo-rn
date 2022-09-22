import React, { memo, useCallback, useEffect, useRef, useState } from 'react';
import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as MediaLibrary from 'expo-media-library';
import { Camera, CameraType } from 'expo-camera';
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
  cameraButton: {
    width: 70,
    height: 70,
    borderRadius: 35,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'gray',
  },
});

const Storage = () => {
  const [selectedImage, setSelectedImage] = useState({ uri: '' });

  const [type, setType] = useState(CameraType.back); // CAMERA
  const [permission, requestPermission] = Camera.useCameraPermissions(); // CAMERA
  const cameraRef = useRef<Camera>(null);

  // ............... MediaLibrary ............. //
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

      console.log(pickerResult);

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

  // ............... MediaLibrary ............. //

  // ............... Camera ............. //
  const toggleCameraType = useCallback(() => {
    setType((current) =>
      current === CameraType.back ? CameraType.front : CameraType.back
    );
  }, []);

  const takePhoto = useCallback(async () => {
    const options = {
      qulity: 1,
      base64: true,
      exif: false,
    };

    const photo = await cameraRef.current?.takePictureAsync(options);

    if (photo && photo.uri) {
      console.log('스타트');
      const reference = ref(storage, 'image.jpg');

      const img = await fetch(photo.uri);

      const bytes = await img.blob();

      await uploadBytes(reference, bytes)
        .then(
          () => {},
          (compleated) => {
            if (compleated) {
              console.log(`compleated : ${compleated}`);
            }
          }
        )
        .catch((e) => {
          console.log(e);
        });
    } else {
      console.log('실패');
    }
  }, []);

  // ............... Camera ............. //

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
        <Text style={styles.buttonText}>다운로드 URL</Text>
      </Pressable>

      <Camera
        style={{ width: '100%', height: 300 }}
        type={type}
        ref={cameraRef}
      >
        <View>
          <TouchableOpacity
            style={styles.cameraButton}
            onPress={toggleCameraType}
          >
            <Text style={styles.buttonText}>Flip Camera</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.cameraButton}>
            <Text onPress={takePhoto} style={styles.buttonText}>
              takePhoto
            </Text>
          </TouchableOpacity>
        </View>
      </Camera>
    </View>
  );
};

export default memo(Storage);
