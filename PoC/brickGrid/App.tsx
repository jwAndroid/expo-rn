import { memo, useState } from 'react';
import { Image, SafeAreaView, ScrollView, Text, View } from 'react-native';

import { SAMPLE_DATA } from './src/data';
import { appStayle } from './src/style';

type Item = {
  id: number;
  uri: string;
};

const App = () => {
  const [data, setData] = useState<Item[]>(SAMPLE_DATA);

  return (
    <SafeAreaView style={appStayle.container}>
      <ScrollView horizontal>
        <View style={{ flexDirection: 'row' }}>
          {data.map((item) => {
            return (
              <Image
                style={appStayle.image}
                key={item.id}
                source={{ uri: item.uri }}
              />
            );
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default memo(App);
