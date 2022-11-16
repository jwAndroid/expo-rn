import { memo } from 'react';
import { Text, ImageBackground, View } from 'react-native';

const image = {
  uri: 'https://images.khan.co.kr/article/2022/05/04/l_2022050402000243800042931.jpg',
};

const insetTop = 30;
const backgroundColor = '#000';
const opacity = { opacity: 0.4 };

const App = () => {
  return (
    <ImageBackground
      resizeMode="cover"
      source={image}
      style={{
        flex: 1,
        backgroundColor,
        paddingTop: insetTop,
      }}
      imageStyle={opacity}
    >
      <View style={{ width: '100%', height: 60, justifyContent: 'center' }}>
        <Text style={{ color: '#D8D8D8', fontSize: 25 }}>Header</Text>
      </View>

      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Text style={{ color: '#D8D8D8', fontSize: 30 }}>Email</Text>

        <Text style={{ color: '#D8D8D8', fontSize: 30 }}>Password</Text>
      </View>
    </ImageBackground>
  );
};

export default memo(App);
