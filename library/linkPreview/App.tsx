import { memo, useCallback, useEffect, useState } from 'react';
import { Image, Pressable, Text, View } from 'react-native';
import * as Linking from 'expo-linking';
import { getLinkPreview, ILinkPreview } from 'link-preview-js';

const placeholder =
  'https://socialistmodernism.com/wp-content/uploads/2017/07/placeholder-image.png';

const App = () => {
  const [preview, setPreview] = useState<ILinkPreview>();

  useEffect(() => {
    (async () => {
      const data = await getLinkPreview('https://nomadcoders.co/');

      setPreview(data);
    })();
  }, []);

  const onPress = useCallback(() => {
    if (typeof preview?.url === 'string') {
      Linking.openURL(preview?.url);
    }
  }, []);

  return (
    <Pressable
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
      onPress={onPress}
    >
      <Image
        style={{ width: 100, height: 100, borderRadius: 8 }}
        resizeMode="contain"
        source={{
          uri: preview?.favicons.pop() ?? placeholder,
        }}
      />
      <Text style={{ fontSize: 30, marginTop: 10, fontWeight: 'bold' }}>
        {preview?.siteName}
      </Text>

      <Text style={{ fontSize: 20, marginTop: 10, fontWeight: 'bold' }}>
        {preview?.title}
      </Text>

      <Text
        style={{ fontSize: 15, marginTop: 10 }}
      >{`${preview?.description?.substring(0, 30)}...`}</Text>
    </Pressable>
  );
};

export default memo(App);
