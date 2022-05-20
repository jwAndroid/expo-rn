import { memo, useEffect, useState } from 'react';
import { Text, View } from 'react-native';

import { cacheFonts, cacheImages } from './src/cache';
import { font, icon } from './theme';

const App = () => {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    (async () => {
      await Promise.all([cacheFonts(font), ...cacheImages(icon)]).then(
        (resolve) => {
          // Todo: !!resolve => setReady(true);

          if (resolve[0] !== undefined) {
            console.log(resolve.length);
            setTimeout(() => {
              setReady(true);
            }, 3000);
          }
        }
      );
    })();
  }, []);

  return !ready ? (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'gray',
      }}
    >
      <Text>App Loading...</Text>
    </View>
  ) : (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home</Text>
    </View>
  );
};

export default memo(App);
